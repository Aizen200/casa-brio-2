'use client';

import { MapPin, Navigation, Compass, Car, ArrowUpRight } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function LocationAccess() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    estateData.brand.address
  )}`;

  return (
    <section id="location" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#f2ede4]/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Location Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#b9966a] font-sans block mb-3">
                LOCATION & ACCESS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f7f3ec] font-normal leading-[1.1] mb-6">
                Secluded in Lonavala.{' '}
                <span className="italic font-light text-[#b9966a]">
                  Effortless to Reach.
                </span>
              </h2>
              <p className="text-base text-[#a39c8f] font-sans font-light leading-relaxed">
                Tucked away in the quiet highlands near Tungarli Lake, Casa Brio offers serene mountain seclusion while remaining directly accessible from Mumbai and Pune via the expressway.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#16140f] border border-[#f2ede4]/10 space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#b9966a] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg text-[#f7f3ec] mb-1">Estate Coordinates</h4>
                  <p className="text-xs sm:text-sm text-[#a39c8f] font-sans leading-relaxed">
                    {estateData.brand.address}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#f2ede4]/10">
                {estateData.brand.driveTimes.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#f2ede4]">
                    <Car className="w-4 h-4 text-[#b9966a]" />
                    <span>
                      <strong>{item.from}:</strong> {item.time}{' '}
                      <span className="text-[#a39c8f] text-[11px]">({item.route})</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury px-6 py-3.5 rounded-full bg-[#f7f3ec] text-[#0d0c0a] hover:bg-[#b9966a] text-xs uppercase tracking-widest font-semibold transition-all flex items-center gap-2"
              >
                <span>Get Driving Directions</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-[#a39c8f] font-sans">
                Private Valet & Secure Parking for 8+ Vehicles
              </span>
            </div>
          </div>

          {/* Right Column: Visual Styled Map Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#f2ede4]/15 bg-[#16140f] p-8 sm:p-10 shadow-2xl flex flex-col justify-between aspect-[4/3]">
              {/* Decorative Map Grid & Graphic */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#b9966a_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#f7f3ec]">
                    Estate Gate Coordinates
                  </span>
                </div>
                <span className="text-xs text-[#b9966a] font-sans">18.7557° N, 73.4091° E</span>
              </div>

              <div className="relative z-10 my-auto text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#221f19] border-2 border-[#b9966a] flex items-center justify-center mx-auto mb-4 text-[#b9966a] shadow-[0_0_30px_rgba(185,150,106,0.3)]">
                  <Compass className="w-8 h-8 animate-pulse" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] mb-2">
                  Casa Brio Sanctuary
                </h3>
                <p className="text-xs sm:text-sm text-[#a39c8f] max-w-sm mx-auto font-sans">
                  Private gated grounds perched near Tungarli Lake with 360-degree Sahyadri mountain vistas.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[#f2ede4]/10 flex items-center justify-between text-xs text-[#a39c8f]">
                <span>Tungarli, Lonavala</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b9966a] hover:underline flex items-center gap-1"
                >
                  Open in Google Maps <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

