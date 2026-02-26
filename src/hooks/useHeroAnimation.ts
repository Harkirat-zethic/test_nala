  "use client";

  import { useRef, useEffect, useCallback } from "react";
  import gsap from "gsap";

  interface HeroAnimationRefs {
    sectionRef: React.RefObject<HTMLElement | null>;
    buildingRef: React.RefObject<HTMLDivElement | null>;
    personRef: React.RefObject<HTMLDivElement | null>;
    leavesRef: React.RefObject<HTMLDivElement | null>;
    titleRef: React.RefObject<HTMLParagraphElement | null>;
    descRef: React.RefObject<HTMLParagraphElement | null>;
    tagsRef: React.RefObject<HTMLDivElement | null>;
  }

  /**
   * Figma positions (1920×1080 viewport):
   *
   * Mid state (after Phase 1):
   *   BUILDING  → top: 333px  (30.83%)
   *   Title     → top: 607px  (56.20%)
   *   Person    → top: 8px,   scale: 1,  1920×1326
   *
   * End state (after Phase 2):
   *   BUILDING  → top: 260px  (24.07%), opacity: 1
   *   Title     → top: 534px  (49.44%)
   *   Person    → top: 98px,  scale: 1
   *
   * Shift Mid → End = 73px = 6.76% of viewport height
   */

  export function useHeroAnimation(): HeroAnimationRefs {
    const sectionRef = useRef<HTMLElement>(null);
    const buildingRef = useRef<HTMLDivElement>(null);
    const personRef = useRef<HTMLDivElement>(null);
    const leavesRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);
    const ctxRef = useRef<gsap.Context | null>(null);
    const hasPlayedRef = useRef(false);

    const buildTimeline = useCallback((skipAnimation: boolean) => {
      // Revert previous GSAP context before rebuilding
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }

      ctxRef.current = gsap.context(() => {
        const vh = sectionRef.current?.clientHeight || window.innerHeight;

        // Phase 2 shift: 73px at 1080px viewport, scaled proportionally
        const contentShift = -(73 / 1080) * vh;

        // Person positions (relative to element's own height ~122.8vh)
        const personMidY = (-220 / 1080) * vh;
        const personEndY = (-120 / 1080) * vh;

        if (skipAnimation) {
          // Jump to final state immediately (after resize)
          gsap.set(leavesRef.current, { yPercent: -100, opacity: 0 });
          gsap.set(personRef.current, { scale: 1, y: personEndY, yPercent: 0 });
          gsap.set(buildingRef.current, { opacity: 1, y: contentShift });
          gsap.set(titleRef.current, { y: contentShift, opacity: 1 });
          gsap.set(descRef.current, { y: 0, opacity: 1 });
          const tags = tagsRef.current?.children;
          if (tags) {
            gsap.set(tags, { y: 0, opacity: 1 });
          }
          return;
        }

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
        });

        /* =============================================
          Phase 1: Start → Mid  (0s – 2s)
          ============================================= */

        // Green leaves slide UP completely out of frame
        tl.to(leavesRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 2,
        }, 0);

        // Person cutout scales down and slides to mid position
        // Reset yPercent (CSS has translateY(-5%)) so only pixel y is used
        tl.to(personRef.current, {
          scale: 1,
          y: personMidY,
          yPercent: 0,
          duration: 2,
        }, 0);

        // "BUILDING" text appears as faint watermark
        tl.to(buildingRef.current, {
          opacity: 0.06,
          y: 0,
          duration: 2,
        }, 0);

        // Title slides up and fades in
        tl.to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }, 0.4);

        // Description slides up and fades in
        tl.to(descRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }, 0.8);

        // Tags stagger in
        const tags = tagsRef.current?.children;
        if (tags) {
          tl.to(tags, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          }, 1);
        }

        /* =============================================
          Phase 2: Mid → End  (2s – 4s)
          ============================================= */

        // Person continues sliding down
        tl.to(personRef.current, {
          y: personEndY,
          duration: 2,
        }, 2);

        // "BUILDING" text becomes fully visible and shifts upward
        tl.to(buildingRef.current, {
          opacity: 1,
          y: contentShift,
          duration: 2,
        }, 2);

        // Title shifts upward in sync
        tl.to(titleRef.current, {
          y: contentShift,
          duration: 2,
        }, 2);
      }, sectionRef);
    }, []);

    useEffect(() => {
      // Initial animation — play fully
      buildTimeline(false);
      hasPlayedRef.current = true;

      // Debounced resize handler — recalculates positions without replaying animation
      let resizeTimer: ReturnType<typeof setTimeout>;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (hasPlayedRef.current) {
            buildTimeline(true);
          }
        }, 200);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", handleResize);
        ctxRef.current?.revert();
      };
    }, [buildTimeline]);

    return {
      sectionRef,
      buildingRef,
      personRef,
      leavesRef,
      titleRef,
      descRef,
      tagsRef,
    };
  }
