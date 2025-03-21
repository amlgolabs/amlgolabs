// "use client"
// import { useState } from "react";
// import Image from "next/image";
// import styles from "../../../styles/pages/Components/CapabilitiesPages/CaseStudyList.module.css";
// import { useRouter } from "next/navigation";

// const caseStudies = [
//   {
//     id: 1,
//     title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod.",
//     image: "/placeholder/2400x800.png",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     link: "/case-study/1",
//   },
//   {
//     id: 2,
//     title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod.",
//     image: "/placeholder/2400x800.png",


//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

//     link: "/case-study/2",
//   },
//   {
//     id: 3,
//     title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod.",
//     image: "/placeholder/2400x800.png",

//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

//     link: "/case-study/3",
//   },
//   {
//     id: 4,
//     title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod.",
//     image: "/placeholder/2400x800.png",

//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    
//     link: "/case-study/4",
//   },
// ];

// const CaseStudyList = () => {
//   const [selectedCase, setSelectedCase] = useState(caseStudies[0]);
//   const router = useRouter();

//   return (
//     <div className={styles.mainContainer}>
//         <div className={styles.heading}>
//           <h2>Success Stories</h2>
//         </div>
//     <div className={styles.container}>
//       {/* Left Section - Case Study List */}
//       <div className={styles.leftSection}>
//         {caseStudies.map((caseItem) => (
//           <div
//             key={caseItem.id}
//             className={`${styles.caseItem} ${
//               selectedCase.id === caseItem.id ? styles.active : ""
//             }`}
//             onClick={() => setSelectedCase(caseItem)}
//           >
//             {caseItem.title}
//           </div>
//         ))}
//       </div>

//       {/* Right Section - Image, Description, Button */}
//       <div className={styles.rightSection}>
//         <Image
//           src={selectedCase.image}
//           alt={selectedCase.title}
//           width={1200}  // Ideal width
//   height={400}  // Ideal height
//   layout="responsive"  // Ensures proper scaling
//   objectFit="cover"  // Ensures the image covers the given dimensions without distortion
//   quality={100}  // Ensures highest image quality
//   priority // Loads the image eagerly for better UX
//           className={styles.image}
//         />
//         <p className={styles.description}>{selectedCase.description}</p>
//         <button
//           className={styles.readMore}
//           onClick={() => router.push(selectedCase.link)}
//         >
//           Read More
//         </button>
//       </div>
//     </div>
//     </div>

//   );
// };

// export default CaseStudyList;

"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../../../styles/pages/Components/CapabilitiesPages/CaseStudyList.module.css";

const CaseStudyList = ({ caseStudies }) => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0] || null);
  const router = useRouter();

  if (!caseStudies || caseStudies.length === 0) {
    return <p>No case studies available.</p>;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h2>Success Stories</h2>
      </div>
      <div className={styles.container}>
        {/* Left Section - Case Study List */}
        <div className={styles.leftSection}>
          {caseStudies.map((caseItem) => (
            <div
              key={caseItem.id}
              className={`${styles.caseItem} ${
                selectedCase?.id === caseItem.id ? styles.active : ""
              }`}
              onClick={() => setSelectedCase(caseItem)}
            >
              {caseItem.title}
            </div>
          ))}
        </div>

        {/* Right Section - Image, Description, Button */}
        {selectedCase && (
          <div className={styles.rightSection}>
            <Image
              src={selectedCase.image}
              alt={selectedCase.title}
              width={1200}
              height={400}
              layout="responsive"
              objectFit="cover"
              quality={100}
              priority
              className={styles.image}
            />
            <p className={styles.description}>{selectedCase.description}</p>
            <button
              className={styles.readMore}
              onClick={() => router.push(selectedCase.link)}
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyList;