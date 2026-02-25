"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PROPERTIES } from "@/lib/properties";
import { cn } from "@/lib/cn";
import type { Property } from "@/types";

import "swiper/css";
import "swiper/css/pagination";

export default function OurProperties() {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.15,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

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

      {/* Swiper Carousel */}
      <div
        className={cn(
          "relative mt-[4rem] transition-all duration-[2000ms] delay-[600ms] ease-out lg:mt-[clamp(4rem,6vw,8rem)]",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        )}
      >
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Autoplay]}
          slidesPerView={3}
          centeredSlides
          loop
          spaceBetween={15}
          speed={400}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          mousewheel={{ forceToAxis: true, thresholdDelta: 50 }}
          className="swiper-align-bottom"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {PROPERTIES.map((property) => (
            <SwiperSlide key={property.id}>
              {({ isActive }) => (
                <PropertyCardLink id={property.id}>
                  <PropertyCard card={property} isCenter={isActive} />
                </PropertyCardLink>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
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
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-[2.95rem] w-[2.95rem] items-center justify-center rounded-full border border-[#252525]/30 transition-colors hover:bg-[#252525] hover:text-white"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-[0.25rem] w-[8.75rem]">
          {PROPERTIES.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={cn(
                "h-[0.3125rem] flex-1 rounded-[3.75rem] transition-all duration-300",
                i === activeIndex ? "bg-[#252525]" : "bg-[#c0c0c0]"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
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

/* ── Unified property card — same info panel structure, CSS-only transitions ── */
function PropertyCard({ card, isCenter }: { card: Property; isCenter: boolean }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[0.5rem]",
        isCenter
          ? "h-[clamp(25rem,29.17vw,35rem)]"
          : "h-[clamp(22rem,24.4vw,29.3rem)]"
      )}
    >
      {/* Image — zooms on hover */}
      <Image
        src={card.imageSrc}
        alt={card.title}
        fill
        className="rounded-[0.5rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.2]"
        sizes="(max-width: 1023px) 85vw, 35vw"
      />

      {/* Dark gradient at TOP — appears on hover */}
      <div className="absolute inset-x-0 top-0 z-10 h-full bg-gradient-to-b from-[#252525] via-[#252525] via-[11%] to-transparent opacity-0 backdrop-blur-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:backdrop-blur-[3px]" />

      {/* SIL Provider text at TOP — slides down on hover */}
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

      {/* Info card at bottom — villas layout for all positions */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-[0.6rem] lg:p-[0.75rem] xl:p-[0.5rem] 2xl:p-[1rem]">
        <div className="flex flex-col gap-[0.6rem] rounded-[0.25rem] bg-white p-[0.6rem] lg:gap-[0.75rem] lg:p-[0.75rem] xl:gap-[0.5rem] xl:p-[0.5rem] 2xl:gap-[0.875rem] 2xl:p-[0.875rem]">
          <div className="relative h-[1.5rem] overflow-clip xl:h-[1.2rem] 2xl:h-[1.5rem]">
            <h3 className="absolute left-0 top-1/2 w-full -translate-y-1/2 font-outfit text-[0.875rem] font-medium text-[#181a20] transition-all duration-500 ease-out group-hover:-top-[0.75rem] lg:text-[0.875rem] xl:text-[0.75rem] 2xl:text-[1rem]">
              {card.title}
            </h3>
            <h3 className="absolute left-0 top-[2rem] w-full -translate-y-1/2 font-outfit text-[0.875rem] font-medium text-[#181a20] transition-all duration-500 ease-out group-hover:top-1/2 lg:text-[0.875rem] xl:text-[0.75rem] 2xl:text-[1rem]">
              {card.title}
            </h3>
          </div>
          {card.villas && (
            <div className="flex items-center justify-between">
              {card.villas.flatMap((villa, i) => {
                const items = [];
                if (i > 0) {
                  items.push(
                    <div key={`divider-${i}`} className="h-[2.2rem] border-l border-dashed border-[#e2e4e5] lg:h-[2rem] xl:h-[1.6rem] 2xl:h-[2.4rem]" />
                  );
                }
                items.push(
                  <div key={villa.name}>
                    <p className="font-outfit text-[0.75rem] font-normal text-[#717171] lg:text-[0.7rem] xl:text-[0.55rem] 2xl:text-[0.8rem]">
                      {villa.name}
                    </p>
                    <div className="mt-[0.15rem] flex items-center gap-[0.5rem] lg:gap-[0.4rem] xl:gap-[0.25rem] 2xl:gap-[0.5rem]">
                      <span className="flex items-center gap-[0.25rem] text-[0.75rem] text-[#252525] lg:text-[0.65rem] xl:text-[0.55rem] 2xl:text-[0.75rem]">
                        <BedIcon /> {villa.bedrooms} Br
                      </span>
                      <span className="flex items-center gap-[0.25rem] text-[0.75rem] text-[#252525] lg:text-[0.65rem] xl:text-[0.55rem] 2xl:text-[0.75rem]">
                        <BathIcon /> {villa.bathrooms} Ba
                      </span>
                    </div>
                  </div>
                );
                return items;
              })}
            </div>
          )}
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
    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}
