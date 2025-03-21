import React from 'react'
import styles from "../../../../styles/pages/Components/Solutions/text-sql/ExecutiveSummary.module.css"
import Link from 'next/link'
import Image from 'next/image'

const ExecutiveSummary = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <h1>Market Analysis</h1>
                <p>Real estate firms collect vast amounts of data on <span>property listings</span>, <span>market trends</span>, and <span>client interactions</span>. However, accessing this data is often challenging due to complex <span>database systems</span>, slowing down <span>decision-making</span>. <span>Amlgo Labs</span> introduced a <span>Generative AI solution</span> powered by <span>Large Language Models (LLMs)</span> to simplify <span>data access</span>, enabling agents and managers to query databases effortlessly using <span>natural language</span>.</p>
            </div>

            <div className={styles.image}>
                <Image src="/solutions/text-sql/marketanalysis.png" height={500} width={500} alt='img'> 

                </Image>
            </div>
        </div>
    </div>
  )
}

export default ExecutiveSummary