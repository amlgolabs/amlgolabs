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








