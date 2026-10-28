'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function PhilosophyStory({ onOpenBooking, onSelectPhoto }) {
  return (
    <section id="story" className="py-28 sm:py-36 px-6 lg:px-14 bg-[#0d0c0a] border-b border-[#f2ede4]/10 relative select-none">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Eyebrow: 01 · The house */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#b9966a]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#a39c8f] font-sans font-medium">
              01 · The house
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em] max-w-4xl">
            A villa that remembers how to be <span className="italic font-light text-[#b9966a]">quiet.</span>
          </h2>
        </div>

        {/* 2-Column Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Paragraph & Story Link */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#c9c0b2] font-sans font-light leading-relaxed">
              Casa Brio is engineered around absolute privacy. When you reserve the estate, the entire property—from the sapphire pool deck to the subterranean REVEL snooker lounge—belongs exclusively to your party with no strangers, shared gates, or curfews.
            </p>
            <p className="text-sm sm:text-base text-[#a39c8f] font-sans font-light leading-relaxed">
              Nestled below the Sahyadri mountains near Tungarli Lake, the property offers complete retreat seclusion just 90 minutes from Mumbai and 60 minutes from Pune.
            </p>

            <div className="pt-2">
              <a
                href="#spaces"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#b9966a] hover:text-[#dfc59e] transition-colors font-sans group"
                data-nc="link"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Architectural Image Reveal */}
          <div className="lg:col-span-6">
            <div
              className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden cursor-pointer group bg-[#16140f] border border-[#f2ede4]/12 shadow-2xl"
              onClick={() => onSelectPhoto('/images/bungalow/drone-facade.jpg')}
              data-nc="media"
              data-nc-label="VIEW ESTATE"
            >
              <Image
                src="/images/bungalow/drone-facade.jpg"
                alt="Casa Brio Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-transparent to-transparent opacity-60" />
              <div className="noire-grain" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#f7f3ec]">
                <span className="font-serif text-lg tracking-wide">
                  The east loggia · Lonavala
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#b9966a]">
                  Tungarli Highland
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Large Metric Columns (Exact NOIRÉ 1911 / 420 / 38 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-[#f2ede4]/10">
          <div className="space-y-2">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f7f3ec] block font-light">
              2024
            </span>
            <span className="text-sm font-sans uppercase tracking-[0.16em] text-[#b9966a] block font-medium">
              The Private Estate
            </span>
            <p className="text-xs text-[#a39c8f] font-sans leading-relaxed">
              Curated as a secluded hillside sanctuary for single-group private buyouts.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f7f3ec] block font-light">
              15,000
            </span>
            <span className="text-sm font-sans uppercase tracking-[0.16em] text-[#b9966a] block font-medium">
              Sq. Ft. of Private Grounds
            </span>
            <p className="text-xs text-[#a39c8f] font-sans leading-relaxed">
              From the pool pergola to the floodlit turf, all of it yours to keep quiet.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f7f3ec] block font-light">
              04
            </span>
            <span className="text-sm font-sans uppercase tracking-[0.16em] text-[#b9966a] block font-medium">
              Master Suites & Salon
            </span>
            <p className="text-xs text-[#a39c8f] font-sans leading-relaxed">
              Accommodating up to 20 guests with ensuite bathrooms and private balconies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
