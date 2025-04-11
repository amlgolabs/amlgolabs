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



// NumberData2.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/pages/Components/NumberData2.module.css"

const NumberData2 = ({ title, data, minHeight = "auto" }) => {
  return (
    <section className={styles.mainContainer} style={{ minHeight }}>
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.numbersDiv}>
          {data.map((item, index) => (
            <article key={item.id || index} className={styles.numberItem}>
              <h4 className={styles.number}>{item.percentage}</h4>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

NumberData2.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  minHeight: PropTypes.string,
};

export default NumberData2;








