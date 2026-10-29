import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TheHouse from '@/components/TheHouse';
import SpacesWalkthrough from '@/components/SpacesWalkthrough';
import SahyadriSection from '@/components/SahyadriSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import OffersSection from '@/components/OffersSection';
import TestimonialStage from '@/components/TestimonialStage';
import RevelSection from '@/components/RevelSection';
import DayTimeline from '@/components/DayTimeline';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';
import GalleryLightbox from '@/components/GalleryLightbox';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [gallery, setGallery] = useState({ open: false, photo: null, category: null });

  const openBooking = () => setBookingOpen(true);
  const openPhoto = (photo) => setGallery({ open: true, photo, category: null });
  const openGallery = (category = null) => setGallery({ open: true, photo: null, category });

  return (
    <>
      <Head>
        <title>Casa Brio | Private Luxury Bungalow in Lonavala | Pool, Turf &amp; Speakeasy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
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

      <Navbar onOpenBooking={openBooking} />

      <main className="bg-[var(--ink)] text-[var(--ivory)]">
        <Hero onOpenBooking={openBooking} />
        <TheHouse onSelectPhoto={openPhoto} />
        <SpacesWalkthrough onOpenGallery={() => openGallery()} onOpenSpace={(s) => openPhoto(s.coverImage)} />
        <SahyadriSection onSelectPhoto={openPhoto} />
        <ExperiencesSection onSelectPhoto={openPhoto} />
        <OffersSection onOpenBooking={openBooking} />
        <TestimonialStage />
        <RevelSection onSelectPhoto={openPhoto} onOpenGallery={() => openGallery('Speakeasy')} />
        <DayTimeline onSelectPhoto={openPhoto} />
      </main>

      <Footer onOpenBooking={openBooking} />

      <ReservationModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <GalleryLightbox
        isOpen={gallery.open}
        initialPhoto={gallery.photo}
        initialCategory={gallery.category}
        onClose={() => setGallery({ open: false, photo: null, category: null })}
      />
    </>
  );
}
