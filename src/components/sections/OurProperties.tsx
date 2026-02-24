"use client";

import Image from "next/image";
import Link from "next/link";
import { useCarousel } from "@/hooks/useCarousel";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PROPERTY_SLIDES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import type { PropertyCardData } from "@/types";

const TOTAL_SLIDES = 5;

export default function OurProperties() {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.15,
  });
  const { currentIndex, goToNext, goToPrev, goToSlide } = useCarousel({
    totalSlides: TOTAL_SLIDES,
  });

  const cards = PROPERTY_SLIDES[0].cards;

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#f7f7f7] px-[1.5rem] py-[4rem] sm:px-[2rem] sm:py-[5rem] md:px-[3rem] lg:px-[7.8%] lg:py-[7.5rem]"
    >
      {/* Header row */}
      <div
        className={cn(
          "flex items-end justify-between transition-all duration-[2000ms] delay-[300ms] ease-out",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        )}
      >
        <div>
          <h2 className="font-afacad text-[clamp(1.5rem,3.8vw,5rem)] font-medium text-[#252525]">
            Our Properties
          </h2>
          <p className="mt-[1.5rem] max-w-[33.5rem] font-outfit text-[clamp(0.875rem,1.46vw,1.75rem)] leading-[1.14em] text-[#61656e]">
            Nala Properties showcases exceptional properties that align with our
            core values.
          </p>
        </div>
        <Link
          href="/properties"
          className="hidden items-center gap-[1.67rem] font-urbanist text-[clamp(1.2rem,1.6vw,2.09rem)] font-semibold text-[#181a20] transition-colors hover:text-primary md:inline-flex"
        >
          See All Properties
          <ArrowIcon />
        </Link>
      </div>

      {/* Cards — staggered layout */}
      <div className="relative mt-[4rem] lg:mt-[clamp(4rem,6vw,8rem)]">
        {/* Desktop staggered grid */}
        <div className="hidden items-start gap-[clamp(0.75rem,1vw,1.25rem)] lg:flex">
          {/* Left card — smaller, pushed down */}
          <div
            className={cn(
              "relative mt-[5.6rem] w-[31.5%] shrink-0 transition-all duration-[2000ms] delay-[600ms] ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            )}
          >
            <PropertyCardLink id={cards[0].id}>
              <SidePropertyCard card={cards[0]} />
            </PropertyCardLink>
          </div>

          {/* Center card — taller, flush top */}
          <div
            className={cn(
              "w-[35.2%] shrink-0 transition-all duration-[2000ms] delay-[900ms] ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            )}
          >
            <PropertyCardLink id={cards[1].id}>
              <CenterPropertyCard card={cards[1]} />
            </PropertyCardLink>
          </div>

          {/* Right card — smaller, pushed down */}
          <div
            className={cn(
              "relative mt-[5.6rem] w-[31.5%] shrink-0 transition-all duration-[2000ms] delay-[1200ms] ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            )}
          >
            <PropertyCardLink id={cards[2].id}>
              <SidePropertyCard card={cards[2]} />
            </PropertyCardLink>
          </div>
        </div>

        {/* Mobile — horizontal scroll */}
        <div
          className={cn(
            "flex gap-4 overflow-x-auto pb-4 transition-all duration-[2000ms] delay-[600ms] ease-out lg:hidden",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          )}
        >
          {cards.map((card) => (
            <div key={card.id} className="w-[85vw] shrink-0 sm:w-[70vw]">
              <PropertyCardLink id={card.id}>
                <SidePropertyCard card={card} />
              </PropertyCardLink>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel controls */}
      <div
        className={cn(
          "mt-[3rem] flex items-center justify-center gap-[0.625rem] transition-all duration-[2000ms] delay-[1500ms] ease-out lg:mt-[4rem]",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        )}
      >
        <button
          onClick={goToPrev}
          className="flex h-[2.95rem] w-[2.95rem] items-center justify-center rounded-full border border-[#252525]/30 transition-colors hover:bg-[#252525] hover:text-white"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-[0.25rem] w-[8.75rem]">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={cn(
                "h-[0.3125rem] flex-1 rounded-[3.75rem] transition-all duration-300",
                i === currentIndex ? "bg-[#252525]" : "bg-[#c0c0c0]"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="flex h-[2.95rem] w-[2.95rem] items-center justify-center rounded-full border border-[#252525]/30 transition-colors hover:bg-[#252525] hover:text-white"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile link */}
      <Link
        href="/properties"
        className="mt-6 flex items-center justify-center gap-2 font-urbanist text-lg font-semibold text-[#181a20] md:hidden"
      >
        See All Properties
        <ArrowIcon />
      </Link>
    </section>
  );
}

/* ── Center card (taller, with villas info + hover transitions) ── */
function CenterPropertyCard({ card }: { card: PropertyCardData }) {
  return (
    <div className="group relative h-[clamp(25rem,29.17vw,35rem)] overflow-hidden rounded-[0.25rem] bg-white">
      {/* Image — zooms 1.2x on hover */}
      <Image
        src={card.imageSrc}
        alt={card.title}
        fill
        className="rounded-[0.25rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.2]"
        sizes="35vw"
      />

      {/* Dark gradient at TOP — appears on hover with backdrop blur */}
      <div className="absolute inset-x-0 top-0 z-10 h-full bg-gradient-to-b from-[#252525] via-[#252525] via-[11%] to-transparent opacity-0 backdrop-blur-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:backdrop-blur-[3px]" />

      {/* SIL Provider text at TOP — slides down from above on hover */}
      <div className="absolute left-[1rem] right-[1rem] z-20 flex items-center justify-between text-[1rem] transition-all duration-500 ease-out -top-[3rem] opacity-0 group-hover:top-[1rem] group-hover:opacity-100">
        <div>
          <p className="font-outfit font-normal text-white">SIL Provider</p>
          <p className="font-outfit font-semibold text-[#f7f7f7]">
            {card.silProvider || "CareConnect"}
          </p>
        </div>
        <div>
          <p className="font-outfit font-normal text-white">Support</p>
          <p className="font-outfit font-semibold text-[#f7f7f7]">
            {card.supportLevel || "Medium Physical Support"}
          </p>
        </div>
      </div>

      {/* Info card at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-[1rem]">
        <div className="flex flex-col gap-[1.19rem] rounded-[0.25rem] bg-white p-[1rem]">
          {/* Title — scroll-up effect on hover */}
          <div className="relative h-[1.875rem] overflow-clip">
            <h3 className="absolute left-0 top-1/2 w-full -translate-y-1/2 font-outfit text-[clamp(1rem,1.25vw,1.5rem)] font-medium text-[#181a20] transition-all duration-500 ease-out group-hover:-top-[0.94rem]">
              {card.title}
            </h3>
            <h3 className="absolute left-0 top-[2.44rem] w-full -translate-y-1/2 font-outfit text-[clamp(1rem,1.25vw,1.5rem)] font-medium text-[#181a20] transition-all duration-500 ease-out group-hover:top-1/2">
              {card.title}
            </h3>
          </div>

          {card.villas && (
            <div className="flex items-center justify-between">
              {card.villas.map((villa, i) => (
                <div key={villa.name} className="flex items-center gap-[0.5rem]">
                  {i > 0 && (
                    <div className="mx-[0.5rem] h-[3.3rem] w-[1px] rotate-0 bg-[#e2e4e5]" />
                  )}
                  <div>
                    <p className="font-outfit text-[clamp(0.75rem,0.83vw,1rem)] font-normal text-[#717171]">
                      {villa.name}
                    </p>
                    <div className="mt-[0.25rem] flex items-center gap-[0.82rem]">
                      <span className="flex items-center gap-[0.55rem] text-[clamp(0.75rem,0.83vw,1rem)] text-[#252525]">
                        <BedIcon /> {villa.bedrooms} Br
                      </span>
                      <span className="flex items-center gap-[0.55rem] text-[clamp(0.75rem,0.83vw,1rem)] text-[#252525]">
                        <BathIcon /> {villa.bathrooms} Ba
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Side cards (shorter, with SIL provider info) ── */
function SidePropertyCard({ card }: { card: PropertyCardData }) {
  return (
    <div className="relative h-[clamp(22rem,24.4vw,29.3rem)] overflow-hidden rounded-[0.5rem]">
      {/* Image */}
      <Image
        src={card.imageSrc}
        alt={card.title}
        fill
        className="rounded-[0.5rem] object-cover"
        sizes="(max-width: 1023px) 85vw, 31vw"
      />

      {/* Info card at bottom */}
      <div className="absolute bottom-[1.25rem] left-[1.25rem] right-[1.25rem] z-10">
        <div className="flex flex-col gap-[1.07rem] rounded-[0.225rem] bg-white p-[0.675rem]">
          <h3 className="font-urbanist text-[clamp(0.875rem,1.13vw,1.35rem)] font-semibold text-[#181a20]">
            {card.title}
          </h3>
          <div className="flex items-center justify-between text-[clamp(0.7rem,0.75vw,0.9rem)]">
            <div>
              <p className="font-urbanist font-normal text-[#717171]">
                SIL Provider
              </p>
              <p className="font-urbanist font-semibold text-[#42537c]">
                {card.silProvider || "CareConnect"}
              </p>
            </div>
            <div className="text-right">
              <p className="font-urbanist font-normal text-[#717171]">
                Support
              </p>
              <p className="font-urbanist font-semibold text-[#42537c]">
                {card.supportLevel || "Medium Physical Support"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Link wrapper ── */
function PropertyCardLink({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Link href={`/properties/${id}`} className="block">
      {children}
    </Link>
  );
}

/* ── Icons ── */
function BedIcon() {
  return (
    <svg width="1.46em" height="1.46em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="1.46em" height="1.46em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" /><path d="M6 12V5a2 2 0 0 1 2-2h3v2.25" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="1.46em" height="1.46em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}
