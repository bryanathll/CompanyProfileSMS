// src/sections/AboutSection.tsx (Versi Sederhana Tanpa Animasi)

import React from 'react';
import styles from './AboutSection.module.css';
import { useTranslation } from 'react-i18next'

const AboutSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className={styles.aboutSection}>
            <div className={styles.titleColumn}>
                <h2 className={styles.title}>{t('about_title1')} <br /> {t('about_title2')} </h2>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.contentColumn}>
                <p className={styles.paragraph}>
                    {t('Description1')}
                </p>
                <p className={styles.paragraph}>
                    {t('Description2')}
                </p>
            </div>
        </section>
    );
};

export default AboutSection;