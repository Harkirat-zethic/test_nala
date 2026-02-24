"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useState, useCallback } from "react";

const TAGS = ["Premium", "Accessible", "Accommodation"];

export default function Hero() {
  const {
    sectionRef,
    buildingRef,
    personRef,
    leavesRef,
    navRef,
    titleRef,
    descRef,
    tagsRef,
  } = useHeroAnimation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMobileMenuOpen((p) => !p), []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#252525]"
    >
      {/* Layer 1: Sky background — stays fixed */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-section-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-70"
          sizes="100vw"
          priority
          aria-hidden
        />
      </div>

      {/* Layer 2: "BUILDING" text — between sky and person cutout */}
      <div
        ref={buildingRef}
        className={cn(
          "absolute z-[1] font-extrabold uppercase leading-[1.2] tracking-[4.56px] text-white opacity-0",
          "left-6 top-[20%] text-[48px]",
          "sm:left-8 sm:text-[70px]",
          "md:left-12 md:top-[31%] md:text-[120px]",
          "lg:left-[7.8%] lg:top-[31%] lg:text-[180px]",
          "xl:text-[200px]"
        )}
        style={{
          fontFamily: "'Outfit', sans-serif",
          transform: "translateY(1rem)",
        }}
      >
        Building
      </div>

      {/* Layer 3: Person cutout (transparent PNG) — slides down */}
      <div
        ref={personRef}
        className="absolute left-0 top-0 z-[2] w-full"
        style={{ height: "122.8vh", transform: "scale(1.09) translateY(-3%)" }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-person.png"
            alt="Caregiver assisting person in wheelchair"
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Layer 4: Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 z-[3] h-[65%] w-full md:h-[57%]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(37,37,37,0) 0%, rgba(37,37,37,0.9) 47.66%, rgba(37,37,37,0.9) 73.96%, rgba(37,37,37,0.94) 86.13%, rgb(37,37,37) 100%)",
        }}
      />

      {/* Layer 5: Green leaves — slides UP */}
      <div
        ref={leavesRef}
        className="pointer-events-none absolute inset-0 z-[4] overflow-hidden mix-blend-multiply"
      >
        <Image
          src="/images/green-leaves.png"
          alt=""
          width={3474}
          height={1434}
          className="absolute left-0 top-0 h-[134%] w-[181%] max-w-none"
          aria-hidden
        />
      </div>

      {/* Layer 6: Navbar */}
      <nav
        ref={navRef}
        className="absolute left-0 top-0 z-[5] w-full opacity-0"
        style={{ transform: "translateY(-0.5rem)" }}
      >
        <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-4 px-6 pt-3 sm:px-8 md:px-12 lg:px-[8%]">
          <div className="relative flex h-[60px] w-full items-end lg:h-[78px]">
            {/* Left: Nav links */}
            <div className="hidden items-end gap-5 lg:flex lg:gap-[30px]">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative pb-3"
                >
                  <span
                    className="text-base text-white lg:text-xl"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {link.label}
                  </span>
                  {i === 0 && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white" />
                  )}
                </Link>
              ))}
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-[40px] w-[100px] sm:h-[45px] sm:w-[112px] lg:h-[63px] lg:w-[158px]">
                <Image
                  src="/images/logo-white.png"
                  alt="NALA Properties"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
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
              <span
                className="text-base text-white lg:text-xl"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
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

          {/* Divider line */}
          <div className="h-px w-full bg-white/30" />
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
      </nav>

      {/* Layer 7: Content — absolutely positioned to match Figma layout */}
      <div className="absolute inset-0 z-[6] pointer-events-none">
        {/* Title — positioned at ~56% from top (Figma: 607/1080) */}
        <p
          ref={titleRef}
          className={cn(
            "pointer-events-auto absolute whitespace-pre-wrap leading-[1.2] tracking-[1.38px] text-white opacity-0",
            "left-6 top-[55%] max-w-[90%] text-[28px]",
            "sm:left-8 sm:text-[36px]",
            "md:left-12 md:text-[50px] md:max-w-[70%]",
            "lg:left-[7.8%] lg:top-[56.2%] lg:text-[69px] lg:max-w-[48vw]"
          )}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 300,
            transform: "translateY(2.5rem)",
          }}
        >
          High Quality Specialist Disability Accommodation
        </p>

        {/* Description — positioned at ~79% from top on right (Figma: 848/1080, 1197/1920) */}
        <p
          ref={descRef}
          className={cn(
            "pointer-events-auto absolute whitespace-pre-wrap leading-[1.5] text-white opacity-0",
            "left-6 top-[72%] max-w-[90%] text-[14px]",
            "sm:left-8 sm:text-[16px] sm:max-w-[360px]",
            "md:left-12 md:text-[18px] md:max-w-[420px]",
            "lg:left-[62.3%] lg:right-auto lg:top-[78.5%] lg:text-[28px] lg:max-w-[29.8vw]"
          )}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            transform: "translateY(1.5rem)",
          }}
        >
          NALA develops homes designed to enrich its residents quality of life.
          NALA homes are built to suit individuals with High Physical Support and
          Robust needs.
        </p>

        {/* Tags — positioned at ~91% from top (Figma: 980/1080) */}
        <div
          ref={tagsRef}
          className={cn(
            "pointer-events-auto absolute flex flex-wrap gap-2 sm:gap-[10px]",
            "left-6 bottom-[8%]",
            "sm:left-8",
            "md:left-12",
            "lg:left-[7.8%] lg:bottom-auto lg:top-[90.7%]"
          )}
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/80 px-4 py-2 text-[#252525] opacity-0 text-sm sm:px-5 sm:py-2.5 sm:text-base lg:text-xl"
              style={{
                fontFamily: "'Outfit', sans-serif",
                transform: "translateY(1rem)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
