'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dates: '',
    guests: '12 - 16 Guests',
    occasion: 'Private Family Buyout',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const occasionOptions = [
    'Private Family Buyout',
    'Executive / Founders Retreat',
    'Milestone Birthday Celebration',
    'Intimate Wedding / Anniversary',
    'Weekend Getaway with Friends',
  ];

  const guestOptions = [
    'Up to 8 Guests',
    '10 - 15 Guests',
    '16 - 20 Guests',
    '20+ Guests (Full Estate)',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Casa Brio Concierge,\n\nI am requesting a private buyout inquiry:\n- Name: ${formData.name || 'Interested Guest'}\n- Preferred Dates: ${formData.dates || 'Flexible'}\n- Guests: ${formData.guests}\n- Occasion: ${formData.occasion}\n- Notes: ${formData.notes || 'None'}\n\nPlease share availability and buyout details.`
    );
    window.open(`https://wa.me/${estateData.brand.whatsapp}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0d0c0a]/85 backdrop-blur-xl"
        />

        {/* Modal Card with max-h-[92vh] and internal smooth scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 14 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#16140f] border border-[#f2ede4]/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-5 sm:p-7 z-10 my-auto text-[#f2ede4] select-none"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(185, 150, 106, 0.3) transparent',
          }}
        >
          {/* Subtle gold ambient corner */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#b9966a]/10 rounded-full blur-[60px] pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-[#221f19] border border-[#f2ede4]/15 hover:border-[#b9966a] text-[#f7f3ec] hover:text-[#b9966a] flex items-center justify-center transition-colors cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {!submitted ? (
            <div className="space-y-4">
              {/* Header */}
              <div className="pr-8 space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#b9966a] font-sans font-medium block">
                  100% PRIVATE BUYOUT ONLY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] font-normal leading-tight">
                  Reserve Casa Brio Estate
                </h3>
                <p className="text-xs text-[#a39c8f] font-sans font-light leading-relaxed">
                  Zero shared spaces. The entire 4-suite estate, pool, box turf, and REVEL speakeasy solely for your group.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#a39c8f] mb-1 font-sans font-medium">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kabir Mehra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#221f19] border border-[#f2ede4]/12 text-xs sm:text-sm text-[#f7f3ec] placeholder-[#6b655a] focus:outline-none focus:border-[#b9966a] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#a39c8f] mb-1 font-sans font-medium">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#221f19] border border-[#f2ede4]/12 text-xs sm:text-sm text-[#f7f3ec] placeholder-[#6b655a] focus:outline-none focus:border-[#b9966a] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Dates & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#a39c8f] mb-1 font-sans font-medium">
                      Preferred Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nov 14 – Nov 16"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#221f19] border border-[#f2ede4]/12 text-xs sm:text-sm text-[#f7f3ec] placeholder-[#6b655a] focus:outline-none focus:border-[#b9966a] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#a39c8f] mb-1 font-sans font-medium">
                      Guest Count
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#221f19] border border-[#f2ede4]/12 text-xs sm:text-sm text-[#f7f3ec] focus:outline-none focus:border-[#b9966a] transition-colors cursor-pointer"
                    >
                      {guestOptions.map((g) => (
                        <option key={g} value={g} className="bg-[#16140f] text-[#f7f3ec]">
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Occasion */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-[#a39c8f] mb-1 font-sans font-medium">
                    Occasion / Event Type
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#221f19] border border-[#f2ede4]/12 text-xs sm:text-sm text-[#f7f3ec] focus:outline-none focus:border-[#b9966a] transition-colors cursor-pointer"
                  >
                    {occasionOptions.map((o) => (
                      <option key={o} value={o} className="bg-[#16140f] text-[#f7f3ec]">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Notes */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-[#a39c8f] mb-1 font-sans font-medium">
                    Special Inquiries / Chef Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Barbecue preferences, box cricket tournament, live mixology..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#221f19] border border-[#f2ede4]/12 text-xs sm:text-sm text-[#f7f3ec] placeholder-[#6b655a] focus:outline-none focus:border-[#b9966a] transition-colors resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 space-y-2">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-3 bg-[#10b981] hover:bg-[#059669] text-[#0d0c0a] font-sans text-xs uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#10b981]/15"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire Instantly on WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#f2ede4] hover:bg-[#b9966a] text-[#0d0c0a] font-sans text-xs uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Buyout Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Direct Concierge Line */}
                <div className="text-center pt-1">
                  <span className="text-[10px] text-[#a39c8f] font-sans tracking-wide">
                    Prefer to call? Direct Concierge line:{' '}
                    <a
                      href={`tel:${estateData.brand.phone}`}
                      className="text-[#b9966a] hover:text-[#dfc59e] transition-colors"
                    >
                      {estateData.brand.phone}
                    </a>
                  </span>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-5">
              <div className="w-14 h-14 bg-[#b9966a]/15 border border-[#b9966a] flex items-center justify-center mx-auto text-[#b9966a]">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec]">
                Inquiry Received
              </h3>
              <p className="text-xs sm:text-sm text-[#a39c8f] max-w-sm mx-auto font-sans leading-relaxed">
                Thank you, {formData.name}. Our concierge manager will reach out via WhatsApp at <strong>{formData.phone}</strong> with availability and buyout details.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#10b981] text-[#0d0c0a] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#221f19] border border-[#f2ede4]/15 text-[#f7f3ec] text-xs uppercase tracking-widest cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
