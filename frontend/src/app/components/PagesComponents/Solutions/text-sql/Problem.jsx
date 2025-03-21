import React from 'react'
import styles from "../../../../styles/pages/Components/Solutions/text-sql/Problem.module.css"
import Image from 'next/image'

const Problem = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          

            <div className={styles.image}>
                <Image src="/placeholder/1024x1024.png" height={500} width={500} alt='img'> 

                </Image>
            </div>
            <div className={styles.content}>
                <h1>Problem</h1>
                <p>Accessing crucial data within the real estate sector often involves navigating complex database structures. <span>Agents</span> and <span>Managers</span> typically rely on data analysts to generate <span>SQL queries</span>, leading to delays that can impact deal closures and market responsiveness. As data volumes increase, the reliance on technical experts becomes unsustainable. <span>Information silos</span> and <span>inconsistent data</span> requests contribute to inaccuracies and fragmented insights, hindering <span>strategic decision-making</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Problem