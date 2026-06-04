/**
 * Single unified script for uploading project images to Vercel Blob and
 * rewriting every "/images/..." string reference in src/**\/*.{ts,tsx} to the
 * resulting Blob URL.
 *
 *   npm run migrate:blob
 *
 * Two sources of upload candidates:
 *   1. Every file under public/images/properties/ (recursive walk, junk filtered).
 *   2. The explicit DECORATIVE_TARGETS list — homepage card thumbnails.
 *
 * Idempotent: if the manifest already has an entry for a given public key, the
 * upload is skipped. Delete an entry from scripts/blob-manifest.json (or the
 * blob in the Vercel dashboard) to force a re-upload.
 *
 * Rewrite step walks src/**\/*.{ts,tsx} once at the end, replacing every key in
 * the manifest with its URL. Longest keys first to avoid prefix overlaps
 * (e.g. /images/cloud.webp vs /images/cloud2.webp). String paths only — static
 * import statements like `import x from "../../../public/images/foo.webp"` use
 * a different prefix and are not touched.
 */
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { put } from "@vercel/blob";

const PROJECT_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PUBLIC_DIR = join(PROJECT_ROOT, "public");
const PROPERTIES_DIR = join(PUBLIC_DIR, "images", "properties");
const SRC_DIR = join(PROJECT_ROOT, "src");
const MANIFEST_PATH = join(PROJECT_ROOT, "scripts", "blob-manifest.json");

/** Explicit allowlist for non-property images that should also live in Blob. */
const DECORATIVE_TARGETS = [
  "/images/offer-01.webp",
  "/images/offer-02.webp",
  "/images/offer-03.webp",
  "/images/offer-04.webp",
  "/images/value-1.webp",
  "/images/value-2.webp",
  "/images/value-3.webp",
  "/images/why-choose-1.webp",
];

const IGNORE_FILES = new Set([".DS_Store", "Thumbs.db"]);

const CONTENT_TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

type UploadTask = {
  publicKey: string; // e.g. "/images/properties/doonside/1.webp" or "/images/offer-01.webp"
  absPath: string;
  blobPath: string;  // e.g. "properties/doonside/1.webp" or "offer-01.webp"
  contentType: string;
};

async function walkDir(dir: string, filter: (name: string) => boolean): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkDir(full, filter)));
    } else if (entry.isFile() && filter(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function loadManifest(): Promise<Record<string, string>> {
  if (!existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  } catch {
    return {};
  }
}

function contentTypeFor(path: string): string {
  const ext = (path.match(/\.[^.]+$/)?.[0] ?? "").toLowerCase();
  return CONTENT_TYPES[ext] ?? "application/octet-stream";
}

async function collectTasks(): Promise<UploadTask[]> {
  const tasks: UploadTask[] = [];

  // 1. Property images — recursive walk.
  if (existsSync(PROPERTIES_DIR)) {
    const propFiles = await walkDir(PROPERTIES_DIR, (name) => !IGNORE_FILES.has(name));
    propFiles.sort();
    for (const absPath of propFiles) {
      const publicKey = "/" + relative(PUBLIC_DIR, absPath).split(sep).join("/");
      const blobPath = relative(join(PUBLIC_DIR, "images"), absPath).split(sep).join("/");
      tasks.push({ publicKey, absPath, blobPath, contentType: contentTypeFor(absPath) });
    }
  }

  // 2. Decorative — explicit allowlist.
  for (const publicKey of DECORATIVE_TARGETS) {
    const absPath = join(PUBLIC_DIR, publicKey);
    if (!existsSync(absPath)) {
      console.warn(`SKIP (missing on disk): ${publicKey}`);
      continue;
    }
    tasks.push({
      publicKey,
      absPath,
      blobPath: basename(absPath),
      contentType: contentTypeFor(absPath),
    });
  }

  return tasks;
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("BLOB_READ_WRITE_TOKEN is not set. Add it to .env.local then re-run.");
    process.exit(1);
  }

  const manifest = await loadManifest();
  const tasks = await collectTasks();
  console.log(`Considering ${tasks.length} candidate files (${Object.keys(manifest).length} already in manifest).`);

  let uploaded = 0;
  let skipped = 0;
  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i];
    if (manifest[t.publicKey]) {
      skipped++;
      continue;
    }
    const fileStat = await stat(t.absPath);
    const buffer = await readFile(t.absPath);
    const blob = await put(t.blobPath, buffer, {
      access: "public",
      addRandomSuffix: false,
      contentType: t.contentType,
      allowOverwrite: true,
    });
    manifest[t.publicKey] = blob.url;
    await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
    uploaded++;
    const kb = (fileStat.size / 1024).toFixed(1);
    console.log(`[${i + 1}/${tasks.length}] uploaded ${t.publicKey}  →  ${blob.url}  (${kb} KB)`);
  }
  console.log(`\nUploaded: ${uploaded}   Skipped (already in manifest): ${skipped}`);

  // Rewrite step — single pass across src/**/*.{ts,tsx}.
  console.log(`\nRewriting src/**/*.{ts,tsx} …`);
  const srcFiles = await walkDir(SRC_DIR, (name) => /\.(ts|tsx)$/.test(name));
  const keys = Object.keys(manifest).sort((a, b) => b.length - a.length);

  let filesChanged = 0;
  let totalReplacements = 0;
  for (const file of srcFiles) {
    const before = await readFile(file, "utf8");
    let source = before;
    for (const key of keys) {
      const occurrences = source.split(key).length - 1;
      if (occurrences === 0) continue;
      source = source.split(key).join(manifest[key]);
      totalReplacements += occurrences;
    }
    if (source !== before) {
      await writeFile(file, source);
      filesChanged++;
      console.log(`  edited ${relative(PROJECT_ROOT, file)}`);
    }
  }
  console.log(`\nFiles changed: ${filesChanged}   Total replacements: ${totalReplacements}`);

  // Sanity: anything in the manifest still appearing literally in code?
  const leftovers: string[] = [];
  for (const file of srcFiles) {
    const source = await readFile(file, "utf8");
    for (const key of keys) {
      if (source.includes(key)) leftovers.push(`  ${key}  in  ${relative(PROJECT_ROOT, file)}`);
    }
  }
  if (leftovers.length > 0) {
    console.warn("Warning: manifest keys still present in source after rewrite:");
    for (const l of leftovers) console.warn(l);
  } else {
    console.log("All manifest keys cleanly replaced in src/.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
