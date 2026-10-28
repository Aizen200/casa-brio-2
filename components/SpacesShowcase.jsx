'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function SpacesShowcase({ onOpenSpaceGallery, onOpenBooking, onSelectPhoto }) {
  return (
    <section id="spaces" className="py-28 sm:py-36 px-6 lg:px-14 bg-[#0d0c0a] border-b border-[#f2ede4]/10 relative select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Eyebrow: 02 · Stay */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#b9966a]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#a39c8f] font-sans font-medium">
                02 · Stay
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em]">
              Rooms, suites &amp; <span className="italic font-light text-[#b9966a]">villas</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#a39c8f] font-sans max-w-md font-light leading-relaxed">
            Six curated lifestyle zones across the private estate. Designed for slow afternoons, unhurried dinners, and complete seclusion.
          </p>
        </div>

        {/* 6 Room Cards Grid (Exact NOIRÉ Card Dimensions & Hover Elevator) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {estateData.spaces.map((space, idx) => (
            <div
              key={space.id}
              className="noire-room-card group relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#16140f] border border-[#f2ede4]/12 cursor-pointer shadow-xl"
              onClick={() => onSelectPhoto(space.coverImage)}
              data-nc="media"
              data-nc-label="EXPLORE"
            >
              {/* Photo Zoom */}
              <Image
                src={space.coverImage}
                alt={space.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/30 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="noire-grain" />

              {/* Top Meta Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="px-3 py-1 bg-[#0d0c0a]/75 backdrop-blur-md border border-[#f2ede4]/15 text-[10px] uppercase tracking-[0.2em] text-[#f7f3ec] font-sans">
                  {space.category}
                </span>
                <span className="text-[11px] font-mono text-[#b9966a]">
                  0{idx + 1}
                </span>
              </div>

              {/* Bottom Horizon Elevator (NOIRÉ Signature) */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10 card-info-wrap flex flex-col justify-end">
                {/* Space Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#f7f3ec] tracking-wide mb-1 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                  {space.title}
                </h3>
                <p className="text-xs text-[#b9966a] font-sans uppercase tracking-[0.16em] mb-3">
                  {space.subtitle}
                </p>

                {/* Hidden Tray that rises from the bottom edge */}
                <div className="space-y-3 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 group-hover:opacity-100">
                  <p className="text-xs text-[#cfc8bd] font-sans font-light leading-relaxed">
                    {space.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-[#f2ede4]/10 text-xs text-[#f7f3ec]">
                    <span className="font-mono text-[#a39c8f] text-[11px]">
                      {(space.features || []).slice(0, 3).join(' · ')}
                    </span>
                    <span className="text-[#b9966a] uppercase tracking-widest text-[10px] font-semibold flex items-center gap-1">
                      View Photos →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
