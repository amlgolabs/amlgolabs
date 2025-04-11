"use client"
import React from 'react'
import styles from "../styles/pages/Components/Careers/CareerBanner.module.css"
import { useRouter } from "next/navigation";

const CareerBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/careers#jobs"); // Redirects to the 'jobs' section in the career page
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h1>Join Amlgo Labs</h1>
        <p>Amlgo Labs, with teams in the USA, Bangalore, and Gurugram, specializes in solving complex data analytics challenges. Driven by innovation and a passion for success, we push boundaries to shape the future. Join us!</p>
        <button className="globalButton" onClick={handleClick}>Explore Jobs</button>
      </div>
    </div>
  )
}

export default CareerBanner