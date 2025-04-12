// import React from 'react';
// import Image from 'next/image';
// import styles from "../../../styles/pages/Components/IndustryHero/IndustryHero1.module.css"

// const IndustryHero1 = ({ imageSrc, altText, heading, subHeading }) => {
//   return (
//     <div className={styles.parent}>
//       <div className={styles.heroContainer}>
//         <div className={styles.heroImage}>
//           <Image
//             width={1366}
//             height={768}
//             src={imageSrc}
//             alt={altText}
//             priority
//           />
//         </div>
//         <div className={styles.overlay}>
//           <div className={styles.content}>
//             <h1>{heading}</h1>
//             <h3>{subHeading}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustryHero1;


import React from 'react';
import styles from "../../../styles/pages/Components/IndustryHero/IndustryHero1.module.css"

import Image from 'next/image';

const IndustryHero1 = ({ imageSrc, altText, heading, subHeading }) => {
  return (
    <section className={styles.parent}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <Image
            src={imageSrc}
            alt={altText}
            fill // Use fill layout to cover the container dynamically
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            style={{ objectFit: 'cover' }} // Ensure image covers the area
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.heading}>{heading}</h1>
            <h3 className={styles.subHeading}>{subHeading}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero1;