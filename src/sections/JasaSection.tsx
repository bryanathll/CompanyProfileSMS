// jasaSection.tsx

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { useTranslation } from 'react-i18next'

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './JasaSection.module.css';
import JasaCard from '../components/JasaCard/JasaCard';

// Import gambar 
import imgAgenPelabuhan from '../assets/CardJasa/AgenPelabuhan.png';
import imgAgenKapal from '../assets/CardJasa/agenKapal.png';
import imgPenangananKru from '../assets/CardJasa/PenangananKru.png';
import imgPasokan from '../assets/CardJasa/PasokanPerbekalann.png';
import imgPencairan from '../assets/CardJasa/PencairanAkuntasi.png';
import imgLayananTambahan from '../assets/CardJasa/tanggapDarurat.png';

gsap.registerPlugin(ScrollTrigger);


const JasaSection: React.FC = () => {
  const { t } = useTranslation(); 
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleLines = [t("jasaTitle1"), t("jasaTitle2")];
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const jasaData = [
  { title: t('JasaTitleCard1'), image: imgAgenPelabuhan, description: t('jasaDesc1') },
  { title: t('JasaTitleCard2'), image: imgAgenKapal, description: t('jasaDesc2') },
  { title: t('JasaTitleCard3'), image: imgPenangananKru, description: t('jasaDesc3') },
  { title: t('JasaTitleCard4'), image: imgPasokan, description: t('jasaDesc4') },
  { title: t('JasaTitleCard5'), image: imgPencairan, description: t('jasaDesc5') },
  { title: t('JasaTitleCard6'), image: imgLayananTambahan, description: t('jasaDesc6') },
];
  
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);

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
        animation: mainTimeline,
        toggleActions: 'play none none reverse'
      });

    }, titleRef);

    return () => {
      window.removeEventListener('resize', handleResize);
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
    <section className={styles.section}>
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
          {t('jasaDesc')}
        </p>
      </div>
      {isDesktop ? (
          <div className={styles.desktopGrid}>
              {jasaData.map((jasa, index) => (
                  <JasaCard key={index} {...jasa} />
              ))}
          </div>
      ) : (
          <Swiper
            modules={[Pagination, A11y]}
            className={styles.swiperContainer}
            spaceBetween={0}
            pagination={{ clickable: true }}
            grabCursor={true}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {jasaData.map((jasa, index) => (
              <SwiperSlide key={index}>
                <JasaCard {...jasa} />
              </SwiperSlide>
            ))}
          </Swiper>
      )}
    </section>
  );
};

export default JasaSection;