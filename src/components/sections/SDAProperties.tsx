"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

export default function SDAProperties() {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: false, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-light py-16 sm:py-20 lg:h-screen lg:py-0"
    >
      {/* Title block */}
      <div
        className={cn(
          "px-6 transition-all duration-[2000ms] delay-[500ms] ease-out sm:px-8 md:px-12",
          "lg:absolute lg:left-[7.8%] lg:top-[25%] lg:z-10 lg:w-[44.5%] lg:px-0",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 lg:opacity-20"
        )}
      >
        <h2 className="font-afacad text-[2rem] font-medium leading-[0.86em] text-[#252525] sm:text-[2.5rem] lg:text-[3.75rem] xl:text-[2.75rem] 2xl:text-[clamp(32px,5.2vw,100px)] short:text-[9vh]">
          SDA Properties
        </h2>
        <div className="mt-2 font-afacad text-[1.5rem] font-normal leading-[1.075em] text-[#6c6c6c] sm:text-[2rem] lg:mt-[10px] lg:text-[3rem] xl:text-[2rem] 2xl:text-[clamp(2rem,3.17vw,80px)] short:text-[5.5vh]">
          <p>by Nanak Accessible Living</p>
          <p>Australia</p>
        </div>
      </div>

      {/* Standards text */}
      <p
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className={cn(
          "mt-6 px-6 text-base leading-[28px] transition-all duration-[2000ms] delay-[500ms] ease-out sm:px-8 md:px-12",
          "lg:absolute lg:left-[8%] lg:top-[65.4%] lg:z-10 lg:mt-0 lg:w-[19.6%] lg:px-0 lg:text-[clamp(14px,1.04vw,20px)] short:text-[1.9vh]",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 lg:opacity-20"
        )}
      >
        <span className="font-normal text-[#61656e]">
          High Physical Support{" "}
        </span>
        <span className="font-bold text-[#252525]">2021 NDIS SDA </span>
        <span className="font-normal text-[#61656e]">Design Standard</span>
      </p>

      {/* Center image card */}
      <div
        className={cn(
          "mx-6 overflow-hidden rounded-[4px] transition-all duration-1000 delay-200 sm:mx-8 md:mx-auto md:max-w-[500px]",
          "lg:absolute lg:left-1/2 lg:top-[13.2%] lg:mx-0 lg:h-[121.2%] lg:max-w-none lg:w-[38.9%] lg:-translate-x-1/2"
        )}
      >
        <div className="relative h-[480px] w-full sm:h-[550px] lg:h-full">
          {/* Radial gradient background — behind the image */}
          <div
            className="absolute inset-0 z-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(188,205,233,1) 100%)",
            }}
          />
          {/* Image — on top, fully clear */}
          <Image
            src="/images/sda-house.jpg"
            alt="Modern SDA Property"
            fill
            className={cn(
              "z-10 transition-all duration-[2500ms] delay-[500ms] ease-out",
              isVisible
                ? "object-contain object-center blur-0"
                : "object-cover object-bottom blur-[8.85px]"
            )}
            sizes="(max-width: 1023px) 90vw, 39vw"
          />
        </div>
      </div>

      {/* Description */}
      <p
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className={cn(
          "mx-6 mt-8 text-base leading-relaxed text-[#5b5b5b] transition-all duration-[2000ms] delay-[500ms] ease-out sm:mx-8 md:mx-12",
          "lg:absolute lg:left-[60.1%] lg:top-[40.2%] lg:z-10 lg:mx-0 lg:w-[32.1%] lg:text-[clamp(16px,1.46vw,28px)] lg:leading-[1.36em] short:text-[2.6vh]",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0 lg:opacity-20"
        )}
      >
        NALA provides modern, functional and safe SDA homes for NDIS
        participants. As a development company, NALA focuses on the physical and
        behavioral needs of its residents by building homes to the highest design
        standards
      </p>
    </section>
  );
}
