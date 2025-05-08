"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "../../../styles/pages/Components/CapabilitiesPages/IndustryFocus2.module.css";
import Image from "next/image";
import Link from "next/link";

const IndustryFocus2 = () => {
  const shouldReduceMotion = useReducedMotion(); // Check for reduced motion

  // Card hover animation
  const cardVariants = {
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.03, // Matches mobile hover scale
          transition: { duration: 0.3, ease: "easeInOut" },
        },
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h2>
          GenAI Agents revolutionize optimization, delivering smart solutions
          across every industry
        </h2>
        <div className={styles.industryContainer}>
          {[
            {
              href: "/banking-finance",
              src: "/capabilities/gen-ai-agents/Banking.jpg",
              alt: "Banking industry",
              title: "Banking",
              text: "Automate complex financial analysis and personalize client interactions with intelligent, autonomous agents.",
            },
            {
              href: "/automotive",
              src: "/capabilities/gen-ai-agents/Automotive.jpg",
              alt: "Automotive industry",
              title: "Automotive",
              text: "Optimize supply chains and enhance vehicle diagnostics through proactive, AI-driven agent systems.",
            },
            {
              href: "/manufacturing",
              src: "/capabilities/gen-ai-agents/Manufacturing.jpg",
              alt: "Manufacturing industry",
              title: "Manufacturing",
              text: "Streamline production processes and predict equipment failures with intelligent, adaptive agent workflows.",
            },
            {
              href: "/consumer-goods",
              src: "/capabilities/gen-ai-agents/ConsumerGoods.jpg",
              alt: "Consumer Goods industry",
              title: "Consumer Goods",
              text: "Personalize customer journeys and optimize inventory management through AI agents that anticipate market trends.",
            },
          ].map((industry, index) => (
            <Link key={index} href={industry.href}>
              <motion.div
                className={styles.industryCard}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className={styles.image}>
                  <Image
                    src={industry.src}
                    height={200}
                    width={200}
                    quality={100}
                    alt={industry.alt}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw" // Responsive sizes
                    style={{ objectFit: "cover" }} // Fallback for object-fit
                  />
                </div>
                <div className={styles.textWrapper}>
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryFocus2;