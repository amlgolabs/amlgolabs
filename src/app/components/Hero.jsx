// import React from 'react';
// import styles from "../styles/Components/Hero.module.css";

// const Hero = () => {
//   return (
//     <div className={styles.heroContainer}>
//       <div className={styles.heroContentArea}>
//         <div className={styles.heroContentAreaText}>
//           <h1>Simplifying Complexity with<br /> Data and Gen-AI</h1>
//           <button>Know More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




// import React from 'react';
// import styles from "../styles/Components/Hero.module.css";
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <div className={styles.heroContainer}>
//       <div className={styles.heroContentArea}>
//       <Image
//       height={4000}
//       width={4000}
//           src="/HomeBanner2.png"
//           alt="Overlay"
//           className={styles.heroImage}
//           objectFit="cover"
//           quality={100}
//         />
//         <div className={styles.heroContentAreaText}>
//           <h1>Simplifying Complexity with<br /> Data and Gen-AI</h1>
//           <button>Know More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;















// import styles from "../styles/Components/Hero.module.css";

// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <section className={styles.heroSection}>
//       <Image
//         src="/Hero3.png"
//         alt="Data Analytics and AI Background"
//         layout="fill"
//         objectFit="cover"
//         quality={90} // Higher quality for clarity
//         priority // Ensures it loads first
//       />


//       <div className={styles.overlay}></div>
//       <div className={styles.heroContent}>
//         <h1 className={styles.heading}>
//           Empowering Businesses with Data Analytics and AI
//         </h1>
//         <p className={styles.description}>
//           Unlock the power of your data with cutting-edge AI solutions tailored to your needs.
//         </p>
//         <button className={styles.ctaButton}>Get Started</button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




















// ------------------------------------------------------------------------------------------------------Dark Background Theme
// "use client"
// import styles from "../styles/Components/Hero.module.css";
// import Image from 'next/image';
// import { useState } from 'react';

// const HeroSection = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.imageWrapper}>
//         <Image
//           src="/Hero3.png"
//           alt="Data Analytics and AI Background"
//           layout="fill"
//           objectFit="cover"
//           quality={90} // Higher quality for clarity
//           priority // Ensures it loads first
//         />
//       </div>

//       <div className={styles.overlay}></div>
//       <div className={styles.heroContent}>
//         <h1 className={styles.heading}>
//           Empowering Businesses with<br/> Data Analytics and AI
//         </h1>
//         <p className={styles.description}>
//           Unlock the power of your data with cutting-edge AI solutions tailored to your needs.
//         </p>
//         <button 
//           className={`${styles.ctaButton} ${hovered ? styles.ctaButtonHovered : ''}`}
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//         >
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../styles/Components/Hero.module.css";


const Hero = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <Link href="/generative-ai">
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