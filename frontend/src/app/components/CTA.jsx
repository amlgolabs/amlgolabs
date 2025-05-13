"use client"
import Image from "next/image";
import styles from "../styles/Components/CTA.module.css";
import Link from "next/link";
import { useContactPopup } from "../context/ContactPopupContext";

const CTASection = ({ heading, description, buttonText, imageSrc }) => {
  const { openContactPopup } = useContactPopup();
  return (
    // <section className={styles.ctaSection}>
    //   <div className={styles.leftSection}>
    //     <h3 className={styles.heading}>{heading}</h3>
    //     <p className={styles.description}>{description}</p>
    //     <Link href="/contact-us">
    //     <button className={styles.ctaButton}>{buttonText}</button>
    //     </Link>
    //   </div>
    //   <div className={styles.rightSection}>
    //     <Image
    //       src={imageSrc} // Dynamically passed image source
    //       alt="CTA Image"
    //       width={500}
    //       height={400}
    //       className={styles.image}
    //     />
    //   </div>
    // </section>
    <section className={styles.ctaSection}>
  <div className={styles.ctaContainer}>
    <div className={styles.leftSection}>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.description}>{description}</p>
      {/* <Link href="/contact-us"> */}
        <button onClick={openContactPopup} className={styles.ctaButton}>{buttonText}</button>
      {/* </Link> */}
    </div>
    <div className={styles.rightSection}>
      <Image
        src={imageSrc}
        alt="CTA Image"
        width={500}
        height={400}
        className={styles.image}
      />
    </div>
  </div>
</section>

  );
};

export default CTASection;
