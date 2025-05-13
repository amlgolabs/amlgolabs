"use client";
import React, { useRef, useEffect } from 'react';
import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/DemoVideo.module.css';
import Image from 'next/image';
import Link from 'next/link';

const DemoVideo = ({ src, heading, description, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, []);

  return (
    <section className={styles.demoVideoSection} id="demo">
      <div className={styles.container}>
        <div className={styles.videoCard}>
          <video
            ref={videoRef}
            className={styles.video}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            // style={{ pointerEvents: 'none' }}
          />

{/* <Image 
        src={src} 
        alt="chatbot" 
        width={512} 
        height={384} 
        unoptimized 
      /> */}
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.description}>{description}</p>
          <Link href="/contact-us">
            <button className="globalButton">
              Request a Demo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
