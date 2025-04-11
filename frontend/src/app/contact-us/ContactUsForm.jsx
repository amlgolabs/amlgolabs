"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPhone, FaLinkedin, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "../styles/pages/Contact-Us/ContactUsForm.module.css";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation: 2-50 characters, letters and spaces only
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(formData.name.trim())) {
      newErrors.name = "Name must be 2-50 characters and contain only letters and spaces";
    }

    // Email validation: standard email format, max 254 characters
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (formData.email.length > 254) {
      newErrors.email = "Email must not exceed 254 characters";
    }

    // Phone validation: optional, but if provided must match common formats
    if (formData.phone.trim()) {
      // Accepts formats: +12345678901, 123-456-7890, (123) 456-7890, 1234567890
      if (!/^(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number (e.g., 123-456-7890)";
      } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
        newErrors.phone = "Phone number must contain at least 10 digits";
      } else if (formData.phone.replace(/[^0-9]/g, "").length > 15) {
        newErrors.phone = "Phone number cannot exceed 15 digits";
      }
    }

    // Message validation: 10-1000 characters
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Real-time input restrictions
    if (name === "name" && value.length > 50) return;
    if (name === "email" && value.length > 254) return;
    if (name === "phone" && value.length > 15) return;
    if (name === "message" && value.length > 1000) return;

    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("/api/contact-us", formData);
  //     console.log("Response:", response.data);
  //     setFormData({ name: "", email: "", phone: "", message: "" });
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("/api/contact-us", formData);
  //     console.log("Response:", response.data);
  //     setFormData({ name: "", email: "", phone: "", message: "" });
  //     setSnackbarMessage("Message sent successfully!");
  //     setSnackbarSeverity("success");
  //     setOpenSnackbar(true);
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     setSnackbarMessage("Failed to send message. Please try again.");
  //     setSnackbarSeverity("error");
  //     setOpenSnackbar(true);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      const response = await axios.post("/api/contact-us", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSnackbarMessage("Thank you for your message! We'll respond within 24 hours.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage("Something went wrong. Please try again later.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Rest of the component (JSX) remains the same
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <p className={styles.subtext}>
            We'd love to hear from you. Fill out the form below and we'll get back to you soon.
          </p>
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={`${styles.inputGroup} ${errors.name ? styles.error : ''}`}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                aria-label="Full Name"
              />
              {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
            </div>
            <div className={`${styles.inputGroup} ${errors.email ? styles.error : ''}`}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                aria-label="Email Address"
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>
            <div className={`${styles.inputGroup} ${errors.phone ? styles.error : ''}`}>
              <FaPhone className={styles.icon} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                aria-label="Phone Number"
              />
              {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
            </div>
            <div className={`${styles.inputGroup} ${errors.message ? styles.error : ''}`}>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                aria-label="Message"
              />
              {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={styles.button}
              disabled={isLoading}
              aria-label="Submit Form"
            >
              {isLoading ? <div className={styles.loader}></div> : "Send Message"}
            </motion.button>
          </form>
        </div>

        <div className={styles.socialSection}>
          <div className={styles.socialLinks}>
            <h3 className={styles.socialHeading}>Connect With Us</h3>
            <a href="mailto:info@amlgolabs.com" className={styles.socialLink}>
              <FaEnvelope className={styles.socialIcon} />
              <span>info@amlgolabs.com</span>
            </a>
            <div className={styles.socialIcons}>
              {[
                { Icon: FaLinkedin, url: "https://linkedin.com/company/amlgolabs" },
                { Icon: FaFacebook, url: "https://facebook.com/AmlgoLabs/" },
                { Icon: FaSquareXTwitter, url: "https://x.com/AmlgoLabs" },
                { Icon: FaInstagram, url: "https://www.instagram.com/amlgolabs/" },
              ].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconLink}
                  aria-label={`Visit our ${Icon.name.replace('Fa', '')} page`}
                >
                  <Icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.clientsSection}>
            <h2>Trusted by leading firms</h2>
            <div className={styles.clientLogos}>
            <Image src="/clients/wolterskluwer.png" height={100} width={256} alt="logo"/>
              <Image src="/clients/macquarie.png" height={100} width={256} alt="logo"/>
              <Image src="/clients/dell.png" height={100} width={256} alt="logo"/>
              <Image src="/clients/godaddy.png" height={100} width={256} alt="logo"/>
              <Image src="/clients/gyansys.png" height={100} width={256} alt="logo"/>
              <Image src="/clients/maruti.png" height={100} width={256} alt="logo"/>

            </div>
          </div>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
          elevation={6}
          variant="filled"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </section>
  );
}