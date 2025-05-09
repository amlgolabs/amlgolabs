import { useState } from 'react';
import axios from 'axios';
import config from '@/app/config/config';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Components/ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      await axios.post(`${config.contactEndpoint}/api/contact`, formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Let's connect</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <div className={styles.inputWrapper}>
            <FaUser className={styles.inputIcon} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <div className={styles.inputWrapper}>
            <FaEnvelope className={styles.inputIcon} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className={styles.textarea}
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={` globalButton ${isSubmitting ? styles.buttonDisabled : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {status && (
          <p className={`${styles.statusMessage} ${status.includes('Error') ? styles.statusMessageError : styles.statusMessageSuccess}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}