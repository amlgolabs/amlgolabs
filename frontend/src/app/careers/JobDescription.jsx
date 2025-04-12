import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "../styles/pages/Components/Careers/JobDescription.module.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const JobDescription = ({ job }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null,
    agreement: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const fileInputRef = useRef(null);

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

    // Phone validation: required, must match common formats
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (e.g., 123-456-7890)";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
      newErrors.phone = "Phone number must contain at least 10 digits";
    } else if (formData.phone.replace(/[^0-9]/g, "").length > 15) {
      newErrors.phone = "Phone number cannot exceed 15 digits";
    }

    // Cover letter validation: optional, 10-2000 characters if provided
    if (formData.coverLetter.trim() && formData.coverLetter.trim().length < 10) {
      newErrors.coverLetter = "Cover letter must be at least 10 characters long";
    } else if (formData.coverLetter.trim().length > 2000) {
      newErrors.coverLetter = "Cover letter cannot exceed 2000 characters";
    }

    // CV validation: required, .pdf/.doc/.docx, max 5MB
    if (!formData.cv) {
      newErrors.cv = "CV is required";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(formData.cv.type)) {
        newErrors.cv = "CV must be a .pdf, .doc, or .docx file";
      } else if (formData.cv.size > 5 * 1024 * 1024) {
        newErrors.cv = "CV file size must not exceed 5MB";
      }
    }

    // Agreement validation: must be checked
    if (!formData.agreement) {
      newErrors.agreement = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Real-time input restrictions
    if (name === "name" && value.length > 50) return;
    if (name === "email" && value.length > 254) return;
    if (name === "phone" && value.length > 15) return;
    if (name === "coverLetter" && value.length > 2000) return;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      cv: file,
    }));

    // Clear CV error if a file is selected
    if (file && errors.cv) {
      setErrors((prev) => ({ ...prev, cv: "" }));
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "Please fix the errors in the form",
        severity: "error",
      });
      return;
    }

    setIsSubmitting(true);
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("coverLetter", formData.coverLetter || "");
    submitData.append("cv", formData.cv);

    try {
      const response = await axios.post("/api/job-application", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSnackbar({
        open: true,
        message: "Application Submitted Successfully!",
        severity: "success",
      });
      setFormData({ name: "", email: "", phone: "", coverLetter: "", cv: null, agreement: false });
      setErrors({});
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Failed to submit application. Please try again later.",
        severity: "error",
      });
      console.error("Error submitting application:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Job Header and Description - unchanged */}
      <div className={styles.descriptionContainer}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>{job.title}</h1>
            <div className={styles.badgeContainer}>
              <span className={`${styles.badge} ${styles.blueBadge}`}>{job.location}</span>
              <span className={`${styles.badge} ${styles.redBadge}`}>{job.domain}</span>
              <span className={`${styles.badge} ${styles.purpleBadge}`}>{job.experience} Years Experience</span>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <h2 className={styles.sectionTitle}>Job Overview</h2>
          <div className={styles.infoGroup}>
            <span className={styles.label}>Job Type :</span>
            <span className={styles.value}>{job.type}</span>
          </div>
          <div className={styles.infoGroup}>
            <span className={styles.label}>Skills :</span>
            <span className={styles.value}>{job.skills.join(", ")}</span>
          </div>
        </div>

        <div className={styles.description}>
          <h2 className={styles.sectionTitle}>Job Description</h2>
          <p className={styles.descriptionText}>{job.about}</p>
          <h3 className={styles.subTitle}>Roles and Responsibilities:</h3>
          <ul className={styles.responsibilitiesList}>
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Application Form */}
      <div className={styles.formContainer}>
        <h2 className={styles.sectionTitle}>Apply for this Position</h2>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={`${styles.inputGroup} ${errors.name ? styles.error : ""}`}>
            <label className={styles.label}>Name: *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              aria-label="Full Name"
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>

          <div className={`${styles.inputGroup} ${errors.email ? styles.error : ""}`}>
            <label className={styles.label}>Email: *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              aria-label="Email Address"
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={`${styles.inputGroup} ${errors.phone ? styles.error : ""}`}>
            <label className={styles.label}>Phone: *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.input}
              aria-label="Phone Number"
            />
            {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
          </div>

          <div className={`${styles.inputGroup} ${errors.coverLetter ? styles.error : ""}`}>
            <label className={styles.label}>Cover Letter:</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className={styles.textarea}
              aria-label="Cover Letter"
            />
            {errors.coverLetter && <span className={styles.errorMessage}>{errors.coverLetter}</span>}
          </div>

          <div className={`${styles.inputGroup} ${errors.cv ? styles.error : ""}`}>
            <label className={styles.label}>Upload CV: *</label>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              ref={fileInputRef}
              required
              className={styles.input}
              aria-label="Upload CV"
            />
            {errors.cv && <span className={styles.errorMessage}>{errors.cv}</span>}
          </div>

          <div className={`${styles.checkboxContainer} ${errors.agreement ? styles.error : ""}`}>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              required
              className={styles.checkbox}
              aria-label="Agree to data storage terms"
            />
            <label className={styles.checkboxLabel}>
              By using this form you agree with the storage and handling of your data by this website.
            </label>
            {errors.agreement && <span className={styles.errorMessage}>{errors.agreement}</span>}
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          elevation={6}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default JobDescription;