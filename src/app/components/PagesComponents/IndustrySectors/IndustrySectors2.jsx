// import React from 'react'
// import styles from "../../../styles/pages/Components/IndustrySectors/IndustrySectors2.module.css"
// import StartIcon from '@mui/icons-material/Start';
// import Link from 'next/link';

// const IndustrySectors2 = ({ heading, sectors }) => {
//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.sectorsContainer}>
//         <div className={styles.heading}>
//           <h2>{heading}</h2>
//         </div>
//         <div className={styles.sectorsGrid}>
//           {sectors.map((sector, index) => (
//             // <Link href={sector.link} key={index}>
//               <div className={styles.sector} key={index}>
//                 <div className={styles.sectorName}>
//                   <h3>{sector.name}</h3>
//                   <p>{sector.description}</p>
//                 </div>
//                 {/* <StartIcon /> */}
//               </div>
//             // </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IndustrySectors2;

// IndustrySectors2.jsx
import React from 'react';
import styles from '../../../styles/pages/Components/IndustrySectors/IndustrySectors2.module.css';
import StartIcon from '@mui/icons-material/Start';
import Link from 'next/link';

const IndustrySectors2 = ({ heading, sectors }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectorsContainer}>
        <div className={styles.heading}>
          <h2>{heading}</h2>
        </div>
        <div className={styles.sectorsGrid}>
          {sectors.map((sector, index) => (
            // <Link href={sector.link} key={index}>
              <div className={styles.sector}>
                <div className={styles.sectorName}>
                  <h3>{sector.name}</h3>
                  <p>{sector.description}</p>
                </div>
                {/* <StartIcon /> */}
              </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrySectors2;
