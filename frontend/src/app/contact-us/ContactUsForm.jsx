"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPhone } from "react-icons/fa";
import styles from "../styles/pages/Contact-Us/ContactUsForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Us</h2>
      <p className={styles.subtext}>Let's get in touch! Fill out the form below.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <FaEnvelope className={styles.icon} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <FaPhone className={styles.icon} />
          <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} className={styles.textarea}></textarea>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className={styles.button}>Send Message</motion.button>
      </form>
    </div>
  );
}
