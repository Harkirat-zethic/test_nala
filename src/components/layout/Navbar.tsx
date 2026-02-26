"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { PROPERTIES } from "@/lib/properties";
import type { Property } from "@/types";
import { cn } from "@/lib/cn";

const DROPDOWN_TOP = PROPERTIES.slice(0, 5);
const DROPDOWN_BOTTOM = PROPERTIES.slice(5, 8);

function DropdownItem({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group/item flex flex-1 flex-col gap-[6px]"
    >
      <span className="font-afacad text-[20px] font-normal leading-[1.357] text-black">
        {property.title}
      </span>
      <div className="relative h-[90px] w-full overflow-hidden rounded-sm">
        <Image
          src={property.imageSrc}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover/item:scale-105"
        />
      </div>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const toggleMenu = useCallback(() => setMobileMenuOpen((p) => !p), []);

  const isDark = pathname.startsWith("/properties") || pathname === "/contact";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "absolute left-0 top-0 z-50 w-full",
        "transition-all duration-[1500ms] ease-out",
        mounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      )}
    >
      <div className="mx-auto w-full max-w-[1920px] px-4 pt-2 pb-3 sm:px-6 sm:pt-[10px] sm:pb-4 md:px-12 lg:px-[7.8%] short:pt-1.5 short:pb-2">
        <div className="relative flex h-[clamp(50px,5vw,78px)] short:h-[7vh] w-full items-center">

          {/* Left: Nav links */}
          <div className="hidden items-end gap-[30px] lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const textColor = isDark ? "text-[#252525]" : "text-white";
              const isProperties = link.href === "/properties";

              if (isProperties) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      href={link.href}
                      className="group relative flex h-[clamp(40px,3.26vw,50px)] short:h-[6vh] flex-col justify-center"
                    >
                      <div className="relative h-[clamp(24px,1.96vw,30px)] short:h-[3.5vh] overflow-clip">
                        <span
                          className={cn(
                            "block font-outfit text-[clamp(16px,1.3vw,20px)] short:text-[2.5vh] font-normal leading-[clamp(24px,1.96vw,30px)] short:leading-[3.5vh] transition-transform duration-300 ease-out group-hover:-translate-y-full",
                            textColor
                          )}
                        >
                          {link.label}
                        </span>
                        <span
                          className={cn(
                            "block font-outfit text-[clamp(16px,1.3vw,20px)] short:text-[2.5vh] font-medium leading-[clamp(24px,1.96vw,30px)] short:leading-[3.5vh] transition-transform duration-300 ease-out group-hover:-translate-y-full",
                            textColor
                          )}
                        >
                          {link.label}
                        </span>
                      </div>
                      <div
                        className={cn(
                          "absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out",
                          isDark ? "bg-[#252525]" : "bg-white",
                          isActive || dropdownOpen ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex h-[clamp(40px,3.26vw,50px)] short:h-[6vh] flex-col justify-center"
                >
                  <div className="relative h-[clamp(24px,1.96vw,30px)] short:h-[3.5vh] overflow-clip">
                    <span
                      className={cn(
                        "block font-outfit text-[clamp(16px,1.3vw,20px)] short:text-[2.5vh] font-normal leading-[clamp(24px,1.96vw,30px)] short:leading-[3.5vh] transition-transform duration-300 ease-out group-hover:-translate-y-full",
                        textColor
                      )}
                    >
                      {link.label}
                    </span>
                    <span
                      className={cn(
                        "block font-outfit text-[clamp(16px,1.3vw,20px)] short:text-[2.5vh] font-medium leading-[clamp(24px,1.96vw,30px)] short:leading-[3.5vh] transition-transform duration-300 ease-out group-hover:-translate-y-full",
                        textColor
                      )}
                    >
                      {link.label}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out",
                      isDark ? "bg-[#252525]" : "bg-white",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
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
                    "radial-gradient(40% 50% at 50% 52%, rgba(255,255,255,0.7) 10%, rgba(255,255,255,0) 100%)",
                }}
                aria-hidden
              />
            )}
            <Link href="/" className="relative">
              <div className="relative h-[clamp(32px,3.6vw,55px)] short:h-[5vh] w-[clamp(80px,10.4vw,157.5px)] short:w-[14vh]">
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
              "font-outfit text-[clamp(16px,1.3vw,20px)] short:text-[2.5vh] font-normal",
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

      {/* Divider line */}
      <div className={cn("h-px w-full", isDark ? "bg-[#e2e4e5]" : "bg-white/30")} />

      {/* Properties Dropdown */}
      <div
        className={cn(
          "absolute left-0 hidden w-full lg:block",
          "transition-all duration-300 ease-out",
          dropdownOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        )}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <div className="mx-auto w-full max-w-[1920px] px-4 pt-3 sm:px-6 md:px-12 lg:px-[7.8%]">
          <div className="rounded-[4px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col gap-6 p-6">
              {/* Top row — 5 properties */}
              <div className="flex gap-3">
                {DROPDOWN_TOP.map((property) => (
                  <DropdownItem key={property.id} property={property} />
                ))}
              </div>

              {/* Solid divider */}
              <div className="h-px w-full bg-black/10" />

              {/* Bottom row — 3 visible + 2 invisible spacers */}
              <div className="flex gap-3">
                {DROPDOWN_BOTTOM.map((property) => (
                  <DropdownItem key={property.id} property={property} />
                ))}
                {/* 2 invisible spacers to keep column alignment with top row */}
                <div className="flex-1 opacity-0" aria-hidden />
                <div className="flex-1 opacity-0" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>

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
