"use client";

import { useState, useCallback, useEffect } from "react";

interface UseCarouselOptions {
  totalSlides: number;
  autoPlay?: boolean;
  interval?: number;
}

interface UseCarouselReturn {
  currentIndex: number;
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
}

export function useCarousel({
  totalSlides,
  autoPlay = false,
  interval = 5000,
}: UseCarouselOptions): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) setCurrentIndex(index);
    },
    [totalSlides]
  );

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, goToNext]);

  return { currentIndex, goToNext, goToPrev, goToSlide };
}
