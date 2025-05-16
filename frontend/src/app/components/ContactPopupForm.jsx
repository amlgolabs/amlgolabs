"use client";
import { useState } from "react";
import { useContactPopup } from "../context/ContactPopupContext";
import { Snackbar, Alert } from "@mui/material";
import Image from "next/image";
import axios from "axios"; // Added axios import
import styles from "../styles/Components/ContactPopupForm.module.css";

const ContactPopupForm = () => {
  const { isContactPopupOpen, closeContactPopup } = useContactPopup();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.name.trim()) newErrors.name = "Name is required";
  //   if (!formData.email.trim()) newErrors.email = "Email is required";
  //   else if (!/\S+@\S+\.\S+/.test(formData.email))
  //     newErrors.email = "Invalid email format";
  //   if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
  //   if (!formData.message.trim()) newErrors.message = "Message is required";
  //   return newErrors;
  // };

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

  // Phone validation: mandatory, must match common formats
  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(formData.phone.trim())) {
    newErrors.phone = "Please enter a valid phone number (e.g., 123-456-7890)";
  } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
    newErrors.phone = "Phone number must contain at least 10 digits";
  } else if (formData.phone.replace(/[^0-9]/g, "").length > 15) {
    newErrors.phone = "Phone number cannot exceed 15 digits";
  }

  // Message validation: 10-1000 characters
  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    newErrors.message = "Message must be at least 10 characters long";
  } else if (formData.message.trim().length > 1000) {
    newErrors.message = "Message cannot exceed 1000 characters";
  }

  return newErrors;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true); // Set submitting state
    setIsLoading(true);

    try {
      const response = await axios.post("/api/contact-us", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSnackbar({
        open: true,
        message: "Thank you for your message! We'll respond you shortly.",
        severity: "success",
      });
    } catch (error) {
      console.error("Form submission error:", error); // Log error for debugging
      setSnackbar({
        open: true,
        message: "Something went wrong. Please try again later.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  if (!isContactPopupOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        {/* Form Section */}
        <div className={styles.formSection}>
          <div className={styles.header}>
            <h2 className={styles.title}>Contact Us</h2>
            <button onClick={closeContactPopup} className={styles.closeButton}>
              ×
            </button>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.errorInput : ""}`}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`${styles.input} ${errors.phone ? styles.errorInput : ""}`}
              />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.textarea} ${errors.message ? styles.errorInput : ""}`}
              />
              {errors.message && <p className={styles.error}>{errors.message}</p>}
            </div>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                onClick={closeContactPopup}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className={styles.submitButton}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <Image
            src="/popup/banner.png"
            alt="Contact background"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 768px) 100vw, 450px"
          />
        </div>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactPopupForm;