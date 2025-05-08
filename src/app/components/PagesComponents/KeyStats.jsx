

import React from 'react';
import styles from '../../styles/pages/Components/KeyStats.module.css';
import { FaCar, FaRobot, FaPlug, FaTools, FaTruck, FaLeaf } from 'react-icons/fa';

const KeyStats = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Key Stats: Automotive Industry Transformation</h2>

      <div className={styles.statsGrid}>
        {/* EV Sales Growth */}
        <div className={styles.statItem}>
          <div className={styles.icon}><FaPlug /></div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>Electric Vehicle Sales Surge</h3>
            <p className={styles.statValue}>64% Increase in Global EV Sales</p>
          </div>
        </div>

        {/* Autonomous Vehicles */}
        <div className={styles.statItem}>
          <div className={styles.icon}><FaRobot /></div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>Autonomous Vehicles' Growth</h3>
            <p className={styles.statValue}>$557 Billion Market by 2026</p>
          </div>
        </div>

        {/* AI in Manufacturing */}
        <div className={styles.statItem}>
          <div className={styles.icon}><FaCar /></div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>AI in Manufacturing</h3>
            <p className={styles.statValue}>80% of Automakers to Adopt AI by 2025</p>
          </div>
        </div>

        {/* 5G Connectivity */}
        <div className={styles.statItem}>
          <div className={styles.icon}><FaTruck /></div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>5G and Connected Vehicles</h3>
            <p className={styles.statValue}>75% of Vehicles Connected by 5G by 2030</p>
          </div>
        </div>

        {/* EV Charging Infrastructure */}
        <div className={styles.statItem}>
          <div className={styles.icon}><FaTools /></div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>Charging Infrastructure Growth</h3>
            <p className={styles.statValue}>6 Million Charging Stations by 2030</p>
          </div>
        </div>

        {/* Sustainable Solutions */}
        <div className={styles.statItem}>
          <div className={styles.icon}><FaLeaf /></div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>Sustainable Automotive Solutions</h3>
            <p className={styles.statValue}>25% Rise in Sustainable Materials by 2030</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyStats;

