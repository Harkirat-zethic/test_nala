"use client";

import Image from "next/image";
import { OFFER_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-white py-[4rem] sm:py-[5rem] lg:py-[7.5rem] short:py-[10vh]">
      {/* Section heading */}
      <div className="px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[5.2%]">
        <h2 className="font-afacad text-[clamp(1.75rem,3.5vw,4.5rem)] short:text-[6vh] font-medium text-[#252525]">
          What we offer
        </h2>
      </div>

      {/* Rows */}
      <div className="mt-[2rem] flex flex-col lg:mt-[3rem]">
        {OFFER_ITEMS.map((item, index) => (
          <OfferRow
            key={item.number}
            number={item.number}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            isLast={index === OFFER_ITEMS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function OfferRow({
  number,
  title,
  description,
  imageSrc,
  isLast,
}: {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-[1rem] border-t border-[#e0e0e0] px-[1.5rem] py-[1rem] transition-colors duration-500 sm:px-[2rem] md:flex-row md:items-center md:justify-between md:px-[3rem] md:py-[2rem] lg:px-[7.8%] lg:py-[2rem]",
        isLast && "border-b",
        "hover:bg-[#f7f7f7]"
      )}
    >
      {/* Left: Number + Title */}
      <div className="flex items-center gap-[0.75rem] md:gap-[1.25rem] lg:gap-[clamp(1.25rem,2.5vw,3.5rem)]">
        <span className="font-afacad text-[clamp(1.75rem,4.5vw,5rem)] short:text-[7vh] font-bold leading-none text-[#e3e3e3]">
          {number}
        </span>
        <h3 className="font-afacad text-[clamp(1rem,2vw,2.25rem)] short:text-[3.5vh] font-normal leading-[1.2] text-[#252525] lg:max-w-[28vw]">
          {title}
        </h3>
      </div>

      {/* Right: Description */}
      <p className="text-[clamp(0.875rem,1.04vw,1.25rem)] short:text-[1.9vh] leading-[1.78em] text-[#555] md:max-w-[13rem] lg:max-w-[20vw]">
        {description}
      </p>

      {/* Image card — scales in/out as row enters/exits viewport */}
      <div
        className="pointer-events-none absolute left-[58%] top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 -rotate-[4deg] scale-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-150 group-hover:opacity-100 lg:block"
      >
        <div className="relative h-[clamp(7rem,10vw,15rem)] short:h-[14vh] w-[clamp(10.5rem,15vw,22.5rem)] short:w-[21vh] overflow-hidden rounded-[0.25rem] shadow-[0_0.3125rem_2.8125rem_0_rgba(0,0,0,0.12)]">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="rounded-[0.25rem] object-cover"
            sizes="15vw"
          />
        </div>
      </div>
    </div>
  );
}
