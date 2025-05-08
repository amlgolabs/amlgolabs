import React from 'react'
import styles from "../../../styles/pages/Components/Insights/InsightsHero.module.css"
import Image from 'next/image'

const InsightsHero = () => {
  return (
    <div className={styles.parentContainer}>

    <div className={styles.mainContainer}>
        <div className={styles.content}>
            <h1>Our Perspective</h1>
            <p>Explore insights on how we leverage data, technology, and AI to enhance business performance.</p>
        </div>

        <div className={styles.blogContent}>
            <h4>Case Study</h4>
            <Image src="/insights/heroBlog.png" height={400} width={400} alt='blog'/>
            <h2>Data-driven Insights, Powered by Generative AI</h2>
            <button>Read Now</button>
        </div>
    </div>
    </div>
  )
}

export default InsightsHero