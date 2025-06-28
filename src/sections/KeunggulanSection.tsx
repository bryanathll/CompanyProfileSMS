// src/sections/KeunggulanSection.tsx (VERSI FINAL)

import React from 'react';
import styles from './KeunggulanSection.module.css';

// Impor gambar Anda di sini
import bgImage from '../assets/kapal1.png';
import cardImg1 from '../assets/klien.png';
import cardImg2 from '../assets/newtworking.png';
import cardImg3 from '../assets/tech.png';

const keunggulanData = [
  {
    image: cardImg1,
    title: 'Pendekatan yang berpusat pada klien',
    description: 'Kami mematuhi standar etika tertinggi dan berupaya membangun kepercayaan melalui transparansi dan komunikasi terbuka.',
  },
  {
    image: cardImg2,
    title: 'Jaringan Kemitraan yang Luas',
    description: 'Jaringan kemitraan kami yang mapan dan kontrak lokal yang dapat diandalkan memungkinkan kami merampingkan logistik.',
  },
  {
    image: cardImg3,
    title: 'Solusi Berbasis Teknologi',
    description: 'Kami memanfaatkan teknologi untuk mengoptimalkan proses dalam memberikan informasi kepada klien kami.',
  },
];

const KeunggulanSection: React.FC = () => {
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
          <h2 className={styles.mainTitle}>Keunggulan Kompetitif</h2>
          <p className={styles.subtitle}>
            Kami membedakan diri melalui beberapa kekuatan utama
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