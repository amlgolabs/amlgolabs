"use client"
import React, { useEffect, useRef } from 'react';
import styles from "../../../../styles/pages/Components/Solutions/ai-chatbot/Intro.module.css";
import Image from 'next/image';
import Link from 'next/link';


const Intro = () => {
  //   const videoRef = useRef(null);
  
  //  useEffect(() => {
  //     if (videoRef.current) {
  //       videoRef.current.currentTime = 0;
  //       videoRef.current.play();
  //     }
  //   }, []);
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <h1 className={styles.heading}>Secure. Private. Powerful. Enterprise AI Without Compromise.</h1>
          <p className={styles.subText}>
          70% of organizations cite data privacy as a top concern when adopting AI. For enterprises handling sensitive data, secure, private AI isn’t optional—it’s essential. Imagine leveraging generative AI without external cloud risks.
          </p>
          
          <p className={styles.highlightText}>
          Amlgo Labs On-Prem GenAI Bot makes this a reality. It operates entirely within your secure network, ensuring sensitive data never leaves your environment. This is the future of enterprise AI—powerful, private, and risk-free.
          </p>
          <div className={styles.ctaContainer}>
            <Link href="/conversational-ai-chatbot#demo">
            <button className="globalButtonBlack">Learn More</button>
            </Link>
            {/* <button className={styles.secondaryButton}>Learn More</button> */}
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.mainImageWrapper}>
            <Image src="/solutions/ai-chatbot/demoGIF.gif" alt="AI Illustration" className={styles.aiImage} width={600} height={600} />
            {/* <video
                        ref={videoRef}
                        className={styles.video}
                        src="/solutions/ai-chatbot/demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={poster}
                        
                      /> */}
          </div>
          {/* <div className={styles.secureImageWrapper}>
            <Image src="/solutions/ai-chatbot/secure-ai.png" alt="Secure AI" className={styles.secureImage} width={180} height={180} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;

