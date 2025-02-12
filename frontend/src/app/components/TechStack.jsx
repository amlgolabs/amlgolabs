import React from "react";
import Image from "next/image"; // Importing Image component
import styles from "../styles/Components/TechStack.module.css";

const technologies = [
  {
    domain: "Data Science",
    tools: [
      { name: "Python", image: "/technology/python.png" },
      { name: "TensorFlow", image: "/technology/tensorflow.png" },
      { name: "PyTorch", image: "/technology/pytorch.png" },
      { name: "Jupyter", image: "/technology/tensorflow.png" },
      { name: "NLTK", image: "/technology/tensorflow.png" },
    ],
  },
  {
    domain: "Data Analytics",
    tools: [
      { name: "Power BI", image: "/images/powerbi-logo.png" },
      { name: "Tableau", image: "/images/tableau-logo.png" },
      { name: "Excel", image: "/images/excel-logo.png" },
      { name: "Apache Spark", image: "/images/spark-logo.png" },
      { name: "QlikView", image: "/images/qlikview-logo.png" },
    ],
  },
  {
    domain: "Cloud Computing",
    tools: [
      { name: "Amazon Web Services", image: "/images/aws-logo.png" },
      { name: "Microsoft Azure", image: "/images/azure-logo.png" },
      { name: "Google Cloud Platform", image: "/images/gcp-logo.png" },
      { name: "Snowflake", image: "/images/snowflake-logo.png" },
      { name: "Kubernetes", image: "/images/kubernetes-logo.png" },
    ],
  },
  {
    domain: "Miscellaneous",
    tools: [
      { name: "Github", image: "/images/github-logo.png" },
      { name: "Jira", image: "/images/jira-logo.png" },
      { name: "Axiom Controllerview", image: "/images/axiom-logo.png" },
      { name: "Moody's", image: "/images/moody-logo.png" },
      { name: "VS Code", image: "/images/vscode-logo.png" },
    ],
  },
];

const TechStack = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Technology Stack</h2>
      <div className={styles.grid}>
        {technologies.map((category) => (
          <div key={category.domain} className={styles.card}>
            <h3 className={styles.domainTitle}>{category.domain}</h3>
            <ul className={styles.toolList}>
              {category.tools.map((tool) => (
                <li key={tool.name} className={styles.toolItem}>
                  {tool.image && (
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={40} // You can adjust the size
                      height={40} // You can adjust the size
                      className={styles.icon}
                    />
                  )}
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
