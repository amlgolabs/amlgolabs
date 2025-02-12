import React from 'react';
import styles from '../../../styles/pages/Components/AboutUs/CoreValues.module.css';
import Image from 'next/image';

const coreValues = [
  {
    title: 'TALENT',
    description:
      'We never compromise on talent because we know our asset is our people. Our goal is to attract and develop the best talent for our business.',
    icon: '/talent.png',
  },
  {
    title: 'RESPECT',
    description:
      'We have respect for our people, our clients and each entity that is related to Amlgo Labs and that’s why we get respect.',
    icon: '/respect.png',
  },
  {
    title: 'INTEGRITY',
    description:
      'We build trust by taking responsibility, acting ethically and open debate to find the best open-minded solutions.',
    icon: '/integrity.png',
  },
  {
    title: 'CUSTOMER',
    description:
      'We value our customers and believe in supporting them by creating long-term win-win relationships.',
    icon: '/customer.png',
  },
  {
    title: 'SENSITIVITY',
    description:
      'We create a culture of high level of sensitivity on every action we perform, and act with responsibility.',
    icon: '/sensitivity.png',
  },
];

const CoreValues = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          <h2>Guided by Our Core Values: TRICS</h2>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <Image src="/trics.png" alt="values" height={1080} width={1080} />
          </div>

          <div className={styles.tileWrapper}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.tile}>
                <div className={styles.iconWrapper}>
                  <Image height={70} width={70} src={value.icon} alt={value.title} />
                </div>
                <div className={styles.textWrapper}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
