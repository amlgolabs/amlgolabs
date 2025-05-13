import styles from '../../styles/pages/Components/AmlgoDifference.module.css';

const differenceData = [
  {
    title: 'Confidence in Compliance',
    description: 'Constantly evolving reporting requirements, our team stays ahead anticipating changes to give you the competitive advantage. We ensure your submissions are accurate, timely, and fully compliant, giving you the confidence to focus on driving your business forward.',
  },
  {
    title: 'Adaptable to Your Ecosystem',
    description: 'We adapt to your systems, not the other way around. Whether leveraging existing tools or integrating new solutions, we ensure seamless adoption with minimal disruption. Keeping your operations efficient and uninterrupted.',
  },
  {
    title: 'Scalability for the Future',
    description: 'Our solutions evolve with your business, scaling seamlessly as you grow and as regulatory demands expand. Whether entering new jurisdictions or adapting to internal shifts, we’re ready to support your next strategic move.',
  },
  {
    title: 'Reduced Operational Burden',
    description: 'Managing systems is complex and time-consuming, but we simplify the process. Through continuous innovation and adaptability, we streamline operations, optimize efficiency, and free up valuable time—allowing clients to focus on strategic growth.',
  },
  {
    title: 'Deeper Visibility, Better Decisions',
    description: 'Our approach goes beyond report generation, we emphasize deep data insights that empower clients to make informed, strategic business decisions. By extracting meaningful patterns and trends, we transform data into actionable intelligence.',
  },
  {
    title: 'A Long-Term Partner',
    description: 'More than just a service provider, we are a committed partner who understands your business, anticipates challenges, and is invested in your long-term success.',
  },
];

const AmlgoDifference = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Experience the Difference with Us</h2>
      <p className={styles.subtitle}>
        The right partner defines the journey, making each step more meaningful. At Amlgo Labs, we are that trusted ally, ensuring strategic, seamless, and transformative progress for your business.
      </p>
      <div className={styles.cardGrid}>
        {differenceData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmlgoDifference;