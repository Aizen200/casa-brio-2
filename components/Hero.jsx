'use client';

import Image from 'next/image';
import { Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function Hero({ onOpenBooking, onOpenGallery, onSelectPhoto }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0d0c0a] select-none">
      {/* 1. Background Cinematic Photograph (Subtle grading, NOT pitch black) */}
      <div
        className="absolute inset-0 z-0 overflow-hidden cursor-pointer"
        onClick={() => onSelectPhoto('/images/bungalow/pool-night-pergola.jpg')}
        data-nc="media"
        data-nc-label="ENLARGE"
      >
        <div className="relative w-full h-full scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-100">
          <Image
            src="/images/bungalow/pool-night-pergola.jpg"
            alt="Casa Brio Estate Horizon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Authentic NOIRÉ Vignette: Transparent top/sky, atmospheric mist in middle, dark floor for legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,12,10,0.25) 0%, rgba(13,12,10,0.15) 35%, rgba(13,12,10,0.55) 70%, rgba(13,12,10,0.95) 100%)',
          }}
        />
        <div className="noire-grain" />
      </div>

      {/* Top Spacer for Fixed Nav */}
      <div className="relative z-10 h-28 md:h-36" />

      {/* 2. Pinned Horizon Wordmark (Boska Serif, centered, grand, permanent) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pointer-events-none">
        <h1
          className="font-serif font-light text-[15vw] sm:text-[14vw] md:text-[12.5vw] text-[#f2ede4] tracking-[0.14em] leading-none text-center select-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          style={{
            fontFamily: "'Boska', serif",
            textIndent: '0.14em',
          }}
        >
          CASA BRIO
        </h1>
      </div>

      {/* 3. Hero Bottom Container: Editorial Content + Booking Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-8 sm:pb-12 space-y-8 sm:space-y-10">
        {/* Left Headline + Right Coordinates Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-10 pt-4">
          {/* Left Column: Eyebrow, Headline, Description */}
          <div className="max-w-2xl space-y-4">
            {/* Eyebrow with Champagne Line */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#b9966a]" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#b9966a] font-sans font-medium m-0">
                PRIVATE LUXURY BUNGALOW · LONAVALA
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em]">
              The <span className="italic font-light text-[#b9966a]">quiet</span> side of the Sahyadris.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#cfc8bd] font-sans font-light leading-relaxed max-w-xl">
              {estateData.hero.description}
            </p>
          </div>

          {/* Right Column: Metadata / Coordinates (Exact NOIRÉ Placement) */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right font-sans text-xs tracking-[0.18em] text-[#a39c8f] uppercase space-y-1.5 flex-shrink-0">
            <span className="text-[#f7f3ec]">18°45&apos; N · 73°24&apos; E</span>
            <span>Tungarli, Lonavala</span>
            <span className="text-[#b9966a]">Est. 2024 · Private Estate</span>
          </div>
        </div>

        {/* 4. NOIRÉ Signature Booking Strip (1:1 Blueprint) */}
        <div
          data-noire-booking
          className="w-full flex flex-col md:flex-row items-stretch bg-[#0d0c0a]/60 backdrop-blur-xl border border-[#f2ede4]/15 divide-y md:divide-y-0 md:divide-x divide-[#f2ede4]/12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Field 1: Check-in */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="flex-1 text-left px-6 py-5 hover:bg-[#f2ede4]/5 transition-colors group flex flex-col justify-between gap-1.5 relative cursor-pointer"
            data-nc="button"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#a39c8f] group-hover:text-[#f7f3ec] transition-colors">
                Check-in
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#a39c8f] group-hover:text-[#b9966a] transition-transform group-hover:translate-y-0.5" />
            </div>
            <span className="font-serif text-xl sm:text-2xl text-[#f7f3ec] font-normal tracking-tight">
              Select date
            </span>
          </button>

          {/* Field 2: Check-out */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="flex-1 text-left px-6 py-5 hover:bg-[#f2ede4]/5 transition-colors group flex flex-col justify-between gap-1.5 relative cursor-pointer"
            data-nc="button"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#a39c8f] group-hover:text-[#f7f3ec] transition-colors">
                Check-out
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#a39c8f] group-hover:text-[#b9966a] transition-transform group-hover:translate-y-0.5" />
            </div>
            <span className="font-serif text-xl sm:text-2xl text-[#f7f3ec] font-normal tracking-tight">
              Select date
            </span>
          </button>

          {/* Field 3: Guests */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="flex-1 text-left px-6 py-5 hover:bg-[#f2ede4]/5 transition-colors group flex flex-col justify-between gap-1.5 relative cursor-pointer"
            data-nc="button"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#a39c8f] group-hover:text-[#f7f3ec] transition-colors">
                Guests
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#a39c8f] group-hover:text-[#b9966a] transition-transform group-hover:translate-y-0.5" />
            </div>
            <span className="font-serif text-xl sm:text-2xl text-[#f7f3ec] font-normal tracking-tight">
              Up to 20 guests
            </span>
          </button>

          {/* Field 4: Space / Experience */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="flex-1 text-left px-6 py-5 hover:bg-[#f2ede4]/5 transition-colors group flex flex-col justify-between gap-1.5 relative cursor-pointer"
            data-nc="button"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#a39c8f] group-hover:text-[#f7f3ec] transition-colors">
                Estate
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#a39c8f] group-hover:text-[#b9966a] transition-transform group-hover:translate-y-0.5" />
            </div>
            <span className="font-serif text-xl sm:text-2xl text-[#f7f3ec] font-normal tracking-tight">
              Full Buyout
            </span>
          </button>

          {/* CTA: Check Availability / Reserve Button */}
          <div className="p-2 md:p-2.5 flex items-stretch">
            <button
              type="button"
              onClick={onOpenBooking}
              data-noire-roll-root
              data-nc="button"
              className="w-full md:w-auto px-8 py-4 sm:py-5 bg-[#f2ede4] text-[#0d0c0a] hover:bg-[#c9c0b2] text-xs font-sans font-medium uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors group cursor-pointer"
            >
              <p data-noire-roll-label="CHECK AVAILABILITY" className="relative m-0 font-semibold">
                CHECK AVAILABILITY
              </p>
              <ArrowRight className="w-4 h-4 text-[#0d0c0a] group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* 5. Center Scroll Cue Dot & Line */}
        <div className="pt-2 flex flex-col items-center justify-center pointer-events-none">
          <div className="relative w-[1px] h-10 bg-[#f2ede4]/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3.5 bg-[#b9966a] anim-cue-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
