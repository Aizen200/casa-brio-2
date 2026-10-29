'use client';

import { useRef } from 'react';
import { estateData } from '@/data/estateData';
import { Em, Eyebrow, useIsDesktop, useRunwayProgress } from '@/components/ui';

// Hours elapsed since arrival, used to space the ticks on the axis
const hours = [0, 2, 6.5, 18.5, 21];
const span = hours[hours.length - 1];

const steps = estateData.timeline.map((t, i) => ({
  ...t,
  shortTitle: ['The arrival', 'The afternoon', 'The night', 'The morning', 'The farewell'][i],
  at: hours[i] / span,
}));

function Kicker({ s }) {
  return (
    <span className="t-label-sm day-kicker">
      {s.day} · {s.time} · {s.tagline}
    </span>
  );
}

export default function DayTimeline({ onSelectPhoto }) {
  const desktop = useIsDesktop();
  const runway = useRef(null);
  const p = useRunwayProgress(runway);
  const n = steps.length;

  const pos = p * (n - 1);
  const active = Math.round(pos);
  const lo = Math.floor(pos);
  const hi = Math.min(n - 1, lo + 1);
  const axis = steps[lo].at + (steps[hi].at - steps[lo].at) * (pos - lo);
  const cur = steps[active];

  const header = (
    <div className="shell pt-24 lg:pt-36">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:px-[120px]">
        <div>
          <Eyebrow>08 · A day at Casa Brio</Eyebrow>
          <h2 className="t-h2 mt-7" data-reveal="">
            From first light to <Em>the last rally.</Em>
          </h2>
        </div>
        <p className="t-body text-[var(--muted)]" data-reveal="">
          Select any photograph to see it larger.
        </p>
      </div>
    </div>
  );

  if (!desktop) {
    return (
      <section id="day" className="sec bg-[var(--ink)] text-[var(--ivory)] pb-24">
        {header}
        <div className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory px-[var(--gutter)] [scrollbar-width:none]">
          {steps.map((s) => (
            <article key={s.number} className="day-card is-active snap-start flex-none w-[80vw] max-w-[420px]">
              <button type="button" onClick={() => onSelectPhoto(s.image)} className="media-frame block w-full aspect-[4/3]">
                <img className="img-cover" src={s.image} alt={s.title} loading="lazy" />
              </button>
              <div className="pt-6">
                <Kicker s={s} />
                <h3 className="t-h4 mt-3">{s.shortTitle}</h3>
                <p className="t-body !text-[15px] mt-2 text-[var(--muted)]">{s.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="day" className="sec bg-[var(--ink)] text-[var(--ivory)]">
      {header}
      <div ref={runway} className="pin-runway" style={{ height: `${100 + n * 55}vh` }}>
        <div className="pin-stage">
          <div className="shell">
            <div className="flex items-end justify-between px-[120px]">
              <div className="flex items-baseline gap-4">
                <span className="font-serif font-light text-[60px] leading-none tracking-[-0.02em]" key={cur.time}>
                  {cur.time}
                </span>
                <span className="t-label-sm text-[var(--stone)]">{cur.day}</span>
              </div>
              <span className="t-label-sm text-[var(--stone)]">
                {cur.number} / {String(n).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="overflow-hidden mt-8">
            <div
              className="flex gap-10 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]"
              style={{
                paddingLeft: 'calc(max(var(--gutter), (100vw - 1440px) / 2 + var(--gutter)) + 120px)',
                transform: `translate3d(calc(${-active} * (min(355px, 26vw) + 40px)), 0, 0)`,
              }}
            >
              {steps.map((s, i) => (
                <article
                  key={s.number}
                  className={`day-card flex-none transition-[width] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${i === active ? 'is-active' : ''}`}
                  style={{ width: i === active ? 'min(665px, 48vw)' : 'min(355px, 26vw)' }}
                >
                  <button
                    type="button"
                    onClick={() => onSelectPhoto(s.image)}
                    className="media-frame block w-full h-[min(470px,48vh)]"
                    data-nc="media"
                    data-nc-label="View"
                    data-nc-icon="plus"
                  >
                    <img className="img-cover" src={s.image} alt={s.title} loading="lazy" />
                  </button>
                  <div className="pt-6 max-w-[520px]">
                    <Kicker s={s} />
                    <h3 className="t-h4 mt-3">{s.title}</h3>
                    <p className="t-body !text-[15px] mt-2 text-[var(--muted)] line-clamp-2">{s.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="shell mt-10">
            <div className="relative mx-[120px] h-px bg-[var(--line-2)]">
              <div className="absolute inset-y-0 left-0 bg-[var(--gold)]" style={{ width: `${axis * 100}%` }} />
              {steps.map((s, i) => (
                <div key={s.number} className="absolute" style={{ left: `${s.at * 100}%` }}>
                  <span className={`day-tick ${s.at <= axis + 0.001 ? 'is-past' : ''}`} />
                  <span
                    className={`t-label-sm absolute top-5 -translate-x-1/2 whitespace-nowrap transition-colors duration-500 ${i === active ? 'text-[var(--ivory)]' : 'text-[var(--muted-2)]'}`}
                  >
                    {s.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
