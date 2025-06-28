// src/App.tsx (VERSI DENGAN PRELOADER)

import React, { useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import MisiSection from './sections/MisiSection';
import SectionDivider from './components/Devider/SectionDivider';
import KeunggulanSection from './sections/KeunggulanSection';
import JasaSection from './sections/JasaSection';
import VisiSection from './sections/VisiSection';
import ImageRevealSection from './components/ImageReveal/ImageRevealSection';
import FutureSection from './sections/FutureSection';
import ClientSection from './sections/ClientSection';

import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  useEffect(() => {

    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    // 2. Sebagai jaminan, secara manual paksa scroll ke paling atas halaman.
    window.scrollTo(0, 0);
    // --- Setup Lenis Smooth Scroll ---
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    
    // ▼▼▼ LOGIKA PRELOADER & ENTRY ANIMATION ▼▼▼
    const masterTimeline = gsap.timeline();
    
    // 1. Buat #root terlihat, tapi tetap di belakang preloader.
    //    Gunakan .set() karena ini adalah perubahan instan.
    gsap.set("#root", { visibility: 'visible' });

    // 2. Animasikan preloader untuk menghilang (fade out).
    //    Delay ini harus sinkron dengan delay di HeroSection Anda.
    masterTimeline.to("#preloader", {
      opacity: 0,
      duration: 1.5,
      delay: 0.5, // Beri sedikit jeda sebelum fade out
      onComplete: () => {
        // Hapus preloader dari DOM setelah animasi selesai agar tidak mengganggu
        document.getElementById('preloader')?.remove();
      }
    });

  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <main>
        <HeroSection />
        <MisiSection />
        <AboutSection />
        {/* <VisiSection /> */}
        <ImageRevealSection />
        {/* <SectionDivider /> */}
        <JasaSection />
        <FutureSection/>
        <KeunggulanSection />
        <ClientSection />
        {/* Section Lainnya */}
      </main>
    </>
  );
}

export default App;