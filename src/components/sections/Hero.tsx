"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { SECTION_IMAGES } from "@/lib/constants";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const TAGS = ["Comfort", "Safety", "Independence"];

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
      className="relative h-screen max-h-[600px] w-full overflow-hidden bg-[#252525] sm:max-h-none"
    >
      {/* Layer 1: Sky background — stays fixed */}
      <div className="absolute inset-0">
        <Image
          src={SECTION_IMAGES.heroSectionBg.src}
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
          "absolute z-[1] font-light leading-[1.2] tracking-[1.28px] text-white whitespace-nowrap",
          "left-[clamp(1.5rem,7.8%,7.8%)] top-[22%] text-[4.5vw] short:text-[6vh] tall:text-[clamp(16px,3.33vw,4rem)]",
          "md:top-[22%]"
        )}
        style={{
          fontFamily: "'Outfit', sans-serif",
          transform: "translateY(8rem)",
        }}
      >
        Building High Quality 
      </div>

      {/* Layer 3: House image — slides down */}
      <div
        // ref={personRef}
        className="absolute left-0 top-[6rem] tall:top-[8rem] z-[2] h-full w-full sm:h-[100%] tall:h-[85%]"
      >
        <div className="relative h-full w-full">
          <Image
            src={SECTION_IMAGES.homepageBanner.src}
            alt="NALA property banner"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Layer 4: Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 z-[3] h-[45%] w-full md:h-[40%]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(37,37,37,0) 0%, rgba(37,37,37,0.9) 47.66%, rgba(37,37,37,0.9) 73.96%, rgba(37,37,37,0.94) 86.13%, rgb(37,37,37) 100%)",
        }}
      />

      {/* Layer 5: Green leaves — slides UP */}
      {/* <div
        ref={leavesRef}
        className="pointer-events-none absolute inset-0 z-[4] hidden overflow-hidden mix-blend-multiply sm:block"
      >
        <Image
          src="/images/green-leaves.webp"
          alt=""
          width={3474}
          height={1434}
          className="absolute left-0 top-0 h-[134%] w-[181%] max-w-none"
          aria-hidden
        />
      </div> */}

      {/* Layer 6: Content — absolutely positioned to match Figma layout */}
      <div className="absolute inset-0 z-[6] pointer-events-none">
        {/* Title — positioned at ~56% from top (Figma: 607/1080) */}
        <p
          ref={titleRef}
          className={cn(
            "pointer-events-auto absolute whitespace-pre-wrap font-extrabold leading-[1.2] tracking-normal text-white uppercase",
            "left-[clamp(1.5rem,7.8%,7.8%)] top-[27%] max-w-[90%] text-[9vw] short:text-[11vh]",
            "sm:top-[29%] sm:max-w-[100%] sm:text-[clamp(3.5rem,6.25vw,7.5rem)]",
            "lg:top-[31%] lg:max-w-[64vw] short:top-[30%] tall:top-[30%] tall:text-[clamp(2.25rem,5.2vw,6.25rem)]"
          )}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            transform: "translateY(3.5rem)",
          }}
        >
         Specialist Disability Accommodation
        </p>

        {/* Description + Tags — flex column on mobile (tags on top, desc below), transparent on lg+ */}
        <div
          className={cn(
            "pointer-events-none absolute left-[clamp(1.5rem,7.8%,7.8%)] bottom-[4%] flex flex-col gap-4",
            "sm:bottom-[8%]",
            "lg:contents"
          )}
        >
          {/* Tags — first in DOM so they render on top in the flex column on mobile */}
          {/* <div
            ref={tagsRef}
            className={cn(
              "pointer-events-auto flex flex-wrap gap-2 sm:gap-[10px]",
              "lg:absolute lg:left-[clamp(1.5rem,7.8%,7.8%)] lg:bottom-[8%]"
            )}
          >
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-white opacity-0 font-bold text-[clamp(0.75rem,1.04vw,1.25rem)] short:text-[2.1vh] sm:px-5 sm:py-2.5 sm:text-[clamp(0.875rem,1.04vw,1.25rem)]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  transform: "translateY(1rem)",
                }}
              >
                {tag}
              </span>
            ))}
          </div> */}

          {/* Description — second in DOM so it renders below tags on mobile */}
          <p
            ref={descRef}
            className={cn(
              "pointer-events-auto whitespace-pre-wrap leading-[1.5] text-white opacity-0",
              "max-w-[80%] text-[3.8vw] short:text-[2.6vh]",
              "sm:max-w-[360px] sm:text-[clamp(0.875rem,1.46vw,1.75rem)]",
              "md:max-w-[420px]",
              "lg:absolute lg:bottom-[8%] lg:left-[62.3%] lg:right-auto lg:max-w-[29.8vw]"
            )}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              transform: "translateY(1.5rem)",
            }}
          >
            NALA develops homes designed to enrich its residents quality of life. NALA homes are built to provide individuals with comfort, safety and independence.
          </p>
        </div>
      </div>
    </section>
  );
}
