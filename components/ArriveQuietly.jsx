'use client';

import { ArrowUpRight, Navigation, MapPin } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function ArriveQuietly() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    estateData.brand.address
  )}`;

  return (
    <section id="location" className="py-28 sm:py-36 px-6 lg:px-12 bg-[#0d0c0a] border-b border-[#f2ede4]/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#b9966a] font-sans block">
            LOCATION & ACCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#f7f3ec] leading-[1.08]">
            Arrive quietly.{' '}
            <span className="italic font-light text-[#b9966a]">
              Lonavala.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] font-sans font-light">
            Highland sanctuary near Tungarli Lake with direct expressway connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Coordinates Card */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-2xl bg-[#16140f] border border-[#f2ede4]/10 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#b9966a] uppercase tracking-widest block">
                COORDINATES: 18.7557° N, 73.4091° E
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] font-normal">
                {estateData.brand.address}
              </h3>
              <p className="text-xs sm:text-sm text-[#a39c8f] font-sans leading-relaxed">
                Discreet private estate gates with security checkpoint and parking pavilion for up to 8 vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#f2ede4]/10">
              {estateData.brand.driveTimes.map((item, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#b9966a] font-sans font-medium">
                    From {item.from}
                  </span>
                  <p className="font-serif text-xl text-[#f7f3ec]">
                    {item.time}
                  </p>
                  <span className="text-[11px] text-[#a39c8f] font-sans">
                    {item.route}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f7f3ec] text-[#0d0c0a] hover:bg-[#b9966a] text-xs uppercase tracking-[0.18em] font-semibold transition-colors"
                data-nc="button"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Map Graphic Preview */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#16140f] border border-[#f2ede4]/10 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-2 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#b9966a] font-sans block">
                SANCTUARY SURROUNDINGS
              </span>
              <h4 className="font-serif text-xl text-[#f7f3ec]">
                Tungarli Lake Reserve
              </h4>
            </div>

            <div className="my-8 py-8 border-y border-[#f2ede4]/10 space-y-3 relative z-10 text-xs text-[#a39c8f]">
              <div className="flex items-center justify-between">
                <span>Tungarli Lake & Dam</span>
                <span className="text-[#f7f3ec]">3 mins</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mumbai-Pune Expressway Exit</span>
                <span className="text-[#f7f3ec]">12 mins</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Lonavala Railway Station</span>
                <span className="text-[#f7f3ec]">10 mins</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Rajmachi Viewpoint Trail</span>
                <span className="text-[#f7f3ec]">15 mins</span>
              </div>
            </div>

            <div className="text-[11px] text-[#6b655a] relative z-10">
              Private gated road with continuous estate security.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

