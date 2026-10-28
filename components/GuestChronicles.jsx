'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function GuestChronicles() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = estateData.testimonials[activeIdx];

  return (
    <section id="diaries" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#f2ede4]/10 relative bg-[#0b0a08]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#b9966a] font-sans block mb-3">
            GUEST CHRONICLES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f7f3ec] font-normal leading-[1.1] mb-4">
            Their Stay.{' '}
            <span className="italic font-light text-[#b9966a]">
              Their Words.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] font-sans">
            Private celebrations, corporate summits, and weekend buyouts that stayed longer than planned.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          <div className="p-6 rounded-2xl bg-[#16140f] border border-[#f2ede4]/10 text-center">
            <div className="flex items-center justify-center gap-1 text-[#b9966a] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#b9966a]" />
              ))}
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] block mb-1">
              5.0 / 5.0
            </span>
            <span className="text-xs text-[#a39c8f] font-sans uppercase tracking-wider">
              Across 45+ Verified Private Buyouts
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#16140f] border border-[#f2ede4]/10 text-center">
            <div className="flex items-center justify-center text-[#b9966a] mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] block mb-1">
              100% Privacy
            </span>
            <span className="text-xs text-[#a39c8f] font-sans uppercase tracking-wider">
              Zero Strangers, Shared Gates, or Overlaps
            </span>
          </div>
        </div>

        {/* Testimonials Showcase */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-14 rounded-3xl bg-[#16140f] border border-[#f2ede4]/10 shadow-2xl relative"
            >
              <Quote className="w-12 h-12 text-[#b9966a]/20 mb-6" />

              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#f7f3ec] font-light leading-relaxed mb-8 italic">
                "{current.quote}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#f2ede4]/10 pt-6 gap-4">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#f7f3ec] font-normal">
                    {current.author}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#a39c8f] font-sans mt-0.5">
                    <span>{current.role}</span>
                    <span>•</span>
                    <span className="text-[#b9966a]">{current.stay}</span>
                  </div>
                </div>

                {/* Slider pagination & controls */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#a39c8f]">
                    0{activeIdx + 1} / 0{estateData.testimonials.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setActiveIdx((prev) => (prev === 0 ? estateData.testimonials.length - 1 : prev - 1))}
                      className="w-9 h-9 rounded-full bg-[#221f19] border border-[#f2ede4]/10 hover:border-[#b9966a] text-[#f7f3ec] flex items-center justify-center transition-colors"
                      aria-label="Previous quote"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveIdx((prev) => (prev === estateData.testimonials.length - 1 ? 0 : prev + 1))}
                      className="w-9 h-9 rounded-full bg-[#221f19] border border-[#f2ede4]/10 hover:border-[#b9966a] text-[#f7f3ec] flex items-center justify-center transition-colors"
                      aria-label="Next quote"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

