import React from 'react'
import styles from "../../../styles/pages/Components/AboutUs/PeoplePrinciples.module.css"

const PeoplePrinciples = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.heading}>
                    <h2>Foundations of Amlgo Labs</h2>
                    <p>The Amlgo Way - A culture where trust runs deep, honesty is unwavering, freedom is honored, and respect is instinctive. Once one of us, always one of us.</p>
                </div>

                <div className={styles.principleGrid}>
                    <div className={styles.gridItem}>
                        <h4>Trust Above All</h4>
                        <p>We place unwavering trust in each other.</p>
                    </div>
                    <div className={styles.gridItem}>
                    <h4>Radical honesty</h4>
                        <p>Every question deserves the truth.</p>
                    </div>
                    <div className={styles.gridItem}>
                    <h4>Respect for freedom</h4> 
                        <p>We honor and support individual choices.</p>
                    </div>
                    <div className={styles.gridItem}>
                    <h4>
                        The golden rule
                            </h4>
                        <p>Treat others as we wish to be treated.</p>
                    </div>
                    <div className={styles.gridItem}>
                    <h4>Integrity in all work</h4>
                        <p> Clarity in purpose and process matters.</p>
                    </div>
                    <div className={styles.gridItem}>
                    <h4>Culture first</h4>
                        <p>We hire for Amlgo, then for the role.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeoplePrinciples