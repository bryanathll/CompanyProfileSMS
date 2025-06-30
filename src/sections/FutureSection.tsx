// File: src/sections/FutureSection.tsx

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FutureSection.module.css';

// Sesuaikan dengan nama file gambar Anda
import futureImageFile from '../assets/Mr.Jerry.png';

gsap.registerPlugin(ScrollTrigger);

const FutureSection: React.FC = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animasi parallax dengan responsive handling
            gsap.to(imageRef.current, {
                yPercent: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    // Disable pada mobile untuk performa yang lebih baik
                    refreshPriority: window.innerWidth <= 767 ? -1 : 0
                }
            });
        }, sectionRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            {/* Kolom Kiri */}
            <div className={styles.imageColumn}>
                {/* Wrapper untuk parallax effect */}
                <div className={styles.imageWrapper}>
                    <img 
                        ref={imageRef}
                        src={futureImageFile} 
                        alt="Future Vision"
                        className={styles.image}
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Kolom Kanan */}
            <div className={styles.textColumn}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Melihat Kedepan
                    </h2>

                    <div className={styles.description}>
                        <p>
                            PT. Samudra Maju Sejati berdedikasi pada perbaikan dan inovasi berkelanjutan, berupaya untuk tetap menjadi yang terdepan dalam industri keagenan kapal Indonesia.
                        </p>
                        <p>
                            Kami berkomitmen untuk memainkan peran penting dalam memfasilitasi perdagangan global dan mendorong pertumbuhan sektor maritim di Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureSection;