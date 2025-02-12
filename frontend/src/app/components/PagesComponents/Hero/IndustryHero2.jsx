// import React from 'react'
// import styles from "../../../styles/pages/Components/IndustryHero/IndustryHero2.module.css"
// import Link from 'next/link'
// import { Button } from '@mui/material'

// const IndustryHero2 = () => {
//   return (
//     <div className={styles.container}>
//         <div className={styles.headingContainer}>
//             <div className={styles.heading}>

//             <h1>Gen-AI & Data-Driven Automotive Innovation</h1>
//             <p>From Design to Delivery, we leverage Gen-AI and Data Analytics to create vehicles tailored for the rapidly growing industry.</p>

//             <Link href = "/">
//             <button className={styles.button}>
//                 Let's Talk
//             </button>

//             </Link>
//             </div>
//         </div>
        
//     </div>
//   )
// }

// export default IndustryHero2


import React from 'react';
import styles from "../../../styles/pages/Components/IndustryHero/IndustryHero2.module.css";
import Link from 'next/link';
import { Button } from '@mui/material';

const IndustryHero2 = ({ title, description, buttonText, buttonLink, backgroundImage }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link href={buttonLink}>
            <button className={styles.button}>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryHero2;