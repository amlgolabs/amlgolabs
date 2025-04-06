"use client"
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy3.module.css";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
    {
        id: 1,
        image: "/consumer-retail/1.jpg",
        title: "Real-World Applications of AI in Logistics",
        description: "Transforming traditional supply chain operations into intelligent, data-driven ecosystems.",
        date: "Jan 10, 2024",
        parentTitle: "Case Study",
        link: "/documents/AI_Logistics.pdf"
    },
    {
        id: 2,
        image: "/consumer-retail/2.jpg",
        title: "Generative AI vs Predictive AI",
        description: "Companies face a critical choice between AI systems that predict customer behavior.",
        date: "Feb 15, 2024",
        parentTitle: "White Paper",
        link: "/documents/generativeaivspredictiveai.pdf"

    },
    {
        id: 3,
        image: "/consumer-retail/3.jpg",
        title: "The ROI of Implementing Generative AI",
        description: "Strategies based on specific inputs have gained significant traction across various industries.",
        date: "Mar 5, 2024",
        parentTitle: "Blog",
        link: "/documents/ROI_GenAI.pdf"

    },
    {
        id: 4,
        image: "/consumer-retail/4.jpg",
        title: "Integrating Generative AI for Smarter, Faster Workflows",
        description: "In today’s tech-driven world, someone is talking about AI.",
        date: "Apr 10, 2024",
        parentTitle: "Case Study",
        link:"/documents/BusinessPotential_GenAI.pdf"
    },
    {
        id: 5,
        image: "/consumer-retail/5.jpg",
        title: "Generative AI is Disrupting Entire Industries",
        description: "Creates new content like images, music, text, and code.",
        date: "May 15, 2024",
        parentTitle: "White Paper",
        link: "/documents/how_generative_ai_is_disrupting_entindustries_and_how_amlgo_labs_is_leading_the_charge.pdf"
    },
    {
        id: 6,
        image: "/consumer-retail/6.jpg",
        title: "AI Factories, Digital Humans, Robots, and Virtual Planets?",
        description: "Nvidia has once again pushed the boundaries of innovation with its latest revelations.",
        date: "Jun 20, 2024",
        parentTitle: "Case Study",
        link: "/documents/nvidias-new-era-ai-robots-and-virtual-worlds.pdf"
    },
    {
        id: 7,
        image: "/consumer-retail/7.jpg",
        title: "Enhance Financial Forecasts with N-BEATS AI",
        description: "It has always been a cornerstone of effective decision-making in the financial sector.",
        date: "Jul 5, 2024",
        parentTitle: "Blog",
        link: "/documents/amlgolabs_com_enhance_financial_forecasting_with_n_beats_ai.pdf"
    }
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
                    <Link  key={study.id} href={study.link} target="_blank">
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
                    </Link>
                ))}
            </motion.div>
        </div>
    );
};

export default IndustryCaseStudy3;
