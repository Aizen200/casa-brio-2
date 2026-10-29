'use client';

import { useState } from 'react';
import { Button, Em } from '@/components/ui';

const guestOptions = ['Up to 8 guests', '10 – 15 guests', '16 – 20 guests', '20+ guests'];

const fmt = (v) =>
  v ? new Date(`${v}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function DateField({ label, value, onChange, min }) {
  return (
    <label className="booking-field">
      <span className="t-label-sm">
        {label}
        <Chevron />
      </span>
      <span className={`booking-value ${value ? '' : 'is-empty'}`}>{value ? fmt(value) : 'Add date'}</span>
      <input
        type="date"
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => e.currentTarget.showPicker?.()}
        aria-label={label}
      />
    </label>
  );
}

export default function Hero({ onOpenBooking }) {
  const today = new Date().toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(guestOptions[2]);

  return (
    <section id="top" className="hero" aria-label="Casa Brio">
      {/* Opening lockup: wordmark settles on the horizon line, then the photograph opens from it */}
      <div className="hero-lockup" aria-hidden="true">CASA BRIO</div>
      <div className="hero-line" aria-hidden="true" />

      <div className="hero-media">
        <div className="hero-scene">
          <img src="/images/bungalow/bedroom-suite-2.jpg" alt="Sunset over the Sahyadri range from the Casa Brio terrace" />
          <div className="hero-topveil" />
          <div className="hero-wordmark-wrap" aria-hidden="true">
            <div className="hero-wordmark">CASA BRIO</div>
          </div>
          {/* Ridge cut-out sits above the wordmark so the letters sink behind the mountains */}
          <img className="hero-cutout" src="/images/bungalow/terrace-sunset-ridge.webp" alt="" aria-hidden="true" />
          <div className="hero-veil" />
        </div>
      </div>

      <div className="hero-content">
        <div className="shell pb-10 lg:pb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-[1000px]">
              <div className="eyebrow hero-eyebrow">
                <span className="eyebrow-rule" />
                <span className="t-label">Private estate · Lonavala</span>
              </div>
              <h1 className="t-hero hero-headline mt-6 text-[var(--ivory)]">
                Private luxury estate. <Em>Entirely</Em> yours.
              </h1>
              <p className="t-lead hero-lead mt-6 text-[var(--ivory)] max-w-[780px]">
                A secluded single-group bungalow buyout in Lonavala featuring a private swimming pool, floodlit box
                cricket turf, and the REVEL speakeasy snooker lounge.
              </p>
            </div>
            <div className="hero-meta t-label text-[var(--stone)] lg:text-right flex lg:flex-col gap-x-6 gap-y-5 flex-wrap">
              <span>18°45′ N · 73°24′ E</span>
              <span>Tungarli, Lonavala</span>
              <span>Single-group buyout</span>
            </div>
          </div>

          <form
            className="booking hero-booking mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              onOpenBooking();
            }}
          >
            <DateField label="Check-in" value={checkIn} min={today} onChange={setCheckIn} />
            <DateField label="Check-out" value={checkOut} min={checkIn || today} onChange={setCheckOut} />
            <label className="booking-field">
              <span className="t-label-sm">
                Guests
                <Chevron />
              </span>
              <span className="booking-value">{guests}</span>
              <select value={guests} onChange={(e) => setGuests(e.target.value)} aria-label="Guests">
                {guestOptions.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </label>
            <div className="booking-field">
              <span className="t-label-sm">Estate</span>
              <span className="booking-value">Whole estate</span>
            </div>
            <Button variant="ivory" arrow className="booking-submit" type="submit">
              Check availability
            </Button>
          </form>
        </div>
      </div>
      <span className="hero-cue" aria-hidden="true" />
    </section>
  );
}
