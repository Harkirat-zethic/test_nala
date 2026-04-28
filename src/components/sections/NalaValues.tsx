"use client";

import Image from "next/image";
import { VALUE_ITEMS } from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";
import valuesBgHouse from "../../../public/images/values-bg-house.webp";
import valuesHouse from "../../../public/images/values-house.webp";

export default function NalaValues() {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#f7f7f7] py-6 sm:py-20 xl:h-screen xl:py-0"
    >
      {/* z-0: Background house image at 17% opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src={valuesBgHouse}
          alt=""
          fill
          placeholder="blur"
          className="object-cover opacity-[0.17]"
          sizes="100vw"
        />
      </div>

      {/* z-10: Cards 01 & 02 — BEHIND the house image */}
      {/* Card 01 — top left */}
      <div
        className={cn(
          "absolute z-10 hidden transition-all duration-[1500ms] ease-out xl:block",
          isVisible
            ? "left-[11.1%] top-[28%] max-h-[30rem] opacity-100 blur-0"
            : "left-[15.1%] top-[28%] max-h-[3.25rem] overflow-clip opacity-20 blur-[8px]"
        )}
      >
        <ValueCard number={VALUE_ITEMS[0].number} title={VALUE_ITEMS[0].title} description={VALUE_ITEMS[0].description} />
      </div>

      {/* Card 02 — top right */}
      <div
        className={cn(
          "absolute z-10 hidden transition-all duration-[1500ms] ease-out xl:block",
          isVisible
            ? "left-[67.4%] top-[28%] max-h-[30rem] opacity-100 blur-0"
            : "left-[61.2%] top-[28%] max-h-[3.25rem] overflow-clip opacity-20 blur-[8px]"
        )}
      >
        <ValueCard number={VALUE_ITEMS[1].number} title={VALUE_ITEMS[1].title} description={VALUE_ITEMS[1].description} />
      </div>

      {/* z-20: Center house image (transparent cutout) — IN FRONT of cards 01/02, BEHIND card 03 */}
      <div
        className={cn(
          "relative z-20 mx-auto mt-0 sm:mt-10",
          "xl:absolute xl:left-[52%] xl:top-[-61.5%] xl:mx-0 xl:mt-0 xl:-translate-x-[calc(50%+3.75%)]",
          "transition-all duration-[2000ms] ease-out",
          isVisible
            ? "xl:h-[220.5%] xl:w-[129.2%]"
            : "xl:h-[240.3%] xl:w-[143.3%]"
        )}
      >
        <div className="relative mx-auto h-[20rem] w-full  sm:h-[30rem] xl:h-full xl:max-w-none">
          <Image
            src={valuesHouse}
            alt="Modern NALA Property"
            fill
            placeholder="blur"
            className="object-cover [object-position:100%_100%] sm:object-center"
            sizes="(max-width: 1279px) 90vw, 130vw"
          />
        </div>
      </div>

      {/* z-30: Card 03 — bottom center, IN FRONT of the house */}
      <div
        className={cn(
          "absolute z-30 hidden transition-all duration-[1500ms] ease-out xl:block",
          isVisible
            ? "left-1/2 -translate-x-1/2 top-[51.2%] max-h-[30rem] opacity-100 blur-0"
            : "left-1/2 -translate-x-1/2 top-[51.2%] max-h-[3.25rem] overflow-clip opacity-20 blur-[8px]"
        )}
      >
        <ValueCard number={VALUE_ITEMS[2].number} title={VALUE_ITEMS[2].title} description={VALUE_ITEMS[2].description} />
      </div>

      {/* z-40: Title block — ON TOP of everything */}
      <div
        className={cn(
          "relative z-40 pt-8 text-center transition-all duration-[1500ms] ease-out sm:pt-10",
          "xl:absolute xl:left-1/2 xl:top-[7.2%] xl:-translate-x-1/2 xl:pt-0",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        <h2 className="font-afacad text-[clamp(1.75rem,3.5vw,4.25rem)] short:text-[7.5vh] font-medium text-[#252525]">
          NALA Values
        </h2>
        <p className="mx-auto mt-4 font-outfit text-[clamp(0.875rem,1.25vw,1.5rem)] short:text-[2.6vh] leading-[1.36em] text-[#61656e] max-xl:max-w-[90%] max-xl:text-base xl:mt-[1.5rem] xl:w-[32.8vw]">
          Nala Properties showcases exceptional properties that align with our
          core values.
        </p>
      </div>

      {/* Mobile layout — stacked cards */}
      <div className="relative z-20 mx-auto mt-6 flex flex-col gap-4 px-6 sm:px-8 xl:hidden">
        {VALUE_ITEMS.map((item, index) => (
          <div
            key={item.number}
            className={cn(
              "transition-all duration-[1500ms] ease-out",
              isVisible ? "opacity-100 blur-0" : "opacity-20 blur-[8px]"
            )}
          >
            <ValueCard number={item.number} title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-[clamp(0.75rem,1.25vw,1.5rem)] short:gap-[1.5vh] rounded-[0.25rem] bg-white p-[clamp(1rem,1.8vw,2.25rem)] short:p-[2.5vh] xl:w-[clamp(16rem,22vw,26rem)] xl:h-[clamp(12rem,20vw,24rem)] short:h-[32vh]">
      {/* Number */}
      <span className="font-outfit text-[clamp(1.5rem,2.3vw,3rem)] short:text-[5vh] font-extrabold leading-[0.65em] text-[#e8e8e8]">
        {number}
      </span>

      {/* Divider line */}
      <div className="h-[1px] w-full bg-[#e2e4e5]" />

      {/* Title */}
      <h3 className="font-outfit text-[clamp(1.25rem,2.8vw,2rem)] short:text-[4vh] font-normal leading-[1.08em] text-[#252525]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-outfit text-[clamp(0.7rem,0.9vw,1.1rem)] short:text-[1.8vh] leading-[1.45] text-[#61656e]">
        {description}
      </p>
    </div>
  );
}
