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
  className="globalButton"
  onClick={() => window.open(selectedCase.link, "_blank")}
>
  Read Now
</button>

          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyList;