"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/pages/Components/Careers/JobList.module.css";
import { jobs } from "./data/jobs";


const JobList = () => {
  const [visibleJobs, setVisibleJobs] = useState(10);
  const router = useRouter();

  const loadMoreJobs = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 10);
  };

  const handleViewDetails = (job) => {
    const slug = job.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/careers/${slug}`);
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
           
              <button  className={styles.detailsBtn} onClick={() => handleViewDetails(job)}>
      View Details
    </button>
              
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
