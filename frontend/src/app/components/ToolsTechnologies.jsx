
import styles from '../../styles/pages/Components/ToolsTechnologies.module.css';



const ToolsTechnologies = () => {
  const categories = [
    {
      title: "Platforms",
      items: ["AxiomSL CV10", "FinStudio", "RegPro", "RiskPro", "Moody's Capital Engine"],
      icon: "🖥️"
    },
    {
      title: "ETL & Support",
      items: ["Informatica", "GIT", "Control-M", "Autosys", "PUTTY"],
      icon: "🛠️"
    },
    {
      title: "Project Tools",
      items: ["JIRA", "ServiceNow", "Confluence"],
      icon: "📊"
    }
  ];

  return (
    <section className={styles.section} aria-labelledby="tools-technologies-heading">
      <div className={styles.container}>
        <h2 id="tools-technologies-heading" className={styles.heading}>Tools & Technologies We Use</h2>
        <p className={styles.subheading}>Our expertise spans across these industry-leading platforms and tools</p>
        
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon} role="img" aria-hidden="true">{category.icon}</span>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <ul className={styles.list}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;