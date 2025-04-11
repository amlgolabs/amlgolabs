import React, { useState, useRef } from "react";
import axios from "axios"; // Import Axios
import styles from "../styles/pages/Components/Careers/JobDescription.module.css";
import toast from "react-hot-toast";

const JobDescription = ({ job }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        cv: null,
        agreement: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            cv: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            toast.success("Application Submitted Successfully!");
            setFormData({ name: "", email: "", phone: "", coverLetter: "", cv: null });
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (err) {
            toast.error("Failed to submit application. Please try again later.");
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
                    <div className={styles.infoGroup}><span className={styles.label}>Job Type :</span><span className={styles.value}>{job.type}</span></div>
                    <div className={styles.infoGroup}><span className={styles.label}>Skills :</span><span className={styles.value}>{job.skills.join(", ")}</span></div>
                </div>

                <div className={styles.description}>
                    <h2 className={styles.sectionTitle}>Job Description</h2>
                    <p className={styles.descriptionText}>
                        {job.about}
                    </p>
                    <h3 className={styles.subTitle}>Roles and Responsibilities:</h3>
                    {/* <ul className={styles.responsibilitiesList}>
                        <li>Develop and maintain user-facing features using React and Next.js.</li>
                        <li>Ensure web applications are responsive and optimized for performance.</li>
                        <li>Work closely with UI/UX designers to translate designs into functional components.</li>
                        <li>Write clean, maintainable, and scalable code following best practices.</li>
                        <li>Collaborate with backend developers to integrate APIs and data sources.</li>
                    </ul> */}
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
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.input} />

                    <label className={styles.label}>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} />

                    <label className={styles.label}>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={styles.input} />

                    <label className={styles.label}>Cover Letter:</label>
                    <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} className={styles.textarea}></textarea>

                    <label className={styles.label}>Upload CV:</label>
                    <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} ref={fileInputRef} required className={styles.input} />

                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={formData.agreement}
                            onChange={handleChange}
                            required
                            className={styles.checkbox}
                        />
                        <label className={styles.checkboxLabel}>
                            By using this form you agree with the storage and handling of your data by this website.
                        </label>
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobDescription;