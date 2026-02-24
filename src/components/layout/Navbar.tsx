"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="relative h-16 w-14 shrink-0">
          <Image
            src="/images/logo.png"
            alt="NALA Properties"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* NDIS Provider Badge */}
        <div className="hidden rounded-xl bg-light/80 px-5 py-3 backdrop-blur-sm lg:block">
          <div className="relative h-10 w-24">
            <Image
              src="/images/ndis-badge.png"
              alt="NDIS Registered Provider"
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-1 text-xs text-body">
            <p>NDIS SDA Provider Number:</p>
            <p className="font-bold">4-GMPNJSS</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-medium text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-transform duration-300",
                isMobileMenuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-opacity duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-transform duration-300",
                isMobileMenuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center bg-dark/95 backdrop-blur-md transition-opacity duration-300 lg:hidden",
            isMobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
        >
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-white transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
