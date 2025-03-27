import React from 'react'
import styles from "../../../styles/pages/Components/IndustrySectors/IndustrySectors.module.css"
import Link from 'next/link'
import StartIcon from '@mui/icons-material/Start';

const IndustrySectors = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          <h2>Transforming Retail & Consumer Goods with Data-Driven Innovation - Amlgo Labs</h2>
        </div>

        <div className={styles.industrySectors}>
  <div className={styles.sector} style={{ backgroundImage: "url('/consumer-retail/consumergoods.png')" }}>
    <h3>Consumer Goods</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste, magnam labore quod tempora dolor.</p>
    <button className={styles.readMore}><StartIcon/></button>
  </div>

  <div className={styles.sector} style={{ backgroundImage: "url('/consumer-retail/retail.png')" }}>
    <h3>Retail</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptas ut repudiandae nihil voluptatibus ratione!</p>
    <button className={styles.readMore}><StartIcon/></button>
  </div>
</div>
      </div>
    </div>
  )
}

export default IndustrySectors