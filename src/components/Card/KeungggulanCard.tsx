import React from 'react';
import styles from './KeunggulanCard.module.css';

// Props sekarang hanya butuh title dan description
interface KeunggulanCardProps {
  title: string;
  description: string;
}

const KeunggulanCard: React.FC<KeunggulanCardProps> = ({ title, description }) => {
  return (
    // Struktur JSX menjadi jauh lebih sederhana
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default KeunggulanCard;