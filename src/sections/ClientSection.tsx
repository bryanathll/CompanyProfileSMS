import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ClientSection.module.css';
import { useTranslation } from 'react-i18next'

// --- LANGKAH 1: Impor semua logo Anda di sini ---
// Ganti nama file dan path sesuai dengan file Anda di src/assets/logos/
import Asset1 from '../assets/LogoClient/Asset 1.png';
import Asset2 from '../assets/LogoClient/Asset 2.png';
import Asset3 from '../assets/LogoClient/Asset 3.png';
import Asset4 from '../assets/LogoClient/Asset 4.png';
import Asset5 from '../assets/LogoClient/Asset 5.png';
import Asset6 from '../assets/LogoClient/Asset 6.png';
import Asset7 from '../assets/LogoClient/Asset 7.png';
import Asset8 from '../assets/LogoClient/Asset 8.png';
import Asset9 from '../assets/LogoClient/Asset 9.png';
import Asset10 from '../assets/LogoClient/Asset 10.png';
import Asset11 from '../assets/LogoClient/Asset 11.png';
import Asset12 from '../assets/LogoClient/Asset 12.png';
import Asset13 from '../assets/LogoClient/Asset 13.png';
import Asset14 from '../assets/LogoClient/Asset 14.png';
import Asset15 from '../assets/LogoClient/Asset 15.png';
import Asset16 from '../assets/LogoClient/Asset 16.png';
import Asset17 from '../assets/LogoClient/Asset 17.png';
import Asset18 from '../assets/LogoClient/Asset 18.png';
import Asset19 from '../assets/LogoClient/Asset 19.png';
import Asset20 from '../assets/LogoClient/Asset 20.png';

gsap.registerPlugin(ScrollTrigger);

// --- LANGKAH 2: Buat data untuk setiap klien ---
// Isi array ini dengan semua klien Anda
const clientsData = [
  { logo: Asset1, name: ' PT MITRA TUJUH SAMUDRA' },
  { logo: Asset2, name: 'PT SINAR HALUAN SAMUDERA' },
  { logo: Asset3, name: 'PT INDAH KASIH ABADI' },
  { logo: Asset4, name: ' PT PELAYARAN ANEKA ATLANTICINDO NIDYATAMA ' },
  { logo: Asset5, name: ' PT SUMBER SAMUDRA BIRU' },
  { logo: Asset6, name: 'PT Makmur Utama Armadalines' },
  { logo: Asset7, name: ' PT BINTAN SAMUDRA PACIFIC' },
  { logo: Asset8, name: 'PT SANDICO OCEAN LINES' },
  { logo: Asset9, name: 'PT PELAYARAN NASIONAL BAHTERA ARMADA JAYA' },
  { logo: Asset10, name: ' PT PELAYARAN SINAR LAUTAN MUTIARA' },
  { logo: Asset11, name: 'PT WAHANA WIRATAMA LINE' },
  { logo: Asset12, name: ' PT PELNAS PASIFIK SAMUDERA SHIPPING' },
  { logo: Asset13, name: 'PT KORSA CAKRA LAUTAN' },
  { logo: Asset14, name: ' PT ARGO MITRA SUKSES' },
  { logo: Asset15, name: ' PT SUPARAJA ARMADA SAMUDRA' },
  { logo: Asset16, name: ' PT TEDINDO JAYA MANDIRI' },
  { logo: Asset17, name: 'PT WIDMARINE JAYA LINES' },
  { logo: Asset18, name: ' PT SETIA KENCANA SAMUDRA' },
  { logo: Asset19, name: 'PT MAKMUR UTAMA ARMADALINES' },
  { logo: Asset20, name: ' PT KAPALINDO PERKASA' },
];

const ClientSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi untuk memunculkan logo satu per satu
      gsap.from(`.${styles.logoItem}`, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.05, // Efek muncul satu per satu
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
      <h2 className={styles.title}>{t('clientTitle')}</h2>
      <p  className={styles.subtitle}>
        {t('clientDesc')}
      </p>
      <div className={styles.logoGrid}>
        {/* LANGKAH 3: Render data klien secara dinamis */}
        {clientsData.map((client, index) => (
          <div key={index} className={styles.logoItem}>
            <img src={client.logo} alt={client.name} className={styles.logoImage} />
            <p className={styles.logoName}>{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;