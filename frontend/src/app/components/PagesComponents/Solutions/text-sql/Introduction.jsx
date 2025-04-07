"use client"
import React, { useEffect, useRef } from 'react'
import styles from "../../../../styles/pages/Components/Solutions/text-sql/Introduction.module.css"
import Image from 'next/image'

const Introduction = () => {

    const videoRef = useRef(null);
    
      useEffect(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }, []);


  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.upperContent}>
                {/* <div className={styles.upperLeft}>
                    <Image src="/solutions/text-sql/data.jpg" height={300} width={500} alt='img'/>
                </div> */}
                 <div className={styles.videoCard}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/solutions/text-sql/demo.mov"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
                <div className={styles.upperRight}>
                    <p><span>Data</span> is the cornerstone of the real estate industry, driving decisions on <span>property valuations</span>, <span>market analysis</span>, and <span>client relationship management</span>.</p>
                </div>
            </div>
            <div className={styles.lowerContent}>
                <p>Yet, traditional database systems, requiring specialized <span>SQL knowledge</span>, create a bottleneck for non-technical professionals. This dependency impedes timely access to critical information. <span>Amlgo Labs</span> addressed this by deploying an <span>LLM-driven</span> database interaction system, enabling direct data access via simple, <span>natural language queries</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Introduction