


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
//       {/* Floating Message */}
//       <motion.div
//         className={styles.floatingMessage}
//         onMouseEnter={() => setIsPopupOpen(true)}
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
//           <Image src="/logo/logo21march.png" height={200} width={200} alt="New Brand" />
//         </div>
//       </motion.div>

     

// <div className={styles.controlButtons}>
//   {isFloatingOut && (
//     <button
//       onClick={() => setIsFloatingOut(false)}
//       className={styles.inOutButton}
//     >
//       <Image src="/info.png" height={24} width={24} alt="info" />
//     </button>
//   )}
// </div>

//       {/* Popup Modal */}
//       <AnimatePresence>
//         {isPopupOpen && (
//           <motion.div
//           className={styles.overlay}
//           onClick={() => {
//             setIsPopupOpen(false);
//             setIsFloatingOut(true); // Add this to make floating message disappear
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//             <motion.div
//               className={styles.popup}
//               onClick={(e) => e.stopPropagation()}
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//             >
//               {/* <button className={styles.closeButton} onClick={() => setIsPopupOpen(false)}>
//                 <IoClose />
//               </button> */}
//               <button
//   className={styles.closeButton}
//   onClick={() => {
//     setIsFloatingOut(true);
//     setIsPopupOpen(false);
//   }}
// >
//   <IoClose />
// </button>
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
          <Image
            src="/logoorange.png"
            height={80}
            width={80}
            alt="Old Brand"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.textContainer}>
          <p>is now</p>
        </div>
        <div className={styles.newLogo}>
          <Image
            src="/logo/logo21march.png"
            height={200}
            width={200}
            alt="New Brand"
            style={{ objectFit: "contain" }}
          />
        </div>
      </motion.div>

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
            onClick={() => {
              setIsPopupOpen(false);
              setIsFloatingOut(true);
            }}
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
              <p>
                Amlgo Labs is now rebranded for a smarter, sleeker, and more
                innovative experience.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RebrandingMessage;
