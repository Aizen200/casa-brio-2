'use client';

import { estateData } from '@/data/estateData';
import { Em, Eyebrow, TextLink } from '@/components/ui';

const f = estateData.revelDen.features;

const story = [
  { kicker: 'The den', feature: f[0], image: '/images/bungalow/speakeasy-snooker-neon.png' },
  { kicker: 'The bar', feature: f[1], image: '/images/bungalow/bar-ambiance-warm.png' },
  { kicker: 'The lounge', feature: f[4], image: '/images/bungalow/billiards-leather-lounge.png' },
];

function Story({ item, big, onSelectPhoto, delay = 0 }) {
  return (
    <article>
      <button
        type="button"
        onClick={() => onSelectPhoto(item.image)}
        className={`media-frame media-zoom block w-full ${big ? 'aspect-[612/760]' : 'aspect-[364/420]'}`}
        data-reveal="clip"
        style={{ '--rd': `${delay}s` }}
        data-nc="media"
        data-nc-label="View"
      >
        <img className="img-cover clip-img" src={item.image} alt={item.feature.title} loading="lazy" />
      </button>
      <div className="pt-7">
        <div className="flex items-center gap-4 text-[var(--muted-ink)]" data-reveal="">
          <span className="t-label-sm text-[var(--ink-3)]">{item.kicker}</span>
          <span className="w-5 h-px bg-[var(--line-ink)]" />
          <span className="t-body !text-[15px]">REVEL</span>
        </div>
        <h3 className={`${big ? 't-h3' : 't-h4'} mt-5`} data-reveal="" style={{ '--rd': '.06s' }}>
          {item.feature.title}
        </h3>
        <p className={`t-body mt-4 text-[var(--muted-ink)] ${big ? 'max-w-[520px]' : '!text-[15px]'}`} data-reveal="" style={{ '--rd': '.1s' }}>
          {item.feature.desc}
        </p>
      </div>
    </article>
  );
}

export default function RevelSection({ onSelectPhoto, onOpenGallery }) {
  return (
    <section id="revel" className="sec on-light py-24 lg:py-40">
      <div className="shell lg:px-[calc(var(--gutter)+120px)]">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <Eyebrow>07 · The underground den</Eyebrow>
            <h2 className="t-h2 mt-7" data-reveal="">
              REVEL. <Em>The private speakeasy.</Em>
            </h2>
          </div>
          <div className="lg:col-start-8 lg:col-span-5">
            <p className="t-body text-[var(--muted-ink)]" data-reveal="">
              {estateData.revelDen.description}
            </p>
            <div className="mt-8" data-reveal="" style={{ '--rd': '.08s' }}>
              <TextLink onClick={onOpenGallery}>Explore REVEL</TextLink>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-8 mt-16 lg:mt-20">
          <div className="lg:col-span-7">
            <Story item={story[0]} big onSelectPhoto={onSelectPhoto} />
          </div>
          <div className="lg:col-start-9 lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-14">
            <Story item={story[1]} onSelectPhoto={onSelectPhoto} delay={0.1} />
            <Story item={story[2]} onSelectPhoto={onSelectPhoto} delay={0.2} />
          </div>
        </div>
      </div>

      {/* the full amenity list */}
      <div className="shell mt-28 lg:mt-40">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h3 className="t-h2" data-reveal="">
            Inside the estate. <Em>Nothing shared.</Em>
          </h3>
          <p className="t-body text-[var(--muted-ink)] max-w-[400px]" data-reveal="">
            Every amenity is exclusive to your group. Nothing shared, nothing restricted.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 mt-12">
          {estateData.amenities.map((a, i) => (
            <div key={a.title} className="row-line py-7" data-reveal="" style={{ '--rd': `${(i % 4) * 0.06}s` }}>
              <span className="t-label-sm text-[var(--gold)]">{String(i + 1).padStart(2, '0')}</span>
              <div className="font-serif text-[22px] leading-tight mt-4">{a.title}</div>
              <p className="t-body !text-[15px] !leading-[1.55] mt-2 text-[var(--muted-ink)]">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
