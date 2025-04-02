"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/pages/Components/Careers/JobList.module.css";

const jobs = [
  { id: 1, title: "Data Engineer", domain: "AI & Machine Learning", location: "Bangalore", type: "Remote" },
  { id: 2, title: "Axiom Developer", domain: "Web Development", location: "Bangalore", type: "Remote" },
  { id: 3, title: "RPA Developer", domain: "Automation", location: "Gurugram", type: "Full-Time" },
  { id: 4, title: "Full Stack Developer", domain: "Web Development", location: "Remote", type: "Full-Time" },
  { id: 5, title: "Data Scientist", domain: "AI & Machine Learning", location: "Gurugram", type: "Full-Time" },
  { id: 6, title: "Axiom Developer", domain: "Web Development", location: "Remote", type: "Full-Time" },
  { id: 7, title: "RPA Developer", domain: "Automation", location: "Remote", type: "Full-Time" },
  { id: 8, title: "Full Stack Developer", domain: "Web Development", location: "Bangalore", type: "Remote" },
  { id: 9, title: "Data Scientist", domain: "AI & Machine Learning", location: "Bangalore", type: "Remote" },
  { id: 10, title: "Axiom Developer", domain: "Web Development", location: "Gurugram", type: "Full-Time" },
  { id: 11, title: "RPA Developer", domain: "Automation", location: "Bangalore", type: "Remote" },
  { id: 12, title: "Data Engineer", domain: "AI & Machine Learning", location: "Gurugram", type: "Full-Time" }
];


const JobList = () => {
  const [visibleJobs, setVisibleJobs] = useState(10);
  const router = useRouter();

  const loadMoreJobs = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 10);
  };

  const handleViewDetails = (jobId) => {
    router.push(`/careers/${jobId}`); // Redirects to job details page
  };

  return (
    <div className={styles.mainContainer} id="jobs">
      <div className={styles.heading}>
        <h2>Current openings at Amlgo Labs</h2>
      </div>
      <div className={styles.jobListContainer}>
        {jobs.slice(0, visibleJobs).map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <div className={styles.jobInfo}>
              <h3 className={styles.title}>{job.title}</h3>
              <p className={styles.location}>{job.location}</p>
              <p className={styles.domain}>{job.domain}</p>
              <p className={styles.type}>{job.type}</p>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.detailsBtn}
                onClick={() => handleViewDetails(job.id)}
              >
                View Details
              </button>
              {/* <button className={styles.applyBtn}>Apply Now</button> */}
            </div>
          </div>
        ))}
      </div>
      {visibleJobs < jobs.length && (
        <div className={styles.loadMoreContainer}>
          <button onClick={loadMoreJobs} className={styles.loadMoreBtn}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;
