import React from 'react'
import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy1.module.css"
import Image from 'next/image'
import Link from 'next/link'

const IndustryCaseStudy1 = ({caseStudyHeading, CaseStudyImageSrc}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.caseStudyContainer}>
                <div className={styles.contentContainer}>
                    <h3>Case Study</h3>
                    <h2>{caseStudyHeading}</h2>
                    <Link href="/">
                        <button className={styles.button}>Know More</button>
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Image height={400} width={400} src={CaseStudyImageSrc} alt='caseStudy' />
                </div>
            </div>
        </div>
    )
}

export default IndustryCaseStudy1