'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function ExperiencesSection({ onSelectPhoto }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = estateData.timeline[activeIdx] || estateData.timeline[0];

  const experienceTags = [
    '01 · Dining',
    '02 · Aquatics & Sport',
    '03 · Speakeasy Den',
    '04 · Dawn Tranquility',
    '05 · Concierge Farewell',
  ];

  return (
    <section id="experiences" className="py-28 sm:py-36 px-6 lg:px-14 bg-[#0d0c0a] border-b border-[#f2ede4]/10 relative select-none">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Eyebrow: 04 · Experiences */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#b9966a]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#a39c8f] font-sans font-medium">
              04 · Experiences
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em]">
            Days that run on <span className="italic font-light text-[#b9966a]">estate time.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] font-sans font-light leading-relaxed">
            A private rhythm where every hour belongs solely to your party.
          </p>
        </div>

        {/* 2-Column Experiences Interaction (Exact NOIRÉ Split & Synchronized Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Milestone Rows */}
          <div className="lg:col-span-6 divide-y divide-[#f2ede4]/10 border-y border-[#f2ede4]/10">
            {estateData.timeline.map((step, idx) => (
              <div
                key={step.number}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`py-6 sm:py-8 cursor-pointer transition-all duration-300 group flex items-start justify-between gap-4 ${
                  activeIdx === idx ? 'opacity-100 pl-2' : 'opacity-40 hover:opacity-80'
                }`}
                data-nc="link"
              >
                <div className="space-y-2 max-w-md">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#b9966a]">
                      {experienceTags[idx] || step.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#a39c8f] font-sans">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] group-hover:text-[#b9966a] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cfc8bd] font-sans font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <span className="text-sm font-sans tracking-widest text-[#b9966a] pt-2">
                  →
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Synchronized Crossfading Photo Stage */}
          <div className="lg:col-span-6">
            <div
              className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#16140f] border border-[#f2ede4]/12 shadow-2xl cursor-pointer group"
              onClick={() => onSelectPhoto(current.image)}
              data-nc="media"
              data-nc-label="EXPAND"
            >
              {estateData.timeline.map((step, idx) => (
                <div
                  key={step.number}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-transparent to-transparent opacity-60 z-20" />
              <div className="noire-grain z-20" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#f7f3ec] z-30">
                <span className="font-serif text-lg tracking-wide">
                  {current.title}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#b9966a]">
                  {current.time}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
