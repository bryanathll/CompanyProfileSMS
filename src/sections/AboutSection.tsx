// src/sections/AboutSection.tsx (Versi Sederhana Tanpa Animasi)

import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.titleColumn}>
                <h2 className={styles.title}>TENTANG</h2>
                <h2 className={styles.title}>SAMUDERA MAJU SEJATI</h2>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.contentColumn}>
                <p className={styles.paragraph}>
                    PT. Samudra Maju Sejati  adalah  perusahaan keagenan kapal Indonesia,  didirikan pada 2024 dengan tenaga  profesional yang telah berdedikasi  dalam bidang keagenan kapal selama  belasan tahun serta komitmen untuk  memberikan layanan yang terbaik dan  dapat diandalkan klien di industri  maritim. <br /> <br />  
                </p>
                <p className={styles.paragraph}>
                    Berkantor pusat secara strategis di  Batam, Indonesia, kami memastikan  cakupan yang komprehensif dan operasi  yang efisien
                </p>
            </div>
        </section>
    );
};

export default AboutSection;