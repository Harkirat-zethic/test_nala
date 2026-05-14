"use client";

import { useRef, useLayoutEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Observer);

const TOTAL_SLIDES = 3;

interface WhyChooseAnimationRefs {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  pinRef: React.RefObject<HTMLElement | null>;
  bgImageRef: React.RefObject<HTMLDivElement | null>;
  tabBarRef: React.RefObject<HTMLDivElement | null>;
  numberRef: React.RefObject<HTMLDivElement | null>;
  descRef: React.RefObject<HTMLDivElement | null>;
  progressRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Figma positions (1920×1080 viewport, 3 states):
 *
 * Background Y:    0 → -230px → -570px
 * Tab bar X:       220px → -507px → -987px
 * Number Y:        0 → -1 slot → -2 slots
 * Description Y:   0 → -1 slot → -2 slots
 *
 * All values scaled proportionally to current viewport.
 * Uses GSAP Observer for discrete one-slide-at-a-time navigation.
 */
export function useWhyChooseAnimation(): WhyChooseAnimationRefs {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  // Slide state (refs, not React state — GSAP handles all visuals)
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const buildTimeline = useCallback(() => {
    if (ctxRef.current) {
      ctxRef.current.revert();
      ctxRef.current = null;
    }

    const section = sectionRef.current;
    if (!section) return;

    ctxRef.current = gsap.context(() => {
      const isMobile = window.innerWidth < 1280;

      if (isMobile) {
        gsap.set(bgImageRef.current, { y: 0 });
        gsap.set(tabBarRef.current, { x: 0 });
        gsap.set(numberRef.current, { y: 0 });
        gsap.set(descRef.current, { y: 0 });
        gsap.set(progressRef.current, { scaleY: 1 });
        return;
      }

      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // Measure actual slot heights from the DOM
      const numSlot = numberRef.current?.querySelector("span")?.offsetHeight || vh * 0.05;
      const descSlot = descRef.current?.querySelector("p")?.offsetHeight || vh * 0.1556;

      // Measure actual tab positions from the DOM — fully responsive
      const tabEls = Array.from(tabBarRef.current!.children) as HTMLElement[];
      const leftOffset = vw * 0.1190; // section left padding (11.88%)
      const tabX1 = leftOffset;                              // State 1: tab 0 at left edge
      const tabX2 = leftOffset - tabEls[1].offsetLeft;       // State 2: tab 1 at left edge
      const tabX3 = leftOffset - tabEls[2].offsetLeft;       // State 3: tab 2 at left edge

      // Set initial states
      gsap.set(bgImageRef.current, { y: 0 });
      gsap.set(tabBarRef.current, { x: tabX1 });
      gsap.set(numberRef.current, { y: 0 });
      gsap.set(descRef.current, { y: 0 });
      gsap.set(progressRef.current, { scaleY: 0.33, transformOrigin: "top" });
      gsap.set("[data-tab='0']", { color: "rgba(255,255,255,1)" });
      gsap.set("[data-tab='1']", { color: "rgba(255,255,255,0.6)" });
      gsap.set("[data-tab='2']", { color: "rgba(255,255,255,0.6)" });

      // ---- Paused timeline (driven by Observer, not scroll) ----
      // Must be paused — Observer controls progress via gsap.to(tl, { progress })
      const tl = gsap.timeline({ paused: true });

      /* ===== Transition 1: State 1 → State 2 (t=0 → t=1) ===== */

      tl.to(bgImageRef.current, { y: -(230 / 1080) * vh, duration: 1, ease: "none" }, 0);
      tl.to(tabBarRef.current, { x: tabX2, duration: 1, ease: "none" }, 0);
      tl.to(numberRef.current, { y: -numSlot, duration: 1, ease: "none" }, 0);
      tl.to(descRef.current, { y: -descSlot, duration: 1, ease: "none" }, 0);
      tl.to(progressRef.current, { scaleY: 0.67, duration: 1, ease: "none" }, 0);
      tl.to("[data-tab='0']", { color: "rgba(255,255,255,0.6)", duration: 1, ease: "none" }, 0);
      tl.to("[data-tab='1']", { color: "rgba(255,255,255,1)", duration: 1, ease: "none" }, 0);

      /* ===== Transition 2: State 2 → State 3 (t=1 → t=2) ===== */

      tl.to(bgImageRef.current, { y: -(570 / 1080) * vh, duration: 1, ease: "none" }, 1);
      tl.to(tabBarRef.current, { x: tabX3, duration: 1, ease: "none" }, 1);
      tl.to(numberRef.current, { y: -numSlot * 2, duration: 1, ease: "none" }, 1);
      tl.to(descRef.current, { y: -descSlot * 2, duration: 1, ease: "none" }, 1);
      tl.to(progressRef.current, { scaleY: 1, duration: 1, ease: "none" }, 1);
      tl.to("[data-tab='1']", { color: "rgba(255,255,255,0.6)", duration: 1, ease: "none" }, 1);
      tl.to("[data-tab='2']", { color: "rgba(255,255,255,1)", duration: 1, ease: "none" }, 1);

      // Restore current slide on rebuild (e.g. after resize)
      tl.progress(currentIndexRef.current / (TOTAL_SLIDES - 1));

      // ---- Sync scroll position to match slide index ----
      const syncScroll = (index: number) => {
        const scrollableDistance = section.offsetHeight - window.innerHeight;
        const targetScroll =
          section.offsetTop + (index / (TOTAL_SLIDES - 1)) * scrollableDistance;
        window.scrollTo({ top: targetScroll, behavior: "instant" });
      };

      // ---- Animate to a specific slide ----
      // Observer stays ENABLED during animation — its preventDefault
      // blocks native scroll while isAnimating blocks slide changes.
      // No body.overflow manipulation needed (that caused white flicker).
      const animateToSlide = (index: number) => {
        isAnimatingRef.current = true;
        currentIndexRef.current = index;

        gsap.to(tl, {
          progress: index / (TOTAL_SLIDES - 1),
          duration: 0.7,
          ease: "power2.inOut",
          overwrite: true,
          onComplete: () => {
            syncScroll(index);
            // Cooldown before accepting next slide change
            gsap.delayedCall(0.3, () => {
              isAnimatingRef.current = false;
            });
          },
        });
      };

      // ---- Observer: discrete one-slide-at-a-time control ----
      const obs = Observer.create({
        target: pinRef.current!,
        type: "wheel,touch",
        tolerance: 10,
        preventDefault: true,
        onDown: () => {
          if (isAnimatingRef.current) return;
          const idx = currentIndexRef.current;
          if (idx >= TOTAL_SLIDES - 1) {
            syncScroll(TOTAL_SLIDES - 1);
            obs.disable();
            return;
          }
          animateToSlide(idx + 1);
        },
        onUp: () => {
          if (isAnimatingRef.current) return;
          const idx = currentIndexRef.current;
          if (idx <= 0) {
            syncScroll(0);
            obs.disable();
            return;
          }
          animateToSlide(idx - 1);
        },
      });

      // ---- ScrollTrigger: pinning + re-enable Observer on enter ----
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: pinRef.current,
        pinSpacing: false,
        onEnter: () => obs.enable(),
        onEnterBack: () => obs.enable(),
        onLeave: () => obs.disable(),
        onLeaveBack: () => obs.disable(),
      });
    }, section);
  }, []);

  useLayoutEffect(() => {
    buildTimeline();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        buildTimeline();
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
    pinRef,
    bgImageRef,
    tabBarRef,
    numberRef,
    descRef,
    progressRef,
  };
}
