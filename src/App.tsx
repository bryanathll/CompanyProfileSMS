// src/App.tsx

import { useEffect } from 'react';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let globalLenis: Lenis | null = null;
export function scrollToTarget(targetId: string) {
  if (globalLenis) {
    const el = document.getElementById(targetId);
    if (el) {
      globalLenis.scrollTo(el, {
        offset: -50, // jika pakai sticky navbar
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3), // custom ease out
      });
    }
  }
}

function App() {
  useEffect(() => {
  window.scrollTo(0, 0);
  
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname);
  }
    // Registrasi plugin
    gsap.registerPlugin(ScrollTrigger);

    // Konfigurasi ScrollTrigger
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Set scroll manual & scroll ke atas saat load
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    

    // Init Lenis
    const lenis = new Lenis();
    globalLenis = lenis;
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Gunakan hanya 1 raf dari GSAP
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    // Delay animasi agar layout selesai
    const animationDelay = setTimeout(() => {
      gsap.set("#root", { visibility: 'visible' });

      const masterTimeline = gsap.timeline();

        masterTimeline.to("#preloader", {
          opacity: 0,
          duration: 1.5,
          delay: 0.5,
          onComplete: () => {
            document.getElementById('preloader')?.remove();

            // Paksa update ScrollTrigger setelah Lenis siap
            ScrollTrigger.refresh();

            // ✅ Trigger animasi Hero
            window.dispatchEvent(new Event('start-hero-animation'));
          }
        });
    }, 100); // Delay 100ms agar layout stabil

    // Cleanup
    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      clearTimeout(animationDelay);
    };
    
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="misi"><MisiSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="imageReveal"><ImageRevealSection /></section>
        <section id="jasa"><JasaSection /></section>
        <section id="future"><FutureSection /></section>
        <section id="keunggulan"><KeunggulanSection /></section>
        <section id="client"><ClientSection /></section>
        <section id="contact"><ContactSection /></section>
        <section id="footer"><Footer /></section>
      </main>
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
