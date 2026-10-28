'use client';

import { ArrowRight, ArrowUp, Phone, Mail, MessageSquare } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-28 pb-12 px-6 lg:px-14 bg-[#0a0907] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Main Inquiries Banner (Editorial NOIRÉ Frame) */}
        <div className="p-8 sm:p-14 bg-[#16140f] border border-[#f2ede4]/12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#b9966a]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#b9966a] font-sans font-medium">
                PRIVATE ESTATE INQUIRIES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#f7f3ec] leading-[1.08] tracking-[-0.01em]">
              The entire estate.{' '}
              <span className="italic font-light text-[#b9966a]">
                Exclusively yours.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#a39c8f] font-sans font-light leading-relaxed">
              Single-group buyouts only. Zero strangers, shared gates, or curfews.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <button
              onClick={onOpenBooking}
              data-noire-roll-root
              data-nc="button"
              className="px-8 py-4 bg-[#f2ede4] text-[#0d0c0a] hover:bg-[#c9c0b2] text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-colors cursor-pointer"
            >
              <p data-noire-roll-label="RESERVE ESTATE" className="relative m-0">
                RESERVE ESTATE
              </p>
            </button>

            <a
              href={`https://wa.me/${estateData.brand.whatsapp}?text=Hello%20Casa%20Brio%20Concierge,%20I%20would%20like%20to%20check%20availability%20for%20a%20private%20buyout.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 border border-[#f2ede4]/20 hover:border-[#b9966a] text-[#f7f3ec] text-xs uppercase tracking-[0.2em] transition-colors flex items-center gap-2 font-sans font-medium"
              data-nc="link"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>

        {/* 4-Column Navigation & Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 border-t border-[#f2ede4]/10 text-xs">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#f7f3ec] tracking-wider font-light">
              {estateData.brand.name}
            </h3>
            <p className="text-[#a39c8f] font-sans leading-relaxed">
              A discreet Lonavala sanctuary nestled beneath the Sahyadri mountains. Designed for discerning families, founders offsites, and milestone celebrations.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#b9966a] block font-medium">
              Spaces
            </span>
            <ul className="space-y-2 text-[#a39c8f]">
              <li><a href="#spaces" className="noire-nav-link">REVEL Speakeasy & Lounge</a></li>
              <li><a href="#spaces" className="noire-nav-link">Sapphire Pool & Pergola</a></li>
              <li><a href="#spaces" className="noire-nav-link">Floodlit Box Cricket Turf</a></li>
              <li><a href="#spaces" className="noire-nav-link">Mountain Master Suites</a></li>
              <li><a href="#spaces" className="noire-nav-link">Grand Living & Dining Salon</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#b9966a] block font-medium">
              Navigation
            </span>
            <ul className="space-y-2 text-[#a39c8f]">
              <li><a href="#story" className="noire-nav-link">Estate Philosophy</a></li>
              <li><a href="#experiences" className="noire-nav-link">Experiences</a></li>
              <li><a href="#journal" className="noire-nav-link">Stories & Notes</a></li>
              <li><a href="#location" className="noire-nav-link">Location & Access</a></li>
              <li><a href="#contact" className="noire-nav-link">Direct Inquiries</a></li>
            </ul>
          </div>

          {/* Concierge */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#b9966a] block font-medium">
              Concierge
            </span>
            <div className="space-y-2 text-[#f7f3ec]">
              <a href={`tel:${estateData.brand.phone}`} className="flex items-center gap-2 hover:text-[#b9966a] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#b9966a]" />
                <span>+91 74003 38525</span>
              </a>
              <a href={`mailto:${estateData.brand.email}`} className="flex items-center gap-2 hover:text-[#b9966a] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#b9966a]" />
                <span>{estateData.brand.email}</span>
              </a>
              <p className="text-[11px] text-[#a39c8f] pt-2">
                Tungarli Hill Road, Lonavala, MH 410401
              </p>
            </div>
          </div>
        </div>

        {/* Giant Watermark CASA BRIO (Exact NOIRÉ Base Watermark) */}
        <div className="pt-12 pb-6 text-center select-none opacity-15 hover:opacity-25 transition-opacity">
          <span className="font-serif text-6xl sm:text-9xl md:text-[13vw] tracking-[0.2em] font-light text-[#f7f3ec] leading-none block">
            CASA BRIO
          </span>
        </div>

        {/* Bottom Sub-bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#a39c8f] pt-6 border-t border-[#f2ede4]/10 gap-4">
          <div>
            © {new Date().getFullYear()} Casa Brio Private Luxury Estate. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#b9966a] hover:text-[#dfc59e] transition-colors uppercase tracking-[0.18em] text-[10px] cursor-pointer"
            data-nc="link"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
