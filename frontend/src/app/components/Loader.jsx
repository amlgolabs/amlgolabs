import React from 'react';
import Image from 'next/image';
import styles from '../styles/Components/Loader.module.css';

export default function Loader({ size = 'medium' }) {
  return (
    <div className={`${styles.loaderContainer} ${styles[size]}`}>
      <Image
        src="/loader.gif"
        alt="Loading..."
        width={size === 'small' ? 40 : size === 'large' ? 80 : 60}
        height={size === 'small' ? 40 : size === 'large' ? 80 : 60}
        priority
      />
    </div>
  );
} 