// import React from "react";
// import styles from "../../styles/pages/Components/Partners/Capabilities.module.css";

// const capabilities = [
//   {
//     title: "Cloud Storage",
//     description:
//       "Strengthen your data security and disaster recovery posture. Our expertise in Azure Data Lake Storage Gen 2, Azure Synapse, Azure Cosmos DB, Azure SQL DB, and Azure Databricks operations monitoring delivers robust and reliable solutions.",
//   },
//   {
//     title: "Streamlining Data Pipelines",
//     description:
//       "Leverage our services for secure data ingestion and workload orchestration. We utilize Azure Data Fabric, Azure Data Factory, Azure Logic Apps, Azure IoT Hub, combined with our Data Quality and Profiling framework and Data Acquisition accelerator, to deliver a complete solution.",
//   },
//   {
//     title: "Data Processing",
//     description:
//       "Accelerate your data processing and gain a competitive edge. Our mastery of Azure HDInsight, Databricks, Synapse Analytics, Machine Learning, Stream Analytics, and IoT Analytics unlocks the full potential of your data.",
//   },
//   {
//     title: "Management and Governance",
//     description:
//       "Securely manage and govern your data across on-premises, multi-cloud, and SaaS environments with our expertise in Azure Data Catalog, Purview, AD, Key Vault, and Security Center.",
//   },
// ];

// const Capabilities = () => {
//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.headingContainer}>
//         <h2 className={styles.heading}>Our Capabilities</h2>
//         <p className={styles.subheading}>
//           Discover how we empower businesses to harness the full potential of their data through our cutting-edge solutions.
//         </p>
//       </div>

//       <div className={styles.gridContainer}>
//         {capabilities.map((capability, index) => (
//           <div key={index} className={styles.card}>
//             <div className={styles.cardContent}>
//               <h3 className={styles.cardTitle}>{capability.title}</h3>
//               <p className={styles.cardDescription}>{capability.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Capabilities;


// import React from "react";
// import styles from "../../styles/pages/Components/Partners/Capabilities.module.css";

// const Capabilities = ({ data, title, description }) => {
//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.headingContainer}>
//         <h2 className={styles.heading}>{title}</h2>
//         <p className={styles.subheading}>{description}</p>
//       </div>

//       <div className={styles.gridContainer}>
//         {data.map((capability, index) => (
//           <div key={index} className={styles.card}>
//             <div className={styles.cardContent}>
//               <h3 className={styles.cardTitle}>{capability.title}</h3>
//               <p className={styles.cardDescription}>{capability.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Capabilities;


import React from "react";
import styles from "../../styles/pages/Components/Partners/Capabilities.module.css";

const Capabilities = ({ data, title, description }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.subheading}>{description}</p>
      </div>

      <div className={styles.gridContainer}>
        {data.map((capability, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <p className={styles.cardDescription}>{capability.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;