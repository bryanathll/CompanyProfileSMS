// src/sections/HeroSection.tsx (SOLUSI FINAL DENGAN EFEK PARALLAX ALAMAT)

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger
import styles from './HeroSection.module.css';

import heroBgImage from '../assets/hero1.png'; 

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi zoom-out pada gambar latar (tetap ada)
      gsap.from(`.${styles.image}`, {
        scale: 1.20,
        duration: 3.5,
        ease: 'power3.out',
      });

      gsap.set(`.${styles.addressContainer}`, {y: "-20vh"});
      // ▼▼▼ ANIMASI BARU UNTUK EFEK PARALLAX PADA ALAMAT ▼▼▼

      gsap.to(`.${styles.addressContainer}`, {
                y: 0, // Animasikan kembali y ke posisi 0
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // scrub dibuat lebih cepat agar terasa natural
        }
        })

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
          Menjadi mitra terpercaya dan dapat diandalkan di setiap situasi untuk semua pelayaran di Indonesia
        </p>
        <button className={styles.ctaButton}>Kontak Kami</button>
      </div>

      <div className={styles.addressContainer}>
        <p>Ruko Kara Junction Blok B No.8 Batam Centre - Kepulauan Riau</p>
      </div>
    </section>
  );
};

export default HeroSection;