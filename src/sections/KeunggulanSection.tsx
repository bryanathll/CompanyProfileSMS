// src/sections/KeunggulanSection.tsx (DENGAN ANIMASI TEKS 2 BARIS)

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './KeunggulanSection.module.css';
import { useTranslation } from 'react-i18next'

// Impor gambar Anda di sini
import bgImage from '../assets/kapal1.png';
import cardImg1 from '../assets/klien.png';
import cardImg2 from '../assets/newtworking.png';
import cardImg3 from '../assets/tech.png';

gsap.registerPlugin(ScrollTrigger);

const KeunggulanSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { t } = useTranslation();
  
  // Ubah title menjadi 2 baris
  const titleLines = [t('titleKeunggulan1'), t('titleKeunggulan2')];

  const keunggulanData = [
        {
          image: cardImg1,
          title: t('titleKeunggulanCard1'),
          description: t('descKeunggulanCard1'),
        },
        {
          image: cardImg2,
          title: t('titleKeunggulanCard2'),
          description: t('descKeunggulanCard1'),
        },
        {
          image: cardImg3,
          title: t('titleKeunggulanCard3'),
          description: t('descKeunggulanCard1'),
        },
      ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambil semua karakter dari baris pertama dan kedua
      const line1Chars = titleRef.current?.querySelectorAll('.line-1');
      const line2Chars = titleRef.current?.querySelectorAll('.line-2');


      if (!line1Chars || !line2Chars) {
        console.error('Karakter tidak ditemukan');
        return;
      }

      // Set initial state untuk semua karakter
      gsap.set([line1Chars, line2Chars], {
        y: 100,
        opacity: 0,
      });

      // Set initial state untuk subtitle
      gsap.set(subtitleRef.current, {
        y: 30,
        opacity: 0,
      });

      // Buat timeline utama
      const mainTimeline = gsap.timeline();

      // Animasi baris pertama dengan stagger
      mainTimeline.to(line1Chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 0.2, // Total waktu stagger untuk semua huruf
          ease: "power2.out"
        },
        ease: "back.out(1.7)",
      });

      // Animasi baris kedua dimulai setelah baris pertama selesai
      mainTimeline.to(line2Chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 0.2, // Sedikit lebih lama karena teks lebih panjang
          ease: "power2.out"
        },
        ease: "back.out(1.7)",
      }, "-=0.8"); // Mulai sedikit sebelum animasi pertama benar-benar selesai

      // Animasi subtitle setelah judul selesai
      mainTimeline.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.8");

      // Trigger animasi saat scroll
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        animation: mainTimeline,
        toggleActions: "play none none reverse", // play saat masuk, reverse saat keluar
      });

    }, titleRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Fungsi untuk memecah teks menjadi huruf dengan class yang tepat
  const splitTextToChars = (text: string, lineClass: string) => {
    return text.split('').map((char, charIndex) => (
      <span key={`${lineClass}-${charIndex}`} className={styles.charWrapper}>
        <span className={`${styles.charToAnimate} ${lineClass}`}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      </span>
    ));
  };

  return (
    <section 
        className={styles.section} 
        style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay untuk background utama */}
      <div className={styles.backgroundOverlay}></div>

      {/* Frame utama yang berisi semua konten */}
      <div className={styles.frame}>
        <div className={styles.titleContainer}>
          <h2 ref={titleRef} className={styles.mainTitle} aria-label={titleLines.join(' ')}>
            <span className={styles.titleLine}>
              {splitTextToChars(titleLines[0], 'line-1')}
            </span>
            <span className={styles.titleLine}>
              {splitTextToChars(titleLines[1], 'line-2')}
            </span>
          </h2>
          <p ref={subtitleRef} className={styles.subtitle}>
            {t('descKeunggulan')}
          </p>
        </div>

        <div className={styles.gridContainer}>
          {keunggulanData.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeunggulanSection;