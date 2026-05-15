import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      {/* Large 404 number */}
      <h1 className="font-afacad text-[clamp(6rem,20vw,14rem)] font-semibold leading-none text-primary">
        404
      </h1>

      {/* Heading */}
      <h2 className="mt-2 font-outfit text-[clamp(1.25rem,3vw,2rem)] font-semibold !text-dark">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-md text-base leading-relaxed text-body">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Back to Home button */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </section>
  );
}
