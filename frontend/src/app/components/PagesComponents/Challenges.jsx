import React from 'react';
import styles from "../../styles/pages/Components/Challenges.module.css";

const Challenges = ({ title, challenges, subtitle }) => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.upperContainer}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.lowerContainer}>
                    <h4>{subtitle}</h4>
                    <div className={styles.challengesPoint}>
                        {challenges.map((challenge, index) => (
                            <div key={index} className={styles.challengeCard}>
                                {React.createElement(challenge.icon)}
                                <p>{challenge.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Challenges;