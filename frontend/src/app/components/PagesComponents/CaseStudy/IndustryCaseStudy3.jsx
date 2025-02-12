"use client"
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy3.module.css";
import Image from "next/image";

const caseStudies = [
    {
        id: 1,
        image: "/consumer-retail/CaseStudy2.png",
        title: "AI in Healthcare",
        description: "Transforming patient care with AI-driven diagnostics.",
        date: "Jan 10, 2024",
        parentTitle: "Case Study"
    },
    {
        id: 2,
        image: "/consumer-retail/CaseStudy2.png",

        title: "E-Commerce Growth",
        description: "Boosting sales through personalized recommendations.",
        date: "Feb 15, 2024",
        parentTitle: "White Paper"

    },
    {
        id: 3,
        image: "/consumer-retail/CaseStudy2.png",

        title: "Fintech Revolution",
        description: "Improving financial security with blockchain solutions.",
        date: "Mar 5, 2024",
        parentTitle: "Blog"

    },
    {
        id: 4,
        image: "/consumer-retail/CaseStudy2.png",

        title: "AI in Healthcare",
        description: "Transforming patient care with AI-driven diagnostics.",
        date: "Jan 10, 2024",
        parentTitle: "Case Study"

    },
    {
        id: 5,
        image: "/consumer-retail/CaseStudy2.png",

        title: "E-Commerce Growth",
        description: "Boosting sales through personalized recommendations.",
        date: "Feb 15, 2024",
        parentTitle: "White Paper"

    },
    {
        id: 6,
        image: "/consumer-retail/CaseStudy2.png",

        title: "Fintech Revolution",
        description: "Improving financial security with blockchain solutions.",
        date: "Mar 5, 2024",
        parentTitle: "Case Study"

    },
    {
        id: 7,
        image: "/consumer-retail/CaseStudy2.png",

        title: "AI in Healthcare",
        description: "Transforming patient care with AI-driven diagnostics.",
        date: "Jan 10, 2024",
        parentTitle: "Blog"

    },
    {
        id: 8,
        image: "/consumer-retail/CaseStudy2.png",

        title: "E-Commerce Growth",
        description: "Boosting sales through personalized recommendations.",
        date: "Feb 15, 2024",
        parentTitle: "White Paper"

    },
    {
        id: 9,
        image: "/consumer-retail/CaseStudy2.png",

        title: "Fintech Revolution",
        description: "Improving financial security with blockchain solutions.",
        date: "Mar 5, 2024",
        parentTitle: "Blog"

    },
    {
        id: 10,
        image: "/consumer-retail/CaseStudy2.png",

        title: "AI in Healthcare",
        description: "Transforming patient care with AI-driven diagnostics.",
        date: "Jan 10, 2024",
        parentTitle: "White Paper"

    },
    {
        id: 11,
        image: "/consumer-retail/CaseStudy2.png",

        title: "E-Commerce Growth",
        description: "Boosting sales through personalized recommendations.",
        date: "Case Study",
    },
    {
        id: 12,
        image: "/consumer-retail/CaseStudy2.png",

        title: "Fintech Revolution",
        description: "Improving financial security with blockchain solutions.",
        date: "Mar 5, 2024",
        parentTitle: "Blog"

    },
    // Add more case studies here if needed...
];

const IndustryCaseStudy3 = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className={styles.container}>
            {/* Top Section */}
            <div className={styles.header}>
                <div className={styles.text}>
                    <h2>Providing genuine value for our clients.</h2>
                    <p>We expertise in the consumer goods and retail sectors helps brands achieve higher profitability and stronger customer loyalty.</p>
                </div>
                <div className={styles.navigation}>
                    <motion.button
                        onClick={scrollLeft}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaArrowLeft />
                    </motion.button>
                    <motion.button
                        onClick={scrollRight}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaArrowRight />
                    </motion.button>
                </div>
            </div>

            {/* Scrollable Case Study Cards */}
            <motion.div
                className={styles.scroller}
                ref={scrollRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {caseStudies.map((study) => (
                    <motion.div
                        key={study.id}
                        className={styles.card}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* <img   /> */}
                        {/* <Image src={study.image} 
            width={320} // Matches min-width of card
            height={200} // Matches fixed height in CSS
            layout="responsive" // Makes it scale responsively
            objectFit="cover" // Ensures the image fills without distortion 
            alt={study.title}/> */}
                        <Image
                            src={study.image}
                            alt={study.title}
                            width={240}  // Smaller width
                            height={300} // Increased height
                            layout="intrinsic" // Keeps aspect ratio while allowing responsiveness
                            objectFit="contain"
                        />
                        <div className={styles.content}>

                        <h3>{study.title}</h3>
                        <p>{study.description}</p>
                        <div className={styles.parentTitle}>
                        <span>{study.parentTitle}</span>
                        <span className={styles.seperator}></span>
                        <span>{study.date}</span>
                        </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default IndustryCaseStudy3;
