// src/sections/MisiSection.tsx (VERSI BARU SESUAI GAMBAR)

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MisiSection.module.css';
import MisiCard from '../components/MisiCard/MisiCard';

// ▼▼▼ PENTING: Ganti dengan path ikon Anda yang sebenarnya ▼▼▼
import iconIntegritas from '../assets/timbang.png';
import iconKeahlian from '../assets/keahlian.png';
import iconDedikasi from '../assets/panahDedikasi.png';
import iconPelayanan from '../assets/bintang.png';

gsap.registerPlugin(ScrollTrigger);

const misiData = [
  {
    icon: iconIntegritas,
    title: 'Integritas Tanpa Kompromi',
    description: 'Kami mematuhi standar etika tertinggi dan berupaya membangun kepercayaan melalui transparansi dan komunikasi terbuka.',
  },
  {
    icon: iconKeahlian,
    title: 'Keahlian yang Tak Tertandingi',
    description: 'Tim kami yang terdiri dari para profesional berkualifikasi tinggi dan berpengalaman memiliki pengetahuan mendalam tentang peraturan maritim.',
  },
  {
    icon: iconDedikasi,
    title: 'Dedikasi yang Tak Tergoyahkan',
    description: 'Kami berkomitmen untuk memberikan perhatian yang dipersonalisasi dan solusi efisien untuk kebutuhan unik setiap klien.',
  },
  {
    icon: iconPelayanan,
    title: 'Pelayanan Terbaik',
    description: 'Memberikan pelayanan yang maksimal, membangun kepercayaan serta kepuasan klien adalah tujuan utama kami.',
  },
];

const MisiSection: React.FC = () => {
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
        <h2 className={styles.mainTitle}>Misi Kami</h2>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          Misi kami adalah untuk menjadi mitra keagenan kapal pilihan yang dapat melampaui harapan bagi klien domestik maupun internasional.
        </p>
      </div>
      <div className={styles.gridContainer}>
        {misiData.map((misi, index) => (
          <div key={index} className="misi-card">
            <MisiCard
              icon={misi.icon}
              title={misi.title}
              description={misi.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MisiSection;