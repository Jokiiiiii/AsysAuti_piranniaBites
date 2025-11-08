import React from 'react';
import styles from './ProgressStat.module.css';

const ProgressStat = ({ label, value, accentColor = '#29b433', description }) => {
  const percent = Math.max(0, Math.min(1, value)) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percent}>{Math.round(percent)}%</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.progress} style={{ width: `${percent}%`, backgroundColor: accentColor }} />
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default ProgressStat;
