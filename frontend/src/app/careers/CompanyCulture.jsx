"use client"
import React, { useState } from 'react'
import styles from "../styles/pages/Components/Careers/CompanyCulture.module.css"

const CompanyCulture = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>

        <div className={styles.heading}>
            <h2>Our Culture</h2>
        </div>

        <div className={styles.tabsContainer}>
            <div className={styles.tabGroup}>
                <h3 
                    onClick={() => handleTabClick('leadership')}
                    className={activeTab === 'leadership' ? styles.activeTab : ''}
                >
                    Our Leadership Principles
                </h3>
                <h3 
                    onClick={() => handleTabClick('work')}
                    className={activeTab === 'work' ? styles.activeTab : ''}
                >
                    Work with the Best
                </h3>
                <h3 
                    onClick={() => handleTabClick('hiring')}
                    className={activeTab === 'hiring' ? styles.activeTab : ''}
                >
                    Our Hiring Procedure
                </h3>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'leadership' && (
                    <>
                        <p>Shaping the future with Analytics is a complex problem, often dealing with unsolved challenges. At Amlgo Labs, we aim to make Data Science solutions simple and accessible for all.</p>
                        <ul>
                            <li>
                                <span>KISS (Keep It Simple and Straightforward):</span> 
                                <p>We believe the simplest solutions are often the most effective. We avoid overcomplicating problems and strive for elegance in simplicity.</p>
                            </li>
                            <li>
                                <span>Speaking the Unspeakable:</span> 
                                <p>Honesty is key. We communicate openly about what’s achievable, building long-lasting trust with clients and colleagues alike.</p>
                            </li>
                        </ul>
                    </>
                )}

                {activeTab === 'work' && (
                    <>
                        <p>At Amlgo Labs, we value collaboration over competition and strive to bring out the best in each other, fostering a culture of continuous learning and excellence.</p>
                        <ul>
                            <li>
                                <span>Collaboration Over Competition:</span> 
                                <p>We believe the best results come when teams collaborate, not compete. Together, we solve problems creatively and leverage our collective strengths.</p>
                            </li>
                            <li>
                                <span>Continuous Learning:</span> 
                                <p>We embrace a culture of growth, always striving to learn from our experiences, the latest trends, and from each other.</p>
                            </li>
                        </ul>
                    </>
                )}

                {activeTab === 'hiring' && (
                    <>
                        <p>Our hiring process is designed to find individuals who align with our values and who are eager to grow and contribute to our mission.</p>
                        <ul>
                            <li>
                                <span>Transparent Process:</span> 
                                <p>We believe in clarity and transparency in every step of the hiring process. Candidates always know what to expect and are treated with respect.</p>
                            </li>
                            <li>
                                <span>Collaborative Interviews:</span> 
                                <p>Our interview process is a two-way conversation, allowing candidates to meet our team and ensure we're the right fit for one another.</p>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
        </div>
    </div>
  )
}

export default CompanyCulture
