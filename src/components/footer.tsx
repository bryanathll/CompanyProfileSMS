// src/components/Footer/Footer.tsx

import React from 'react';
import styles from './Footer.module.css';
import logoImage from '../assets/logoWhite.png'; // Sesuaikan path ke logo Anda

// Impor ikon dari react-icons
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logoImage} alt="Logo Samudera Maju Sejati" className={styles.logo} />
        
        <p className={styles.companyName}>PT SAMUDERA MAJU SEJATI</p>

        <nav className={styles.nav}>
          <a href="#about">Tentang kami</a>
          <a href="#vision">Visi/Misi</a>
          <a href="#clients">Klien</a>
          <a href="#services">Layanan</a>
          <a href="#">Bahasa Indonesia (Bahasa Inggris)</a>
        </nav>

        <p className={styles.caption}>
          Kami mengundang anda untuk menghubungi kami, mendiskusikan kebutuhan spesifik anda dan mempelajari bagaimana PT. Samudra Maju Sejati dapat menjadi partner terpercaya untuk segala kebutuhan keagenan kapal anda.
        </p>

        <div className={styles.contactInfo}>
          <a href="https://wa.me/6285295112229" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <FaWhatsapp size={20} />
            <span>0852 9511 2229</span>
          </a>
          <a href="mailto:info.smsshipping@gmail.com" className={styles.contactItem}>
            <IoMdMail size={20} />
            <span>info.smsshipping@gmail.com</span>
          </a>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.builtBy}>
            Built by IT Department Indoproff
          </p>
          <p className={styles.copyright}>
            © 2025 Samudera Maju Sejati
          </p>
          <a href="https://wa.me/6285295112229" target="_blank" rel="noopener noreferrer" className={styles.footerContact}>
            <FaWhatsapp size={16} />
            <span>Hubungi IT Support</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;