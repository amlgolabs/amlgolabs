import React from 'react'
import styles from "../../styles/pages/Components/Challenges.module.css"
import { PersonSearch, Speed, Lightbulb, Shield } from '@mui/icons-material';

const Challenges = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.upperContainer}>
                    <h2>We Drive Transformation and Simplify Solutions with GenAI, Delivering Unmatched Value.</h2>
                </div>

                <div className={styles.lowerContainer}>
                    <h4>Challenges</h4>
                    <div className={styles.challengesPoint}>
                        <div className={styles.challengeCard}>
                            <PersonSearch />
                            <p>Customer Immersion</p>
                        </div>
                        <div className={styles.challengeCard}>
                            <Speed />
                            <p>Enterprise Efficiency</p>
                        </div>
                        <div className={styles.challengeCard}>
                            <Lightbulb />
                            <p>Technological Innovation</p>
                        </div>
                        <div className={styles.challengeCard}>
                            <Shield />
                            <p>Risk Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenges