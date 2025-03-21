import React from 'react'
import styles from "../../../styles/pages/Components/CapabilitiesPages/NumberInfoBox.module.css"

const NumberInfoBox = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <h3>Amlgo Labs: Transforming Businesses with LLMs and Data Intelligence</h3>
            <div className={styles.boxContainer}>
                <div className={styles.boxItem}>
                <div className={styles.percent}>
                    58%
                </div>
                <div className={styles.heading}>
                    <h2>Automated Workflows</h2>
                </div>
                <div className={styles.description}>
                    <p>Streamlined processes and reduced manual effort through intelligent automation.</p>
                </div>
                </div>
                <div className={styles.boxItem}>
                <div className={styles.percent}>
                    51%
                </div>
                <div className={styles.heading}>
                    <h2>Enhanced Insights</h2>
                </div>
                <div className={styles.description}>
                    <p>Deeper understanding of data and trends through advanced analysis.</p>
                </div>
                </div>
                <div className={styles.boxItem}>
                <div className={styles.percent}>
                    45%
                </div>
                <div className={styles.heading}>
                    <h2>Improved Decision Making</h2>
                </div>
                <div className={styles.description}>
                    <p>Data-driven decisions powered by intelligent insights and predictive capabilities.</p>
                </div>
                </div>
                <div className={styles.boxItem}>
                <div className={styles.percent}>
                    39%
                </div>
                <div className={styles.heading}>
                    <h2>Personalized Experiences</h2>
                </div>
                <div className={styles.description}>
                    <p>Tailored customer interactions and optimized product offerings.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NumberInfoBox