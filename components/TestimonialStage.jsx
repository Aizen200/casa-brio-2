'use client';

import { useEffect, useState } from 'react';
import { estateData } from '@/data/estateData';
import { Eyebrow } from '@/components/ui';

const DURATION = 9000;

function Chevron({ dir }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d={dir === 'left' ? 'M13 7H1.5M6 2.5 1.5 7 6 11.5' : 'M1 7h11.5M8 2.5 12.5 7 8 11.5'} stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function TestimonialStage() {
  const items = estateData.testimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % items.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused, items.length]);

  const go = (d) => setI((v) => (v + d + items.length) % items.length);

  return (
    <section
      id="words"
      className="sec relative overflow-hidden bg-[var(--ink)] text-[var(--ivory)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src="/images/bungalow/bedroom-suite-3.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover px"
        style={{ filter: 'grayscale(.7) brightness(.32) contrast(1.05)', '--px': '50px', scale: '1.15' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,12,10,.15),rgba(13,12,10,.75))]" />

      <div className="shell relative py-24 lg:py-32 flex flex-col items-center text-center">
        <Eyebrow>06 · In their words</Eyebrow>

        <div className="quote-stage relative w-full mt-14 h-[440px] sm:h-[380px] lg:h-[400px]" aria-live="polite">
          {items.map((t, k) => (
            <figure key={t.author} className={`q-item ${k === i ? 'is-active' : ''}`} aria-hidden={k !== i}>
              <blockquote
                className="font-serif italic font-light max-w-[27em] mx-auto"
                style={{ fontSize: 'clamp(22px, 2.3vw, 33px)', lineHeight: 1.22, letterSpacing: '-0.01em', textWrap: 'balance' }}
              >
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-10 flex flex-col items-center gap-3">
                <span className="t-label">{t.author}</span>
                <span className="t-label-sm text-[var(--muted)]">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-6">
          <button type="button" className="round-btn" onClick={() => go(-1)} aria-label="Previous testimonial">
            <Chevron dir="left" />
          </button>
          <div className="flex gap-2">
            {items.map((t, k) => (
              <button
                key={t.author}
                type="button"
                className="py-3"
                onClick={() => setI(k)}
                aria-label={`Show testimonial ${k + 1}`}
              >
                <span
                  className={`q-seg block ${k === i ? 'is-active' : ''} ${k < i ? 'is-done' : ''}`}
                  style={{ '--q-dur': `${DURATION}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                >
                  <i key={`${i}-${k}`} style={{ animationPlayState: paused ? 'paused' : 'running' }} />
                </span>
              </button>
            ))}
          </div>
          <button type="button" className="round-btn" onClick={() => go(1)} aria-label="Next testimonial">
            <Chevron dir="right" />
          </button>
        </div>

        <p className="t-label-sm mt-12 text-[var(--muted)]">4.98 / 5 average guest rating · Across 45+ verified private buyouts</p>
      </div>
    </section>
  );
}
