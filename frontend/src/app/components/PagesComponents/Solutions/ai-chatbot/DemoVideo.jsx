// "use client"
// import React, { useRef, useEffect } from 'react';
// import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/DemoVideo.module.css';

// const DemoVideo = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       // Restart video when component mounts
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//     }
//   }, []);

//   return (
//     <section className={styles.demoVideoSection}>
//       <div className={styles.container}>
//         <div className={styles.videoWrapper}>
//           <video
//             ref={videoRef}
//             className={styles.video}
//             src="/solutions/ai-chatbot/demo.mov" // make sure your video is placed in /public/videos/demo.mp4
//             autoPlay
//             muted
//             loop
//             playsInline
//             controls
//           />
//         </div>
//         <div className={styles.textWrapper}>
//           <h2 className={styles.heading}>Amlgo Labs’ Custom AI Chatbot</h2>
//           <p className={styles.description}>
//           Experience the power of Amlgo Labs’ cutting-edge AI Chatbot, designed to enhance and streamline your customer interactions. Watch this quick demo to see how our intelligent solution offers real-time engagement, seamless communication, and unmatched flexibility. As part of Amlgo Labs’ suite of AI-driven innovations, our chatbot empowers businesses to deliver smarter, faster, and more personalized customer experiences. Discover how you can revolutionize your support and drive greater satisfaction with our next-generation conversational AI capabilities.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DemoVideo;

// "use client"
// import React, { useRef, useEffect } from 'react';
// import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/DemoVideo.module.css';

// const DemoVideo = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//     }
//   }, []);

//   return (
//     <section className={styles.demoVideoSection}>
//       <div className={styles.container}>
//         <div className={styles.videoWrapper}>
//           <video
//             ref={videoRef}
//             className={styles.video}
//             src="/solutions/ai-chatbot/demo.mov"
//             autoPlay
//             muted
//             loop
//             playsInline
//             controls
//             poster="/images/video-poster.jpg" // optional poster image before load
//           />
//         </div>
//         <div className={styles.textWrapper}>
//           <h2 className={styles.heading}>Amlgo Labs’ Custom AI Chatbot</h2>
//           <p className={styles.description}>
//           Experience the power of Amlgo Labs’ cutting-edge AI Chatbot, designed to enhance and streamline your customer interactions. Watch this quick demo to see how our intelligent solution offers real-time engagement, seamless communication, and unmatched flexibility. As part of Amlgo Labs’ suite of AI-driven innovations, our chatbot empowers businesses to deliver smarter, faster, and more personalized customer experiences. Discover how you can revolutionize your support and drive greater satisfaction with our next-generation conversational AI capabilities.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DemoVideo;

"use client";
import React, { useRef, useEffect } from 'react';
import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/DemoVideo.module.css';

const DemoVideo = ({ src, heading, description, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, []);

  return (
    <section className={styles.demoVideoSection}>
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
            controls
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
