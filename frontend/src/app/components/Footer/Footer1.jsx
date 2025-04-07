import React from 'react';
import styles from '../../styles/Components/Footer/Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

const Footer1 = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        {/* Column 1: Logo and Social Icons */}
        <div className={styles.footerColumn}>
          <Image height={80} width={200}  className={styles.logo} src="/logo/logowhite.png" alt="Logo" />
          <div className={styles.socialIcons}>
            <a className={styles.socialIcon} href="https://www.facebook.com/AmlgoLabs/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a className={styles.socialIcon} href="https://x.com/AmlgoLabs" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a className={styles.socialIcon} href="https://www.linkedin.com/company/amlgolabs/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a className={styles.socialIcon} href="https://www.instagram.com/amlgolabs/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <div className={styles.footerContact}>
            <div className={styles.footerAddress}>
              <MdLocationOn size={20} />
              <p>Amlgo Labs Inc, 16192, Delaware, 19958</p>
            </div>
            <div className={styles.footerEmail}>
              <MdEmail size={20} />
              <p>info@amlgolabs.com</p>
            </div>
          </div>
        </div>

        {/* Column 2: About Us */}
        <div className={styles.footerColumn}>
          <h3>About Us</h3>
          <a className={styles.footerLink} href="/about-us">Company Info</a>
          <a className={styles.footerLink} href="/careers">Careers</a>
          {/* <a className={styles.footerLink} href="/team">Our Team</a> */}
          {/* <a className={styles.footerLink} href="/news">News & Updates</a> */}
        <Link className={styles.footerLink} href="/privacy-policy">Privacy Policy</Link>

        </div>

        <div className={styles.footerColumn}>
          <h3>Offerings</h3>
         <Link className={styles.footerLink} href="/generative-ai">Genrative AI</Link>
              <Link className={styles.footerLink} href="/llms">LLMs</Link>
              <Link className={styles.footerLink} href="/genai-agents">GenAI Agents</Link>
              <Link className={styles.footerLink} href="/computer-vision">Computer Vision</Link>
              <Link className={styles.footerLink} href="/banking-finance">Risk and Regulatory</Link>
              <Link className={styles.footerLink} href="/ml-dl">Machine Learning</Link>
              <Link className={styles.footerLink} href="/cloud-services">Cloud Services</Link>
              <Link className={styles.footerLink} href="/data-analytics">Data Analytics</Link>
              <Link className={styles.footerLink} href="/data-engineering">Data Engineering</Link>
              <Link className={styles.footerLink} href="/devops-dataops-mlops">DataOps, DevOps, MLOps</Link>
        </div>
        
        {/* Column 3: Industries */}
        <div className={styles.footerColumn}>
          <h3>Industries</h3>
          {/* <a className={styles.footerLink} href="/tech">Technology</a>
          <a className={styles.footerLink} href="/finance">Finance</a>
          <a className={styles.footerLink} href="/healthcare">Healthcare</a>
          <a className={styles.footerLink} href="/education">Education</a> */}
          <Link className={styles.footerLink} href="/consumer-goods">Consumer Goods</Link>
              <Link className={styles.footerLink} href="/banking-finance">Banking & Finance</Link>
              <Link className={styles.footerLink} href="/automotive">Automotive</Link>
              <Link className={styles.footerLink} href="/real-estate">Real Estate</Link>
              <Link className={styles.footerLink} href="/insurance">Insurance</Link>
              <Link className={styles.footerLink} href="/renewable-energy">Renewable Energy</Link>
              <Link className={styles.footerLink} href="/manufacturing">Manufacturing</Link>
              <Link className={styles.footerLink} href="/pharma-life-sciences">Pharma and Life Sciences</Link>
              <Link className={styles.footerLink} href="/communication-media">Communication and Media</Link>
        </div>

        {/* Column 4: Contact Us */}
        
      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2025 Amlgo Labs. All rights reserved.</p>
      </div>
    </footer>
    
  );
};

export default Footer1;
