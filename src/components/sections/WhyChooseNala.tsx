"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { WHY_CHOOSE_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import whyChooseBg from "../../../public/images/why-choose-bg.webp";

export default function WhyChooseNala() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const isAnimating = useRef(false);
  const totalSlides = WHY_CHOOSE_ITEMS.length;
  const scrollProgress = ((currentIndex + 1) / totalSlides) * 100;

  // Keep ref in sync with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Snap wrapper scroll position to match the current slide (desktop only)
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

  // Desktop: wheel-driven slide changes (registered once, reads from ref)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isInView) return;

      const idx = currentIndexRef.current;
      const atStart = idx === 0 && e.deltaY < 0;
      const atEnd = idx === totalSlides - 1 && e.deltaY > 0;

      if (atStart || atEnd) return;

      e.preventDefault();

      if (isAnimating.current) return;
      if (Math.abs(e.deltaY) < 10) return;

      isAnimating.current = true;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      const nextIndex = e.deltaY > 0
        ? Math.min(idx + 1, totalSlides - 1)
        : Math.max(idx - 1, 0);

      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);

      setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        syncScroll(nextIndex);
        isAnimating.current = false;
      }, 850);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [totalSlides, syncScroll]);

  // Mobile: scroll-position-driven slide changes
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      if (isAnimating.current) return;

      const rect = wrapper.getBoundingClientRect();
      const scrolledInto = -rect.top;
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;

      if (scrolledInto < 0 || scrolledInto > scrollableDistance) return;

      const progress = scrolledInto / scrollableDistance;
      const targetIndex = Math.min(
        Math.round(progress * (totalSlides - 1)),
        totalSlides - 1
      );

      if (targetIndex !== currentIndex) {
        setCurrentIndex(targetIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex, totalSlides]);

  return (
    <div ref={wrapperRef} style={{ height: `${totalSlides * 100}vh` }}>
      <section className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Single fixed background image */}
        <Image
          src={whyChooseBg}
          alt=""
          fill
          placeholder="blur"
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Centered white card */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative w-[clamp(20rem,40.4vw,48.5rem)] short:w-[65vh] rounded shadow-2xl">
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
                <div className="absolute bottom-[clamp(1.5rem,2.8vw,3.5rem)] short:bottom-[3.5vh] left-0 right-0 z-20 text-center">
                  {/* Animated title */}
                  <div className="relative mx-auto h-[clamp(2.5rem,3.2vw,3.8rem)] short:h-[6vh] overflow-clip">
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
                  <div className="relative mx-auto mt-[clamp(0.25rem,0.4vw,0.5rem)] short:mt-[0.6vh] h-[clamp(3.5rem,5vw,6rem)] short:h-[9vh] w-[clamp(14rem,24.7vw,29.6rem)] short:w-[48vh] overflow-clip">
                    {WHY_CHOOSE_ITEMS.map((item, index) => (
                      <p
                        key={`desc-${item.title}`}
                        className={cn(
                          "absolute inset-x-0 font-urbanist text-[clamp(0.7rem,1.1vw,1.35rem)] short:text-[2vh] font-normal leading-[1.35] tracking-[0.02em] text-white/80 transition-all duration-700 ease-out",
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
