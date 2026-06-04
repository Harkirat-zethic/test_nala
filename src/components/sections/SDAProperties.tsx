"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";
import { SECTION_IMAGES } from "@/lib/constants";

export default function SDAProperties() {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden bg-light"
    >
      {/* ─── Mobile Layout (stacked flow) ─── */}
      <div className="flex flex-col lg:hidden">
        <div className="px-6 pt-16 sm:px-8 sm:pt-20 md:px-12">
          {/* Title */}
          <div
            className={cn(
              "transition-all duration-[2000ms] delay-300 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <h2 className="font-afacad text-[2rem] font-medium leading-[0.86em] !text-[#252525] sm:text-[2.5rem]">
              SDA Properties
            </h2>
            <div className="mt-2 font-afacad text-[1.5rem] font-normal leading-[1.075em] text-[#6c6c6c] sm:text-[2rem]">
              <p>by Nanak Accessible Living</p>
              <p>Australia</p>
            </div>
          </div>

          {/* Description */}
          <p
            className={cn(
              "mt-6 font-outfit text-base leading-relaxed text-[#5b5b5b]",
              "transition-all duration-[2000ms] delay-500 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
           NALA builds SDA homes that help people live with dignity, safety and independence. Our homes are built to meet NDIS requirements, but our standard goes beyond compliance. We create homes that feel calm, practical, and genuinely liveable.

          </p>

        </div>

        {/* Images — grid stacking for overlap without absolute */}
        <div
          className={cn(
            " grid items-end",
            "transition-all duration-[2000ms] delay-[900ms] ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          )}
        >
          <div className="col-start-1 row-start-1 self-end scale-[1.5]">
            <Image
              {...SECTION_IMAGES.sdaHouseBg}
              alt=""
              className="w-full object-contain object-bottom"
              sizes="100vw"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* ─── Desktop Layout (grid overlay — no absolute positioning) ─── */}
      <div className="hidden lg:grid lg:min-h-screen">
        {/* Image Layer — bottom-aligned, behind text */}
        <div className="col-start-1 row-start-1 self-end grid items-end">
          <div
            className={cn(
              "col-start-1 row-start-1 self-end",
              "transition-all duration-[2000ms] delay-500 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <Image
              {...SECTION_IMAGES.sdaHouseBg}
              alt=""
              className="w-full object-contain object-bottom"
              sizes="100vw"
              aria-hidden
            />
          </div>
        </div>

        {/* Text Layer — top-aligned, above images */}
        <div className="col-start-1 row-start-1 self-start z-10 grid grid-cols-2 gap-x-[8%] px-[7.8%] pt-[15vh] short:pt-[10vh]">
          {/* Left Column: Title + Standards */}
          <div className="flex flex-col gap-[8vh] short:gap-[4vh]">
            <div
              className={cn(
                "transition-all duration-[2000ms] delay-300 ease-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-20"
              )}
            >
              <h2 className="font-afacad text-[clamp(2rem,5.2vw,100px)] font-medium leading-[0.86em] !text-[#252525] short:text-[9vh]">
                SDA Properties
              </h2>
              <div className="mt-[10px] font-afacad text-[clamp(2rem,3.17vw,80px)] font-normal leading-[1.075em] text-[#6c6c6c] short:text-[5.5vh]">
                <p>by Nanak Accessible Living</p>
                <p>Australia</p>
              </div>
            </div>

         
          </div>

          {/* Right Column: Description */}
          <p
            className={cn(
              "font-outfit text-[clamp(16px,1.46vw,28px)] leading-[1.36em] text-[#5b5b5b] short:text-[2.6vh]",
              "transition-all duration-[2000ms] delay-500 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-20"
            )}
          >
            NALA builds SDA homes that help people live with dignity, safety and independence. <br/><br/>Our homes are built to meet NDIS requirements, but our standard goes beyond compliance. We create homes that feel calm, practical, and genuinely liveable.

          </p>
        </div>
      </div>
    </section>
  );
}
