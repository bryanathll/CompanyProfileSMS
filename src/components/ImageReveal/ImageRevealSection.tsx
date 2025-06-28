import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ImageRevealSection.module.css';

// Sesuaikan nama file gambar Anda
import revealImageFile from '../../assets/kapal2.png';

gsap.registerPlugin(ScrollTrigger);

const ImageRevealSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // Hapus ref untuk image, karena kita akan menganimasikan seluruh section
  // const imageRef = useRef<HTMLImageElement>(null); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Target animasi diubah ke sectionRef.current agar gradien dan teks ikut terungkap.
      gsap.fromTo(sectionRef.current, 
        {
          clipPath: 'inset(0 30% 0% 30%)',
          // Skala sekarang diterapkan pada section, bukan hanya gambar
        }, 

        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
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
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          }
        }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    // Tambahkan ref ke section
    <section ref={sectionRef} className={styles.section}>
      <img
        // Hapus ref dari image
        src={revealImageFile}
        alt="Pemandangan hutan dan burung"
        className={styles.image}
      />

      <div className={styles.gradientOverlay}></div>
      <div className={styles.textContainer1}>
        <p className={styles.quote}>
          "Keberhasilan pelayaran Anda adalah prioritas kami"
        </p>
      </div>
      <div className={styles.textContainer2}>
        <p className={styles.quote}>
          "Keberhasilan pelayaran Anda adalah prioritas kami"
        </p>
      </div>
    </section>
  );
};

export default ImageRevealSection;