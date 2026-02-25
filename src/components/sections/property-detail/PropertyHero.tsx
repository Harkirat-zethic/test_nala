"use client";

import Image from "next/image";
import { useGallery } from "@/hooks/useGallery";
import { cn } from "@/lib/cn";
import type { Property } from "@/types";

export default function PropertyHero({ property }: { property: Property }) {
  const { selectedIndex, goToNext, goToPrev, selectImage, remainingCount, visibleThumbnails } =
    useGallery({ totalImages: property.images.length });

  return (
    <section className="bg-[#f7f7f7] rounded-[0.75rem] px-[1.25rem] pt-[5.5rem] pb-[2rem] sm:rounded-[1rem] sm:px-[2rem] sm:pt-[6rem] sm:pb-[2.5rem] md:px-[3rem] lg:px-[7.7%] lg:pt-[10.8rem] lg:pb-[5rem]">
      {/* Header: title + meta */}
      <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <h1 className="font-afacad text-[clamp(1.75rem,4.17vw,5rem)] font-medium leading-[1.3] text-[#252525]">
            {property.title}
          </h1>
          <span className="inline-flex items-center gap-[6px] rounded-full border border-[#c0c0c0] px-2 py-1.5 sm:p-[10px]">
            <Image src="/images/location-icon.svg" alt="" width={24} height={24} className="h-[clamp(18px,1.56vw,24px)] w-[clamp(18px,1.56vw,24px)]" />
            <span className="font-urbanist text-[clamp(0.813rem,1.04vw,1rem)] font-medium text-[#252525]">
              {property.location}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-8 font-outfit text-[clamp(0.875rem,1.3vw,1.25rem)] sm:gap-12 sm:pb-[24px] lg:pb-[1rem] lg:gap-16">
          {property.silProvider && (
            <div className="flex flex-col gap-[8px]">
              <span className="leading-[24.7px] text-[#717171] text-[1.1rem]">SIL Provider</span>
              <span className=" leading-[24.7px] text-[#42537c] text-[1.1rem]">{property.silProvider}</span>
            </div>
          )}
          {property.supportLevel && (
            <div className="flex flex-col gap-[8px]">
              <span className="leading-[24.7px] text-[#717171] text-[1.1rem]">Design</span>
              <span className="leading-[24.7px] text-[#42537c] text-[1.1rem]">{property.supportLevel}</span>
            </div>
          )}
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4 lg:mt-12 lg:flex-row lg:gap-[1.875rem]">
        {/* Main image */}
        <div className="relative aspect-[16/10] w-full  rounded-[0.625rem] sm:aspect-[2.16/1] sm:rounded-[0.875rem] lg:flex-1">
          <Image
            src={property.images[selectedIndex].src}
            alt={property.images[selectedIndex].alt}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 1023px) 100vw, 75vw"
            priority
          />
          {/* Nav arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-[clamp(0.75rem,2.6vw,-1.5rem)] top-1/2 z-10 flex h-[clamp(2.5rem,3.26vw,3.125rem)] w-[clamp(2.5rem,3.26vw,3.125rem)] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-white/90 lg:left-[-1.5rem]"
            aria-label="Previous image"
          >
            <Image src="/images/arrow-left.svg" alt="" width={30} height={30} className="h-[clamp(16px,1.96vw,30px)] w-[clamp(16px,1.96vw,30px)]" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-[clamp(0.75rem,2.6vw,-1.5rem)] top-1/2 z-10 flex h-[clamp(2.5rem,3.26vw,3.125rem)] w-[clamp(2.5rem,3.26vw,3.125rem)] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-white/90 lg:right-[-1.5rem]"
            aria-label="Next image"
          >
            <Image src="/images/arrow-right.svg" alt="" width={30} height={30} className="h-[clamp(16px,1.96vw,30px)] w-[clamp(16px,1.96vw,30px)]" />
          </button>
        </div>

        {/* Thumbnails — vertical on desktop, horizontal on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-1 sm:gap-3 sm:pb-0 lg:w-[9.0625rem] lg:flex-col lg:overflow-x-visible lg:overflow-y-auto">
          {property.images.slice(0, visibleThumbnails).map((img, i) => {
            const isLast = i === visibleThumbnails - 1 && remainingCount > 0;
            return (
              <button
                key={i}
                onClick={() => selectImage(i)}
                className={cn(
                  "relative h-[4rem] w-[5.5rem] shrink-0 overflow-hidden rounded-[0.4rem] sm:h-[5rem] sm:w-[6.5rem] sm:rounded-[0.6rem] lg:h-auto lg:w-full lg:aspect-[145/114]",
                  selectedIndex === i && "ring-2 ring-primary"
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 104px, 145px"
                />
                {isLast && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-[inherit] bg-[rgba(37,37,37,0.8)]">
                    <span className="font-urbanist text-base font-medium text-white sm:text-xl lg:text-[clamp(1.25rem,1.875vw,2.25rem)]">
                      +{remainingCount}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Description + Villas */}
      <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-8 lg:mt-16 lg:flex-row lg:items-end lg:gap-[4.167rem]">
        {/* Description */}
        <div className="flex flex-1 flex-col gap-4 sm:gap-6">
          <h2 className="font-afacad text-[clamp(1.75rem,4.17vw,5rem)] font-medium leading-[1.3] text-[#252525]">
            Description
          </h2>
          <p className="max-w-[42.5rem] font-outfit text-[clamp(0.875rem,1.11vw,1.333rem)] leading-[1.6] text-[#61656e] sm:leading-[1.875rem]">
            {property.description}
          </p>
          {property.brochureUrl && (
            <a
              href={property.brochureUrl}
              className="relative inline-flex w-fit items-center gap-3 overflow-clip rounded-[4px] bg-[white] px-5 py-4 font-outfit text-[1rem] font-normal text-[#252525] shadow-[0px_1px_0px_0px_#b9b6cd,inset_0px_1px_0px_0px_white] transition-opacity hover:opacity-80 sm:gap-[24px] sm:p-[28px] sm:text-[clamp(1rem,1.46vw,1.75rem)]"
            >
              Download Brochure
              <Image src="/images/property-icons/download.svg" alt="" width={40} height={40} className="h-[clamp(20px,2.6vw,40px)] w-[clamp(20px,2.6vw,40px)]" />
            </a>
          )}
        </div>

        {/* Villa cards */}
        <div className="flex flex-1 flex-col gap-2 sm:gap-[0.667rem]">
          {property.villas.map((villa) => (
            <div
              key={villa.name}
              className="flex flex-col gap-3 rounded-lg bg-white p-5 sm:gap-4 sm:rounded-[0.667rem] sm:p-6 lg:p-8"
            >
              <h3 className="font-afacad text-[clamp(1.25rem,1.67vw,2rem)] font-medium text-[#252525]">
                {villa.name}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-5">
                <span className="flex items-center gap-2 font-outfit text-[clamp(0.875rem,0.94vw,1.125rem)] text-[#181a20]">
                  <Image src="/images/property-icons/hero-bed.svg" alt="" width={28} height={28} className="h-[clamp(22px,1.82vw,28px)] w-[clamp(22px,1.82vw,28px)]" /> {villa.bedrooms} Beds
                </span>
                <span className="flex items-center gap-2 font-outfit text-[clamp(0.875rem,0.94vw,1.125rem)] text-[#181a20]">
                  <Image src="/images/property-icons/hero-bath.svg" alt="" width={28} height={28} className="h-[clamp(22px,1.82vw,28px)] w-[clamp(22px,1.82vw,28px)]" /> {villa.bathrooms} Baths
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

