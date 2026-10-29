'use client';

import { useRef, useState } from 'react';
import { Em, Eyebrow, TextLink, useIsDesktop, useRunwayProgress } from '@/components/ui';

const experiences = [
  {
    tab: 'Dining',
    title: 'Gourmet Welcome by Your Private Chef',
    meta: ['Arrival · 2:00 PM', 'Chef & butler'],
    desc: 'Step into the air-conditioned living salon where welcome drinks await, followed by a multi-course lunch prepared by your private chef.',
    link: 'Discover dining',
    image: '/images/bungalow/interior-portrait-2.jpg',
  },
  {
    tab: 'Pool',
    title: 'Sapphire Pool & Pergola',
    meta: ['Day & night', 'Illuminated deck'],
    desc: 'Crystal blue water beneath an illuminated wooden pergola, with sun loungers, poolside barbecue and alfresco dining framed by greenery.',
    link: 'Discover the pool',
    image: '/images/bungalow/pool-day-pergola.jpg',
  },
  {
    tab: 'Turf',
    title: 'Floodlit Box Cricket Turf',
    meta: ['Under floodlights', 'Kits provided'],
    desc: 'A fully enclosed private pitch inside the estate boundary for competitive day matches and late-night games under high-lumen floodlights.',
    link: 'Discover the turf',
    image: '/images/bungalow/turf-angle-3.png',
  },
  {
    tab: 'REVEL',
    title: 'Nights at the REVEL Speakeasy',
    meta: ['After dusk', 'Zero curfews'],
    desc: 'Head underground for tournament snooker, a private bar and high-fidelity acoustics, with no noise complaints and no time limits.',
    link: 'Discover REVEL',
    image: '/images/bungalow/snooker-bar-lounge.jpg',
  },
];

function Card({ active, onSelectPhoto }) {
  return (
    <div className="relative h-full overflow-hidden bg-[var(--ink-2)]">
      {experiences.map((x, i) => (
        <div key={x.tab} className={`xp-slide ${i === active ? 'is-active' : ''}`} aria-hidden={i !== active}>
          <img className="img-cover" src={x.image} alt={x.title} loading="lazy" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0)_35%,rgba(13,12,10,.82))]" />
          <div className="xp-copy absolute left-0 right-0 bottom-0 p-7 lg:p-12 max-w-[560px]">
            <h3 className="t-h3">{x.title}</h3>
            <div className="t-label mt-5 text-[var(--stone)] flex gap-3">
              <span>{x.meta[0]}</span>
              <span aria-hidden="true">·</span>
              <span>{x.meta[1]}</span>
            </div>
            <p className="t-body mt-5 text-[rgba(242,237,228,.85)]">{x.desc}</p>
            <div className="mt-8">
              <TextLink onClick={() => onSelectPhoto(x.image)} tabIndex={i === active ? 0 : -1}>
                {x.link}
              </TextLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Tabs({ active, fill, onPick }) {
  return (
    <div role="tablist" aria-label="Experiences">
      {experiences.map((x, i) => (
        <button
          key={x.tab}
          type="button"
          role="tab"
          aria-selected={i === active}
          className={`xp-tab ${i === active ? 'is-active' : ''}`}
          onClick={() => onPick(i)}
        >
          <span className="t-label-sm w-6">{String(i + 1).padStart(2, '0')}</span>
          <span className="t-h2">{x.tab}</span>
          <span className="xp-dash" />
          {i === active && <span className="xp-bar" style={{ transform: `scaleX(${fill})` }} />}
        </button>
      ))}
    </div>
  );
}

export default function ExperiencesSection({ onSelectPhoto }) {
  const desktop = useIsDesktop();
  const runway = useRef(null);
  const p = useRunwayProgress(runway);
  const [picked, setPicked] = useState(0);

  const n = experiences.length;
  const active = desktop ? Math.min(n - 1, Math.floor(p * n)) : picked;
  const fill = desktop ? Math.min(1, p * n - active) : 1;

  const goTo = (i) => {
    if (!desktop) return setPicked(i);
    const el = runway.current;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((i + 0.08) / n) * total, behavior: 'smooth' });
  };

  return (
    <section id="experiences" className="sec bg-[var(--ink)] text-[var(--ivory)]">
      <div className="shell pt-24 lg:pt-36 pb-14 lg:pb-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div>
            <Eyebrow>04 · Experiences</Eyebrow>
            <h2 className="t-h2 mt-7" data-reveal="">
              Days that run
              <br />
              on <Em>estate time.</Em>
            </h2>
          </div>
          <div className="max-w-[400px]">
            <p className="t-body text-[var(--muted)]" data-reveal="">
              A private rhythm where every hour belongs solely to your party. Everything can be arranged; nothing is
              required.
            </p>
            <div className="mt-8" data-reveal="" style={{ '--rd': '.08s' }}>
              <TextLink href="#day">A day at Casa Brio</TextLink>
            </div>
          </div>
        </div>
      </div>

      {desktop ? (
        <div ref={runway} className="pin-runway" style={{ height: `${100 + n * 70}vh` }}>
          <div className="pin-stage">
            <div className="shell">
              <div className="grid grid-cols-12 h-[min(755px,84vh)]" data-reveal="" style={{ '--ry': '40px' }}>
                <div className="col-span-7 h-full">
                  <Card active={active} onSelectPhoto={onSelectPhoto} />
                </div>
                <div className="col-span-5 h-full bg-[var(--ink-2)] flex items-center px-12">
                  <div className="w-full">
                    <Tabs active={active} fill={fill} onPick={goTo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="shell pb-24">
          <div className="h-[72vh] min-h-[460px]">
            <Card active={active} onSelectPhoto={onSelectPhoto} />
          </div>
          <div className="mt-8">
            <Tabs active={active} fill={fill} onPick={goTo} />
          </div>
        </div>
      )}
    </section>
  );
}
