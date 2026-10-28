'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';
import { estateData } from '@/data/estateData';

export default function GalleryLightbox({ isOpen, initialPhoto, initialCategory, onClose }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    'All',
    'Speakeasy',
    'Aquatics',
    'Sports',
    'Suites',
    'Interiors',
    'Architecture',
  ];

  const filteredPhotos =
    activeCategory === 'All'
      ? estateData.allPhotos
      : estateData.allPhotos.filter((p) => p.category === activeCategory);

  // Set initial photo if supplied
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
    if (initialPhoto) {
      const idx = estateData.allPhotos.findIndex((p) => p.src === initialPhoto);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    }
  }, [initialPhoto, initialCategory, isOpen]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
  }, [filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  const currentPhoto = filteredPhotos[currentIndex] || filteredPhotos[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] bg-[#0d0c0a]/96 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 select-none">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-[#f2ede4]/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg sm:text-xl text-[#f7f3ec]">
              Casa Brio Visual Archive
            </span>
            <span className="text-xs font-mono text-[#b9966a] px-2.5 py-0.5 rounded-full bg-[#16140f] border border-[#f2ede4]/10">
              {currentIndex + 1} / {filteredPhotos.length}
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="hidden md:flex items-center gap-1.5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-sans transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#b9966a] text-[#0d0c0a] font-semibold'
                    : 'bg-[#16140f] text-[#a39c8f] hover:text-[#f7f3ec]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#16140f] border border-[#f2ede4]/15 hover:border-[#b9966a] text-[#f7f3ec] flex items-center justify-center transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Central Photographic Stage */}
        <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-[#16140f]/80 backdrop-blur-md border border-[#f2ede4]/20 hover:border-[#b9966a] text-[#f7f3ec] flex items-center justify-center transition-all hover:scale-105"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Photo with animation */}
          <AnimatePresence mode="wait">
            {currentPhoto && (
              <motion.div
                key={currentPhoto.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-5xl max-h-[70vh] w-full h-[65vh] rounded-2xl overflow-hidden border border-[#f2ede4]/10 shadow-2xl bg-[#000]"
              >
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  fill
                  priority
                  className="object-contain"
                />

                {/* Subtle caption banner */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0d0c0a]/90 via-[#0d0c0a]/40 to-transparent p-4 sm:p-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#b9966a] font-sans block">
                      {currentPhoto.category}
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl text-[#f7f3ec]">
                      {currentPhoto.title}
                    </h4>
                  </div>
                  <span className="text-xs text-[#a39c8f] font-sans hidden sm:inline-block">
                    Use arrow keys or swipe to navigate
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-[#16140f]/80 backdrop-blur-md border border-[#f2ede4]/20 hover:border-[#b9966a] text-[#f7f3ec] flex items-center justify-center transition-all hover:scale-105"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="border-t border-[#f2ede4]/10 pt-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {filteredPhotos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setCurrentIndex(i)}
                className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 border transition-all ${
                  currentIndex === i
                    ? 'border-[#b9966a] ring-2 ring-[#b9966a]/40 opacity-100 scale-105'
                    : 'border-[#f2ede4]/10 opacity-50 hover:opacity-100'
                }`}
              >
                <Image src={photo.src} alt={photo.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

