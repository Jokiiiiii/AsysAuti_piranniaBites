import React from 'react';
import MetricCard from '../components/profile/MetricCard.jsx';
import ProgressStat from '../components/profile/ProgressStat.jsx';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <p className={styles.greeting}>Witaj, Użytkowniku!</p>
        <span className={styles.subtitle}>Twoje dzisiejsze podsumowanie samopoczucia</span>
      </header>

      <section className={styles.metrics}>
        <MetricCard
          title="Tętno"
          value="75 bpm"
          subtitle="uderzeń/minutę"
          icon={<span role="img" aria-label="serce">❤</span>}
        />
        <MetricCard
          title="Nastrój"
          value="Stabilny"
          subtitle="na podstawie ostatnich odczytów"
          icon={(
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.25 8.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm-6.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3.24 6.65c-2.1 0-3.89-1.18-4.76-2.95a.75.75 0 0 1 1.34-.68c.6 1.17 1.87 1.88 3.42 1.88 1.55 0 2.82-.71 3.42-1.88a.75.75 0 1 1 1.34.68c-.87 1.77-2.66 2.95-4.76 2.95z" />
            </svg>
          )}
        />
      </section>

      <section className={styles.stressSection}>
        <h2 className={styles.sectionTitle}>Śledzenie poziomu stresu</h2>
        <p className={styles.sectionSubtitle}>
          Monitoruj swoje wskaźniki i dowiedz się, jak zmieniają się w ciągu dnia.
        </p>
        <div className={styles.progressList}>
          <ProgressStat
            label="Stan emocjonalny"
            value={0.62}
            description="Zrównoważony nastrój, utrzymuj dotychczasowe nawyki."
          />
          <ProgressStat
            label="Wynik stresu"
            value={0.35}
            accentColor="#4b6bfb"
            description="Lekko podwyższony poziom. Krótka przerwa może pomóc."
          />
          <ProgressStat
            label="Równowaga autonomiczna"
            value={0.78}
            accentColor="#f97316"
            description="Organizm dobrze reaguje na regenerację."
          />
        </div>
      </section>

      <section className={styles.notes}>
        <h3>Dzisiejsze notatki</h3>
        <p>
          Zwróć uwagę na regularne nawodnienie oraz krótkie ćwiczenia oddechowe po intensywnych zadaniach.
          Zanotuj, jak czujesz się po przerwie na spacer.
        </p>
      </section>
    </div>
  );
};

export default Profile;
