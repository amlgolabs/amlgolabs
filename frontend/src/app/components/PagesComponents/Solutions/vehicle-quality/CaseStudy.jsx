import React from 'react'
import styles from "../../../../styles/pages/Components/Solutions/vehicle-quality-ai/CaseStudy.module.css"
import Image from 'next/image'
import Link from 'next/link'

const CaseStudy = () => {
  return (
<div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <Link href="/vehicle-quality-ai#market-analysis">
            <div className={styles.imageContainer}>
                <Image
                    src="/solutions/vehicle-quality-ai/caseStudy.png" // Ensure this path is correct
                    alt="architecture"
                    width={1366}
                    height={768}
                    layout="intrinsic" // Allows responsive resizing based on natural aspect ratio
                    quality={99} // Optional: Adjusts image quality for optimization
                    priority // Optional: If this image is critical for above-the-fold content, consider marking it as priority
                />
            </div>
            </Link>
        </div>
    </div>
  )
}

export default CaseStudy