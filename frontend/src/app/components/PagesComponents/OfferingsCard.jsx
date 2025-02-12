import React from 'react';
import styles from "../../styles/pages/Components/OfferingsCard.module.css";

const OfferingsCard = () => {
    return (
        <div className={styles.parentContainer}>
            <div className={styles.offeringsContainer}>
                <div className={styles.heading}>
                    <h2>Our Offerings</h2>
                </div>

                <div className={styles.cardsGrid}>
                    <div className={`${styles.card} ${styles.red}`}>
                        <h3>Next Best Action Powered by AI</h3>
                        <p>Uncover customer insights with AI-driven analysis of transaction footprints. Predict needs, personalize experiences, and enhance loyalty with actionable recommendations that drive engagement and ROI. Transform data into strategic opportunities for smarter, customer-focused decision-making.</p>
                    </div>

                    <div className={`${styles.card} ${styles.yellow}`}>
                        <h3>Frictionless Digital Journeys with Automated Insights</h3>
                        <p>Streamline customer experiences with AI-powered insights that eliminate friction points in digital journeys. Enhance engagement, simplify interactions, and drive seamless digital evolution with automation designed to anticipate needs and deliver exceptional, hassle-free customer experiences.</p>
                    </div>

                    <div className={`${styles.card} ${styles.red}`}>
                        <h3>Automated Conversational AI for Customer Interactions</h3>
                        <p>Empower your business with a dynamic, no-code conversational AI engine that automates customer conversations. Offering industry-leading technology, our platform ensures personalized, efficient interactions that drive customer satisfaction and operational efficiency, all without the need for coding expertise.</p>
                    </div>

                    <div className={`${styles.card} ${styles.yellow}`}>
                        <h3>Driving Engagement with Emotion</h3>
                        <p>Utilize a proven methodology to swiftly identify the conscious and unconscious emotional triggers behind client behavior. Our emotion-based interventions design tailored solutions that drive impactful engagement, improve decision-making, and foster stronger, more meaningful customer relationships.</p>
                    </div>

                    <div className={`${styles.card} ${styles.blue}`}>
                        <h3>Unlocking Insights from Unstructured Data</h3>
                        <p>Leverage Natural Language Processing (NLP) to extract valuable insights from unstructured data. Our framework enables efficient ingestion, transforming raw data into actionable intelligence, empowering businesses to make data-driven decisions and unlock the full potential of unorganized data.</p>
                    </div>

                    <div className={`${styles.card} ${styles.yellow}`}>
                        <h3>GenAI-Powered Real-Time Analytics</h3>
                        <p>Deliver real-time, actionable insights with GenAI-based conversational BI. Empower users with self-serve analytics, presenting the right information to the right person at the right time, enabling faster decision-making and improving overall business efficiency without the need for technical expertise.</p>
                    </div>

                    <div className={`${styles.card} ${styles.red}`}>
                        <h3>Customer Intelligence On-Demand</h3>
                        <p>Equip Relationship Managers (RMs) and field agents with on-demand, self-serve analytics that boost productivity and enhance customer experiences. Our platform provides real-time customer insights, enabling teams to respond swiftly, make informed decisions, and deliver personalized service to clients.</p>
                    </div>

                    <div className={`${styles.card} ${styles.yellow}`}>
                        <h3>AI-Driven Data Digitization & Automation</h3>
                        <p>Our proprietary AI algorithms automate the extraction and structuring of data from images and videos, transforming unstructured content into valuable, structured data. This intelligent automation accelerates business workflows, streamlining operations and improving overall efficiency for faster decision-making.</p>
                    </div>

                    <div className={`${styles.card} ${styles.red}`}>
                        <h3>Automated Insights from Customer Interactions</h3>
                        <p>Our suite of AI algorithms extracts key insights from customer interaction data across multiple channels. Using information extraction and summarization techniques, we uncover valuable trends and feedback, helping businesses to better understand customer needs and optimize engagement strategies.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OfferingsCard;
