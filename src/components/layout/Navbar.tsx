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

  const isDark = pathname.startsWith("/properties/");

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
      <div className="mx-auto w-full max-w-[1920px] px-4 pt-2 pb-3 sm:px-6 sm:pt-[10px] sm:pb-4 md:px-12 lg:px-[7.8%]">
        <div className="relative flex h-[50px] w-full items-center sm:h-[60px] lg:h-[78px]">

          {/* Left: Nav links — bottom-aligned with underline */}
          <div className="hidden items-center gap-[30px] lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex items-center"
                >
                  <span className={cn(
                    "font-outfit text-[20px] font-normal",
                    isDark ? "text-[#252525]" : "text-white"
                  )}>
                    {link.label}
                  </span>
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] w-full transition-opacity duration-300",
                      isDark ? "bg-[#252525]" : "bg-white",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {!isDark && (
              <div
                className="pointer-events-none absolute left-1/2 top-[-50%] -translate-x-1/2 -translate-y-1/2 w-[clamp(18rem,43.6vw,52.4rem)] h-[clamp(6rem,14.9vw,17.9rem)]"
                style={{
                  background:
                    "radial-gradient(40% 50% at 50% 50%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0) 100%)",
                }}
                aria-hidden
              />
            )}
            <Link href="/" className="relative">
              <div className="relative h-[32px] w-[80px] sm:h-[40px] sm:w-[100px] md:h-[45px] md:w-[112px] lg:h-[55px] lg:w-[157.5px]">
                <Image
                  src={isDark ? "/images/logo.png" : "/images/logo-white.png"}
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
              className={isDark ? "brightness-0" : ""}
            />
            <span className={cn(
              "font-outfit text-[20px] font-normal",
              isDark ? "text-[#252525]" : "text-white"
            )}>
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
                  "block h-0.5 w-6 transition-transform duration-300",
                  isDark ? "bg-[#181a20]" : "bg-white",
                  mobileMenuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 transition-opacity duration-300",
                  isDark ? "bg-[#181a20]" : "bg-white",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 transition-transform duration-300",
                  isDark ? "bg-[#181a20]" : "bg-white",
                  mobileMenuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Divider line — full viewport width */}
      <div className={cn("h-px w-full", isDark ? "bg-[#e2e4e5]" : "bg-white/30")} />

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
