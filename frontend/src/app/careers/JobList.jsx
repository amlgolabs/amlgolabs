"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/pages/Components/Careers/JobList.module.css";
import { fetchJobs } from "../lib/api";
// import { jobs } from "./data/jobs";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(10);
  const router = useRouter();

 useEffect(() => {
    const getJobs = async () => {
      const data = await fetchJobs();
      // console.log(data)
      setJobs(data);
      setLoading(false);
    };

    getJobs();
  }, []);

  const loadMoreJobs = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 10);
  };

  const handleViewDetails = (job) => {
    // const slug = job.title.toLowerCase().replace(/\s+/g, "-");
    // router.push(`/careers/${slug}`);
    const slug = job.title.toLowerCase().replace(/\s+/g, "-");
router.push(`/careers/${job._id}`);
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
                className="globalButton"
                onClick={() => handleViewDetails(job)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleJobs < jobs.length && (
        <div className={styles.loadMoreContainer}>
          <button onClick={loadMoreJobs} className="globalButton">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;