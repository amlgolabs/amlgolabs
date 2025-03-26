"use client";
import React, { useState } from "react";
import styles from "../../styles/pages/Components/AutomotiveOfferings.module.css";
import Image from "next/image";

const offerings = [
    {
        title: "AI Chatbot for Vendors and Distributors",
        description: "Transform your automotive vendor and distributor relationships with Amlgo Labs AI chatbot.  Get 24/7 instant support for inquiries on inventory, orders, pricing, and more.  Boost efficiency and free up your team for strategic work.  Our AI-powered solution keeps your partners informed and connected. Contact us to learn how it can revolutionize your automotive supply chain.",
        image: "/businesses/automotive/chatbot.jpg"
    },
    {
        title: "DBConnect - GenAI based text to SQL User Interface",
        description: "Forget complex SQL queries. just type your questions in plain English to get immediate SQL results. From inventory levels to sales performance, gain rapid access to critical automotive insights. Contact Amlgo Labs today to experience the future of automotive data analysis.",
        image: "/businesses/automotive/dbconnect.jpg"

    },
    {
        title: "Vehicle Quality AI - Defect Correlation and Prediction",
        description: "Improve automotive quality and reduce defects with Amlgo Labs Vehicle Quality AI.  Our solution correlates and predicts defects, enabling proactive identification and resolution of quality issues.  Minimize recalls, optimize production, and enhance customer satisfaction. Contact us to learn how our AI can transform your automotive quality control.",
        image: "/businesses/automotive/vehiclequality.jpg"
    },
    {
        title: "Social Media Analytics - People's Voice for Automotive",
        description: "Understand the voice of your brands customers. Our solution analyses social media conversations to uncover valuable insights about customer sentiment, product feedback, and emerging trends. Gain a deeper understanding of what customers are saying about your brand and the automotive industry as a whole. Use these insights to improve product development, refine marketing strategies, and stay ahead of the competition. Contact us today to learn more.",
        image: "/businesses/automotive/socialmedia.jpg"
    }
];

const AutomotiveOfferings = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextOffering = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % offerings.length);
    };

    return (
        <div className={styles.offeringsContainer}>
            <h2 className={styles.heading}>Amlgo Labs Offerings</h2>
            <div className={styles.scrollDiv}>
                <div className={styles.offeringContent}>
                    <div className={styles.offeringText}>
                        <h3>{offerings[currentIndex].title}</h3>
                        <p>{offerings[currentIndex].description}</p>
                    </div>
                    <div className={styles.offeringImage}>
  <div className={styles.imageWrapper}>
    <Image
      src={offerings[currentIndex].image}
      alt={offerings[currentIndex].title}
      fill
      className={styles.image}
    />
  </div>
</div>
                    <div>

                    {/* <button className={styles.arrowButton} onClick={nextOffering}>
                &#8594;
            </button> */}
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className={styles.paginationDots}>
                {offerings.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>

            
        </div>
    );
};

export default AutomotiveOfferings;
