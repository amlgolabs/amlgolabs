import React from 'react';
import styles from '../../styles/Components/Footer/Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';

const Footer1 = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        {/* Column 1: Logo and Social Icons */}
        <div className={styles.footerColumn}>
          <img className={styles.logo} src="/newlogo7.png" alt="Logo" />
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
          <a className={styles.footerLink} href="/about">Company Info</a>
          <a className={styles.footerLink} href="/careers">Careers</a>
          <a className={styles.footerLink} href="/team">Our Team</a>
          <a className={styles.footerLink} href="/news">News & Updates</a>
        <Link className={styles.footerLink} href="/privacy-policy">Privacy Policy</Link>

        </div>

        <div className={styles.footerColumn}>
          <h3>Offerings</h3>
         <Link className={styles.footerLink} href="#">Data Science & AI</Link>
              <Link className={styles.footerLink} href="#">Generative AI</Link>
              <Link className={styles.footerLink} href="#">Cloud Engineering</Link>
              <Link className={styles.footerLink} href="#">Data Analytics</Link>
              <Link className={styles.footerLink} href="#">Risk and Regulatory</Link>
              <Link className={styles.footerLink} href="#">Data Pipelining</Link>
              <Link className={styles.footerLink} href="#">Cloud & Data OPS</Link>
        </div>
        
        {/* Column 3: Industries */}
        <div className={styles.footerColumn}>
          <h3>Industries</h3>
          {/* <a className={styles.footerLink} href="/tech">Technology</a>
          <a className={styles.footerLink} href="/finance">Finance</a>
          <a className={styles.footerLink} href="/healthcare">Healthcare</a>
          <a className={styles.footerLink} href="/education">Education</a> */}
          <Link className={styles.footerLink} href="#">Consumer Goods</Link>
              <Link className={styles.footerLink} href="#">Technology</Link>
              <Link className={styles.footerLink} href="#">Manufacturing</Link>
              <Link className={styles.footerLink} href="#">Insurance</Link>
              <Link className={styles.footerLink} href="#">Healthcare</Link>
              <Link className={styles.footerLink} href="#">Banking & Finance</Link>
              <Link className={styles.footerLink} href="#">Automotive</Link>
              <Link className={styles.footerLink} href="#">Education</Link>
              <Link className={styles.footerLink} href="#">Travel</Link>
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
