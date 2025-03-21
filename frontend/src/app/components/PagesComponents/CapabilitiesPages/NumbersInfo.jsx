import styles from "../../../styles/pages/Components/CapabilitiesPages/NumbersInfo.module.css";

const NumbersInfo = () => {
    const data = [
      { percentage: "52%", title: "CONTENT AUTOMATION", description: "Automated content creation for marketing, documentation, and more" },
      { percentage: "40%", title: "CUSTOMER SERVICE", description: "Enhanced customer service through AI-powered chatbots and personalized experiences" },
      { percentage: "35%", title: "PRODUCT DEVELOPMENT", description: "Accelerated product development cycles with AI-driven design and prototyping" },
      { percentage: "30%", title: "DATA AUGMENTATION", description: "Improved data analysis and model training through synthetic data generation" },
    ];
  
    return (
      <div className={styles.mainContainer}>

        <div className={styles.container}>
            <h2>Seamless Integrations</h2>
          <div className={styles.contentWrapper}>
            <div className={styles.line}></div> {/* Keep the line before mapping */}
            {data.map((item, index) => (
              <div key={index} className={styles.itemContainer}>
                <div className={styles.boxContainer}>
                  <div className={styles.box}>
                    <span className={styles.percentage}>{item.percentage}</span>
                    <h3 className={styles.title}>{item.title}</h3>
                  </div>
                </div>
                {index !== data.length - 1 && <div className={styles.verticalLine}></div>}
                <p className={styles.descriptionBelow}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default NumbersInfo;
