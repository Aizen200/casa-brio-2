'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function TimeFlowChronicles({ onSelectPhoto }) {
  const [activeStep, setActiveStep] = useState(0);
  const current = estateData.timeline[activeStep];

  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#f2ede4]/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-widest text-[#b9966a] font-sans block mb-3">
            THE ESTATE CHRONICLES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f7f3ec] font-normal leading-[1.1] mb-4">
            How Time Flows{' '}
            <span className="italic font-light text-[#b9966a]">
              at the Estate.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] font-sans font-light">
            An unhurried weekend rhythm engineered for celebration, reconnection, and pure Sahyadri peace.
          </p>
        </div>

        {/* Milestone Selector Tabs */}
        <div className="flex items-center justify-between border-b border-[#f2ede4]/10 pb-4 mb-12 overflow-x-auto scrollbar-none gap-4">
          {estateData.timeline.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-3 pb-3 border-b-2 transition-all duration-300 whitespace-nowrap px-2 ${
                activeStep === idx
                  ? 'border-[#b9966a] text-[#f7f3ec]'
                  : 'border-transparent text-[#a39c8f] hover:text-[#f7f3ec]'
              }`}
            >
              <span className={`text-xs font-mono px-2 py-0.5 rounded ${activeStep === idx ? 'bg-[#b9966a] text-[#0d0c0a] font-bold' : 'bg-[#16140f] text-[#a39c8f]'}`}>
                {step.number}
              </span>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-widest text-[#b9966a] font-sans">
                  {step.day} • {step.time}
                </span>
                <span className="block font-serif text-sm">
                  {step.tagline}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Timeline Card with Framer Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center rounded-3xl bg-[#16140f] border border-[#f2ede4]/10 p-6 sm:p-10 shadow-2xl"
          >
            {/* Visual Frame */}
            <div
              className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group bg-[#0d0c0a]"
              onClick={() => onSelectPhoto(current.image)}
              data-cursor="EXPAND"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16140f] via-transparent to-transparent opacity-70" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#0d0c0a]/80 backdrop-blur-md border border-[#f2ede4]/15 text-[11px] font-mono text-[#b9966a]">
                  {current.number} / 05
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#f2ede4]">
                <span className="flex items-center gap-1.5 font-sans uppercase tracking-wider text-[10px] text-[#b9966a]">
                  <Clock className="w-3 h-3" />
                  {current.day} • {current.time}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#a39c8f]">
                  Click to Expand
                </span>
              </div>
            </div>

            {/* Itinerary Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#b9966a] font-sans block mb-2">
                  {current.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-[#f7f3ec] font-normal leading-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#a39c8f] font-sans font-light leading-relaxed">
                {current.description}
              </p>

              {/* Highlights checklist */}
              <div className="space-y-3 pt-2 border-t border-[#f2ede4]/10">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#f2ede4]">
                    <div className="w-5 h-5 rounded-full bg-[#221f19] border border-[#b9966a]/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#b9966a]">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-full border border-[#f2ede4]/15 text-xs uppercase tracking-wider text-[#a39c8f] hover:text-[#f7f3ec] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Previous
                </button>
                <button
                  disabled={activeStep === estateData.timeline.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(estateData.timeline.length - 1, prev + 1))}
                  className="px-5 py-2 rounded-full bg-[#b9966a] text-[#0d0c0a] text-xs uppercase tracking-wider font-semibold hover:bg-[#dfc59e] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1.5"
                >
                  <span>Next Milestone</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

