import React from 'react'
import styles from "../styles/Components/BlackCta.module.css"
import Link from 'next/link'

const BlackCta = ({heading, buttonText}) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <h3>{heading}</h3>
            <Link href="/contact-us">
            <button>{buttonText}</button>
            </Link>
        </div>
    </div>
  )
}

export default BlackCta