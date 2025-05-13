"use client"
import Image from 'next/image';
import { useState } from 'react';
import styles from "../styles/Components/Faqs.module.css"

const faqs = [
  {
    question: 'What services does Amlgo Labs provide?',
    answer:
      'Amlgo Labs specializes in Data Analytics, Machine Learning, and Generative AI. We offer end-to-end solutions, including predictive analytics, big data processing, cloud-native AI model development, and AI-powered automation to help businesses derive actionable insights and achieve operational efficiency.'
  },
  {
    question: 'How can Amlgo Labs help my business with Data Analytics?',
    answer:
      'Our Data Analytics services enable businesses to transform raw data into meaningful insights. We leverage advanced tools and techniques to provide real-time dashboards, predictive modeling, and customer segmentation, empowering you to make data-driven decisions and stay ahead of the competition.'
  },
  {
    question: 'What industries does Amlgo Labs serve?',
    answer:
      'Amlgo Labs works with a wide range of industries, including finance, healthcare, retail, manufacturing, and technology. Our tailored AI and analytics solutions are designed to address industry-specific challenges, ensuring scalable and impactful outcomes.'
  },
  {
    question: 'How does Amlgo Labs ensure the security of AI models and data?',
    answer:
      'Security is a top priority at Amlgo Labs. We implement industry-standard encryption, access controls, and compliance with regulations like GDPR and HIPAA. Our cloud-native solutions are built with secure architectures to protect your data and AI models from unauthorized access.'
  },
  {
    question: 'What is Generative AI, and how can it benefit my business?',
    answer:
      'Generative AI involves AI models that create content, such as text, images, or code, based on patterns in data. Amlgo Labs uses Generative AI to automate processes, enhance customer experiences through personalized content, and accelerate innovation in product development.'
  },
  {
    question: 'What is Amlgo Labs’ implementation model, and how do you deliver projects?',
    answer:
      'We follow an Agile approach, starting with in-depth requirement gathering around your business goals and data. Our team works in sprints with regular feedback to ensure alignment and fast delivery. Projects typically take 4–8 weeks for a proof-of-concept and based upon project size and scope full deployment varies from 3 months to 24 months.'
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqsSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/Home/faqs.png"
            alt="FAQ Illustration"
            width={500}
            height={500}
            className={styles.faqImage}
            priority
          />
        </div>
        <div className={styles.faqsWrapper}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqsList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeIndex === index}
                >
                  {faq.question}
                  <span className={styles.toggleIcon}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;