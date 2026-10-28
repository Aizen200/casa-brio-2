'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowUpRight, Volume2, ShieldCheck, Flame, Wine, Trophy, Music } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function RevelSpeakeasyFeature({ onOpenBooking, onOpenGallery, onSelectPhoto }) {
  const [selectedImg, setSelectedImg] = useState(0);

  const icons = [Trophy, Wine, Volume2, Flame, Wine, ShieldCheck];

  return (
    <section id="revel" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#f2ede4]/10 relative bg-[#0b0a08] overflow-hidden">
      {/* Amber / Gold ambient glow */}
      <div className="ambient-glow w-[600px] h-[600px] bg-[#b9966a]/10 top-1/4 right-0 blur-[180px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1813] border border-[#b9966a]/30 text-[#b9966a] text-[10px] sm:text-xs uppercase tracking-widest font-sans mb-4">
            <Sparkles className="w-3 h-3 text-[#b9966a]" />
            <span>{estateData.revelDen.eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f7f3ec] font-normal leading-[1.1] mb-6">
            {estateData.revelDen.title}{' '}
            <span className="italic font-light text-[#b9966a]">
              {estateData.revelDen.titleItalic}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#a39c8f] font-sans font-light leading-relaxed">
            {estateData.revelDen.description}
          </p>
        </div>

        {/* 2-Column Speakeasy Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-7 space-y-4">
            <div
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#b9966a]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-pointer group bg-[#16140f]"
              onClick={() => onSelectPhoto(estateData.revelDen.images[selectedImg])}
              data-cursor="EXPAND"
            >
              <Image
                src={estateData.revelDen.images[selectedImg]}
                alt="REVEL Speakeasy Lounge"
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#b9966a] font-sans block">
                    Subterranean Club
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#f7f3ec]">
                    Full-Size Snooker & Private Bar
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0d0c0a]/80 backdrop-blur-md border border-[#f2ede4]/15 text-[10px] uppercase tracking-widest text-[#b9966a] font-sans">
                  Zero Curfew
                </span>
              </div>
            </div>

            {/* Speakeasy Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {estateData.revelDen.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                    selectedImg === i
                      ? 'border-[#b9966a] ring-2 ring-[#b9966a]/20'
                      : 'border-[#f2ede4]/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="REVEL thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: 6 Signature Features */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {estateData.revelDen.features.map((feat, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#16140f] border border-[#f2ede4]/10 hover:border-[#b9966a]/40 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#221f19] border border-[#b9966a]/30 flex items-center justify-center flex-shrink-0 text-[#b9966a]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base sm:text-lg text-[#f7f3ec] font-normal mb-1">
                      {feat.title}
                    </h5>
                    <p className="text-xs text-[#a39c8f] font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Speakeasy Call to action banner */}
        <div className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1a1813] to-[#16140f] border border-[#b9966a]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#b9966a] font-sans">
              Exclusive Buyout Privileges
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec]">
              Host your group with total freedom.
            </h4>
            <p className="text-xs text-[#a39c8f] font-sans">
              No shared walls, no neighbors, no sound restrictions inside REVEL.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-luxury px-6 py-3.5 rounded-full bg-[#b9966a] text-[#0d0c0a] font-sans text-xs uppercase tracking-widest font-semibold flex items-center gap-2 flex-shrink-0"
          >
            <span>Inquire For Private Dates</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

