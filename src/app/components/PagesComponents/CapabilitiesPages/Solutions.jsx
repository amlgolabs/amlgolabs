import React from 'react';
import styles from "../../../styles/pages/Components/CapabilitiesPages/Solutions.module.css";

const solutionsData = [
  { title: "Gen-AI Content Studio", description: "Automate the creation of high-quality marketing copy, product descriptions, and other content, freeing up your team to focus on strategic initiatives." },
  { title: "Personalized Customer Engagement", description: "Craft hyper-personalized customer experiences with AI-generated recommendations, tailored messaging, and dynamic content delivery." },
  { title: "AI-Powered Idea Incubator", description: "Accelerate brainstorming and explore novel concepts with AI-driven idea generation tools, fostering innovation and accelerating product development." },
  { title: "Code-Gen Accelerator", description: "Boost software development efficiency with AI-powered code generation and optimization, streamlining workflows and reducing development time." },
  { title: "Gen-AI for Data Augmentation", description: "Enhance your datasets and improve the performance of your machine learning models with AI-generated synthetic data." },
  { title: "Responsible AI Framework", description: "Ensure the ethical and responsible use of generative AI with our comprehensive governance and oversight framework." }
];

const Solutions = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          <h2>Generative AI Solutions</h2>
          <p>We empower businesses to leverage the full potential of generative AI with tailored solutions designed to address specific needs and drive tangible results.</p>
        </div>

        <div className={styles.solutionsCard}>
          {solutionsData.map((solution, index) => (
            <div key={index} className={styles.cardItem}>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
