"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Footer() {
  const { ref: footerRef, isVisible } = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-light">
      {/* Top row — logo, NDIS, email, social, company */}
      <div className="relative z-10 mx-auto flex flex-wrap items-start justify-between gap-10 px-[clamp(1.5rem,4.17vw,5rem)] pt-[clamp(3rem,6vw,7.25rem)]">
        {/* Logo */}
        <Link
          href="/"
          className={`relative h-[clamp(4.5rem,6.25vw,7.5rem)] w-[clamp(3.5rem,5.36vw,6.44rem)] shrink-0 transition-all duration-[2000ms] delay-[500ms] ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="NALA Properties"
            fill
            className="object-contain"
          />
        </Link>

        {/* NDIS badge + provider number */}
        <div
          className={`flex shrink-0 flex-col gap-[1.125rem] rounded-[0.875rem] bg-light px-7 transition-all duration-[2000ms] delay-[700ms] ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="relative h-[clamp(2.5rem,3.11vw,3.74rem)] w-[clamp(5.5rem,7.3vw,8.77rem)]">
            <Image
              src="/images/ndis-badge.png"
              alt="NDIS Registered Provider"
              fill
              className="object-contain"
            />
          </div>
          <div className="font-outfit text-[clamp(0.875rem,1.04vw,1.25rem)] text-body">
            <p>NDIS SDA Provider Number:</p>
            <p className="mt-1 font-bold text-dark">
              {COMPANY_INFO.ndisProvider}
            </p>
          </div>
        </div>

        {/* Email */}
        <div
          className={`transition-all duration-[2000ms] delay-[900ms] ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <h3 className="font-outfit text-[clamp(1.25rem,1.875vw,2.25rem)] font-medium text-primary">
            Email
          </h3>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="mt-[clamp(1rem,1.67vw,2rem)] block font-outfit text-[clamp(0.875rem,1.04vw,1.25rem)] text-body transition-colors duration-300 hover:text-primary"
          >
            {COMPANY_INFO.email}
          </a>
        </div>

        {/* Social */}
        <div
          className={`transition-all duration-[2000ms] delay-[1100ms] ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <h3 className="font-outfit text-[clamp(1.25rem,1.875vw,2.25rem)] font-medium text-primary">
            Social
          </h3>
          <div className="mt-[clamp(1rem,1.67vw,2rem)] flex items-center gap-[clamp(0.75rem,0.96vw,1.15rem)]">
            <SocialIcon href="#" label="LinkedIn">
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon href="#" label="Facebook">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter">
              <TwitterIcon />
            </SocialIcon>
          </div>
        </div>

        {/* Company links */}
        <div
          className={`transition-all duration-[2000ms] delay-[1300ms] ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <h3 className="font-outfit text-[clamp(1.25rem,1.875vw,2.25rem)] font-medium text-primary">
            Company
          </h3>
          <ul className="mt-[clamp(1rem,1.67vw,2rem)] flex flex-col gap-[clamp(0.875rem,1.25vw,1.5rem)]">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-outfit text-[clamp(0.875rem,1.04vw,1.25rem)] text-body transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Geometric NALA triangle letters */}
      <div
        className={`group relative mt-4 flex h-[clamp(16rem,33.4vw,40rem)] w-full items-end justify-center transition-opacity duration-2000 ease-out delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        <svg
          preserveAspectRatio="xMidYMax meet"
          width="100%"
          height="100%"
          viewBox="-550 -340 3836 1187"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 h-full w-full origin-bottom transition-transform duration-[2500ms] delay-[500ms] ease-out ${
            isVisible ? "scale-110" : "scale-140"
          }`}
        >
          <path
            d="M624.817 847.209L148.262 371.536V820.734H0V0L476.555 474.79V26.4753H624.817V847.209Z"
            fill="#1867A5"
            fillOpacity="0.96"
          />
          <path
            d="M1517.78 843.734V26.4753H1681.92V700.767H1920.2V843.734H1517.78Z"
            fill="#1867A5"
            fillOpacity="0.96"
          />
          <path
            d="M1086 11L735 835H889.5L1083 352L1277.74 835H1437.5L1086 11Z"
            fill="#1867A5"
            fillOpacity="0.96"
          />
          <path
            d="M2384 11L2033 835H2187.5L2381 352L2575.74 835H2735.5L2384 11Z"
            fill="#1867A5"
            fillOpacity="0.96"
          />
        </svg>
      </div>

      {/* Copyright */}
      <p
        className={`relative z-10 pb-[clamp(1rem,1.5vw,1.75rem)] text-center font-outfit text-[clamp(0.75rem,0.94vw,1.125rem)] text-body transition-all duration-[2000ms] delay-[1500ms] ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {COMPANY_INFO.copyright}
      </p>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group flex h-[clamp(2rem,2.24vw,2.69rem)] w-[clamp(2rem,2.24vw,2.69rem)] items-center justify-center rounded-full border border-body/30 text-body transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-110"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}
