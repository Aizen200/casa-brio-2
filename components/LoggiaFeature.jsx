'use client';

import Image from 'next/image';

export default function LoggiaFeature({ onSelectPhoto }) {
  return (
    <section className="relative w-full py-36 sm:py-52 px-6 lg:px-14 overflow-hidden bg-[#0a0907] border-b border-[#f2ede4]/10 select-none">
      {/* Background Image with Zoom */}
      <div
        className="absolute inset-0 z-0 cursor-pointer"
        onClick={() => onSelectPhoto('/images/bungalow/estate-balcony-view.jpg')}
        data-nc="media"
        data-nc-label="ENLARGE"
      >
        <Image
          src="/images/bungalow/estate-balcony-view.jpg"
          alt="Sahyadri Balcony Panorama"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#0d0c0a]/70 backdrop-blur-[1px]" />
        <div className="noire-grain" />
      </div>

      {/* Floating Centered Content (Exact NOIRÉ 03 · Layout) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-[#b9966a]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b9966a] font-sans font-medium">
            03 · The horizon
          </span>
          <span className="w-8 h-[1px] bg-[#b9966a]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em]">
          Mountains on three sides.{' '}
          <span className="italic font-light text-[#b9966a] block sm:inline">
            Solitude on the fourth.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#cfc8bd] font-sans font-light max-w-2xl mx-auto leading-relaxed">
          Tungarli Lake by morning walk, tranquility by design. Casa Brio commands an uninterrupted view of the Western Ghats with zero shared gates or sightlines.
        </p>
      </div>
    </section>
  );
}
