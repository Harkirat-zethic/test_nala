"use client";

import { useState, useCallback } from "react";

interface UseGalleryOptions {
  totalImages: number;
  visibleThumbnails?: number;
}

export function useGallery({ totalImages, visibleThumbnails = 5 }: UseGalleryOptions) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const selectImage = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalImages) setSelectedIndex(index);
    },
    [totalImages]
  );

  const remainingCount = Math.max(0, totalImages - visibleThumbnails);

  return {
    selectedIndex,
    goToNext,
    goToPrev,
    selectImage,
    remainingCount,
    visibleThumbnails,
  };
}
