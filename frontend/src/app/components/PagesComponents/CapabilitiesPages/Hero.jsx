// import React from "react";
// import styles from "../../../styles/pages/Components/CapabilitiesPages/Hero.module.css";

// const Hero = () => {
//   return (
//     <div className={styles.mainContainer}>
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className={styles.backgroundVideo}
//       >
//         <source src="/capabilities/herobackground2.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className={styles.overlay} />

//       <div className={styles.contentContainer}>
//         <h1 className={styles.heading}>
//           Unleashing the Power of Intelligent Automation
//         </h1>
//         <p className={styles.description}>
//           Your business thrives on innovation and efficiency. Generative AI offers a paradigm shift,
//           enabling you to automate content creation, personalize customer experiences, and unlock
//           entirely new possibilities. Amlgo Labs can help you harness this transformative technology
//           to drive unprecedented growth, build resilience, and achieve your most ambitious goals.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React from "react";
import styles from "../../../styles/pages/Components/CapabilitiesPages/Hero.module.css";

const Hero = ({ videoSrc, heading, description }) => {
  return (
    <div className={styles.mainContainer}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={styles.overlay} />

      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};



export default Hero;
