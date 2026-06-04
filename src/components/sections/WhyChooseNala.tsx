"use client";

import Image from "next/image";
import { SECTION_IMAGES, WHY_CHOOSE_ITEMS } from "@/lib/constants";
import { useWhyChooseAnimation } from "@/hooks/useWhyChooseAnimation";

export default function WhyChooseNala() {
  const {
    sectionRef,
    pinRef,
    bgImageRef,
    tabBarRef,
    numberRef,
    descWrapRef,
    descRef,
    progressRef,
  } = useWhyChooseAnimation();

  return (
    <>
      {/* ===== Desktop: scroll-driven pinned layout ===== */}
      <div ref={sectionRef} className="hidden xl:block" style={{ height: "400vh" }}>
        <section
          ref={pinRef}
          className="h-screen w-full overflow-hidden relative bg-[#181a20]"
        >
          {/* Background image — oversized for parallax */}
          <div
            ref={bgImageRef}
            className="absolute w-[154vw] h-[154vh]"
          >
            <Image
              src={SECTION_IMAGES.whyChooseBg.src}
              alt=""
              fill
              className="object-cover"
              sizes="154vw"
              priority
            />
            <div className="absolute inset-0 bg-black/[0.37]" />
          </div>

          {/* Gradient scrim */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(18,18,20,0.43) 0%, rgba(18,18,20,0.6) 100%)",
            }}
          />

          {/* Content layer */}
          <div className="absolute inset-0 z-10 flex flex-col px-[7.81%]">
            {/* Header */}
            <div className="text-center pt-[8.15vh] short:pt-[4vh]">
              <h2 className="font-outfit text-[clamp(2.5rem,4.17vw,5rem)] short:text-[5vh] font-medium leading-[1.075] !text-white">
                Why choose a NALA property?
              </h2>
              <p className="mx-auto mt-[2.22vh] short:mt-[1vh] max-w-[clamp(28rem,45.73vw,54.875rem)] font-outfit text-[clamp(1rem,1.46vw,1.75rem)] short:text-[2.2vh] font-normal leading-[1.36] text-white/[0.88]">
                Discover what makes every NALA home a place where comfort,
                accessibility, and lasting value come together.
              </p>
            </div>

            {/* Tab bar — overflow hidden container */}
          <div className="mt-[10%] short:mt-[3vh] w-[calc(100%+7.81%)] -ml-[7.81%] overflow-hidden">
              <div
                ref={tabBarRef}
                className="flex gap-[clamp(2rem,4.79vw,5.75rem)] whitespace-nowrap"
              >
                {WHY_CHOOSE_ITEMS.map((item, index) => (
                  <span
                    key={item.title}
                    data-tab={index}
                    className="font-outfit text-[clamp(1.5rem,2.5vw,3rem)] short:text-[4vh] font-normal"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Number + Line row */}
            <div className="flex items-center gap-[clamp(1rem,2vw,2.5rem)]">
              {/* Number indicator — clipped box */}
              <div className="h-[5vh] overflow-hidden shrink-0">
                <div ref={numberRef} className="flex flex-col">
                  {WHY_CHOOSE_ITEMS.map((_, index) => (
                    <span
                      key={`num-${index}`}
                      className="font-afacad text-[clamp(1.5rem,2.5vw,3rem)] short:text-[4vh] font-normal text-white/50 leading-none h-[5vh] flex items-center"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ))}
                </div>
              </div>

              {/* Horizontal separator line */}
              <div className="flex-1 h-px bg-white/30" />
            </div>

            {/* Description panel — right-aligned below the line */}
            <div ref={descWrapRef} className="self-end mt-[2.5vh] short:mt-[1.5vh] w-[clamp(16rem,23.02vw,27.625rem)] overflow-hidden mb-8">
              <div ref={descRef} className="flex flex-col">
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <p
                    key={`desc-${item.title}`}
                    className="font-outfit text-[clamp(0.875rem,1.46vw,1.75rem)] font-normal leading-[1.5] text-white shrink-0"
                  >
                    {item.description}
                  </p>
                ))}
              </div>
            </div>

            {/* Scroll progress indicator */}
            <div className="absolute right-[2.45%] top-1/2 -translate-y-1/2 z-20">
              <div className="w-[clamp(0.25rem,0.4vw,0.5rem)] h-[clamp(7rem,16.85vh,11.4rem)] rounded-full bg-white/30 overflow-hidden">
                <div
                  ref={progressRef}
                  className="w-full h-full rounded-full bg-white"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== Mobile: stacked layout ===== */}
      <section className="xl:hidden relative overflow-hidden py-16 px-6">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={SECTION_IMAGES.whyChooseBg.src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/[0.37]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(18,18,20,0.55) 0%, rgba(18,18,20,0.75) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="font-afacad text-[clamp(2rem,8vw,3rem)] font-medium leading-[1.1] !text-white text-center">
            Why choose a NALA property?
          </h2>
          <p className="mt-4 text-center font-outfit text-[clamp(0.875rem,3.5vw,1.125rem)] font-normal leading-[1.4] text-white/[0.88]">
            Discover what makes every NALA home a place where comfort,
            accessibility, and lasting value come together.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {WHY_CHOOSE_ITEMS.map((item, index) => (
              <div key={item.title}>
                <span className="font-afacad text-[clamp(1rem,4vw,1.25rem)] font-normal !text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-afacad text-[clamp(1.5rem,6vw,2rem)] font-normal !text-white">
                  {item.title}
                </h3>
                <div className="mt-3 h-px bg-white/30" />
                <p className="mt-4 font-outfit text-[clamp(0.875rem,3.5vw,1.125rem)] font-normal leading-[1.5] !text-white/90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
