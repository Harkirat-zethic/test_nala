"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMobileMenuOpen((p) => !p), []);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={cn(
        "absolute left-0 top-0 z-50 w-full",
        "transition-all duration-[1500ms] ease-out",
        mounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-4 px-6 pt-3 sm:px-8 md:px-12 lg:px-[8%]">
        <div className="relative flex h-[60px] w-full items-center lg:h-[78px]">

          {/* Left: Nav links */}
          <div className="hidden items-center gap-5 lg:flex lg:gap-[30px]">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative pb-3"
                >
                  <span className="font-outfit text-base text-white lg:text-xl">
                    {link.label}
                  </span>
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] w-full bg-white transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Center: Glow + Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Radial gradient glow — fades to fully transparent at edges */}
            <div
              className="pointer-events-none absolute left-1/2 top-[-50%] -translate-x-1/2 -translate-y-1/2 w-[clamp(18rem,43.6vw,52.4rem)] h-[clamp(6rem,14.9vw,17.9rem)]"
              style={{
                background:
                  "radial-gradient(40% 50% at 50% 50%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0) 100%)",
              }}
              aria-hidden
            />
            <Link href="/" className="relative">
              <div className="relative h-[40px] w-[100px] sm:h-[45px] sm:w-[112px] lg:h-[63px] lg:w-[158px]">
                <Image
                  src="/images/logo-white.png"
                  alt="NALA Properties"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right: Email */}
          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <Image
              src="/images/sms-icon.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
            <span className="font-outfit text-base text-white lg:text-xl">
              {COMPANY_INFO.email}
            </span>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="relative z-[60] ml-auto flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-transform duration-300",
                  mobileMenuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-opacity duration-300",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-transform duration-300",
                  mobileMenuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>

      </div>

      {/* Divider line — full viewport width */}
      <div className="h-px w-full bg-white/30" />

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[55] flex flex-col items-center justify-center bg-dark/95 backdrop-blur-md transition-opacity duration-300 lg:hidden",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
