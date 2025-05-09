


// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';


// const IndustryCaseStudy1 = ({ caseStudyHeading, CaseStudyImageSrc, link }) => {
//   return (
//     <section className={styles.mainContainer}>
//       <div className={styles.caseStudyContainer}>
//         <div className={styles.contentContainer}>
//           <h3 className={styles.subheading}>Case Study</h3>
//           <h2 className={styles.heading}>{caseStudyHeading}</h2>
//           <Link href={link} target="_blank" className={styles.link}>
//             <button className="globalButton">Learn More</button>
//           </Link>
//         </div>
//         <div className={styles.imageContainer}>
//           <Image
//             src={CaseStudyImageSrc}
//             alt="Case Study"
//             fill // Use fill for responsive image sizing
//             style={{ objectFit: 'cover' }}
//             sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 40vw, 30vw"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustryCaseStudy1;


"use client"
import { usePopup } from '@/app/context/PopupContext';
import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy1.module.css"
import Image from 'next/image';


const IndustryCaseStudy1 = ({ caseStudyHeading, CaseStudyImageSrc, pdfName }) => {
  const { openPopup } = usePopup();

  const handleLearnMoreClick = () => {
    openPopup(pdfName); // Pass the correct pdf name to context
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.caseStudyContainer}>
        <div className={styles.contentContainer}>
          <h3 className={styles.subheading}>Case Study</h3>
          <h2 className={styles.heading}>{caseStudyHeading}</h2>
          <button className="globalButton" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={CaseStudyImageSrc}
            alt="Case Study"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 40vw, 30vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default IndustryCaseStudy1;
