  // src/sections/HeroSection.tsx (SOLUSI FINAL DENGAN EFEK PARALLAX ALAMAT)

  import React, { useLayoutEffect, useRef } from 'react';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger
  import styles from './HeroSection.module.css';
  import { useTranslation } from 'react-i18next'
  import { scrollToTarget } from '../App';

  import heroBgImage from '../assets/hero1.png'; 

  gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin

  const HeroSection: React.FC = () => {
    const { t } = useTranslation(); 
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        
        gsap.from(`.${styles.image}`, {
          scale: 1.20,
          duration: 3.5,
          ease: 'power3.out',
        });
        
        ScrollTrigger.matchMedia({
          
          // (min-width: 768px) -> Untuk layar DESKTOP & TABLET
          "(min-width: 768px)": function() {
            // EFEK PARALLAX HANYA BERJALAN DI LAYAR LEBAR
            
            // 1. Langsung tempatkan alamat di posisi terlihat
            gsap.set(`.${styles.addressContainer}`, { y: "-20vh" });

            // 2. Animasikan kembali ke posisi semula saat scroll
            gsap.to(`.${styles.addressContainer}`, {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
              }
            });
          },

          // (max-width: 767px) -> Untuk layar MOBILE
          "(max-width: 767px)": function() {
            // TIDAK ADA ANIMASI GSAP UNTUK ALAMAT DI MOBILE
            // Posisinya akan diatur sepenuhnya oleh CSS.
            // Kita pastikan nilai y-nya 0.
            gsap.set(`.${styles.addressContainer}`, { y: 0 });
          }

        });
      }, sectionRef);

      return () => ctx.revert();
    }, []);

    return (
      <section ref={sectionRef} className={styles.section}>
        <img
          src={heroBgImage}
          alt="Pelabuhan kapal kontainer"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        
        <div className={styles.contentContainer}>
          <h1 className={styles.mainTitle}>Samudera Maju Sejati</h1>
          <p className={styles.subtitle}>
            {t('hero_subtitle')}
          </p>
          <a href="#contact" onClick={() => { scrollToTarget('contact'); }} className={styles.ctaButton}>
            {t('hero_button')}
          </a>
        </div>

        <div className={styles.addressContainer}>
          <p>{t('hero_address')}</p>
        </div>
      </section>
    );
  };

  export default HeroSection;