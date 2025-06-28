// src/components/MisiCard/MisiCard.tsx

import React from 'react';
import styles from './MisiCard.module.css';

interface MisiCardProps {
  icon: string;
  title: string;
  description: string;
}

const MisiCard: React.FC<MisiCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MisiCard;