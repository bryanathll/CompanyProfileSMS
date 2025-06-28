// File: src/sections/FutureSection.tsx

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FutureSection.module.css';

// Sesuaikan dengan nama file gambar Anda
import futureImageFile from '../assets/Mr.Jerry.png';

gsap.registerPlugin(ScrollTrigger);

const FutureSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    // ▼▼▼ TAMBAHKAN REF BARU INI ▼▼▼
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {


            // ▼▼▼ TAMBAHKAN ANIMASI PARALLAX INI ▼▼▼
            gsap.to(imageRef.current, {
                yPercent: -20, // Gambar akan bergerak ke atas sebesar 15% dari tingginya
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom', // Mulai saat section masuk dari bawah
                    end: 'bottom top',   // Selesai saat section keluar ke atas
                    scrub: true
                }
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            {/* Kolom Kiri */}
            <div className={styles.imageColumn}>
                {/* ▼▼▼ BUNGKUS GAMBAR DENGAN DIV BARU INI ▼▼▼ */}
                <div className={styles.imageWrapper}>
                    <img 
                        ref={imageRef} // <-- Tambahkan ref ke gambar
                        src={futureImageFile} 
                        alt="Future Vision" 
                        className={styles.image}
                    />
                </div>
            </div>

            {/* Kolom Kanan */}
            <div className={styles.textColumn}>
                <h2 className={styles.title}>
                    Melihat Kedepan
                </h2>
                <div className={styles.description}>
                    <p>
                        PT. Samudra Maju Sejati berdedikasi pada perbaikan dan inovasi berkelanjutan, berupaya untuk tetap menjadi yang terdepan dalam industri keagenan kapal Indonesia. <br /><br /> Kami berkomitmen untuk memainkan peran penting dalam memfasilitasi perdagangan global dan mendorong pertumbuhan sektor maritim di Indonesia
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FutureSection;