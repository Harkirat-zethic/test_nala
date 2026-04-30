"use client";

import Image from "next/image";
import { TIMELINE_ITEMS } from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

// Figma positions as percentages of the 1920×1782 section
const ITEM_POSITIONS = [
  {
    textLeft: "15%",
    textWidth: "33%",
    top: "10.5%",
  },
  {
    textLeft: "51%",
    textWidth: "33%",
    top: "36.1%",
  },
  {
    textLeft: "15%",
    textWidth: "33%",
    top: "63%",
  },
];

export default function AboutTimeline() {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-white">
      {/* Top white fade */}
      <div className="absolute left-0 top-0 z-10 h-[clamp(4rem,8vw,10rem)] w-full bg-gradient-to-b from-white to-transparent pointer-events-none" aria-hidden />
      {/* Bottom white fade */}
      <div className="absolute left-0 bottom-0 z-10 h-[clamp(4rem,8vw,10rem)] w-full bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden />
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
              <h3 className="font-afacad text-[clamp(1.25rem,5vw,1.75rem)] font-medium leading-normal tracking-[0.01em] text-[#252525]">
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
      <div className="hidden lg:block lg:aspect-[1920/2197]">
        {/* Hexagonal background pattern — single full-width layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]" aria-hidden>
          <Image src="/images/about-hex-pattern.png" alt="" fill className="object-cover" />
        </div>

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
          className="absolute left-[49.8%] short:left-1/2 top-[11.8%] h-[62%] w-[4px] z-[1]"
          style={{
            backgroundImage: "repeating-linear-gradient(to bottom, #5BADE8 0px, #5BADE8 8px, transparent 8px, transparent 22px)",
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

        {/* Bottom decorative wave element — commented out
        <div
          className={cn(
            "absolute bottom-0 left-[-5.4%] h-[43.2%] w-[114%]",
            "transition-all duration-[2000ms] ease-out",
            isVisible ? "translate-y-[24rem] short:translate-y-[16rem] opacity-100" : "translate-y-[6rem] opacity-0"
          )}
        >
          <img
            src="/images/about-decorative.svg"
            alt=""
            className="h-full w-full object-contain object-bottom"
            aria-hidden
          />
        </div>
        */}
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
          "absolute left-[49.9%] short:left-1/2 z-10 -translate-x-1/2",
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
          "absolute rounded bg-[#f8fafe] border border-[#a8bae2] p-[clamp(1rem,1.46vw,1.75rem)] shadow-[0px_4px_38px_rgba(0,0,0,0.12),0px_0px_250px_white,0px_0px_250px_white,0px_0px_203px_white,0px_0px_58px_white,0px_0px_29px_white]",
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
        <h3 className="font-afacad text-[clamp(1.5rem,2.5vw,3rem)] font-medium leading-normal tracking-[0.01em] text-[#252525]">
          {item.title}
        </h3>
        <p className="mt-[clamp(0.75rem,1.25vw,1.5rem)] font-outfit text-[clamp(0.875rem,1.04vw,1.25rem)] leading-[1.4] text-[#5b5b5b] whitespace-pre-line">
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
      <div className="rounded border border-[#a8bae2] bg-[#f8fafe] p-5 shadow-[0px_4px_38px_rgba(0,0,0,0.12),0px_0px_250px_white,0px_0px_250px_white,0px_0px_203px_white,0px_0px_58px_white,0px_0px_29px_white]">
        {children}
      </div>
    </div>
  );
}
