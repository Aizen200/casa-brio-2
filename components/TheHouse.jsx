'use client';

import { Em, Eyebrow, TextLink } from '@/components/ui';

const facts = [
  { num: '100%', label: 'Private buyout', text: 'One group at a time. No strangers, no shared gates, no overlapping bookings.' },
  { num: '04', label: 'Master suites', text: 'Framing sweeping Sahyadri mountain vistas, each with an ensuite bath.' },
  { num: '00', label: 'Noise curfews', text: 'Inside the subterranean REVEL speakeasy lounge, the night is yours.' },
];

export default function TheHouse({ onSelectPhoto }) {
  return (
    <section id="about" className="sec bg-[var(--ink)] text-[var(--ivory)] pt-28 lg:pt-40 pb-24 lg:pb-36">
      <div className="shell">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          <div className="lg:col-span-6 px" style={{ '--px': '-24px' }}>
            <Eyebrow>01 · The estate</Eyebrow>
            <h2 className="t-display mt-8" data-reveal="" style={{ '--rb': '8px' }}>
              Unrivalled seclusion, <Em>entirely</Em> yours.
            </h2>
            <p className="t-lead mt-10 text-[var(--muted)] max-w-[600px]" data-reveal="" style={{ '--rd': '.08s' }}>
              Casa Brio is engineered around absolute privacy. When you reserve the estate, the entire property—from the
              temperature-controlled pool deck to the subterranean REVEL snooker lounge—belongs exclusively to your party
              with no strangers or shared gates.
            </p>
            <div className="mt-12" data-reveal="" style={{ '--rd': '.14s' }}>
              <TextLink href="#spaces">Explore the estate</TextLink>
            </div>
          </div>

          <figure className="lg:col-start-8 lg:col-span-4 px" style={{ '--px': '36px' }}>
            <button
              type="button"
              className="media-frame media-zoom block w-full aspect-[420/540]"
              data-reveal="clip"
              data-nc="media"
              data-nc-label="View"
              onClick={() => onSelectPhoto('/images/bungalow/drone-facade.jpg')}
            >
              <img className="img-cover clip-img" src="/images/bungalow/drone-facade.jpg" alt="Casa Brio facade beneath the Sahyadri hills" />
            </button>
            <figcaption className="t-label mt-5 text-[var(--muted)]" data-reveal="" style={{ '--rd': '.3s' }}>
              The estate · Tungarli Hill Road
            </figcaption>
          </figure>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-14 mt-24 lg:mt-32">
          {facts.map((f, i) => (
            <div key={f.label} className="px" style={{ '--px': `${12 + i * 10}px` }}>
              <div className="row-line" data-reveal="rule" style={{ '--rd': `${i * 0.1}s` }} />
              <div className="overflow-hidden pt-8">
                <div className="t-num" data-reveal="" style={{ '--ry': '100%', '--rd': `${0.1 + i * 0.1}s` }}>
                  {f.num}
                </div>
              </div>
              <div className="t-label mt-6" data-reveal="" style={{ '--rd': `${0.2 + i * 0.1}s` }}>
                {f.label}
              </div>
              <p className="t-body mt-5 text-[var(--muted)] max-w-[330px]" data-reveal="" style={{ '--rd': `${0.26 + i * 0.1}s` }}>
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
