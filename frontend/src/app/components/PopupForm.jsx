"use client"
import { useEffect, useState } from 'react';
import { usePopup } from '../context/PopupContext';
import Image from 'next/image';
import styles from "../styles/Components/PopupForm.module.css"

const PopupForm = () => {
  const { isPopupOpen, closePopup, selectedPdf } = usePopup();
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    if (!selectedPdf) {
      setErrors({ pdf: 'No case study selected' });
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/send-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          pdfName: selectedPdf, // dynamically attached PDF
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || 'Failed to send PDF');
      }
  
      setFormData({ name: '', email: '' });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ general: error.message || 'An error occurred while submitting' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isPopupOpen) {
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
      setErrors({});
    }
  }, [isPopupOpen]);
  

  if (!isPopupOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={closePopup}>
          ×
        </button>
        <div className={styles.modalContent}>
          <div className={styles.imageContainer}>
            <Image
              src="/popup/banner.png"
              alt="Case Study"
              className={styles.modalImage}
              width={300}
              height={400}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.formContainer}>
            {isSubmitted ? (
              <div className={styles.thankYouMessage}>
                <h2 className={styles.title}>All Set - Thank You!</h2>
                <p>
                Your case study is headed to your inbox. Stay tuned!
                </p>
              </div>
            ) : (
              <>
                <h2 className={styles.title}>Just a Few Details!</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Name: *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
                      placeholder="Enter your name"
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email: *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;