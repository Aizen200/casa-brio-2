'use client';

import { useEffect, useRef, useState } from 'react';
import { estateData } from '@/data/estateData';
import { Em, Eyebrow, TextLink, useIsDesktop, useRunwayProgress } from '@/components/ui';

const widths = [300, 340, 340, 300, 340, 300];

function Intro({ onOpenGallery }) {
  return (
    <div className="w-full lg:w-[400px] lg:mr-[72px] flex-none flex flex-col justify-center">
      <Eyebrow>02 · The spaces</Eyebrow>
      <h2 className="t-h2 mt-7" data-reveal="">
        Everything you need. <Em>Nothing you share.</Em>
      </h2>
      <p className="t-body mt-9 text-[var(--muted)] max-w-[380px]" data-reveal="" style={{ '--rd': '.08s' }}>
        Six dedicated lifestyle zones curated exclusively for your group. Designed for slow afternoons, unhurried
        evenings, and complete private seclusion.
      </p>
      <div className="mt-11" data-reveal="" style={{ '--rd': '.14s' }}>
        <TextLink onClick={onOpenGallery}>View all photographs</TextLink>
      </div>
    </div>
  );
}

function SpaceCard({ space, width, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(space)}
      className="rise-card media-frame flex-none h-[min(425px,52vh)] lg:mr-10 text-left"
      style={{ width: `min(${width}px, 78vw)` }}
      data-nc="media"
      data-nc-label="Explore"
    >
      <img className="img-cover" src={space.coverImage} alt={space.title} loading="lazy" />
      <span className="rise-veil" />
      <span className="rise-text">
        <span className="rise-line block t-label-sm text-[var(--stone)]">{space.category}</span>
        <span className="rise-line block t-h4 mt-3 text-[var(--ivory)]">{space.title}</span>
      </span>
    </button>
  );
}

export default function SpacesWalkthrough({ onOpenGallery, onOpenSpace }) {
  const desktop = useIsDesktop();
  const runway = useRef(null);
  const track = useRef(null);
  const [distance, setDistance] = useState(0);
  const p = useRunwayProgress(runway);

  useEffect(() => {
    if (!desktop || !track.current) return;
    const measure = () => setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [desktop]);

  if (!desktop) {
    return (
      <section id="spaces" className="sec bg-[var(--ink)] text-[var(--ivory)] py-24">
        <div className="shell">
          <Intro onOpenGallery={onOpenGallery} />
        </div>
        <div className="mt-14 flex gap-4 overflow-x-auto snap-x snap-mandatory px-[var(--gutter)] pb-2 [scrollbar-width:none]">
          {estateData.spaces.map((s, i) => (
            <div key={s.id} className="snap-start">
              <SpaceCard space={s} width={widths[i]} onOpen={onOpenSpace} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="spaces" ref={runway} className="sec pin-runway bg-[var(--ink)] text-[var(--ivory)]" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="pin-stage">
        <div
          ref={track}
          className="pin-track items-center"
          style={{ transform: `translate3d(${-p * distance}px,0,0)`, paddingLeft: 'calc(max(var(--gutter), (100vw - 1440px) / 2 + var(--gutter)) + 120px)', paddingRight: 'var(--gutter)', width: 'max-content' }}
        >
          <Intro onOpenGallery={onOpenGallery} />
          {estateData.spaces.map((s, i) => (
            <SpaceCard key={s.id} space={s} width={widths[i]} onOpen={onOpenSpace} />
          ))}
        </div>
        <div className="shell mt-12 flex items-center gap-5" style={{ paddingLeft: 'calc(var(--gutter) + 120px)' }}>
          <div className="progress-rail">
            <div className="progress-fill" style={{ transform: `scaleX(${Math.max(0.06, p)})` }} />
          </div>
          <span className="t-label text-[var(--muted)]">Scroll to walk through</span>
        </div>
      </div>
    </section>
  );
}
