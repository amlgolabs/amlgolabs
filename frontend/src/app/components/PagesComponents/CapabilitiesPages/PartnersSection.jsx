"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/pages/Components/CapabilitiesPages/PartnersSection.module.css";
import Link from "next/link";
import Image from "next/image";

const PartnersSection = () => {
    const partnerLogos = [
        "/aws.png",
        "/azure.png",
        "/dell.png",
        "/databricks.png",
        "/googlecloud.png",
        "/cloudera.png"
    ];

    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [nextLogoIndex, setNextLogoIndex] = useState(1);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out animation

            setTimeout(() => {
                setCurrentLogoIndex(nextLogoIndex);
                setNextLogoIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
                setFade(true); // Start fade-in animation
            }, 600); // Time to switch images smoothly
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [nextLogoIndex]);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                {/* Left Section */}
                <div className={styles.content}>
                    <h4>PARTNERSHIPS</h4>
                    <h2>Empowering Innovation Through Strategic Alliances</h2>
                    <p>
                        We collaborate with industry leaders to bring cutting-edge technology 
                        and solutions to our clients, ensuring excellence and innovation in every project.
                    </p>
                    <Link href="/partners">
                        <button>Explore More</button>
                    </Link>
                </div>

                {/* Right Section with Fixed Container */}
                <div className={styles.imageWrapper}>
                    <div className={styles.logoContainer}>
                        <Image height={500} width={500} src="/logo/logo500x500.png" alt="Amlgo Labs Logo" className={styles.companyLogo} />
                        <Image height={500} width={500} src="/handshake.png" alt="Cross Sign" className={styles.crossSign} />

                        {/* Animated Partner Logo */}
                        <div className={styles.partnerLogoWrapper}>
                            <Image
                                height={500}
                                width={500}
                                src={partnerLogos[currentLogoIndex]}
                                alt="Partner Logo"
                                className={`${styles.partnerLogo} ${fade ? styles.fadeIn : styles.fadeOut}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersSection;
