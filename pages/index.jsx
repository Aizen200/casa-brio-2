import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PhilosophyStory from '@/components/PhilosophyStory';
import SpacesShowcase from '@/components/SpacesShowcase';
import LoggiaFeature from '@/components/LoggiaFeature';
import ExperiencesSection from '@/components/ExperiencesSection';
import OffersSection from '@/components/OffersSection';
import TestimonialStage from '@/components/TestimonialStage';
import JournalSection from '@/components/JournalSection';
import AdayAtProperty from '@/components/AdayAtProperty';
import ArriveQuietly from '@/components/ArriveQuietly';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';
import GalleryLightbox from '@/components/GalleryLightbox';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenPhoto = (photoSrc) => {
    setSelectedPhoto(photoSrc);
    setGalleryOpen(true);
  };

  const handleOpenSpaceGallery = (space) => {
    setSelectedPhoto(space.coverImage);
    setGalleryOpen(true);
  };

  return (
    <>
      <Head>
        <title>Casa Brio | Private Luxury Bungalow in Lonavala | Pool, Turf &amp; Speakeasy</title>
        <meta
          name="description"
          content="A secluded single-group bungalow buyout in Lonavala featuring a private swimming pool, floodlit box cricket turf, and the REVEL speakeasy snooker lounge."
        />
        <meta property="og:title" content="Casa Brio — Private Luxury Bungalow in Lonavala" />
        <meta
          property="og:description"
          content="Exclusive private estate buyout in Lonavala with pool, box cricket turf, 4 master suites, and REVEL underground speakeasy."
        />
        <meta property="og:image" content="/images/bungalow/drone-facade.jpg" />
      </Head>

      <main className="min-h-screen bg-[#0d0c0a] text-[#f7f3ec] selection:bg-[#b9966a] selection:text-[#0d0c0a]">
        {/* Fixed Navbar with Auto-hide on scroll and rolling CTA */}
        <Navbar
          onOpenBooking={() => setBookingOpen(true)}
          onOpenGallery={() => {
            setSelectedPhoto(null);
            setGalleryOpen(true);
          }}
        />

        {/* 01. Horizon Hero with Horizon line, opening stage, wordmark and cue dot */}
        <Hero
          onOpenBooking={() => setBookingOpen(true)}
          onOpenGallery={() => {
            setSelectedPhoto(null);
            setGalleryOpen(true);
          }}
          onSelectPhoto={handleOpenPhoto}
        />

        {/* 02. The House: Philosophy & Seclusion Statement with Numeral Mask facts */}
        <PhilosophyStory
          onOpenBooking={() => setBookingOpen(true)}
          onSelectPhoto={handleOpenPhoto}
        />

        {/* 03. Rooms, Suites and Villas: The 6 Signature Spaces with Bottom Horizon Text Elevator */}
        <SpacesShowcase
          onOpenSpaceGallery={handleOpenSpaceGallery}
          onOpenBooking={() => setBookingOpen(true)}
          onSelectPhoto={handleOpenPhoto}
        />

        {/* 04. The Lake: Loggia Full-Bleed Landscape Feature */}
        <LoggiaFeature onSelectPhoto={handleOpenPhoto} />

        {/* 05. Experiences: Days that run on estate time */}
        <ExperiencesSection onSelectPhoto={handleOpenPhoto} />

        {/* 06. Offers: Curated Buyout Invitations / Reasons to stay longer */}
        <OffersSection onOpenBooking={() => setBookingOpen(true)} />

        {/* 07. Testimonials: In Their Words (Full-bleed cinematic stage with desaturation & 19em measure) */}
        <TestimonialStage />

        {/* 08. Journal: Notes from the estate */}
        <JournalSection onSelectPhoto={handleOpenPhoto} />

        {/* 09. A Day at the Property: 24-Hour photographic timeline with lightbox trigger */}
        <AdayAtProperty onSelectPhoto={handleOpenPhoto} />

        {/* 10. Arrive quietly: Location & Directions */}
        <ArriveQuietly />

        {/* 11. Footer with Giant CASA BRIO Watermark */}
        <Footer onOpenBooking={() => setBookingOpen(true)} />

        {/* Buyout Concierge Modal */}
        <ReservationModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />

        {/* Fullscreen Photo Lightbox (26 Photos) */}
        <GalleryLightbox
          isOpen={galleryOpen}
          initialPhoto={selectedPhoto}
          onClose={() => {
            setGalleryOpen(false);
            setSelectedPhoto(null);
          }}
        />
      </main>
    </>
  );
}
