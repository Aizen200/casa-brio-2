'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function JournalSection({ onSelectPhoto }) {
  const articles = [
    {
      tag: "THE SPEAKEASY",
      title: "Building the Subterranean Den",
      read: "4 min read",
      image: "/images/bungalow/speakeasy-snooker-neon.png",
      summary: "How REVEL was acoustically engineered below the villa ground level to host unhurried nights with zero noise curfews."
    },
    {
      tag: "RECREATION",
      title: "Floodlit Box Turf & Midnight Cricket",
      read: "3 min read",
      image: "/images/bungalow/turf-play-night.jpg",
      summary: "Why we enclosed a full AstroTurf stadium inside the estate walls for high-stakes matches long after dinner."
    },
    {
      tag: "TRANQUILITY",
      title: "Morning Mist Across Tungarli Lake",
      read: "5 min read",
      image: "/images/bungalow/master-suite-view.jpg",
      summary: "Waking to clouds rolling across the Sahyadri mountains with artisanal espresso served on the lawn terrace."
    }
  ];

  return (
    <section id="journal" className="py-28 sm:py-36 px-6 lg:px-14 bg-[#0d0c0a] border-b border-[#f2ede4]/10 relative select-none">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Eyebrow: 07 · Journal */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#b9966a]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#a39c8f] font-sans font-medium">
              07 · Journal
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em]">
            Notes from the <span className="italic font-light text-[#b9966a]">house.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] font-sans font-light leading-relaxed">
            Stories, architecture philosophy, and glimpses into life within the estate.
          </p>
        </div>

        {/* 3 Journal Cards (Exact NOIRÉ Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="group space-y-5 cursor-pointer"
              onClick={() => onSelectPhoto(art.image)}
              data-nc="media"
              data-nc-label="READ"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#16140f] border border-[#f2ede4]/12 shadow-xl">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0d0c0a]/20 group-hover:bg-transparent transition-colors" />
                <div className="noire-grain" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase font-sans">
                  <span className="text-[#b9966a] font-medium">{art.tag}</span>
                  <span className="text-[#a39c8f]">{art.read}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#f7f3ec] group-hover:text-[#b9966a] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cfc8bd] font-sans font-light leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-[#b9966a] group-hover:text-[#dfc59e] transition-colors">
                <span>Read Note</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
