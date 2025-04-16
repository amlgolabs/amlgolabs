import Image from "next/image";
import styles from "../../styles/pages/Components/PartnersHero.module.css";

const PartnersHero = () => {
  return (
    <div className={styles.hero}>
      {/* Background Image */}
      <div className={styles.heroBackground}>
        <Image
          src="/partners/partnerhero.png" // Update this path as needed
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Strategic partnership is the power for success
        </h1>
        <p className={styles.heroDescription}>
          Forge an unstoppable future with a dynamic partner ecosystem.
        </p>
      </div>
    </div>
  );
};

export default PartnersHero;
