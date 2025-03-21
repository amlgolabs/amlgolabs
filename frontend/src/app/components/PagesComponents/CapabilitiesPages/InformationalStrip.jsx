import React from 'react'
import styles from "../../../styles/pages/Components/CapabilitiesPages/InformationalStrip.module.css"
import Image from 'next/image'
import Link from 'next/link'

const InformationalStrip = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
        <div className={styles.leftContent}>
          <div className={styles.innerLeft}>
          <Image 
  src="/capabilities/ai2.png" 
  alt="ai" 
  width={450} 
  height={300} 
  quality={100} // Ensures maximum quality
  className={styles.image} 
/>

            <h2>A case study exploring the ethical considerations of using LLMs, such as bias, misinformation, and job displacement.</h2>
           <Link href="/">
           <button>Learn More</button>
           </Link> 
          </div>
        </div>

            <div className={styles.rightContent}>
                <div className={styles.upperRight}>
                    <h3>Deploying Language Model Applications to AWS: An Open-Source Approach</h3>
                    <button>Read More</button>
                </div>
                <div className={styles.line}></div>
                <div className={styles.lowerRight}>
                    <h3>Real-World Applications of AI in Logistics</h3>
                    <button>Explore Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InformationalStrip