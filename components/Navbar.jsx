'use client';

import { useEffect, useState } from 'react';
import { Button, Roll } from '@/components/ui';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Spaces', href: '#spaces' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'REVEL', href: '#revel' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenBooking }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 90);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`nav ${solid || open ? 'is-solid' : ''}`} data-noire-nav>
        <div className="shell nav-inner">
          <a href="#top" className="nav-logo" aria-label="Casa Brio, back to top">
            CASA BRIO
          </a>
          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link t-label roll-host">
                <Roll>{l.label}</Roll>
              </a>
            ))}
          </nav>
          <Button variant="ink" className="nav-cta" onClick={onOpenBooking}>
            Reserve
          </Button>
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={open ? { transform: 'translateY(3.5px) rotate(45deg)' } : undefined} />
            <span style={open ? { transform: 'translateY(-3.5px) rotate(-45deg)' } : undefined} />
          </button>
        </div>
      </header>

      <div className={`nav-sheet ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="flex flex-col gap-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mt-12">
          <Button
            variant="ivory"
            arrow
            tabIndex={open ? 0 : -1}
            onClick={() => {
              setOpen(false);
              onOpenBooking();
            }}
          >
            Reserve the estate
          </Button>
        </div>
      </div>
    </>
  );
}
