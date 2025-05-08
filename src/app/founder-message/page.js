import React from 'react';
import styles from "../styles/pages/FounderMessage.module.css";
import Head from 'next/head';

export const metadata = {
    title: "Ajay Yadav - Amlgo Labs",
    description: "Learn more about Amlgo Labs, our mission, vision, and team.",
    keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML",
};

const FounderMessage = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        Unlock the Power of Data with Amlgo Labs: <br/>Data Analytics, AI, and Generative AI Solutions
                    </h1>
                    <p>
                        A recent Harvard study revealed that while most organizations have valuable data, over 70% lack the expertise to leverage it effectively. Amlgo Labs was founded to bridge this gap, offering cutting-edge solutions in data analytics, artificial intelligence (AI), and generative AI (Gen AI) to transform data into actionable insights. We specialize in data engineering, predictive analytics, and compliance reporting, partnering with global clients across industries to drive innovation and solve complex challenges. Our expertise extends to regulatory, risk, and compliance reporting, enabling financial institutions to meet critical deadlines with accuracy. At Amlgo Labs, success is measured not by how much data we process but by how well we turn it into strategic decisions. Whether you’re a professional, enterprise, or data solutions provider, we invite you to join us in shaping a data-driven future powered by AI and Gen AI.
                    </p>

                    <h3>Join Amlgo Labs today to unlock the potential of your data with Generative AI.</h3>
                    <div className={styles.signature}>
                        <h2>Ajay Yadav</h2>
                        <h4>Founder, Amlgo Labs</h4>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <img src="/founder.png" alt="Ajay Yadav - Founder of Amlgo Labs" />
                </div>
            </div>
        </>
    );
};

export default FounderMessage;
