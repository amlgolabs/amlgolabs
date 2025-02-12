"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "../styles/pages/Contact-Us/ContactUsForm.module.css";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

const ContactUsForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setSubmitted(true);

    // API Call (Uncomment for real submission)
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.subtitle}>We'd love to hear from you!</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            {...register("name")}
            placeholder="Your Name"
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            {...register("email")}
            placeholder="Email Address"
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <input
            {...register("subject")}
            placeholder="Subject"
            className={styles.input}
          />
          {errors.subject && <p className={styles.error}>{errors.subject.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <textarea
            {...register("message")}
            placeholder="Your Message"
            rows="4"
            className={styles.textarea}
          />
          {errors.message && <p className={styles.error}>{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {submitted && <p className={styles.success}>Thank you! Your message has been sent.</p>}
    </div>
  );
};

export default ContactUsForm;
