'use client';

import { Em, Eyebrow, TextLink } from '@/components/ui';

const offers = [
  {
    tag: 'Founders & leadership teams',
    title: 'Founders Offsite',
    desc: 'Reserve the estate for a strategy offsite. High-speed fibre broadband, the double-height salon with its 4K screen, dedicated chef catering, and absolute seclusion from city noise.',
    details: 'High-speed WiFi · 4K salon · Chef dining',
    image: '/images/bungalow/living-lounge-party.jpg',
  },
  {
    tag: 'Birthdays & milestones',
    title: 'Milestone Celebration',
    desc: 'Celebrate without boundaries or curfews: the REVEL snooker lounge, a poolside barbecue grill, floodlit night cricket and zero noise restrictions.',
    details: 'Zero noise curfew · Pool BBQ · Tournament snooker',
    image: '/images/bungalow/party-lounge-detail.jpg',
  },
  {
    tag: 'Families & friends',
    title: 'Sanctuary Weekend',
    desc: 'Gather multiple generations under one roof: four mountain suites, the sapphire pool, the garden lawn and round-the-clock butler service.',
    details: '4 master suites · Sapphire pool · Butler concierge',
    image: '/images/bungalow/pool-party-celebration.png',
  },
];

export default function OffersSection({ onOpenBooking }) {
  const [feature, ...rest] = offers;

  return (
    <section id="buyouts" className="sec on-light py-24 lg:py-40">
      <div className="shell">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div>
            <Eyebrow>05 · Buyouts</Eyebrow>
            <h2 className="t-h2 mt-7" data-reveal="">
              Reasons to take <Em>the whole estate.</Em>
            </h2>
          </div>
          <p className="t-body text-[var(--muted-ink)] max-w-[400px]" data-reveal="">
            Whether an intimate celebration, a founders retreat, or a slow weekend beneath the Sahyadris, Casa Brio is
            hosted for one private group at a time.
          </p>
        </div>

        {/* feature offer */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center mt-16 lg:mt-24">
          <button
            type="button"
            onClick={onOpenBooking}
            className="lg:col-span-7 media-frame media-zoom aspect-[780/600] block w-full"
            data-reveal="clip"
            data-nc="media"
            data-nc-label="Enquire"
          >
            <img className="img-cover clip-img" src={feature.image} alt={feature.title} loading="lazy" />
          </button>
          <div className="lg:col-start-9 lg:col-span-4">
            <div className="eyebrow" data-reveal="">
              <span className="eyebrow-rule" />
              <span className="t-label-sm">{feature.tag}</span>
            </div>
            <h3 className="t-display mt-7" data-reveal="" style={{ '--rd': '.06s' }}>
              {feature.title}
            </h3>
            <p className="t-lead mt-7 text-[var(--muted-ink)]" data-reveal="" style={{ '--rd': '.12s' }}>
              {feature.desc}
            </p>
            <p className="t-label-sm mt-8 text-[var(--muted-ink)]" data-reveal="">
              {feature.details}
            </p>
            <div className="mt-10" data-reveal="">
              <TextLink onClick={onOpenBooking}>Request this buyout</TextLink>
            </div>
          </div>
        </div>

        {/* two smaller offers */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-8 mt-20 lg:mt-28">
          {rest.map((o, i) => (
            <article key={o.title}>
              <button
                type="button"
                onClick={onOpenBooking}
                className="media-frame media-zoom aspect-[624/420] block w-full"
                data-reveal="clip"
                style={{ '--rd': `${i * 0.12}s` }}
                data-nc="media"
                data-nc-label="Enquire"
              >
                <img className="img-cover clip-img" src={o.image} alt={o.title} loading="lazy" />
              </button>
              <div className="pt-8 max-w-[520px]">
                <span className="t-label-sm text-[var(--muted-ink)]" data-reveal="">
                  {o.tag}
                </span>
                <h3 className="t-h3 mt-5" data-reveal="" style={{ '--rd': '.06s' }}>
                  {o.title}
                </h3>
                <p className="t-body mt-5 text-[var(--muted-ink)]" data-reveal="" style={{ '--rd': '.1s' }}>
                  {o.desc}
                </p>
                <div className="mt-8" data-reveal="">
                  <TextLink onClick={onOpenBooking}>Request this buyout</TextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
