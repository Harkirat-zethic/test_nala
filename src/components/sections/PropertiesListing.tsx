"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PROPERTY_LISTINGS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import type { PropertyCardData, PropertyVilla } from "@/types";

export default function PropertiesListing() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="px-[clamp(1.5rem,7.8vw,9.375rem)] pt-[clamp(7rem,9.6vw,11.5rem)] pb-[clamp(3rem,4.17vw,5rem)]"
    >
      {/* Title */}
      <div
        className={cn(
          "transition-all duration-700 ease-out",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        )}
      >
        <h1 className="font-afacad text-[clamp(2.5rem,4.17vw,5rem)] font-medium leading-[1.075] text-[#252525]">
          Our Properties
        </h1>
        <p className="mt-6 max-w-[33.5rem] font-outfit text-[clamp(1rem,1.46vw,1.75rem)] leading-[1.14] text-body">
          Nala Properties showcases exceptional properties that align with
          our core values.
        </p>
      </div>

      {/* Property grid */}
      <div className="mt-[clamp(2rem,3.33vw,4rem)] grid gap-[clamp(0.75rem,0.73vw,0.875rem)] sm:grid-cols-2 lg:grid-cols-3">
        {PROPERTY_LISTINGS.map((property, index) => (
          <div
            key={property.id}
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            )}
            style={{
              transitionDelay: isVisible
                ? `${200 + Math.floor(index / 3) * 150}ms`
                : "0ms",
            }}
          >
            <PropertyListingCard property={property} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Property card for the listing grid ── */

function PropertyListingCard({ property }: { property: PropertyCardData }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="relative aspect-[532/560] overflow-hidden rounded bg-white">
        {/* Image — fills entire card */}
        <Image
          src={property.imageSrc}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />

        {/* Gradient overlay — appears on hover */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#252525]/70 via-transparent via-40% to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* SIL Provider + Support — slides in on hover */}
        <div className="absolute left-4 right-4 z-20 flex items-center justify-between text-[clamp(0.75rem,0.83vw,1rem)] opacity-0 transition-all duration-500 ease-out -top-12 group-hover:top-4 group-hover:opacity-100">
          <div>
            <p className="font-outfit font-normal text-white/80">
              SIL Provider
            </p>
            <p className="font-outfit font-semibold text-light">
              {property.silProvider || "CareConnect"}
            </p>
          </div>
          <div className="text-right">
            <p className="font-outfit font-normal text-white/80">Support</p>
            <p className="font-outfit font-semibold text-light">
              {property.supportLevel || "Medium Physical Support"}
            </p>
          </div>
        </div>

        {/* Info panel — overlaps image at bottom */}
        <div className="absolute inset-x-4 bottom-4 z-10 flex flex-col gap-[1.19rem] rounded bg-white p-4">
          {/* Title — scroll-up animation on hover */}
          <div className="relative h-[1.875rem] overflow-clip">
            <h3 className="absolute left-0 top-1/2 w-full -translate-y-1/2 font-outfit text-[clamp(1rem,1.25vw,1.5rem)] font-medium text-dark transition-all duration-500 ease-out group-hover:-top-4">
              {property.title}
            </h3>
            <h3
              className="absolute left-0 top-[2.44rem] w-full -translate-y-1/2 font-outfit text-[clamp(1rem,1.25vw,1.5rem)] font-medium text-dark transition-all duration-500 ease-out group-hover:top-1/2"
              aria-hidden
            >
              {property.title}
            </h3>
          </div>

          {/* Villa info */}
          {property.villas && (
            <div className="flex items-center">
              {property.villas.map((villa, i) => (
                <VillaInfo
                  key={villa.name}
                  villa={villa}
                  showDivider={i > 0}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

/* ── Villa info column with bed/bath counts ── */

function VillaInfo({
  villa,
  showDivider,
}: {
  villa: PropertyVilla;
  showDivider: boolean;
}) {
  return (
    <div className="flex flex-1 items-center">
      {showDivider && (
        <div className="h-[3.3rem] w-px shrink-0 bg-border" />
      )}
      <div className={cn(showDivider && "pl-3")}>
        <p className="font-outfit text-[clamp(0.75rem,0.83vw,1rem)] text-body-light">
          {villa.name}
        </p>
        <div className="mt-1 flex items-center gap-[0.68rem]">
          <span className="flex items-center gap-[0.45rem] font-outfit text-[clamp(0.688rem,0.73vw,0.875rem)] text-[#252525]">
            <Image
              src="/images/listing-bed.svg"
              alt=""
              width={16}
              height={16}
              className="-scale-y-100"
              aria-hidden
            />
            {villa.bedrooms} Br
          </span>
          <span className="flex items-center gap-[0.45rem] font-outfit text-[clamp(0.688rem,0.73vw,0.875rem)] text-[#252525]">
            <Image
              src="/images/listing-bath.svg"
              alt=""
              width={16}
              height={16}
              className="-scale-y-100"
              aria-hidden
            />
            {villa.bathrooms} Ba
          </span>
        </div>
      </div>
    </div>
  );
}
