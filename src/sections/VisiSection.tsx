import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './VisiSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const VisiSection: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Animasi fade-in sederhana saat section muncul
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        }, titleRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section}>
            <h2 ref={titleRef} className={styles.title}>
                Kami Memiliki Visi Menjadi mitra terpercaya dan 
                dapat diandalkan di setiap situasi untuk semua 
                pelayaran di Indonesia.
            </h2>
        </section>
    );
};

export default VisiSection;