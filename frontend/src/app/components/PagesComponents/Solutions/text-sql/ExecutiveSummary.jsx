import React from 'react'
import styles from "../../../../styles/pages/Components/Solutions/text-sql/ExecutiveSummary.module.css"
import Link from 'next/link'
import Image from 'next/image'

const ExecutiveSummary = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <h1>Talk to your Database</h1>
                <p><span>Amlgo Labs</span> introduced a <span>Generative AI solution</span> powered by <span>Large Language Models (LLMs)</span> to simplify <span>data access</span>, enabling agents and managers to query databases effortlessly using <span>natural language</span>. Firms in the <span>Real Estate Industry</span> collect vast amounts of <span>data</span> on property listings, market trends, and client interactions. However, accessing and leveraging this data effectively can be challenging due to <span>complex database systems</span>, leading to slower decision-making. Get a detailed view of how <span>Amlgo Labs</span> addressed this challenge through a comprehensive <span>solution</span> in our <span>Real Estate Case Study.</span> </p>

                {/* Real estate firms collect vast amounts of data on <span>property listings</span>, <span>market trends</span>, and <span>client interactions</span>. However, accessing this data is often challenging due to complex <span>database systems</span>, slowing down <span>decision-making</span>. */}
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