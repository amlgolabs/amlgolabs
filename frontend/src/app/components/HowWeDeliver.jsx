import Image from 'next/image';
import styles from "../styles/Components/HowWeDeliver.module.css"

const steps = [
  {
    step: '01',
    title: 'Aligning Vision with Data Strategy',
    description:
      'We start by diving deep into your business objectives and challenges. Our team assesses your existing data ecosystem, identifies gaps, and designs a tailored analytics and AI roadmap. This strategy ensures that our solutions—whether predictive models, automation workflows, or generative AI applications—align with your goals and drive measurable outcomes.'
  },
  {
    step: '02',
    title: 'Build Scalable Data and AI Solutions Development',
    description:
      'We architect cloud-native, secure, and high-performance data platforms customized to your needs. Our solutions integrate seamlessly with your existing systems to collect and process data, leverage big data technologies and automation to streamline workflows, and enable scalable AI model deployment for real-time insights and decision-making.'
  },
  {
    step: '03',
    title: 'Actionable Insights and AI-Driven Tools in Action',
    description:
      'In the final step, we deliver intuitive, interactive dashboards and AI-powered tools that transform raw data into actionable insights. Our custom solutions, including predictive analytics and generative AI applications, provide drill-down capabilities to fuel growth in areas like operations, customer engagement, and strategic planning.'
  }
];

const HowWeDeliver = () => {
  return (
    <section className={styles.deliverSection}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.sectionTitle}>
            How We Deliver AI-Powered Business Solutions
          </h2>
          <p className={styles.sectionIntro}>
            At Amlgo Labs, we empower businesses to harness the power of Data
            Analytics, Machine Learning, and Generative AI through a streamlined,
            three-step process: Strategy, Solutions, and Insights.
          </p>
        </div>
        <div className={styles.partitionWrapper}>
          <div className={styles.stepsWrapper}>
            <div className={styles.stepsList}>
              {steps.map((step, index) => (
                <div key={index} className={styles.stepItem}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/Home/strategy.png"
              alt="Delivery Process Illustration"
              width={600}
              height={600}
              className={styles.deliverImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;