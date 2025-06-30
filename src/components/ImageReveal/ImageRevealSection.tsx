import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ImageRevealSection.module.css';

// Sesuaikan nama file gambar Anda
import revealImageFile from '../../assets/kapal2.png';

gsap.registerPlugin(ScrollTrigger);

const ImageRevealSection: React.FC = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cek apakah device mobile
      const isMobile = window.innerWidth <= 768;
      
      // Target animasi diubah ke sectionRef.current agar gradien dan teks ikut terungkap.
      gsap.fromTo(sectionRef.current, 
        {
          clipPath: 'inset(0 30% 0% 30%)',
        }, 
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile ? 'top bottom' : 'top 70%', // Mulai dari bawah layar untuk mobile
            end: 'center bottom',
            scrub: 1,
          },
        }
      );

      // Animasi zoom-out sekarang diterapkan pada gambar di dalamnya
      gsap.fromTo(`.${styles.image}`,
        { scale: 1.3 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile ? 'top bottom' : 'top center', // Mulai dari bawah layar untuk mobile
            end: 'bottom center',
            scrub: 1,
          }
        }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className={styles.section}>
      <img 
        src={revealImageFile} 
        alt="Kapal" 
        className={styles.image}
      />
      
      <div className={styles.gradientOverlay}></div>
      
      <div className={styles.textContainer1}>
        <h2 className={styles.quote}>
          "Mitra Tepercaya untuk Operasional Kapal Anda"
        </h2>
      </div>
      
      <div className={styles.textContainer2}>
        <h2 className={styles.quote2}>
          "Kami menyediakan layanan keagenan kapal yang profesional dan terstruktur, menjamin kelancaran seluruh prosedur administrasi dan operasional di pelabuhan."
        </h2>
      </div>
    </div>
  );
};

export default ImageRevealSection;