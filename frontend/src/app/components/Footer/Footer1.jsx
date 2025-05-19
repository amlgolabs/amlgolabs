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
          {/* <Image height={80} width={200}  className={styles.logo} src="/logo/logowhite2.png" alt="Logo" /> */}
          <div className={styles.logo}>
<Link href="/">
                      <Image src="/logo/logowhite.png" alt="Logo" width={200} height={200} />
</Link>
          </div>
          
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
              <p>Amlgo Labs Inc, 16192, Delaware, USA, 19958</p>
            </div>
            <div className={styles.footerAddress}>
              <MdLocationOn size={20} />
              <p>Amlgo Labs Pvt. Ltd., Gurugram, India, 122001</p>
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
          <a className={styles.footerLink} href="/resources">Resources</a>
          <a className={styles.footerLink} href="/contact-us">Contact Us</a>

          {/* <a className={styles.footerLink} href="/team">Our Team</a> */}
          {/* <a className={styles.footerLink} href="/news">News & Updates</a> */}
        <Link className={styles.footerLink} href="/privacy-policy">Privacy Policy</Link>

        </div>

        <div className={styles.footerColumn}>
          <h3>Offerings</h3>
         <Link className={styles.footerLink} href="/generative-ai-services">Generative AI</Link>
              <Link className={styles.footerLink} href="/large-language-models-llms ">LLMs</Link>
              <Link className={styles.footerLink} href="/genai-agents-development">GenAI Agents</Link>
              <Link className={styles.footerLink} href="/computer-vision-services">Computer Vision</Link>
              <Link className={styles.footerLink} href="/machine-deep-learning-services">Machine Learning</Link>
              <Link className={styles.footerLink} href="/cloud-solutions-aws-azure-gcp">Cloud Services</Link>
              <Link className={styles.footerLink} href="/data-analytics-services">Data Analytics</Link>
              <Link className={styles.footerLink} href="/data-engineering-services">Data Engineering</Link>
              <Link className={styles.footerLink} href="/operations-and-security">DataOps, DevOps, MLOps</Link>
        </div>
        
        {/* Column 3: Industries */}
        <div className={styles.footerColumn}>
          <h3>Industries</h3>
         
          <Link className={styles.footerLink} href="/consumer-goods-retail">Consumer Goods</Link>
              <Link className={styles.footerLink} href="/banking-and-finance">Banking & Finance</Link>
              <Link className={styles.footerLink} href="/automotive-industry">Automotive</Link>
              <Link className={styles.footerLink} href="/real-estate-infrastructure">Real Estate</Link>
              <Link className={styles.footerLink} href="/insurance">Insurance</Link>
              <Link className={styles.footerLink} href="/risk-regulatory-compliance">Risk and Regulatory</Link>

              {/* <Link className={styles.footerLink} href="/renewable-energy">Renewable Energy</Link> */}
              <Link className={styles.footerLink} href="/manufacturing-ai-industry">Manufacturing</Link>
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
