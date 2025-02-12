// import React from 'react'
// import styles from "../../styles/pages/Components/NumberData2.module.css"


// const NumberData2 = () => {
//   return (
//     <div className={styles.mainContainer}>
//         <div className={styles.contentContainer}>
//             <h3>We create meaningful impact by combining cutting-edge technology with unparalleled industry expertise.</h3>
//             <div className={styles.numbersDiv}>
//                 <div className={styles.numberItem}>
//                     <h2>40%</h2>
//                     <p>Improved working capital through supply chain modernization.
//                     </p>
//                 </div>
//                 <div className={styles.numberItem}>
//                     <h2>40%</h2>
//                     <p>Higher profit margins achieved with revenue management tools.</p>
//                 </div>
//                 <div className={styles.numberItem}>
//                     <h2>40%</h2>
//                     <p>Boost customer satisfaction and loyalty through proactive support.</p>
//                 </div>
//                 <div className={styles.numberItem}>
//                     <h2>40%</h2>
//                     <p>Strategic Projects Delivered throughout the years</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default NumberData2



import React from "react";
import styles from "../../styles/pages/Components/NumberData2.module.css";

const NumberData2 = ({ title, data }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <div className={styles.numbersDiv}>
          {data.map((item, index) => (
            <div key={index} className={styles.numberItem}>
              <h2>{item.percentage}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberData2;








