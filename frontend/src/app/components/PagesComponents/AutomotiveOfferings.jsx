"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/pages/Components/AutomotiveOfferings.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const offerings = [
    {
        title: "AI Chatbot for Vendors and Distributors",
        description: "Transform your automotive vendor and distributor relationships with Amlgo Labs AI chatbot. Get 24/7 instant support for inquiries on inventory, orders, pricing, and more.",
        image: "/businesses/automotive/chatbot.jpg",
        link: "/conversational-ai-chatbot"
    },
    {
        title: "DBConnect - GenAI based text to SQL User Interface",
        description: "Forget complex SQL queries. Just type your questions in plain English to get immediate SQL results and gain rapid access to critical automotive insights.",
        image: "/businesses/automotive/dbconnect.jpg",
        link: "/text-to-sql"
    },
    {
        title: "Vehicle Quality AI - Defect Correlation and Prediction",
        description: "Improve automotive quality and reduce defects with AI-driven insights. Identify and resolve quality issues proactively.",
        image: "/businesses/automotive/vehiclequality.jpg",
        link: "/vehicle-quality-ai"
    },
    {
        title: "Social Media Analytics - People's Voice for Automotive",
        description: "Analyze social media to understand customer sentiment, product feedback, and emerging trends in the automotive industry.",
        image: "/businesses/automotive/socialmedia.jpg",
        link: "/communication-media"
    }
];

const AutomotiveOfferings = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const changeSlide = (index) => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex(index);
            setFade(true);
        }, 300);
    };

    const nextOffering = () => {
        changeSlide((currentIndex + 1) % offerings.length);
    };

    const prevOffering = () => {
        changeSlide((currentIndex - 1 + offerings.length) % offerings.length);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
                nextOffering();
            } else if (event.key === "ArrowLeft") {
                prevOffering();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    return (
        <div className={styles.offeringsContainer}>
            <h2 className={styles.heading}>Amlgo Labs Offerings</h2>
            <div className={styles.scrollDiv}>
                <button className={styles.arrowLeft} onClick={prevOffering}>
                    <FaArrowLeft />
                </button>

                <div className={`${styles.offeringContent} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                    <div className={styles.offeringText}>
                        <h3>{offerings[currentIndex].title}</h3>
                        <p>{offerings[currentIndex].description}</p>
                        <Link href={offerings[currentIndex].link}>
                            <button className={styles.offeringButton}>
                                Learn More
                            </button>
                        </Link>
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
                </div>

                <button className={styles.arrowRight} onClick={nextOffering}>
                    <FaArrowRight />
                </button>
            </div>

            <div className={styles.paginationDots}>
                {offerings.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ""}`}
                        onClick={() => changeSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default AutomotiveOfferings;
