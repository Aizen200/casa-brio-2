'use client';

import {
  Waves,
  Activity,
  GlassWater,
  Bed,
  UtensilsCrossed,
  Tv,
  Sparkles,
  Trees,
  Wifi,
  Flame,
  Gamepad2,
  ShieldCheck,
} from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function AmenitiesGrid() {
  const iconMap = {
    Waves,
    Activity,
    GlassWater,
    Bed,
    UtensilsCrossed,
    Tv,
    Sparkles,
    Trees,
    Wifi,
    Flame,
    Gamepad2,
    ShieldCheck,
  };

  return (
    <section id="amenities" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#f2ede4]/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-widest text-[#b9966a] font-sans block mb-3">
            INSIDE THE ESTATE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f7f3ec] font-normal leading-[1.1] mb-4">
            Everything Within{' '}
            <span className="italic font-light text-[#b9966a]">
              Your Walls.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] font-sans">
            Every amenity is exclusive to your group. Nothing shared, nothing restricted.
          </p>
        </div>

        {/* 12 Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {estateData.amenities.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#16140f] border border-[#f2ede4]/10 hover:border-[#b9966a]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#221f19] border border-[#b9966a]/30 flex items-center justify-center text-[#b9966a] mb-5 group-hover:scale-110 group-hover:bg-[#b9966a] group-hover:text-[#0d0c0a] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#f7f3ec] font-normal mb-2 group-hover:text-[#b9966a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a39c8f] font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

