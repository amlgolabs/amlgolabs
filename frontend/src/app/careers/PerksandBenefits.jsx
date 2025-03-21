import React from 'react'
import styles from "../styles/pages/Components/Careers/PerksandBenefits.module.css"
import Image from 'next/image'

const PerksandBenefits = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.heading}>
                <h3>We value your uniqueness</h3>
                <h2>Perks and Benefits</h2>
            </div>

            <div className={styles.perkCards}>
                <div className={styles.cardItem}>
                    <div className={styles.icon}>
                        <Image src="/healthInsurance.png" height={50} width={50} alt='perk'/>
                    </div>
                    <div className={styles.textWrapper}>
                        <h3>Health Insurance</h3>
                    </div>
                </div>
                <div className={styles.cardItem}>
                    <div className={styles.icon}>
                        <Image src="/travelAllowance.png" height={50} width={50} alt='perk'/>
                    </div>
                    <div className={styles.textWrapper}>
                        <h3>Travel Allowance</h3>
                    </div>
                </div>
                <div className={styles.cardItem}>
                    <div className={styles.icon}>
                        <Image src="/certificationAllowance.png" height={50} width={50} alt='perk'/>
                    </div>
                    <div className={styles.textWrapper}>
                        <h3>Certification Allowance</h3>
                    </div>
                </div>
                <div className={styles.cardItem}>
                    <div className={styles.icon}>
                        <Image src="/wfhAllowance.png" height={50} width={50} alt='perk'/>
                    </div>
                    <div className={styles.textWrapper}>
                        <h3>WFH Allowance</h3>
                    </div>
                </div>
                <div className={styles.cardItem}>
                    <div className={styles.icon}>
                        <Image src="/incentiveSchemes.png" height={50} width={50} alt='perk'/>
                    </div>
                    <div className={styles.textWrapper}>
                        <h3>Incentive Schemes</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PerksandBenefits