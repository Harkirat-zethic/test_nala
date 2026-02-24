"use client";

import Image from "next/image";
import { WHY_CHOOSE_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useRef, useEffect, useState, useCallback } from "react";

export default function WhyChooseNala() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = WHY_CHOOSE_ITEMS.length;

  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;

    const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
    const index = Math.min(
      totalSlides - 1,
      Math.floor(progress * totalSlides)
    );

    setCurrentIndex(index);
  }, [totalSlides]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollProgress = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${totalSlides * 100}vh` }}
    >
      <section className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-bleed background images — slide vertically */}
        {WHY_CHOOSE_ITEMS.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]",
              index === currentIndex && "translate-y-0",
              index < currentIndex && "-translate-y-full",
              index > currentIndex && "translate-y-full"
            )}
          >
            <Image
              src={item.imageSrc}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Centered white card */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative w-[clamp(20rem,40.4vw,48.5rem)] rounded shadow-2xl">
            {/* White top — heading */}
            <div className="rounded-t bg-white px-8 pt-[clamp(1.25rem,1.8vw,2.25rem)] pb-[clamp(0.75rem,1.2vw,1.5rem)] text-center">
              <h2 className="font-afacad text-[clamp(1.75rem,2.5vw,3rem)] font-medium leading-[1.17] text-[#252525]">
                Why choose a NALA
                <br />
                property?
              </h2>
            </div>

            {/* Transparent center — background shows through */}
            <div className="relative">
              {/* White left border */}
              <div className="absolute inset-y-0 left-0 z-10 w-[clamp(2rem,3.3vw,4rem)] bg-white" />
              {/* White right border */}
              <div className="absolute inset-y-0 right-0 z-10 w-[clamp(2rem,3.3vw,4rem)] bg-white" />

              {/* Image window */}
              <div className="relative mx-[clamp(2rem,3.3vw,4rem)] aspect-[642/552] overflow-hidden rounded">
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(37,37,37,0) 0%,rgb(37,37,37) 100%)",
                  }}
                />

                {/* Title + Description overlaid on gradient */}
                <div className="absolute bottom-[clamp(1.5rem,2.5vw,3rem)] left-0 right-0 z-20 text-center">
                  {/* Animated title */}
                  <div className="relative mx-auto h-[clamp(1.75rem,2.25vw,2.7rem)] overflow-clip">
                    {WHY_CHOOSE_ITEMS.map((item, index) => (
                      <p
                        key={`title-${item.title}`}
                        className={cn(
                          "absolute inset-x-0 font-urbanist text-[clamp(1.25rem,1.875vw,2.25rem)] font-semibold tracking-[0.02em] text-white transition-all duration-700 ease-out",
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
                  <div className="relative mx-auto mt-[clamp(0.5rem,0.8vw,1.25rem)] h-[clamp(2.5rem,3.6vw,4.3rem)] w-[clamp(14rem,24.7vw,29.6rem)] overflow-clip">
                    {WHY_CHOOSE_ITEMS.map((item, index) => (
                      <p
                        key={`desc-${item.title}`}
                        className={cn(
                          "absolute inset-x-0 font-urbanist text-[clamp(0.813rem,1.46vw,1.75rem)] font-normal leading-[1.3] tracking-[0.02em] text-white/80 transition-all duration-700 ease-out",
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
            <div className="h-[clamp(2rem,3.3vw,4rem)] rounded-b bg-white" />
          </div>
        </div>

        {/* Vertical scroll progress indicator */}
        <div className="absolute right-[clamp(1.25rem,2.5vw,3rem)] top-1/2 z-20 -translate-y-1/2">
          <div className="h-[clamp(7rem,9.5vw,11.4rem)] w-1 overflow-hidden rounded-full bg-white/30">
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
