"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../../styles/pages/Components/Services/ServicesBifurcation.module.css";
import Link from "next/link";

const ServicesBifurcation = () => {
  const [activeTab, setActiveTab] = useState("solutions");

  const solutions = [
    {
      title: "Connected Dealer and Assessment Management", description: "Streamline your supply chain and elevate service performance. Connect OEMs, equipment, and dealers seamlessly with Amlgo Labs.",
      link: "/"
    },
    {
      title: "Parts Management",
      description: "Streamline your spare parts planning by connecting your data, processes, and people. Eliminate inefficiencies and improve spare parts availability. Amlgo Labs can help you synchronize your operations.",
      link: "/"
    },
    {
      title: "Supply Chain Management",
      description: "Achieve optimal supply and demand balance.  Integrated planning and predictive decisions drive efficiency and profitability.",
      link: "/"
    },
    {
      title: "SAP S/4HANA Migration",
      description: "Migrate to SAP S/4HANA with confidence. Amlgo Labs expert guidance ensures a smooth transition, accelerating your digital transformation and unlocking innovation.",
      link: "/"
    },
    {
      title: "ESG Compliance and Reporting",
      description: "Enhance your ESG program maturity and achieve investor-grade reporting.  Amlgo Labs provides the expertise and solutions you need.",
      link: "/"
    },
    {
      title: "Generative AI for Change Management",
      description: "Empower your teams for the future. We leverage GenAI to drive smooth digital and organizational transformations.",
      link: "/generative-ai"
    },
    {
      title: "Transforming Through Data, Technology, and AI",
      description: "Drive your digital transformation forward.  Unlock innovation and smarter workflows with Amlgo Labs.",
      link: "/data-analytics"
    },
  ];

  const services = [
    { title: "Supply Chain Management Services", description: "Modern website solutions", link: "/" },
    { title: "Generative AI Services", description: "Android & iOS applications", link: "/generative-ai" },
    { title: "Finance and Accounting Services", description: "Improve search rankings", link: "/banking-finance" },
    { title: "Sourcing and Procurement Services", description: "Grow your brand online", link: "/" },
    { title: "Cloud Services", description: "Managed cloud services", link: "/cloud-services" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.tabContainer}>
          <p
            className={activeTab === "solutions" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("solutions")}
          >
            Solutions
          </p>
          <p
            className={activeTab === "services" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("services")}
          >
            Services
          </p>
        </div>

        <div className={styles.cardGrid}>
          {(activeTab === "solutions" ? solutions : services)
            .filter(item => item.link) // Ensure item.link exists
            .map((item, index) => (
              <Link key={item.id || index} href={item.link || "#"}> {/* Fallback to "#" */}
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <FaArrowRight className={styles.icon} />
                </div>
              </Link>
            ))}
        </div>


      </div>
    </div>
  );
};

export default ServicesBifurcation;
