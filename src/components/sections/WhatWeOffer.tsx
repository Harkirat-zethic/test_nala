"use client";

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
  isLast,
}: {
  number: string;
  title: string;
  description: string;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-[1rem] border-t border-[#e5ebf2] px-[1.5rem] py-[1rem] transition-colors duration-500 sm:px-[2rem] md:flex-row md:items-center md:justify-between md:px-[3rem] md:py-[2rem] lg:px-[7.8%] lg:py-[2rem]",
        isLast && "border-b border-[#e5ebf2]",
        "cursor-pointer hover:bg-[#e5ebf2]"
      )}
    >
      {/* Left: Number + Title */}
      <div className="flex items-center gap-[0.75rem] md:gap-[1.25rem] lg:gap-[clamp(1.25rem,2.5vw,3.5rem)]">
        <span className="font-afacad text-[clamp(1.75rem,4.5vw,5rem)] short:text-[7vh] font-bold leading-none text-[#e0e4ea] transition-colors duration-500 group-hover:text-[#c5d0de]">
          {number}
        </span>
        <h3 className="font-afacad text-[clamp(1rem,2vw,2.25rem)] short:text-[3.5vh] font-normal leading-[1.2] text-[#252525] lg:max-w-[28vw]">
          {title}
        </h3>
      </div>

      {/* Right: Description */}
      <p className="text-[clamp(0.875rem,1.04vw,1.25rem)] short:text-[1.9vh] leading-[1.78em] text-[#555] md:max-w-[24rem] lg:max-w-[38vw]">
        {description}
      </p>
    </div>
  );
}
