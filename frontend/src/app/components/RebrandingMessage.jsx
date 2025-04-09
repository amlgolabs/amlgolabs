// "use client"
// import React, { useState, useEffect } from 'react';
// import styles from '../styles/Components/RebrandingMessage.module.css';
// import { IoClose } from 'react-icons/io5';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// const RebrandingMessage = ({ message = "Welcome to our new identity!" }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
//   }, [isOpen]);

//   return (
//     <>
//       {/* Floating Button */}
//       <motion.div 
//         className={styles.floatingMessage} 
//         onClick={() => setIsOpen(true)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <div className={styles.oldLogo}>
//           <Image src="/logoorange.png" height={80} width={80} alt='Old Brand'/>  
//         </div>
//         <div className={styles.textContainer}>
//           <p>is now</p>
//         </div>
//         <div className={styles.newLogo}>
//           <Image src="/logo/logo21march.png" height={80} width={80} alt='New Brand'/>
//         </div>
//       </motion.div>

//       {/* Popup Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             className={styles.overlay} 
//             onClick={() => setIsOpen(false)}
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             exit={{ opacity: 0 }}
//           >
//             <motion.div 
//               className={styles.popup} 
//               onClick={(e) => e.stopPropagation()}
//               initial={{ y: 50, opacity: 0 }} 
//               animate={{ y: 0, opacity: 1 }} 
//               exit={{ y: 50, opacity: 0 }}
//             >
//               <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
//                 <IoClose />
//               </button>
//               <h2>We have Upgraded!</h2>
//               <p>Amlgo Labs is now rebranded for a smarter, sleeker, and more innovative experience.</p>
//               {/* <div className={styles.rebrandingVisuals}>
//   <video src="/rebrand.mp4" height={150} width={250} autoPlay loop muted playsInline>
//     Your browser does not support the video tag.
//   </video>
// </div> */}

//               <motion.button 
//                 className={styles.exploreButton}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Explore New Look
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default RebrandingMessage;


// "use client";
// import React, { useState, useEffect } from "react";
// import styles from "../styles/Components/RebrandingMessage.module.css";
// import { IoClose } from "react-icons/io5";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const RebrandingMessage = ({ message = "Welcome to our new identity!" }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isFloatingOut, setIsFloatingOut] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = isPopupOpen ? "hidden" : "auto";
//   }, [isPopupOpen]);

//   return (
//     <>
//       {/* Floating Message (Slider) */}
//       <motion.div
//         className={styles.floatingMessage}
//         onClick={() => setIsPopupOpen(true)}
//         animate={{
//           x: isFloatingOut ? "150%" : "0%",
//           opacity: isFloatingOut ? 0 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         whileHover={{ scale: isFloatingOut ? 1 : 1.05 }}
//         whileTap={{ scale: isFloatingOut ? 1 : 0.95 }}
//       >
//         <div className={styles.oldLogo}>
//           <Image src="/logoorange.png" height={80} width={80} alt="Old Brand" />
//         </div>
//         <div className={styles.textContainer}>
//           <p>is now</p>
//         </div>
//         <div className={styles.newLogo}>
//           <Image src="/logo/logo21march.png" height={80} width={80} alt="New Brand" />
//         </div>
//       </motion.div>

//       {/* In/Out Control Buttons */}
//       <div className={styles.controlButtons}>
//         <button onClick={() => setIsFloatingOut(true)} className={styles.controlButton}>
//           In (Slide Out)
//         </button>
//         <button onClick={() => setIsFloatingOut(false)} className={styles.controlButton}>
//           Out (Slide In)
//         </button>
//       </div>

//       {/* Popup Overlay */}
//       <AnimatePresence>
//         {isPopupOpen && (
//           <motion.div
//             className={styles.overlay}
//             onClick={() => setIsPopupOpen(false)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className={styles.popup}
//               onClick={(e) => e.stopPropagation()}
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//             >
//               <button className={styles.closeButton} onClick={() => setIsPopupOpen(false)}>
//                 <IoClose size={24} />
//               </button>
//               <h2>We have Upgraded!</h2>
//               <p>{message}</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default RebrandingMessage;

// "use client";
// import React, { useState, useEffect } from "react";
// import styles from "../styles/Components/RebrandingMessage.module.css";
// import { IoClose } from "react-icons/io5";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const RebrandingMessage = ({ message = "Welcome to our new identity!" }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isFloatingOut, setIsFloatingOut] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = isPopupOpen ? "hidden" : "auto";
//   }, [isPopupOpen]);

//   return (
//     <>
//       {/* Floating Message (with Slide Control) */}
//       <motion.div
//         className={styles.floatingMessage}
//         onClick={() => setIsPopupOpen(true)}
//         animate={{
//           x: isFloatingOut ? "150%" : "0%",
//           opacity: isFloatingOut ? 0 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 120, damping: 18 }}
//         whileHover={{ scale: isFloatingOut ? 1 : 1.05 }}
//         whileTap={{ scale: isFloatingOut ? 1 : 0.95 }}
//       >
//         <div className={styles.oldLogo}>
//           <Image src="/logoorange.png" height={80} width={80} alt="Old Brand" />
//         </div>
//         <div className={styles.textContainer}>
//           <p>is now</p>
//         </div>
//         <div className={styles.newLogo}>
//           <Image src="/logo/logo21march.png" height={80} width={80} alt="New Brand" />
//         </div>
//       </motion.div>

//       {/* Slide In/Out Buttons */}
//       <div className={styles.controlButtons}>
//         <button onClick={() => setIsFloatingOut(true)} className={styles.inOutButton}>Slide Out ➡️</button>
//         <button onClick={() => setIsFloatingOut(false)} className={styles.inOutButton}>⬅️ Slide In</button>
//       </div>

//       {/* Popup Modal */}
//       <AnimatePresence>
//         {isPopupOpen && (
//           <motion.div
//             className={styles.overlay}
//             onClick={() => setIsPopupOpen(false)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className={styles.popup}
//               onClick={(e) => e.stopPropagation()}
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//             >
//               <button className={styles.closeButton} onClick={() => setIsPopupOpen(false)}>
//                 <IoClose />
//               </button>
//               <h2>We have Upgraded!</h2>
//               <p>Amlgo Labs is now rebranded for a smarter, sleeker, and more innovative experience.</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default RebrandingMessage;


"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Components/RebrandingMessage.module.css";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const RebrandingMessage = ({ message = "Welcome to our new identity!" }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFloatingOut, setIsFloatingOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : "auto";
  }, [isPopupOpen]);

  return (
    <>
      {/* Floating Message */}
      <motion.div
        className={styles.floatingMessage}
        onMouseEnter={() => setIsPopupOpen(true)}
        animate={{
          x: isFloatingOut ? "150%" : "0%",
          opacity: isFloatingOut ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        whileHover={{ scale: isFloatingOut ? 1 : 1.05 }}
        whileTap={{ scale: isFloatingOut ? 1 : 0.95 }}
      >
        <div className={styles.oldLogo}>
          <Image src="/logoorange.png" height={80} width={80} alt="Old Brand" />
        </div>
        <div className={styles.textContainer}>
          <p>is now</p>
        </div>
        <div className={styles.newLogo}>
          <Image src="/logo/logo21march.png" height={80} width={80} alt="New Brand" />
        </div>
      </motion.div>

      {/* Slide In / Out Button */}
      {/* <div className={styles.controlButtons}>
        {!isFloatingOut ? (
          <button
            onClick={() => setIsFloatingOut(true)}
            className={styles.inButton}
          >
              <Image src="/hide.png" height={24} width={24} alt="info" />

          </button>
        ) : (
          <button
  onClick={() => setIsFloatingOut(false)}
  className={styles.inOutButton}
>
  <Image src="/info.png" height={24} width={24} alt="info" />
</button>
        )}
      </div> */}

{/* <div className={styles.controlButtons}>
  <button
    onClick={() => setIsFloatingOut(!isFloatingOut)}
    className={styles.inOutButton}
  >
    <Image src="/info.png" height={24} width={24} alt="info" />
  </button>
</div> */}

<div className={styles.controlButtons}>
  {isFloatingOut && (
    <button
      onClick={() => setIsFloatingOut(false)}
      className={styles.inOutButton}
    >
      <Image src="/info.png" height={24} width={24} alt="info" />
    </button>
  )}
</div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className={styles.overlay}
            onClick={() => setIsPopupOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.popup}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* <button className={styles.closeButton} onClick={() => setIsPopupOpen(false)}>
                <IoClose />
              </button> */}
              <button
  className={styles.closeButton}
  onClick={() => {
    setIsFloatingOut(true);
    setIsPopupOpen(false);
  }}
>
  <IoClose />
</button>
              <h2>We have Upgraded!</h2>
              <p>Amlgo Labs is now rebranded for a smarter, sleeker, and more innovative experience.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RebrandingMessage;
