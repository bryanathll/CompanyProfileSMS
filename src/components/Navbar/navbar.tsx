import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import logoImage from '../../assets/sms-logo.png';
import { IoClose } from 'react-icons/io5';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 10);

          // Hanya update visibility jika ada perubahan scroll yang signifikan
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          if (scrollDifference > 5) { // Threshold untuk menghindari perubahan kecil
            if (currentScrollY < 100) {
              // Selalu tampilkan navbar jika di dekat puncak halaman
              setIsNavbarVisible(true);
            } else if (currentScrollY > lastScrollY && scrollDifference > 1) {
              // Scroll ke BAWAH dengan jarak yang cukup - sembunyikan navbar
              setIsNavbarVisible(false);
            } else if (currentScrollY < lastScrollY && scrollDifference > 1) {
              // Scroll ke ATAS dengan jarak yang cukup - tampilkan navbar
              setIsNavbarVisible(true);
            }
            
            setLastScrollY(currentScrollY);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Separate useEffect for body overflow management
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to ensure overflow is reset
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang).then(() => {
      window.location.reload();
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const navbarClasses = `${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''} ${!isNavbarVisible ? styles.hidden : ''}`;

  return (
    <header className={navbarClasses}>
      <div className={styles.container}>
        {/* Navigasi Desktop Kiri */}
        <nav className={styles.navLeft}>
          <a href="#">{t('nav_about')}</a>
          <a href="#">{t('nav_vision')}</a>
        </nav>

        {/* Logo Tengah */}
        <div className={styles.navCenter}>
          <a href="#" aria-label="Home">
            <img src={logoImage} alt="Logo Perusahaan" className={styles.logo} />
          </a>
        </div>
        
        {/* Navigasi Desktop Kanan */}
        <div className={styles.navRight}>
          <a href="#">{t('nav_services')}</a>
          <a href="#">{t('nav_clients')}</a>
          <button onClick={toggleLanguage} className={styles.langButton}>
            {t('lang_button')}
          </button>
        </div>

        {/* Tombol Hamburger untuk Mobile */}
        <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>

        {/* Menu Mobile yang Muncul */}
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNavLinks}>
            <a href="#" onClick={toggleMenu}>{t('nav_about')}</a>
            <a href="#" onClick={toggleMenu}>{t('nav_vision')}</a>
            <a href="#" onClick={toggleMenu}>{t('nav_services')}</a>
            <a href="#" onClick={toggleMenu}>{t('nav_clients')}</a>
            <button onClick={toggleLanguage} className={styles.mobileLangButton}>
              {t('lang_button')}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;