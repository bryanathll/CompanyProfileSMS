// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './footer.module.css';
import logoImage from '../assets/logoWhite.png'; // Sesuaikan path ke logo Anda
import { useTranslation } from 'react-i18next';
import { scrollToTarget } from '../App';

// Impor ikon dari react-icons
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer: React.FC = () => {
  const { t } = useTranslation(); 
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logoImage} alt="Logo Samudera Maju Sejati" className={styles.logo} />
        
        <p className={styles.companyName}>PT SAMUDERA MAJU SEJATI</p>

        <nav className={styles.nav}>
          <a href="#about" onClick={() => { scrollToTarget('about'); }}>{t('nav_about')}</a>
          <a href="#misi" onClick={() => { scrollToTarget('misi'); }}>{t('nav_vision')}</a>
          <a href="#jasa" onClick={() => { scrollToTarget('jasa'); }}>{t('nav_services')}</a>
          <a href="#client" onClick={() => { scrollToTarget('client'); }}>{t('nav_clients')}</a>
          <a href="#hero" onClick={() => { scrollToTarget('hero'); }}>{t('footer_nav_lang')}</a>
        </nav>

        <p className={styles.caption}>
          {t('footer_caption')}
        </p>

        <div className={styles.contactInfo}>
          <a className={styles.contactItem}>
            <FaWhatsapp size={20} />
            <span>0852 9511 2229</span>
          </a>
          <a  className={styles.contactItem}>
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
          <a href="https://wa.me/+6285266112229" target="_blank" rel="noopener noreferrer" className={styles.footerContact}>
            <FaWhatsapp size={16} />
            <span>{t('footer_contact')}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;