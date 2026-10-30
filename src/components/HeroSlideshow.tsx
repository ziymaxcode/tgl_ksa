import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { HERO_SLIDES, HeroSlideItem } from "../data/heroSlidesData";

interface HeroSlideshowProps {
  slides?: HeroSlideItem[];
  className?: string;
  autoPlayIntervalMs?: number;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  slides = HERO_SLIDES,
  className = "",
  autoPlayIntervalMs = 5000,
}) => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    timerRef.current = setInterval(() => {
      goToNext();
    }, autoPlayIntervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goToNext, autoPlayIntervalMs, totalSlides]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swiped left
        if (isAr) {
          goToPrev();
        } else {
          goToNext();
        }
      } else {
        // Swiped right
        if (isAr) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl bg-slate-950 w-full h-[400px] sm:h-[460px] lg:h-[480px] xl:h-[520px] 2xl:h-[560px] select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Saudi Enterprise Showcase Slideshow"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
              aria-hidden={!isActive}
            >
              {/* Responsive Picture: Loads pcImage on desktop/laptop and phoneImage on mobile phone */}
              <picture className="w-full h-full block">
                {/* 1. PC / Laptop View (Screens >= 768px) */}
                {slide.pcImage && (
                  <source media="(min-width: 768px)" srcSet={slide.pcImage} />
                )}
                {/* 2. Phone / Mobile View (Fallback for screens < 768px) */}
                <img
                  src={slide.phoneImage || slide.pcImage}
                  alt={isAr ? slide.altAr : slide.altEn}
                  className="w-full h-full object-cover object-center"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </picture>

              {/* Subtle Dark Gradient Overlay for optimal badge/caption contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/60 pointer-events-none" />

              {/* Top Floating Badge Bar */}
              <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 z-20 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-slate-900/80 text-amber-300 border border-amber-400/30 backdrop-blur-md shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
                  <span>{isAr ? slide.badgeAr : slide.badgeEn}</span>
                </span>

                {/* Slide Counter */}
                <span className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-white/10 backdrop-blur-md">
                  {String(idx + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-14 sm:bottom-16 inset-x-4 sm:inset-x-6 z-20 pointer-events-none">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-start max-w-xl">
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight">
                    {isAr ? slide.titleAr : slide.titleEn}
                  </h4>
                  {slide.taglineEn && (
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-2">
                      {isAr ? slide.taglineAr : slide.taglineEn}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows (Visible on hover on desktop, always accessible on touch) */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={isAr ? goToNext : goToPrev}
            className="absolute top-1/2 -translate-y-1/2 start-3 sm:start-4 z-30 p-2 sm:p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md shadow-lg transition-all opacity-80 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer focus:outline-hidden"
            aria-label={isAr ? "الصورة التالية" : "Previous slide"}
          >
            {isAr ? (
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>

          <button
            onClick={isAr ? goToPrev : goToNext}
            className="absolute top-1/2 -translate-y-1/2 end-3 sm:end-4 z-30 p-2 sm:p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md shadow-lg transition-all opacity-80 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer focus:outline-hidden"
            aria-label={isAr ? "الصورة السابقة" : "Next slide"}
          >
            {isAr ? (
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </>
      )}

      {/* Bottom Indicators & Pause / Play Controller */}
      <div className="absolute bottom-3 sm:bottom-4 inset-x-0 z-30 flex items-center justify-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all rounded-full cursor-pointer focus:outline-hidden ${
                i === currentIndex
                  ? "w-6 sm:w-7 h-2 bg-blue-500 shadow-xs"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}

          {/* Toggle Pause / Play */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="ms-1.5 p-0.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>
      </div>
    </div>
  );
};
