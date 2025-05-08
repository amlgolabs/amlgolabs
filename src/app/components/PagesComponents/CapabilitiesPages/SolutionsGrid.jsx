import React from 'react'
import styles from "../../../styles/pages/Components/CapabilitiesPages/SolutionsGrid.module.css"
import Image from 'next/image'

const SolutionsGrid = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <h2>Our Solutions</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis voluptatem, odio ex fugiat incidunt corporis voluptatum ea id dolores, ratione, libero quaerat pariatur fuga quidem perspiciatis a explicabo quae?</p> */}
            <p>We empower businesses to reimagine their operations with the transformative power of Large Language Models (LLMs). Our tailored solutions harness the intelligence of LLMs to automate, optimize, and innovate, driving unprecedented levels of efficiency and insight.</p>

            <div className={styles.solutionsGrid}>
                <div className={styles.gridItem}>
                    <div className={styles.upper}>
                        <Image src="/capabilities/llms/chatbotIcon.png" height={70} width={70} alt='technology'/>
                        <h3>LLM-Driven Chatbots</h3>
                    </div>
                    <div className={styles.lower}>
                        <p>Enhance customer service and support with intelligent chatbots that can understand and respond to complex queries, providing 24/7 assistance.</p>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.upper}>
                        <Image src="/capabilities/llms/documentIcon.png" height={70} width={70} alt='technology'/>
                        <h3>Intelligent Document Processing</h3>
                    </div>
                    <div className={styles.lower}>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsam, quasi magni maiores iure adipisci eveniet. Praesentium aliquam incidunt sit.</p> */}
                        <p>Automate the extraction of information from unstructured data sources, such as contracts and reports, streamlining data entry and analysis.</p>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.upper}>
                        <Image src="/capabilities/llms/predictiveIcon.png" height={70} width={70} alt='technology'/>
                        <h3>Predictive Analytics with LLMs</h3>
                    </div>
                    <div className={styles.lower}>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsam, quasi magni maiores iure adipisci eveniet. Praesentium aliquam incidunt sit.</p> */}
                        <p>Leverage LLMs to analyze complex datasets and generate accurate predictions, enabling proactive decision-making and optimized resource allocation.</p>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.upper}>
                        <Image src="/capabilities/llms/marketingIcon.png" height={70} width={70} alt='technology'/>
                        <h3>Personalized Marketing Automation</h3>
                    </div>
                    <div className={styles.lower}>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsam, quasi magni maiores iure adipisci eveniet. Praesentium aliquam incidunt sit.</p> */}
                        <p>Create highly targeted marketing campaigns with AI-generated content and personalized messaging, maximizing engagement and conversion rates.</p>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.upper}>
                        <Image src="/capabilities/llms/codeIcon.png" height={70} width={70} alt='technology'/>
                        <h3>Code Generation with LLMs</h3>
                    </div>
                    <div className={styles.lower}>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsam, quasi magni maiores iure adipisci eveniet. Praesentium aliquam incidunt sit.</p> */}
                        <p>Accelerate software development with LLM-powered code generation and optimization, reducing development time and improving code quality.</p>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.upper}>
                        <Image src="/capabilities/llms/enhancedSearchIcon.png" height={70} width={70} alt='technology'/>
                        <h3>LLM-Enhanced Search</h3>
                    </div>
                    <div className={styles.lower}>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsam, quasi magni maiores iure adipisci eveniet. Praesentium aliquam incidunt sit.</p> */}
                        <p>Improve search accuracy and relevance with LLMs that understand the context and intent behind user queries.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SolutionsGrid