"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";
import aboutHouseSide from "../../../public/images/about-house-side.webp";

const TIMELINE_ITEMS = [
  {
    title: "NDIS Participant-Centred Living",
    text: "At NALA, every home is designed around the people who live in it. We create SDA homes that support independence, comfort and everyday routines, while providing safe and practical environments for participants and their support teams.\nOur homes are designed to offer accessible layouts, private living spaces, functional shared areas and features that support assistive technology and high-quality care. From location to design detail, we focus on helping residents feel secure, respected and genuinely at home.",
    textSide: "left" as const,
  },
  {
    title: "Our Story and Operating Ethos",
    text: "NALA Properties began in 2019 with a clear purpose: to improve the standard of SDA through better design, careful construction and responsible long-term operation.\nAs both a development and construction entity and an SDA provider, NALA takes a hands-on approach to every home we deliver. We believe SDA housing should be built with care, operated with accountability and designed to meet the real needs of participants, families, support providers and the wider community. Our ethos is grounded in quality, integrity and long-term responsibility.",
    textSide: "right" as const,
  },
  {
    title: "Development, Compliance, and Professional Capability",
    text: "NALA brings together property development, construction expertise and SDA provider experience under one model. This allows us to manage the full delivery process, from identifying suitable locations and designing purpose-built homes through to construction, certification, ongoing maintenance and tenancy management.\nOur homes are developed in line with applicable NDIS SDA Design Standards and NSW Access Standards. NALA has been a registered NDIS Provider since 2021, with HICAPS and CentrePay registrations as well.",
    textSide: "left" as const,
  },
];

// Figma positions as percentages of the 1920×1782 section
const ITEM_POSITIONS = [
  {
    textLeft: "20%",
    textWidth: "28%",
    top: "5%",
  },
  {
    textLeft: "52%",
    textWidth: "28%",
    top: "30%",
  },
  {
    textLeft: "20%",
    textWidth: "28%",
    top: "55%",
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
        {/* Title — commented out
        <div
          className={cn(
            "text-center transition-all duration-[1000ms] ease-out",
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
        */}

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

          {TIMELINE_ITEMS.map((item, index) => (
            <MobileTimelineItem
              key={item.title}
              isVisible={isVisible}
              delay={`${1000 + index * 500}ms`}
            >
              <h3 className="font-urbanist text-base font-bold leading-[1.3] text-[#252525] sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 font-outfit text-sm leading-[1.75] text-[#5b5b5b] sm:text-base whitespace-pre-line">
                {item.text}
              </p>
            </MobileTimelineItem>
          ))}
        </div>
      </div>

      {/* ─── Desktop Layout ─── */}
      <div className="hidden lg:block lg:aspect-[1920/1782]">
        {/* Title — commented out
        <div
          className={cn(
            "absolute left-1/2 top-[9.5%] -translate-x-1/2 text-center",
            "transition-all duration-[1000ms] ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-[clamp(30px,2.8vh,50px)] opacity-20"
          )}
        >
          <h2 className="font-afacad text-[clamp(60px,5.2vw,100px)] short:text-[9vh] font-medium leading-[0.86em] text-[#252525]">
            SDA Properties
          </h2>
          <div className="mt-[10px] font-afacad text-[clamp(48px,4.17vw,80px)] short:text-[7.5vh] font-normal leading-[1.075em] text-[#6c6c6c]">
            <p>by Nanak Accessible Living</p>
            <p>Australia</p>
          </div>
        </div>
        */}

        {/* Center vertical dashed line — gradient blue to transparent, 4px wide, 8px dash / 14px gap */}
        <div
          className={cn(
            "absolute left-[49.8%] short:left-1/2 top-[7%] h-[65%] w-[4px] origin-top -translate-x-1/2",
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

        {/* Left house image — commented out
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
            src={aboutHouseSide}
            alt=""
            fill
            placeholder="blur"
            className="-scale-x-100 object-cover"
            sizes="42vw"
            aria-hidden
          />
        </div>
        */}

        {/* Right house image — commented out
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
            src={aboutHouseSide}
            alt=""
            fill
            placeholder="blur"
            className="object-cover"
            sizes="42vw"
            aria-hidden
          />
        </div>
        */}

        {/* Bottom decorative wave element */}
        <div
          className={cn(
            "absolute bottom-0 left-[-5.4%] h-[43.2%] w-[114%]",
            "transition-all duration-[2000ms] ease-out",
            isVisible ? "translate-y-[24rem] short:translate-y-[16rem] opacity-100" : "translate-y-[6rem] opacity-0"
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
          "absolute left-[49.8%] short:left-1/2 z-10 -translate-x-1/2",
          "transition-[scale,opacity] duration-1000 ease-out",
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
        style={{ top: pos.top }}
      >
        <div className="relative flex items-center justify-center">
          <div className="size-[clamp(1.5rem,1.67vw,2rem)] rounded-full border border-[#445ef0] bg-white" />
          <div className="absolute inset-0 m-auto size-[clamp(1.125rem,1.26vw,1.52rem)] rounded-full bg-[#5bade8]" />
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
        <h3 className="font-urbanist text-[clamp(16px,1.25vw,24px)] font-bold leading-[1.3] text-[#252525]">
          {item.title}
        </h3>
        <p className="mt-2 font-outfit text-[clamp(14px,1.04vw,20px)] leading-[1.4] text-[#5b5b5b] whitespace-pre-line">
          {item.text}
        </p>
      </div>

    </>
  );
}

/* ─── Mobile Timeline Item ─── */
function MobileTimelineItem({
  isVisible,
  delay,
  children,
}: {
  isVisible: boolean;
  delay: string;
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
      <div className="rounded border border-[#e2e8f5] bg-[#f8fafe] p-5">
        {children}
      </div>
    </div>
  );
}
