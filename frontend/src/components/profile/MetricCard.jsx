import React from 'react';
import styles from './MetricCard.module.css';

const MetricCard = ({ title, value, subtitle, icon }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.title}>{title}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </header>
      <div className={styles.value}>{value}</div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </article>
  );
};

export default MetricCard;
