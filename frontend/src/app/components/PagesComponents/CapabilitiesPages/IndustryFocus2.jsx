import React from 'react'
import styles from "../../../styles/pages/Components/CapabilitiesPages/IndustryFocus2.module.css"
import Image from 'next/image'
import Link from 'next/link'

const IndustryFocus2 = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <h2>Gen AI Agents revolutionize optimization, delivering smart solutions across every industry</h2>
            <div className={styles.industryContainer}>
                <Link href="/banking-finance">
                
                <div className={styles.industryCard}>
                    <div className={styles.image}>
                        <Image src="/placeholder/200x200.png" height={200} width={200} quality={100} alt='img'/>
                    </div>

                    <div className={styles.textWrapper}>
                        <h3>Banking</h3>
                        <p>Automate complex financial analysis and personalize client interactions with intelligent, autonomous agents.</p>
                    </div>
                </div>
                </Link>
                <div className={styles.industryCard}>
                    <div className={styles.image}>
                    <Image src="/placeholder/200x200.png" height={200} width={200} quality={100} alt='img'/>
                       
                    </div>

                    <div className={styles.textWrapper}>
                        <h3>Automotive</h3>
                        <p>Optimize supply chains and enhance vehicle diagnostics through proactive, AI-driven agent systems.</p>
                    </div>
                </div>
                <div className={styles.industryCard}>
                    <div className={styles.image}>
                    <Image src="/placeholder/200x200.png" height={200} width={200} quality={100} alt='img'/>
                       
                    </div>

                    <div className={styles.textWrapper}>
                        <h3>Manufacturing</h3>
                        <p>Streamline production processes and predict equipment failures with intelligent, adaptive agent workflows.</p>
                    </div>
                </div>
                <div className={styles.industryCard}>
                    <div className={styles.image}>
                    <Image src="/placeholder/200x200.png" height={200} width={200} quality={100} alt='img'/>
                        
                    </div>

                    <div className={styles.textWrapper}>
                        <h3>Consumer Goods</h3>
                        <p>Personalize customer journeys and optimize inventory management through AI agents that anticipate market trends.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndustryFocus2