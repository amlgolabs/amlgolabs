// import React from 'react'
// import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy1.module.css"
// import Image from 'next/image'
// import Link from 'next/link'

// const IndustryCaseStudy1 = ({caseStudyHeading, CaseStudyImageSrc, link}) => {
//     return (
//         <div className={styles.mainContainer}>
//             <div className={styles.caseStudyContainer}>
//                 <div className={styles.contentContainer}>
//                     <h3>Case Study</h3>
//                     <h2>{caseStudyHeading}</h2>
//                     <Link href={link} target='_blank'>
//                         <button className='globalButton'>Learn More</button>
//                     </Link>
//                 </div>
//                 <div className={styles.imageContainer}>
//                     <Image height={400} width={400} src={CaseStudyImageSrc} alt='caseStudy' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default IndustryCaseStudy1

// import React from 'react';
// // import styles from './IndustryCaseStudy1.module.css';
// import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy1.module.css"

// import Image from 'next/image';
// import Link from 'next/link';

// const IndustryCaseStudy1 = ({ caseStudyHeading, CaseStudyImageSrc, link }) => {
//   return (
//     <section className={styles.mainContainer}>
//       <div className={styles.caseStudyContainer}>
//         <div className={styles.contentContainer}>
//           <h3>Case Study</h3>
//           <h2>{caseStudyHeading}</h2>
//           <Link href={link} target="_blank" className={styles.link}>
//             <button className="globalButton">Learn More</button>
//           </Link>
//         </div>
//         <div className={styles.imageContainer}>
//           <Image
//             src={CaseStudyImageSrc}
//             alt="Case Study"
//             width={400}
//             height={400}
//             style={{ objectFit: 'cover' }} // Inline style for object-fit
//             sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw" // Optimize image loading
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustryCaseStudy1;


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy1.module.css"


const IndustryCaseStudy1 = ({ caseStudyHeading, CaseStudyImageSrc, link }) => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.caseStudyContainer}>
        <div className={styles.contentContainer}>
          <h3 className={styles.subheading}>Case Study</h3>
          <h2 className={styles.heading}>{caseStudyHeading}</h2>
          <Link href={link} target="_blank" className={styles.link}>
            <button className="globalButton">Learn More</button>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={CaseStudyImageSrc}
            alt="Case Study"
            fill // Use fill for responsive image sizing
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