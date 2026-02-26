"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[clamp(28rem,52.08vw,62.5rem)] short:h-[80vh] w-full overflow-hidden bg-[#252525]">
      {/* Layer 1: House background */}
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-[1200ms] ease-out",
          mounted ? "scale-100" : "scale-110"
        )}
      >
        <Image
          src="/images/hero-section-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-100"
          sizes="10vw"
          priority
          aria-hidden
        />
      </div>

      {/* Layer 2: "ABOUT US" text — between background and house overlay */}
      <p
        className={cn(
          "absolute z-[1] font-afacad font-bold uppercase leading-[1.2] tracking-[4.56px] text-white",
          "left-6 top-[20%] text-[48px]",
          "sm:left-8 sm:text-[70px]",
          "md:left-12 md:text-[100px]",
          "lg:left-[7.8%] lg:top-[14.8%] lg:text-[clamp(120px,11.875vw,228px)] short:text-[20vh]",
          "transition-all duration-[1200ms] ease-out",
          mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        ABOUT US
      </p>

      {/* Layer 3: House overlay — creates depth effect over the text */}
      <div
        className={cn(
          "absolute left-1/2 z-[2] h-[164.3%] w-[128%] -translate-x-1/2",
          "transition-all duration-[1200ms] ease-out",
          mounted ? "top-[2%]" : "top-[-8%]"
        )}
      >
        <Image
          src="/images/about-hero-overlay.png"
          alt="Modern SDA home"
          fill
          className="object-cover"
          sizes="130vw"
          priority
        />
      </div>

    </section>
  );
}
