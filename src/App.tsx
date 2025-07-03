// src/App.tsx (VERSI DENGAN PRELOADER)

import React, { useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import MisiSection from './sections/MisiSection';
import KeunggulanSection from './sections/KeunggulanSection';
import JasaSection from './sections/JasaSection';
import ImageRevealSection from './components/ImageReveal/ImageRevealSection';
import FutureSection from './sections/FutureSection';
import ClientSection from './sections/ClientSection';
import ContactSection from './sections/Contact';
import Footer from './components/footer';


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

    const masterTimeline = gsap.timeline();
    

    gsap.set("#root", { visibility: 'visible' });


    masterTimeline.to("#preloader", {
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      onComplete: () => {
        document.getElementById('preloader')?.remove();
      }
    });

  }, []);

    useEffect(() => {
    // KUNCI UTAMA: Gunakan setTimeout untuk memastikan perintah ini dijalankan paling akhir
    const timer = setTimeout(() => {
      // Selalu paksa scroll ke paling atas halaman
      window.scrollTo(0, 0);

      // Hapus hash dari URL jika ada
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }, 0); // Delay 0ms sudah cukup untuk mendorongnya ke akhir antrian

    // Selalu set scroll restoration ke manual
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    // Cleanup timer saat komponen di-unmount
    return () => clearTimeout(timer);
    
  }, []);

  return (
    <>
      {/* <Navbar /> */}
        <Navbar />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="misi"><MisiSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="imageReveal"><ImageRevealSection /></section>
        <section id="jasa"><JasaSection /></section>
        <section id="future"><FutureSection/></section>
        <section id="keunggulan"><KeunggulanSection /></section>
        <section id="client"><ClientSection /></section>
        <section id="contact"><ContactSection /></section>
        <section id="footer"><Footer /></section>
        {/* Section Lainnya */}
      </main>
    </>
  );
}

export default App;