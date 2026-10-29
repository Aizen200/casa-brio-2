'use client';

import { estateData } from '@/data/estateData';
import { Em, Eyebrow, TextLink } from '@/components/ui';

const routes = [
  { place: 'Pune', mode: 'By car', time: '1 hr' },
  { place: 'Mumbai', mode: 'By car', time: '1 hr 30' },
  { place: 'Tungarli Lake', mode: 'Neighbour', time: 'Near' },
];

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(estateData.brand.address)}`;

function RouteMap() {
  return (
    <svg viewBox="0 0 560 680" className="w-full h-auto max-w-[560px]" fill="none" aria-label="Map: Casa Brio sits between Mumbai and Pune on the expressway">
      {/* coastline */}
      <path
        className="lm-draw"
        style={{ '--len': 760 }}
        d="M58 0c-6 46 10 84-2 128-10 36-34 52-30 96 4 40 30 58 26 104-4 44-30 70-28 118 2 52 26 88 22 136-2 30-14 58-18 98"
        stroke="rgba(242,237,228,.28)"
        strokeWidth="1"
      />
      {/* ghat contours around Lonavala */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="lm-draw"
          style={{ '--len': 520, '--rd': `${0.3 + i * 0.15}s` }}
          d={`M${190 - i * 22} ${430 + i * 26}c40-${70 + i * 8} 70-${120 + i * 10} 122-${118 + i * 6}s76 ${60 + i * 6} 116 ${44 + i * 4}`}
          stroke="rgba(242,237,228,.12)"
          strokeWidth="1"
        />
      ))}
      {/* expressway */}
      <path
        className="lm-draw"
        style={{ '--len': 620, '--rd': '.2s' }}
        d="M96 214c48 14 82 48 112 78 30 30 52 52 92 66 40 14 64 44 88 76 26 34 54 66 86 86"
        stroke="rgba(242,237,228,.5)"
        strokeWidth="1"
      />
      <path className="lm-route" d="M96 214c48 14 82 48 112 78 30 30 52 52 92 66 40 14 64 44 88 76 26 34 54 66 86 86" stroke="#B9966A" strokeWidth="1.2" />
      {/* Tungarli Lake */}
      <path
        className="lm-draw"
        style={{ '--len': 240, '--rd': '.9s' }}
        d="M286 300c10-10 30-12 38-2 8 10 2 26-12 30-14 4-30 0-32-12-1-6 2-12 6-16z"
        stroke="rgba(242,237,228,.8)"
        strokeWidth="1"
      />
      {/* cities */}
      <circle cx="96" cy="214" r="3" fill="#F2EDE4" />
      <circle cx="474" cy="520" r="3" fill="#F2EDE4" />
      {/* estate */}
      <circle className="lm-pulse" cx="300" cy="358" r="12" stroke="#B9966A" strokeWidth="1" />
      <circle cx="300" cy="358" r="4" fill="#B9966A" />

      <g fill="rgba(242,237,228,.6)" fontFamily="Satoshi, sans-serif" fontSize="11" letterSpacing="1.6">
        <text x="110" y="206">MUMBAI</text>
        <text x="420" y="548">PUNE</text>
        <text x="334" y="296">TUNGARLI LAKE</text>
        <text x="318" y="378" fill="#B9966A">CASA BRIO</text>
        <text x="200" y="470" fill="rgba(242,237,228,.35)">SAHYADRI GHATS</text>
        <text x="16" y="640" fill="rgba(242,237,228,.35)">ARABIAN SEA</text>
      </g>
      {/* north + scale */}
      <g stroke="rgba(242,237,228,.6)" strokeWidth="1">
        <path d="M500 96V56M494 64l6-8 6 8" />
        <path d="M410 640h80M410 636v8M490 636v8" />
      </g>
      <g fill="rgba(242,237,228,.6)" fontFamily="Satoshi, sans-serif" fontSize="10" letterSpacing="1.4">
        <text x="496" y="114">N</text>
        <text x="434" y="662">20 KM</text>
      </g>
    </svg>
  );
}

export default function SahyadriSection({ onSelectPhoto }) {
  return (
    <section id="location" className="sec bg-[var(--ink)] text-[var(--ivory)]">
      {/* full-bleed band */}
      <div className="relative h-[100svh] min-h-[560px]" data-reveal="clip">
        <button
          type="button"
          className="absolute inset-0 overflow-hidden"
          data-nc="media"
          data-nc-label="View"
          onClick={() => onSelectPhoto('/images/bungalow/pool-night-pergola.jpg')}
        >
          <img className="img-cover clip-img" src="/images/bungalow/pool-night-pergola.jpg" alt="The pergola pool deck lit at night" />
        </button>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(13,12,10,0)_50%,rgba(13,12,10,.75))]" />
        <div className="shell absolute inset-x-0 bottom-0 pb-12 lg:pb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pointer-events-none">
          <h2 className="t-display" data-reveal="" style={{ '--rd': '.4s', '--rb': '8px' }}>
            Everything within
            <br />
            <Em>your walls.</Em>
          </h2>
          <span className="t-label text-[var(--stone)]" data-reveal="" style={{ '--rd': '.55s' }}>
            The pergola pool after dark
          </span>
        </div>
      </div>

      {/* body */}
      <div className="shell pt-24 lg:pt-40 pb-28 lg:pb-40">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1" data-reveal="" style={{ '--ry': '0px' }}>
            <RouteMap />
          </div>
          <div className="lg:col-start-8 lg:col-span-5 order-1 lg:order-2">
            <Eyebrow>03 · The Sahyadris</Eyebrow>
            <h2 className="t-h2 mt-7" data-reveal="">
              Pune within the hour. <Em>Mumbai by the expressway.</Em>
            </h2>
            <p className="t-body mt-9 text-[var(--muted)]" data-reveal="" style={{ '--rd': '.08s' }}>
              Casa Brio sits on Tungarli Hill Road, near Tungarli Lake, nestled beneath the Sahyadri mountains. Both
              cities are an easy drive along the Mumbai–Pune Expressway, and once the gates close the estate is
              entirely your own.
            </p>
            <div className="mt-12">
              {routes.map((r, i) => (
                <div
                  key={r.place}
                  className="row-line grid grid-cols-[1fr_auto_96px] items-baseline gap-6 py-5"
                  data-reveal=""
                  style={{ '--rd': `${0.1 + i * 0.07}s` }}
                >
                  <span className="t-h2" style={{ fontSize: 'clamp(24px,2vw,30px)' }}>{r.place}</span>
                  <span className="t-label-sm text-[var(--muted)]">{r.mode}</span>
                  <span className="font-serif text-[24px] lg:text-[26px] leading-none text-right">{r.time}</span>
                </div>
              ))}
              <div className="row-line" />
            </div>
            <p className="t-label mt-9 text-[var(--gold)]" data-reveal="">
              18°45′ N · 73°24′ E · Tungarli, Lonavala 410401
            </p>
            <div className="mt-9" data-reveal="">
              <TextLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
