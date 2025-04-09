"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPhone } from "react-icons/fa";
import styles from "../styles/pages/Contact-Us/ContactUsForm.module.css";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' | 'error'
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    setIsLoading(true);
    try {
      const response = await axios.post("/api/contact-us", formData);
      // console.log("Response:", response.data);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSnackbarMessage("Thank you for reaching out. Our team will get back to you shortly.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setSnackbarMessage("Failed to send message. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false); // <-- stop loading after submit finishes
    }
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
        {/* <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className={styles.button}>Send Message</motion.button> */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className={styles.loader}></div> // loader spinner
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
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
    </div>
  );
}
