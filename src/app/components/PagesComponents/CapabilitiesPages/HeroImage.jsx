import React from 'react';
import Image from 'next/image';
import styles from '../../../styles/pages/Components/CapabilitiesPages/HeroImage.module.css';

const HeroImage = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Text Section */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Architecting the Foundation for Data-Driven Success</h1>
        <p className={styles.subtext}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, nesciunt. Doloribus delectus qui blanditiis deserunt impedit voluptatum, dolorum consequuntur facilis!
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <Image 
          src="/capabilities/dataengineeringbanner3.png" // Update path
          alt="Confident woman with phone"
          width={1600} 
          height={400} 
          layout="intrinsic" 
          objectFit="cover"
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default HeroImage;
