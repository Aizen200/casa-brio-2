'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function TestimonialStage() {
  const [activeIdx, setActiveIdx] = useState(0);

  const backgroundPhotos = [
    '/images/bungalow/pool-night-pergola.jpg',
    '/images/bungalow/living-dining-view.jpg',
    '/images/bungalow/speakeasy-snooker-neon.png',
  ];

  const current = estateData.testimonials[activeIdx];

  // Auto-advance every 8 seconds if user does not interact
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % estateData.testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      data-framer-name="Testimonials"
      className="relative w-full min-h-[85vh] py-24 sm:py-32 px-6 lg:px-14 flex flex-col justify-between items-center overflow-hidden bg-[#0d0c0a] border-b border-[#f2ede4]/10 select-none"
    >
      {/* 1. Full-Bleed Mood Photograph with Desaturation & Scale */}
      {backgroundPhotos.map((photo, i) => (
        <div
          key={photo}
          className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: activeIdx === i ? 0.32 : 0,
            transform: activeIdx === i ? 'scale(1)' : 'scale(1.05)',
            filter: 'saturate(0.55) sepia(0.12)',
          }}
        >
          <Image
            src={photo}
            alt="Estate Atmosphere"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* 2. NOIRÉ Radial Dark Veil */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(60% 70% at 50% 50%, rgba(13, 12, 10, 0.4) 0%, rgba(13, 12, 10, 0.92) 100%)',
        }}
      />
      <div className="noire-grain" />

      {/* 3. Top Kicker: "06 · In their words" with Champagne Line */}
      <div className="relative z-20 flex items-center gap-3">
        <span className="w-8 h-[1px] bg-[#b9966a]" />
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#a39c8f] font-sans font-medium">
          06 · In their words
        </span>
      </div>

      {/* 4. Center Quotation (Proportionally Balanced & Readable) */}
      <div className="relative z-20 my-auto py-8 sm:py-12 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-4">
        <div
          key={activeIdx}
          className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <p className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-[32px] font-light text-[#f2ede4] leading-[1.45] tracking-[-0.01em] italic max-w-3xl mx-auto">
            &ldquo;{current.quote}&rdquo;
          </p>
        </div>

        {/* Guest Line with Letter-Spacing Settle */}
        <div data-framer-name="Guest" className="pt-2 space-y-1">
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#b9966a] font-medium">
            {current.author}
          </p>
          <span className="text-[11px] uppercase tracking-[0.18em] text-[#a39c8f] font-sans block">
            {current.role} • {current.stay}
          </span>
        </div>
      </div>

      {/* 5. Bottom Progress Bar & Slide Tracks (Exact NOIRÉ Progress Controls) */}
      <div className="relative z-20 flex items-center gap-6 pt-4">
        {/* Previous Button */}
        <button
          onClick={() => setActiveIdx((prev) => (prev === 0 ? estateData.testimonials.length - 1 : prev - 1))}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#f2ede4]/15 hover:border-[#b9966a] text-[#f2ede4] hover:text-[#b9966a] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Previous guest note"
          data-nc="button"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Horizontal Track Fill Indicators */}
        <div className="flex items-center gap-2">
          {estateData.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="py-3 px-1 group cursor-pointer"
              aria-label={`Go to slide ${i + 1}`}
              data-nc="button"
            >
              <div className="w-10 sm:w-14 h-[2px] bg-[#f2ede4]/20 rounded-full overflow-hidden transition-colors group-hover:bg-[#f2ede4]/40">
                <div
                  className="h-full bg-[#b9966a] transition-all duration-500 ease-out"
                  style={{
                    width: activeIdx === i ? '100%' : '0%',
                  }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setActiveIdx((prev) => (prev === estateData.testimonials.length - 1 ? 0 : prev + 1))}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#f2ede4]/15 hover:border-[#b9966a] text-[#f2ede4] hover:text-[#b9966a] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Next guest note"
          data-nc="button"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
