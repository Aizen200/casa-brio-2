'use client';

import { estateData } from '@/data/estateData';
import { Button, Em, Roll } from '@/components/ui';

const { brand } = estateData;
const whatsapp = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hello Casa Brio Concierge, I would like to enquire about a private estate buyout.')}`;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.address)}`;

const columns = [
  {
    title: 'The spaces',
    links: [
      ['REVEL speakeasy & bar', '#revel'],
      ['Sapphire pool & pergola', '#spaces'],
      ['Floodlit cricket turf', '#spaces'],
      ['Mountain view suites', '#spaces'],
      ['Grand living salon', '#spaces'],
    ],
  },
  {
    title: 'The estate',
    links: [
      ['About the estate', '#about'],
      ['Experiences', '#experiences'],
      ['Buyouts', '#buyouts'],
      ['A day at Casa Brio', '#day'],
    ],
  },
  {
    title: 'Visit',
    links: [
      ['Location & access', '#location'],
      ['Get directions', mapsUrl],
      ['Guest words', '#words'],
    ],
  },
  {
    title: 'Concierge',
    links: [
      [brand.phone, `tel:${brand.phone.replace(/\s/g, '')}`],
      [brand.email, `mailto:${brand.email}`],
      ['WhatsApp', whatsapp],
    ],
  },
];

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-[var(--ink)] text-[var(--ivory)]">
      {/* Arrive quietly */}
      <div className="relative overflow-hidden">
        <img
          src="/images/bungalow/drone-facade.jpg"
          alt="Casa Brio beneath the Sahyadri hills"
          className="absolute inset-0 w-full h-full object-cover px"
          style={{ '--px': '60px', scale: '1.15', filter: 'brightness(.62) saturate(.85)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--ink)_0%,rgba(13,12,10,.35)_30%,rgba(13,12,10,.2)_55%,var(--ink)_96%)]" />
        <div className="relative shell pt-40 lg:pt-56 flex flex-col items-center text-center">
          <span className="t-label text-[var(--stone)]" data-reveal="">
            Tungarli · Lonavala
          </span>
          <h2 className="t-display mt-7" data-reveal="" style={{ '--rd': '.06s', '--rb': '8px' }}>
            The entire estate. <Em>Exclusively yours.</Em>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6" data-reveal="" style={{ '--rd': '.14s' }}>
            <Button variant="ivory" arrow onClick={onOpenBooking}>
              Reserve the estate
            </Button>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="t-label roll-host text-[var(--ivory)]">
              <Roll>Or WhatsApp the concierge</Roll>
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden mt-24 lg:mt-36 flex justify-center" aria-hidden="true">
          <div className="foot-word" data-reveal="" style={{ '--ry': '45%' }}>
            CASA BRIO
          </div>
        </div>
      </div>

      {/* info */}
      <div className="shell pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="flex flex-col gap-5 t-lead">
            <span>{brand.address.replace('Casa Brio Estate, ', '')}</span>
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="w-fit">
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="w-fit">
              {brand.email}
            </a>
            <p className="t-body !text-[15px] text-[var(--muted)] max-w-[360px]">
              Hosted for one private group at a time. ~90 minutes from Mumbai and ~60 minutes from Pune via the
              Mumbai–Pune Expressway.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-[24px] leading-tight">Speak to the concierge</h3>
            <p className="t-body !text-[15px] mt-4 text-[var(--muted)] max-w-[480px]">
              Share your dates and party size, and we will reply with availability and buyout details for the whole
              estate.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${brand.phone.replace(/\s/g, '')}`}
                className="flex-1 h-[52px] flex items-center px-5 border border-[var(--line-2)] text-[15px] text-[var(--muted)] hover:text-[var(--ivory)] transition-colors"
              >
                Call {brand.phone}
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ivory roll-host h-[52px]">
                <span className="t-label">
                  <Roll>WhatsApp</Roll>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--line)] mt-16 pt-12 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="t-label-sm text-[var(--stone)]">{c.title}</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="foot-link t-body !text-[16px] break-words"
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="t-body !text-[15px] text-[var(--muted)] mt-14">
          Single-group buyout only · Dedicated butler & chef care · Zero noise curfews
        </p>
      </div>

      <div className="border-t border-[var(--line)] mt-12">
        <div className="shell py-8 flex flex-col sm:flex-row gap-5 sm:items-center justify-between t-body !text-[15px] text-[var(--muted)]">
          <span>© 2026 Casa Brio — Private Luxury Estate, Lonavala</span>
          <div className="flex items-center gap-8">
            <a href="#top" className="t-label text-[var(--ivory)] roll-host flex items-center gap-2">
              <Roll>Back to top</Roll>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
