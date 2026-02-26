"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { WHY_CHOOSE_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/cn";

import "swiper/css";

export default function WhyChooseNala() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const totalSlides = WHY_CHOOSE_ITEMS.length;
  const scrollProgress = ((currentIndex + 1) / totalSlides) * 100;

  // Snap wrapper scroll position to match the current slide
  const syncScroll = useCallback(
    (index: number) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
      const targetScroll =
        wrapper.offsetTop + (index / (totalSlides - 1)) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: "instant" });
    },
    [totalSlides]
  );

  // Lock scroll position during slide transitions
  const lockedScrollY = useRef<number | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isInView || !swiperRef.current) return;

      const swiper = swiperRef.current;
      const atStart = swiper.activeIndex === 0 && e.deltaY < 0;
      const atEnd =
        swiper.activeIndex === totalSlides - 1 && e.deltaY > 0;

      // Let normal scroll take over at boundaries
      if (atStart || atEnd) return;

      // Always block page scroll while section is active
      e.preventDefault();

      // Only advance one slide, ignore everything during transition
      if (isAnimating.current) return;
      if (Math.abs(e.deltaY) < 10) return;

      isAnimating.current = true;
      lockedScrollY.current = window.scrollY;

      if (e.deltaY > 0) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }

      setTimeout(() => {
        syncScroll(swiper.activeIndex);
        lockedScrollY.current = null;
        isAnimating.current = false;
      }, 850);
    };

    const handleScroll = () => {
      if (lockedScrollY.current !== null) {
        window.scrollTo({ top: lockedScrollY.current, behavior: "instant" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [totalSlides, syncScroll]);

  return (
    <div ref={wrapperRef} style={{ height: `${totalSlides * 100}vh` }}>
      <section className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Swiper — vertical, scroll-driven slides */}
        <Swiper
          direction="vertical"
          speed={800}
          loop={false}
          allowTouchMove={false}
          className="h-full w-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
        >
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <SwiperSlide key={item.title} className="relative h-full w-full">
              <Image
                src={item.imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered white card — overlaid on top of Swiper */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative w-[clamp(20rem,40.4vw,48.5rem)] short:w-[55vh] rounded shadow-2xl">
            {/* White top — heading */}
            <div className="rounded-t bg-white px-8 pt-[clamp(1.25rem,1.8vw,2.25rem)] short:pt-[2.5vh] pb-[clamp(0.75rem,1.2vw,1.5rem)] short:pb-[1.5vh] text-center">
              <h2 className="font-afacad text-[clamp(1.75rem,2.5vw,3rem)] short:text-[4.5vh] font-medium leading-[1.17] text-[#252525]">
                Why choose a NALA
                <br />
                property?
              </h2>
            </div>

            {/* Transparent center — background shows through */}
            <div className="relative">
              {/* White left border */}
              <div className="absolute inset-y-0 left-0 z-10 w-[clamp(2rem,3.3vw,4rem)] short:w-[4.5vh] bg-white" />
              {/* White right border */}
              <div className="absolute inset-y-0 right-0 z-10 w-[clamp(2rem,3.3vw,4rem)] short:w-[4.5vh] bg-white" />

              {/* Image window */}
              <div className="relative mx-[clamp(2rem,3.3vw,4rem)] short:mx-[4.5vh] aspect-[642/552] overflow-hidden rounded">
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(37,37,37,0) 0%,rgb(37,37,37) 100%)",
                  }}
                />

                {/* Title + Description overlaid on gradient */}
                <div className="absolute bottom-[clamp(1.5rem,2.5vw,3rem)] short:bottom-[3.5vh] left-0 right-0 z-20 text-center">
                  {/* Animated title */}
                  <div className="relative mx-auto h-[clamp(1.75rem,2.25vw,2.7rem)] short:h-[4vh] overflow-clip">
                    {WHY_CHOOSE_ITEMS.map((item, index) => (
                      <p
                        key={`title-${item.title}`}
                        className={cn(
                          "absolute inset-x-0 font-urbanist text-[clamp(1.25rem,1.875vw,2.25rem)] short:text-[3.4vh] font-semibold tracking-[0.02em] text-white transition-all duration-700 ease-out",
                          index === currentIndex
                            ? "top-0 opacity-100"
                            : index < currentIndex
                              ? "-top-full opacity-0"
                              : "top-full opacity-0"
                        )}
                      >
                        {item.title}
                      </p>
                    ))}
                  </div>

                  {/* Animated description */}
                  <div className="relative mx-auto mt-[clamp(0.5rem,0.8vw,1.25rem)] short:mt-[1.2vh] h-[clamp(2.5rem,3.6vw,4.3rem)] short:h-[5.5vh] w-[clamp(14rem,24.7vw,29.6rem)] short:w-[40vh] overflow-clip">
                    {WHY_CHOOSE_ITEMS.map((item, index) => (
                      <p
                        key={`desc-${item.title}`}
                        className={cn(
                          "absolute inset-x-0 font-urbanist text-[clamp(0.813rem,1.46vw,1.75rem)] short:text-[2.6vh] font-normal leading-[1.3] tracking-[0.02em] text-white/80 transition-all duration-700 ease-out",
                          index === currentIndex
                            ? "top-0 opacity-100"
                            : index < currentIndex
                              ? "-top-full opacity-0"
                              : "top-full opacity-0"
                        )}
                      >
                        {item.description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* White bottom */}
            <div className="h-[clamp(2rem,3.3vw,4rem)] short:h-[4.5vh] rounded-b bg-white" />
          </div>
        </div>

        {/* Vertical scroll progress indicator */}
        <div className="absolute right-[clamp(1.25rem,2.5vw,3rem)] short:right-[3.5vh] top-1/2 z-20 -translate-y-1/2">
          <div className="h-[clamp(7rem,9.5vw,11.4rem)] short:h-[14vh] w-1 overflow-hidden rounded-full bg-white/30">
            <div
              className="w-full rounded-full bg-white transition-all duration-700 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
