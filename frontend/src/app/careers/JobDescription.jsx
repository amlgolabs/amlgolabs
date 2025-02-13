import React, { useState } from "react";
import styles from "../styles/pages/Components/Careers/JobDescription.module.css";

const JobDescription = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        cv: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            cv: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Application Submitted Successfully!");
    };

    return (
        <div className={styles.container}>
            {/* Job Header */}
            <div className={styles.descriptionContainer}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1 className={styles.title}>Frontend Developer</h1>
                    <div className={styles.badgeContainer}>
                        <span className={`${styles.badge} ${styles.blueBadge}`}>Remote</span>
                        <span className={`${styles.badge} ${styles.redBadge}`}>Part Time</span>
                        <span className={`${styles.badge} ${styles.purpleBadge}`}>3+ Years Experience</span>
                    </div>
                </div>
            </div>

            {/* Job Details */}
            <div className={styles.details}>
                <h2 className={styles.sectionTitle}>Job Overview</h2>
                <div className={styles.infoGroup}><span className={styles.label}>Location:</span> <span className={styles.value}>Remote</span></div>
                <div className={styles.infoGroup}><span className={styles.label}>Job Type:</span> <span className={styles.value}>Part Time</span></div>
                <div className={styles.infoGroup}><span className={styles.label}>Experience Required:</span> <span className={styles.value}>3+ Years</span></div>
            </div>

            {/* Job Description */}
            <div className={styles.description}>
                <h2 className={styles.sectionTitle}>Job Description</h2>
                <p className={styles.descriptionText}>
                    We are looking for a skilled Frontend Developer to join our dynamic team. The ideal candidate
                    should have experience with modern JavaScript frameworks and a keen eye for design and performance optimization.
                </p>
                <h3 className={styles.subTitle}>Roles and Responsibilities:</h3>
                <ul className={styles.responsibilitiesList}>
                    <li>Develop and maintain user-facing features using React and Next.js.</li>
                    <li>Ensure web applications are responsive and optimized for performance.</li>
                    <li>Work closely with UI/UX designers to translate designs into functional components.</li>
                    <li>Write clean, maintainable, and scalable code following best practices.</li>
                    <li>Collaborate with backend developers to integrate APIs and data sources.</li>
                </ul>
            </div>
            </div>

            {/* Application Form */}
            <div className={styles.formContainer}>
                <h2 className={styles.sectionTitle}>Apply for this Position</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.input} />

                    <label className={styles.label}>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} />

                    <label className={styles.label}>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={styles.input} />

                    <label className={styles.label}>Cover Letter:</label>
                    <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} required className={styles.textarea}></textarea>

                    <label className={styles.label}>Upload CV:</label>
                    <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className={styles.input} />

                    <button type="submit" className={styles.submitButton}>Submit Application</button>
                </form>
            </div>
        </div>
    );
};

export default JobDescription;
