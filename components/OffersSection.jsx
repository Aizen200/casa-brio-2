'use client';

import { ArrowRight } from 'lucide-react';

export default function OffersSection({ onOpenBooking }) {
  const offers = [
    {
      tag: "STAY LONGER",
      title: "Founders Strategy Offsite",
      desc: "Reserve the estate for leadership teams up to 20. Seamless high-speed fibre broadband, 4K salon presentation screen, dedicated chef catering, and absolute seclusion from city noise.",
      details: "High-Speed WiFi · Double-Height Salon · Chef Dining"
    },
    {
      tag: "BUYOUT INVITATION",
      title: "Milestone Celebration & Speakeasy",
      desc: "Celebrate without boundaries or curfews. Access the subterranean REVEL snooker lounge, poolside BBQ grill, floodlit night box cricket, and zero noise restrictions.",
      details: "Zero Noise Curfew · Pool BBQ · Tournament Snooker"
    },
    {
      tag: "WEEKEND RETREAT",
      title: "Sanctuary Family Weekend",
      desc: "Gather multiple generations under one roof. 4 mountain master suites, crystal sapphire pool with wooden pergola deck, landscaped garden lawn, and round-the-clock butler service.",
      details: "4 Master Suites · Sapphire Pool · Butler Concierge"
    }
  ];

  return (
    <section className="py-28 sm:py-36 px-6 lg:px-14 bg-[#0d0c0a] border-b border-[#f2ede4]/10 relative select-none">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Eyebrow: 05 · Offers */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#b9966a]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#a39c8f] font-sans font-medium">
              05 · Offers
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em]">
            Reasons to stay a <span className="italic font-light text-[#b9966a]">little longer.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] font-sans font-light leading-relaxed">
            Whether an executive retreat, family milestone, or unhurried Sahyadri getaway.
          </p>
        </div>

        {/* 3 Editorial Cards (Exact NOIRÉ Card Proportion) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 bg-[#16140f] border border-[#f2ede4]/12 hover:border-[#b9966a]/50 transition-all duration-500 flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#b9966a] font-sans block font-medium">
                  {offer.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] font-normal leading-tight group-hover:text-[#b9966a] transition-colors">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cfc8bd] font-sans font-light leading-relaxed">
                  {offer.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#f2ede4]/10 space-y-4">
                <span className="text-[11px] font-mono text-[#a39c8f] block">
                  {offer.details}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#f7f3ec] group-hover:text-[#b9966a] transition-colors font-sans font-medium cursor-pointer"
                  data-nc="button"
                >
                  <span>Inquire Buyout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
