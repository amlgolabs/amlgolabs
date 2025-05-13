import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../styles/Components/Hero.module.css";


const Hero = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <Link href="/generative-ai-services">
            <div className={styles.imageContainer}>
                <Image
                    src="/Home/hero2.webp" // Ensure this path is correct
                    alt="architecture"
                    width={1400}
                    height={768}
                    layout="intrinsic" // Allows responsive resizing based on natural aspect ratio
                    quality={99} // Optional: Adjusts image quality for optimization
                    priority // Optional: If this image is critical for above-the-fold content, consider marking it as priority
                />
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Hero