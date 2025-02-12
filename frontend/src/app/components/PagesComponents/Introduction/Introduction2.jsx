import React from 'react'
import styles from "../../../styles/pages/Components/Introduction/Introduction2.module.css"


const Introduction2 = ({heading, content1, content2}) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>

        <div className={styles.heading}>
            <h2>{heading}</h2>
        </div>

        <div className={styles.content}>
            <p>{content1}</p>
            <p>{content2}</p>
        </div>
        </div>

    </div>
  )
}

export default Introduction2