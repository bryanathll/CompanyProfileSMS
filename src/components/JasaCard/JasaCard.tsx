// src/components/JasaCard/JasaCard.tsx
import React from 'react';
import styles from './JasaCard.module.css';

interface JasaCardProps {
  image: string;
  title: string;
  description: string;
}

const JasaCard: React.FC<JasaCardProps> = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.overlay}></div>
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.mobileContent}>
        <h3 className={styles.mobileTitle}>{title}</h3>
        <p className={styles.mobileDescription}>{description}</p>
      </div>
    </div>
  );
};

export default JasaCard;