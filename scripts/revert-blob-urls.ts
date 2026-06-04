/**
 * One-shot: walks src/**\/*.{ts,tsx} and replaces every quoted blob URL in
 * the current manifest with its quoted "/images/..." public key. Used when
 * pointing the project at a new Blob store (e.g. a store in a different
 * Vercel account) so the migration script's rewrite step has something to
 * find on its next run.
 *
 *   npx tsx scripts/revert-blob-urls.ts
 *
 * Safe to delete after the bucket switch is complete.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const PROJECT_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SRC_DIR = join(PROJECT_ROOT, "src");
const MANIFEST_PATH = join(PROJECT_ROOT, "scripts", "blob-manifest.json");

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const out: string[] = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (e.isFile() && /\.(ts|tsx)$/.test(e.name)) out.push(full);
  }
  return out;
}

async function main() {
  const manifest: Record<string, string> = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  // Sort by URL length desc to avoid prefix collisions.
  const entries = Object.entries(manifest).sort((a, b) => b[1].length - a[1].length);
  const srcFiles = await walk(SRC_DIR);

  let filesChanged = 0;
  let totalReverts = 0;
  for (const file of srcFiles) {
    const before = await readFile(file, "utf8");
    let source = before;
    for (const [key, url] of entries) {
      const needle = `"${url}"`;
      const replacement = `"${key}"`;
      const occurrences = source.split(needle).length - 1;
      if (occurrences === 0) continue;
      source = source.split(needle).join(replacement);
      totalReverts += occurrences;
    }
    if (source !== before) {
      await writeFile(file, source);
      filesChanged++;
      console.log(`reverted ${relative(PROJECT_ROOT, file)}`);
    }
  }
  console.log(`\nFiles changed: ${filesChanged}   Total URL→key reverts: ${totalReverts}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
