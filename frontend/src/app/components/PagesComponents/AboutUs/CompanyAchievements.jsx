import React from 'react'
import styles from "../../../styles/pages/Components/AboutUs/CompanyAchievements.module.css"
import Image from 'next/image'

const CompanyAchievements = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.heading}>
            <h2>Achievements</h2>
        </div>

        <div className={styles.achievementsBox}>
            <div className={styles.achievementCard}>
                <Image src="/achievements/1.png" height={200} width={200} alt='achievement'/>
                <h3>Dell onboards Amlgo Labs</h3>
            </div> 
            <div className={styles.achievementCard}>
                <Image src="/achievements/2.png" height={200} width={200} alt='achievement'/>
                <h3>Investment by Maruti Suzuki</h3>
            </div> 
            <div className={styles.achievementCard}>
                <Image src="/achievements/3.png" height={200} width={200} alt='achievement'/>
                <h3>Top emerging Analytics Startup</h3>
            </div> 
        </div>
    </div>
  )
}

export default CompanyAchievements