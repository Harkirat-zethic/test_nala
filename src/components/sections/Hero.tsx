"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const TAGS = ["Premium", "Accessible", "Accommodation"];

export default function Hero() {
  const {
    sectionRef,
    buildingRef,
    personRef,
    leavesRef,
    titleRef,
    descRef,
    tagsRef,
  } = useHeroAnimation();

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#252525]"
    >
      {/* Layer 1: Sky background — stays fixed */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-section-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-100"
          sizes="100vw"
          priority
          aria-hidden
        />
      </div>

      {/* Layer 2: "BUILDING" text — between sky and person cutout */}
      <div
        ref={buildingRef}
        className={cn(
          "absolute z-[1] font-extrabold uppercase leading-[1.2] tracking-[4.56px] text-white opacity-0",
          "left-[clamp(1.5rem,7.8%,7.8%)] top-[15%] text-[clamp(20px,9.42vw,200px)] short:text-[19vh]",
          "md:top-[20%]"
        )}
        style={{
          fontFamily: "'Outfit', sans-serif",
          transform: "translateY(1rem)",
        }}
      >
        Building
      </div>

      {/* Layer 3: House image — slides down */}
      <div
        ref={personRef}
        className="absolute left-0 top-0 z-[2] w-full"
        style={{ height: "126vh", transform: "scale(1.09) translateY(-12.7%)" }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-house.png"
            alt="NALA property house"
            fill
            className="-scale-x-100 object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Layer 4: Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 z-[3] h-[65%] w-full md:h-[57%]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(37,37,37,0) 0%, rgba(37,37,37,0.9) 47.66%, rgba(37,37,37,0.9) 73.96%, rgba(37,37,37,0.94) 86.13%, rgb(37,37,37) 100%)",
        }}
      />

      {/* Layer 5: Green leaves — slides UP */}
      <div
        ref={leavesRef}
        className="pointer-events-none absolute inset-0 z-[4] overflow-hidden mix-blend-multiply"
      >
        <Image
          src="/images/green-leaves.png"
          alt=""
          width={3474}
          height={1434}
          className="absolute left-0 top-0 h-[134%] w-[181%] max-w-none"
          aria-hidden
        />
      </div>

      {/* Layer 6: Content — absolutely positioned to match Figma layout */}
      <div className="absolute inset-0 z-[6] pointer-events-none">
        {/* Title — positioned at ~56% from top (Figma: 607/1080) */}
        <p
          ref={titleRef}
          className={cn(
            "pointer-events-auto absolute whitespace-pre-wrap leading-[1.2] tracking-[1.38px] text-white opacity-0",
            "left-[clamp(1.5rem,7.8%,7.8%)] top-[40%] max-w-[90%] text-[clamp(1.75rem,3.59vw,4.3rem)] short:text-[6.5vh]",
            "lg:top-[48.2%] lg:max-w-[48vw] short:top-[40%] tall:top-[40%]"
          )}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            transform: "translateY(2.5rem)",
          }}
        >
          High Quality Specialist Disability Accommodation
        </p>

        {/* Description — positioned at ~79% from top on right (Figma: 848/1080, 1197/1920) */}
        <p
          ref={descRef}
          className={cn(
            "pointer-events-auto absolute whitespace-pre-wrap leading-[1.5] text-white opacity-0",
            "left-[clamp(1.5rem,7.8%,7.8%)] top-[72%] max-w-[90%] text-[clamp(0.875rem,1.46vw,1.75rem)] short:text-[2.6vh]",
            "sm:max-w-[360px]",
            "md:max-w-[420px]",
            "lg:left-[62.3%] lg:right-auto lg:top-[80.5%] lg:max-w-[29.8vw] short:lg:top-[78%]"
          )}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            transform: "translateY(1.5rem)",
          }}
        >
          NALA develops homes designed to enrich its residents quality of life.
          NALA homes are built to suit individuals with High Physical Support and
          Robust needs.
        </p>

        {/* Tags — positioned at ~91% from top (Figma: 980/1080) */}
        <div
          ref={tagsRef}
          className={cn(
            "pointer-events-auto absolute flex flex-wrap gap-2 sm:gap-[10px]",
            "left-[clamp(1.5rem,7.8%,7.8%)] bottom-[8%]",
            "lg:bottom-auto lg:top-[89.7%]"
          )}
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/80 px-4 py-2 text-[#252525] opacity-0 text-[clamp(0.875rem,1.04vw,1.25rem)] short:text-[2.1vh] sm:px-5 sm:py-2.5"
              style={{
                fontFamily: "'Outfit', sans-serif",
                transform: "translateY(1rem)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
