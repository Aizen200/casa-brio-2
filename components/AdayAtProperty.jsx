'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AdayAtProperty({ onSelectPhoto }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  const [activeIdx, setActiveIdx] = useState(0);

  const moments = [
    {
      time: "08:00",
      period: "Morning",
      title: "The valley mist",
      caption: "Mist on the Sahyadri mountains. Espresso served on the private bedroom sit-out.",
      image: "/images/bungalow/master-suite-view.jpg",
      aspectRatio: 1.42, // Landscape
    },
    {
      time: "11:30",
      period: "Midday",
      title: "The pergola & pool",
      caption: "Sunken loungers and crystal water under the handcrafted wooden pergola.",
      image: "/images/bungalow/pool-day-pergola.jpg",
      aspectRatio: 0.76, // Portrait
    },
    {
      time: "15:00",
      period: "Afternoon",
      title: "The cricket arena",
      caption: "High-stakes tape-ball tournaments on the private enclosed AstroTurf stadium.",
      image: "/images/bungalow/cricket-turf-day.png",
      aspectRatio: 1.42, // Landscape
    },
    {
      time: "18:30",
      period: "Golden hour",
      title: "The balcony sundowners",
      caption: "Chilled mixers and small plates as dusk settles over the Tungarli highlands.",
      image: "/images/bungalow/suite-evening-cocktails.png",
      aspectRatio: 0.76, // Portrait
    },
    {
      time: "21:30",
      period: "Evening",
      title: "Illuminated pool & BBQ",
      caption: "Charcoal grill by the private chef as ambient pergola lights reflect in the water.",
      image: "/images/bungalow/pool-night-pergola.jpg",
      aspectRatio: 1.42, // Landscape
    },
    {
      time: "01:00",
      period: "Late night",
      title: "REVEL speakeasy den",
      caption: "Move underground for tournament snooker, acoustic music, and zero noise curfews.",
      image: "/images/bungalow/speakeasy-snooker-neon.png",
      aspectRatio: 0.76, // Portrait
    },
  ];

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = containerHeight - windowHeight;

      if (scrollableDistance <= 0) return;

      // Progress from 0 to 1 as the user scrolls through the 380vh parent
      const scrolledPastTop = -rect.top;
      const progress = Math.min(Math.max(scrolledPastTop / scrollableDistance, 0), 1);

      // Compute horizontal distance
      const trackWidth = trackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const maxHorizontalShift = Math.max(0, trackWidth - windowWidth + (windowWidth * 0.08));

      // Apply horizontal translation smoothly
      const currentX = progress * maxHorizontalShift;
      trackRef.current.style.transform = `translate3d(${-currentX.toFixed(2)}px, 0, 0)`;

      // Update progress bar
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      // Determine active index based on progress
      const currentIdx = Math.min(Math.floor(progress * moments.length), moments.length - 1);
      setActiveIdx(currentIdx);
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [moments.length]);

  const scrollToMoment = (index) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (moments.length - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full bg-[#0d0c0a] text-[#f2ede4] select-none border-b border-[#f2ede4]/10">
      {/* 1. Header (Above the sticky film) */}
      <div className="pt-28 sm:pt-36 px-6 lg:px-14 max-w-7xl mx-auto space-y-4 pb-8 sm:pb-12">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#b9966a]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#a39c8f] font-sans font-medium">
            08 · A day at Casa Brio
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em]">
          From first light to{' '}
          <span className="italic font-light text-[#b9966a]">
            the last rally under the lights.
          </span>
        </h2>
      </div>

      {/* 2. Desktop Sticky Horizontal Scroll Film (Height: 380vh) */}
      <div
        ref={containerRef}
        className="hidden lg:block relative w-full"
        style={{ height: '380vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-16 px-0 box-border">
          {/* Top Bar: Live Animating Big Time + 01 / 06 Counter */}
          <div className="flex justify-between items-end px-12 xl:px-20 z-10">
            {/* Left: Big Time Display with smooth crossfade */}
            <div className="relative h-20 min-w-[320px]">
              {moments.map((m, idx) => (
                <div
                  key={m.time}
                  className="absolute left-0 bottom-0 flex items-baseline gap-4 whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: activeIdx === idx ? 1 : 0,
                    transform: activeIdx === idx ? 'translateY(0)' : 'translateY(14px)',
                    pointerEvents: activeIdx === idx ? 'auto' : 'none',
                  }}
                >
                  <span className="font-serif text-6xl xl:text-7xl font-light text-[#f2ede4] tracking-tight leading-none tabular-nums">
                    {m.time}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#a39c8f] font-medium">
                    {m.period}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Counter 01 / 06 */}
            <span className="font-sans text-xs font-medium tracking-[0.22em] text-[#a39c8f] uppercase tabular-nums">
              0{activeIdx + 1} / 0{moments.length}
            </span>
          </div>

          {/* Center: Horizontal Film Strip Track */}
          <div
            ref={trackRef}
            className="flex items-start gap-[5vw] px-12 xl:px-20 w-max will-change-transform"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            {moments.map((m, idx) => (
              <figure
                key={m.time}
                className="m-0 flex-none flex flex-col gap-5 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer group"
                style={{
                  opacity: activeIdx === idx ? 1 : 0.38,
                }}
                onClick={() => onSelectPhoto(m.image)}
                data-nc="media"
                data-nc-label="ENLARGE"
              >
                {/* Image Frame with Aspect Ratio */}
                <div
                  className="relative overflow-hidden bg-[#16140f] border border-[#f2ede4]/12 shadow-2xl"
                  style={{
                    height: 'min(50vh, 520px)',
                    aspectRatio: m.aspectRatio,
                  }}
                >
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    sizes="60vw"
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-[#0d0c0a]/15 group-hover:bg-transparent transition-colors" />
                  <div className="noire-grain" />
                </div>

                {/* Figcaption Underneath */}
                <figcaption className="flex flex-col gap-1.5 max-w-[340px]">
                  <span className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-[#b9966a]">
                    {m.time} · {m.period}
                  </span>
                  <span className="font-serif text-2xl xl:text-3xl font-normal text-[#f2ede4] leading-snug">
                    {m.title}
                  </span>
                  <span className="font-sans text-xs text-[#a39c8f] font-light leading-relaxed">
                    {m.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Bottom: Progress Bar & 6 Step Marker Ticks */}
          <div className="relative px-12 xl:px-20 w-full box-border z-10">
            <div className="relative h-12 w-full flex items-center">
              {/* Background grey track */}
              <div className="absolute inset-x-0 top-3 h-[1px] bg-[#f2ede4]/15" />

              {/* Active gold fill line */}
              <div
                ref={progressBarRef}
                className="absolute inset-x-0 top-3 h-[1px] bg-[#b9966a] origin-left transition-transform duration-75"
                style={{ transform: 'scaleX(0)' }}
              />

              {/* 6 Step markers */}
              {moments.map((m, idx) => {
                const percent = (idx / (moments.length - 1)) * 100;
                const isCurrent = activeIdx === idx;
                return (
                  <button
                    key={m.time}
                    type="button"
                    onClick={() => scrollToMoment(idx)}
                    className="all:unset absolute top-0 flex flex-col items-center gap-2 -translate-x-1/2 cursor-pointer group py-1"
                    style={{ left: `${percent}%` }}
                    aria-label={`Jump to ${m.time}`}
                    data-nc="button"
                  >
                    <span
                      className={`w-[1px] h-3.5 transition-colors duration-500 ${
                        isCurrent
                          ? 'bg-[#b9966a]'
                          : 'bg-[#a39c8f]/40 group-hover:bg-[#f2ede4]'
                      }`}
                    />
                    <span
                      className={`font-sans text-[10px] tracking-[0.14em] font-medium transition-colors duration-500 uppercase ${
                        isCurrent
                          ? 'text-[#f2ede4]'
                          : 'text-[#a39c8f]/60 group-hover:text-[#f2ede4]'
                      }`}
                    >
                      {m.time}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile / Tablet Swipeable Layout (< 1024px) */}
      <div className="lg:hidden px-6 pb-20 space-y-6">
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-6 px-6">
          {moments.map((m, idx) => (
            <figure
              key={m.time}
              className="m-0 flex-none flex flex-col gap-4 snap-start w-[82vw] cursor-pointer"
              onClick={() => onSelectPhoto(m.image)}
              data-nc="media"
            >
              <div
                className="relative overflow-hidden bg-[#16140f] border border-[#f2ede4]/12 shadow-xl"
                style={{
                  height: '42vh',
                  aspectRatio: m.aspectRatio,
                }}
              >
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0d0c0a]/15" />
                <div className="noire-grain" />
              </div>

              <figcaption className="flex flex-col gap-1 max-w-[80vw]">
                <span className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-[#b9966a]">
                  {m.time} · {m.period}
                </span>
                <span className="font-serif text-2xl font-normal text-[#f2ede4]">
                  {m.title}
                </span>
                <span className="font-sans text-xs text-[#a39c8f] font-light leading-relaxed">
                  {m.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
