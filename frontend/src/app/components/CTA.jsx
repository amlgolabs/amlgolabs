// // components/CTASection.js
// import Image from "next/image";
// import styles from "../styles/Components/CTA.module.css";

// const CTA = () => {
//   return (
//     <section className={styles.ctaSection}>
//       <div className={styles.leftSection}>
//         <h1 className={styles.heading}>
//           Empower Your Business with Data Analytics & AI
//         </h1>
//         <p className={styles.description}>
//           Unlock the power of data and AI to drive innovation, efficiency, and growth.
//         </p>
//         <button className={styles.ctaButton}>Get Started Today</button>
//       </div>
//       <div className={styles.rightSection}>
//         <Image
//           src="/cta3.png" // Add your image file in the public folder
//           alt="Data Analytics and AI Services"
//           width={500}
//           height={400}
//           className={styles.image}
//         />
//       </div>
//     </section>
//   );
// };

// export default CTA;



// components/CTASection.js
import Image from "next/image";
import styles from "../styles/Components/CTA.module.css";
import Link from "next/link";

const CTASection = ({ heading, description, buttonText, imageSrc }) => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.leftSection}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.description}>{description}</p>
        <Link href="/contact-us">
        <button className={styles.ctaButton}>{buttonText}</button>
        </Link>
      </div>
      <div className={styles.rightSection}>
        <Image
          src={imageSrc} // Dynamically passed image source
          alt="CTA Image"
          width={500}
          height={400}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default CTASection;
