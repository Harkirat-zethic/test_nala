"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

export default function SDAProperties() {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-light lg:h-screen"
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
            <h2 className="font-afacad text-[2rem] font-medium leading-[0.86em] text-[#252525] sm:text-[2.5rem]">
              SDA Properties
            </h2>
            <div className="mt-2 font-afacad text-[1.5rem] font-normal leading-[1.075em] text-[#6c6c6c] sm:text-[2rem]">
              <p>by Nanak Accessible Living</p>
              <p>Australia</p>
            </div>
          </div>

          {/* Description */}
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className={cn(
              "mt-6 text-base leading-relaxed text-[#5b5b5b]",
              "transition-all duration-[2000ms] delay-500 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            NALA provides modern, functional and safe SDA homes for NDIS
            participants. As a development company, NALA focuses on the physical
            and behavioral needs of its residents by building homes to the highest
            design standards
          </p>

          {/* Standards text */}
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className={cn(
              "mt-4 text-base leading-[28px]",
              "transition-all duration-[2000ms] delay-700 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <span className="font-normal text-[#61656e]">High Physical Support </span>
            <span className="font-bold text-[#252525]">2021 NDIS SDA </span>
            <span className="font-normal text-[#61656e]">Design Standard</span>
          </p>
        </div>

        {/* Background + Building image at bottom */}
        <div
          className={cn(
            "relative mt-8 w-full",
            "transition-all duration-[2000ms] delay-[900ms] ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          )}
        >
          {/* Building image — sits above the bg */}
          <div className="relative mx-auto h-[250px] w-[65%] sm:h-[320px]">
            <Image
              src="/images/sda-house.png"
              alt="Modern SDA Property"
              fill
              className="z-[1] object-contain object-bottom"
              sizes="100vw"
            />
          </div>
          {/* Background image — anchored to bottom, behind building */}
          <div className="absolute bottom-0 left-0 w-full">
            <Image
              src="/images/sda-house-bg.png"
              alt=""
              width={1920}
              height={600}
              className="w-full object-contain object-bottom"
              sizes="100vw"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* ─── Desktop Layout (absolute positioned) ─── */}
      <div className="hidden lg:block lg:h-full">
        {/* Title block */}
        <div
          className={cn(
            "absolute left-[7.8%] top-[25%] z-10 w-[44.5%]",
            "transition-all duration-[2000ms] delay-300 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-20"
          )}
        >
          <h2 className="font-afacad text-[3.75rem] font-medium leading-[0.86em] text-[#252525] xl:text-[2.75rem] 2xl:text-[clamp(32px,5.2vw,100px)] short:text-[9vh]">
            SDA Properties
          </h2>
          <div className="mt-[10px] font-afacad text-[3rem] font-normal leading-[1.075em] text-[#6c6c6c] xl:text-[2rem] 2xl:text-[clamp(2rem,3.17vw,80px)] short:text-[5.5vh]">
            <p>by Nanak Accessible Living</p>
            <p>Australia</p>
          </div>
        </div>

        {/* Standards text */}
        <p
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className={cn(
            "absolute left-[8%] top-[65.4%] z-10 w-[19.6%] text-[clamp(14px,1.04vw,20px)] leading-[28px] short:text-[1.9vh]",
            "transition-all duration-[2000ms] delay-700 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-20"
          )}
        >
          <span className="font-normal text-[#61656e]">High Physical Support </span>
          <span className="font-bold text-[#252525]">2021 NDIS SDA </span>
          <span className="font-normal text-[#61656e]">Design Standard</span>
        </p>

        {/* Background image — behind the building */}
        <div
          className={cn(
            "absolute bottom-0 left-0 w-full",
            "transition-all duration-[2000ms] delay-500 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <Image
            src="/images/sda-house-bg.png"
            alt=""
            width={1920}
            height={600}
            className="w-full object-contain object-bottom"
            sizes="100vw"
            aria-hidden
          />
        </div>

        {/* Center building image — on top of bg */}
        <div
          className={cn(
            "absolute bottom-0 left-1/2 z-[1] h-[90%] w-[38.9%] -translate-x-1/2",
            "transition-all duration-[2000ms] delay-[900ms] ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          )}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/sda-house.png"
              alt="Modern SDA Property"
              fill
              className="z-10 object-contain object-bottom"
              sizes="39vw"
            />
          </div>
        </div>

        {/* Description */}
        <p
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className={cn(
            "absolute left-[60.1%] top-[30%] z-10 w-[32.1%] text-[clamp(16px,1.46vw,28px)] leading-[1.36em] text-[#5b5b5b] short:text-[2.6vh]",
            "transition-all duration-[2000ms] delay-500 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-20"
          )}
        >
          NALA provides modern, functional and safe SDA homes for NDIS
          participants. As a development company, NALA focuses on the physical
          and behavioral needs of its residents by building homes to the highest
          design standards
        </p>
      </div>
    </section>
  );
}
