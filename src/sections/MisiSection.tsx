// src/sections/MisiSection.tsx (VERSI BARU SESUAI GAMBAR)

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MisiSection.module.css';
import MisiCard from '../components/MisiCard/MisiCard';
import { useTranslation } from 'react-i18next'

// ▼▼▼ PENTING: Ganti dengan path ikon Anda yang sebenarnya ▼▼▼
import iconIntegritas from '../assets/timbang.png';
import iconKeahlian from '../assets/keahlian.png';
import iconDedikasi from '../assets/panahDedikasi.png';
import iconPelayanan from '../assets/bintang.png';

gsap.registerPlugin(ScrollTrigger);

const misiData = [
  {
    icon: iconIntegritas,
    title: 'cardTitle1',
    description: 'cardDesc1',
  },
  {
    icon: iconKeahlian,
    title: 'cardTitle2',
    description: 'cardDesc2',
  },
  {
    icon: iconDedikasi,
    title: 'cardTitle3',
    description: 'cardDesc3',
  },
  {
    icon: iconPelayanan,
    title: 'cardTitle4',
    description: 'cardDesc4',
  },
];

const MisiSection: React.FC = () => {
  const { t } = useTranslation(); 
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Animasi fade-in untuk setiap kartu
    const ctx = gsap.context(() => {
      gsap.from('.misi-card', {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.mainTitle}>{t('misiTitle')}</h2>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          {t('misiDesc')}
        </p>
      </div>
      <div className={styles.gridContainer}>
        {misiData.map((misi, index) => (
          <div key={index} className="misi-card">
            <MisiCard
              icon={misi.icon}
              title={t(misi.title)}
              description={t(misi.description)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MisiSection;