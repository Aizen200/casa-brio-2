'use client';

import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenBooking, onOpenGallery }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#story' },
    { name: 'Rooms', href: '#spaces' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        data-noire-nav
        className="fixed top-0 left-0 right-0 z-50 h-20 md:h-24 px-6 lg:px-14 flex items-center justify-between transition-all duration-500 bg-[#0d0c0a]/30 backdrop-blur-md border-b border-[#f2ede4]/10 select-none"
      >
        {/* Brand Wordmark in Boska Serif */}
        <a
          href="#"
          className="group cursor-pointer flex items-baseline gap-2"
          data-nc="link"
        >
          <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.14em] text-[#f7f3ec] group-hover:text-[#b9966a] transition-colors">
            CASA BRIO
          </span>
        </a>

        {/* Desktop Navigation Links (Exact NOIRÉ Measure) */}
        <nav className="hidden lg:flex items-center gap-9 xl:gap-11">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="noire-nav-link text-xs uppercase tracking-[0.2em] text-[#a39c8f] hover:text-[#f7f3ec] py-1 font-sans font-medium transition-colors"
              data-nc="link"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenGallery}
            className="noire-nav-link text-xs uppercase tracking-[0.2em] text-[#b9966a] hover:text-[#dfc59e] py-1 font-sans font-medium transition-colors cursor-pointer"
            data-nc="link"
          >
            Gallery (26)
          </button>
        </nav>

        {/* Right Rectangular RESERVE Button (Exact NOIRÉ Blueprint) */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            data-noire-roll-root
            data-nc="button"
            className="hidden sm:flex items-center justify-center px-7 py-3 border border-[#f2ede4]/20 hover:border-[#b9966a] bg-[#0d0c0a]/50 hover:bg-[#f2ede4] text-[#f7f3ec] hover:text-[#0d0c0a] text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
          >
            <p data-noire-roll-label="RESERVE" className="relative m-0">
              RESERVE
            </p>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#f7f3ec] hover:text-[#b9966a] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            data-nc="button"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0c0a]/98 backdrop-blur-3xl flex flex-col justify-between p-8 pt-28 lg:hidden">
          <div className="flex flex-col space-y-6">
            <span className="text-[10px] tracking-[0.25em] text-[#b9966a] uppercase font-sans">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-[#f7f3ec] hover:text-[#b9966a] transition-colors flex items-center justify-between border-b border-[#f2ede4]/10 pb-3"
              >
                <span>{link.name}</span>
                <span className="text-sm font-sans tracking-[0.2em] text-[#a39c8f]">→</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGallery();
              }}
              className="font-serif text-3xl text-[#b9966a] text-left border-b border-[#f2ede4]/10 pb-3"
            >
              Gallery (26 Photos)
            </button>
          </div>

          <div className="space-y-4 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 text-center bg-[#f2ede4] text-[#0d0c0a] uppercase tracking-[0.2em] text-xs font-semibold"
            >
              Reserve Buyout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
