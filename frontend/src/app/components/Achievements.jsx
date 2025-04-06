import React from 'react'
import styles from "../styles/Components/Achievements.module.css"
import Image from 'next/image'

const Achievements = () => {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.heading}>Achievements</h1>
            <div className={styles.innerContainer}>
                <div className={styles.achievementCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            height={500}
                            width={500}
                            src="/achievement1.png"
                            alt="achievement"
                            className={styles.achievementImage}
                        />
                    </div>
                    <h2 className={styles.achievementTitle}>Dell Onboards Amlgo Labs</h2>
                    <p className={styles.achievementDescription}>Dell Technologies partnering with Amlgo Labs to offer GenAI Solutions.</p>
                    <h4 className={styles.achievementYear}>2025</h4>
                </div>


                <div className={styles.achievementCard}>
                <div className={styles.imageWrapper}>
                        <Image
                            height={500}
                            width={500}
                            src="/achievement2.png"
                            alt="achievement"
                            className={styles.achievementImage}
                        />
                    </div>
                    <h2 className={styles.achievementTitle}>Unsolicited Investment by Maruti Suzuki</h2>
                    <p className={styles.achievementDescription}>Amlgo Labs' value-adding automotive analytics delivery inspired a 6.44% equity investment from Maruti Suzuki</p>
                    <h4 className={styles.achievementYear}>2024</h4>
                </div>

                <div className={styles.achievementCard}>
                <div className={styles.imageWrapper}>
                        <Image
                            height={250}
                            width={500}
                            src="/achievement3.png"
                            alt="achievement"
                            className={styles.achievementImage}
                        />
                    </div>
                    <h2 className={styles.achievementTitle}>Top Emerging Analytics Startup</h2>
                    <p className={styles.achievementDescription}>Amlgo Labs' selected as impactful startup</p>

                    <h4 className={styles.achievementYear}>2020</h4>
                </div>



            </div>

        </div>
    )
}

export default Achievements