"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

const TIMELINE_ITEMS = [
  {
    text: "NALA provides modern, functional and safe SDA homes for NDIS participants. As a development company, NALA focuses on the physical and behavioral needs of its residents by building homes to the highest design standards",
    imageSrc: "/images/about-timeline-1.jpg",
    textSide: "left" as const,
  },
  {
    text: "NALA homes set the benchmark for disability housing in Sydney, and alongside our leading SDA and SIL partners, ensure the best quality of life for our residents.",
    imageSrc: "/images/about-timeline-2.png",
    textSide: "right" as const,
  },
  {
    text: null, // rich text — rendered separately
    imageSrc: "/images/about-timeline-3.png",
    textSide: "left" as const,
  },
];

// Figma positions as percentages of the 1920×1782 section
const ITEM_POSITIONS = [
  {
    textLeft: "25.4%",
    textWidth: "22.4%",
    imageLeft: "51.2%",
    imageWidth: "11%",
    top: "30.9%",
  },
  {
    textLeft: "51.9%",
    textWidth: "24.1%",
    imageLeft: "37.1%",
    imageWidth: "10.8%",
    top: "55.2%",
  },
  {
    textLeft: "25.3%",
    textWidth: "22.6%",
    imageLeft: "51.9%",
    imageWidth: "10.8%",
    top: "75.5%",
  },
];

export default function AboutTimeline() {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-white">
      {/* ─── Mobile Layout ─── */}
      <div className="px-6 py-16 sm:px-8 lg:hidden">
        {/* Title */}
        <div
          className={cn(
            "text-center transition-all duration-[2000ms] delay-[500ms] ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-20"
          )}
        >
          <h2 className="font-afacad text-[clamp(2.5rem,8.75vw,3.5rem)] font-medium leading-[0.86em] text-[#252525]">
            SDA Properties
          </h2>
          <div className="mt-2 font-afacad text-[clamp(1.875rem,6.56vw,2.625rem)] font-normal leading-[1.075em] text-[#6c6c6c]">
            <p>by Nanak Accessible Living</p>
            <p>Australia</p>
          </div>
        </div>

        {/* Mobile timeline items */}
        <div className="relative mt-12 space-y-8">
          {/* Vertical line */}
          <div
            className={cn(
              "absolute left-4 top-0 h-full w-[3px] origin-top",
              "transition-transform duration-[2500ms] delay-[800ms] ease-out",
              isVisible ? "scale-y-100" : "scale-y-0"
            )}
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #5BADE8 0px, #5BADE8 8px, transparent 8px, transparent 22px)",
              maskImage: "linear-gradient(to bottom, rgba(91,173,232,1), rgba(91,173,232,0))",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(91,173,232,1), rgba(91,173,232,0))",
            }}
          />

          {/* Item 1 */}
          <MobileTimelineItem
            isVisible={isVisible}
            delay="1000ms"
            imageSrc={TIMELINE_ITEMS[0].imageSrc}
          >
            <p className="font-outfit text-sm leading-[1.75] text-[#5b5b5b] sm:text-base">
              {TIMELINE_ITEMS[0].text}
            </p>
          </MobileTimelineItem>

          {/* Item 2 */}
          <MobileTimelineItem
            isVisible={isVisible}
            delay="1500ms"
            imageSrc={TIMELINE_ITEMS[1].imageSrc}
          >
            <p className="font-outfit text-sm leading-[1.75] text-[#5b5b5b] sm:text-base">
              {TIMELINE_ITEMS[1].text}
            </p>
          </MobileTimelineItem>

          {/* Item 3 */}
          <MobileTimelineItem
            isVisible={isVisible}
            delay="2000ms"
            imageSrc={TIMELINE_ITEMS[2].imageSrc}
          >
            <p className="font-outfit text-sm leading-[1.75] sm:text-base">
              <span className="text-[#5b5b5b]">High Physical Support </span>
              <span className="font-bold text-[#252525]">2021 NDIS SDA </span>
              <span className="text-[#5b5b5b]">Design Standard</span>
            </p>
          </MobileTimelineItem>
        </div>
      </div>

      {/* ─── Desktop Layout ─── */}
      <div className="hidden lg:block lg:aspect-[1920/1782]">
        {/* Title */}
        <div
          className={cn(
            "absolute left-1/2 top-[9.5%] -translate-x-1/2 text-center",
            "transition-all duration-[2000ms] delay-[500ms] ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-[clamp(30px,2.8vh,50px)] opacity-20"
          )}
        >
          <h2 className="font-afacad text-[clamp(60px,5.2vw,100px)] font-medium leading-[0.86em] text-[#252525]">
            SDA Properties
          </h2>
          <div className="mt-[10px] font-afacad text-[clamp(48px,4.17vw,80px)] font-normal leading-[1.075em] text-[#6c6c6c]">
            <p>by Nanak Accessible Living</p>
            <p>Australia</p>
          </div>
        </div>

        {/* Center vertical dashed line — gradient blue to transparent, 4px wide, 8px dash / 14px gap */}
        <div
          className={cn(
            "absolute left-[49.8%] top-[32.5%] h-[43.2%] w-[4px] origin-top -translate-x-1/2",
            "transition-transform duration-[2500ms] delay-[800ms] ease-out",
            isVisible ? "scale-y-100" : "scale-y-0"
          )}
          style={{
            backgroundImage: "repeating-linear-gradient(to bottom, #5BADE8 0px, #5BADE8 8px, transparent 8px, transparent 22px)",
            maskImage: "linear-gradient(to bottom, rgba(91,173,232,1), rgba(91,173,232,0))",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(91,173,232,1), rgba(91,173,232,0))",
          }}
        />

        {/* ─── Timeline Item 1 ─── text left, image right */}
        <TimelineRow index={0} />

        {/* ─── Timeline Item 2 ─── image left, text right */}
        <TimelineRow index={1} />

        {/* ─── Timeline Item 3 ─── text left, image right */}
        <TimelineRow index={2} />

        {/* Left house image — flipped horizontally */}
        <div
          className={cn(
            "absolute left-[-2%] top-[23.7%] h-[67.3%] w-[41.7%]",
            "transition-all duration-[2500ms] delay-[500ms] ease-out",
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-[5.2vw] opacity-0"
          )}
        >
          <Image
            src="/images/about-house-side.png"
            alt=""
            fill
            className="-scale-x-100 object-cover"
            sizes="42vw"
            aria-hidden
          />
        </div>

        {/* Right house image */}
        <div
          className={cn(
            "absolute right-[-2%] top-[23.7%] h-[67.3%] w-[41.7%]",
            "transition-all duration-[2500ms] delay-[700ms] ease-out",
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[5.2vw] opacity-0"
          )}
        >
          <Image
            src="/images/about-house-side.png"
            alt=""
            fill
            className="object-cover"
            sizes="42vw"
            aria-hidden
          />
        </div>

        {/* Bottom decorative wave element */}
        <div
          className={cn(
            "absolute bottom-0 left-[-5.4%] h-[43.2%] w-[114%]",
            "transition-all duration-[2000ms] delay-[2500ms] ease-out",
            isVisible ? "translate-y-[24rem] opacity-100" : "translate-y-[6rem] opacity-0"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-decorative.svg"
            alt=""
            className="h-full w-full object-contain object-bottom"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Timeline Row — each has its own scroll trigger ─── */
function TimelineRow({ index }: { index: number }) {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.1,
  });

  const pos = ITEM_POSITIONS[index];
  const item = TIMELINE_ITEMS[index];
  const isLeftText = item.textSide === "left";

  return (
    <>
      {/* Invisible scroll trigger — positioned at the row's vertical location */}
      <div
        ref={ref}
        className="absolute left-0 w-full"
        style={{ top: pos.top, height: "15%" }}
        aria-hidden
      />

      {/* Dot */}
      <div
        className={cn(
          "absolute left-[49.8%] z-10 -translate-x-1/2",
          "transition-all duration-1000 ease-out",
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
        style={{ top: pos.top }}
      >
        <div className="relative flex items-center justify-center">
          <div className="size-[clamp(1.5rem,1.67vw,2rem)] rounded-full border border-[#445ef0] bg-white" />
          <div className="absolute size-[clamp(1.125rem,1.26vw,1.52rem)] rounded-full bg-[#5bade8]" />
        </div>
      </div>

      {/* Text card */}
      <div
        className={cn(
          "absolute rounded bg-[#f8fafe] border border-[#e2e8f5] p-[clamp(1rem,1.46vw,1.75rem)]",
          "transition-all duration-[2000ms] delay-200 ease-out",
          isVisible
            ? "translate-x-0 opacity-100"
            : isLeftText
              ? "translate-x-8 opacity-0"
              : "-translate-x-8 opacity-0"
        )}
        style={{
          left: pos.textLeft,
          top: pos.top,
          width: pos.textWidth,
        }}
      >
        {item.text ? (
          <p className="font-outfit text-[clamp(14px,1.04vw,20px)] leading-[1.4] text-[#5b5b5b]">
            {item.text}
          </p>
        ) : (
          <p className="font-outfit text-[clamp(14px,1.04vw,20px)] leading-[1.4]">
            <span className="text-[#5b5b5b]">High Physical Support </span>
            <span className="font-bold text-[#252525]">2021 NDIS SDA </span>
            <span className="text-[#5b5b5b]">Design Standard</span>
          </p>
        )}
      </div>

      {/* Image card */}
      <div
        className={cn(
          "absolute rounded border border-[#e2e8f5] p-3",
          "transition-all duration-[2000ms] delay-300 ease-out",
          isVisible
            ? "translate-x-0 opacity-100"
            : isLeftText
              ? "-translate-x-5 opacity-0"
              : "translate-x-5 opacity-0"
        )}
        style={{
          left: pos.imageLeft,
          top: pos.top,
          width: pos.imageWidth,
        }}
      >
        <div className="relative aspect-[187/112] w-full overflow-hidden rounded-sm">
          <Image
            src={item.imageSrc}
            alt="SDA property"
            fill
            className="object-cover"
            sizes="11vw"
          />
        </div>
      </div>
    </>
  );
}

/* ─── Mobile Timeline Item ─── */
function MobileTimelineItem({
  isVisible,
  delay,
  imageSrc,
  children,
}: {
  isVisible: boolean;
  delay: string;
  imageSrc: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative pl-12 transition-all duration-[2000ms] ease-out",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      )}
      style={{ transitionDelay: delay }}
    >
      {/* Dot */}
      <div className="absolute left-[6px] top-2 flex items-center justify-center">
        <div className="size-5 rounded-full border border-[#445ef0] bg-white" />
        <div className="absolute size-3.5 rounded-full bg-[#5bade8]" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="rounded border border-[#e2e8f5] bg-[#f8fafe] p-5">
          {children}
        </div>
        <div className="w-40 rounded border border-[#e2e8f5] p-2">
          <div className="relative aspect-[183/105] w-full overflow-hidden rounded-sm">
            <Image
              src={imageSrc}
              alt="SDA property"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
