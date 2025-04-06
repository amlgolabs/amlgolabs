import Image from "next/image";
import styles from "./ComingSoon.module.css";

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src="/logo/logo21march.png"
            alt="Company Logo"
            fill
            className={styles.logo}
            priority
          />
        </div>
        <h1 className={styles.title}>This Page is Coming Soon</h1>
        <p className={styles.subtitle}>
          We’re working behind the scenes to bring you a better experience.
        </p>
        <a href="/" className={styles.button}>
          Back to Home
        </a>
      </div>
    </div>
  );
}
