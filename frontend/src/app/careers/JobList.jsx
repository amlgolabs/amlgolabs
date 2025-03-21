// "use client"
// import React, { useState } from "react";
// import styles from "../styles/pages/Components/Careers/JobList.module.css";

// const jobs = [
//     { id: 1, title: "Frontend Developer", domain: "Web Development", location: "New York, USA", type: "Full-Time" },
//     { id: 2, title: "Data Scientist", domain: "AI & Machine Learning", location: "San Francisco, USA", type: "Remote" },
//     { id: 3, title: "UI/UX Designer", domain: "Design", location: "London, UK", type: "Part-Time" },
//     { id: 4, title: "Backend Developer", domain: "Web Development", location: "Berlin, Germany", type: "Full-Time" },
//     { id: 5, title: "Project Manager", domain: "Management", location: "Paris, France", type: "Full-Time" },
//     { id: 6, title: "Marketing Specialist", domain: "Marketing", location: "New York, USA", type: "Remote" },
//     { id: 7, title: "DevOps Engineer", domain: "Web Development", location: "Toronto, Canada", type: "Full-Time" },
//     { id: 8, title: "Product Designer", domain: "Design", location: "Austin, USA", type: "Part-Time" },
//     { id: 9, title: "Data Analyst", domain: "AI & Machine Learning", location: "London, UK", type: "Remote" },
//     { id: 10, title: "Software Engineer", domain: "Web Development", location: "Sydney, Australia", type: "Full-Time" },
//     { id: 11, title: "HR Manager", domain: "Human Resources", location: "Singapore", type: "Remote" },
//     { id: 12, title: "QA Engineer", domain: "Quality Assurance", location: "Berlin, Germany", type: "Part-Time" },
//     { id: 13, title: "Full Stack Developer", domain: "Web Development", location: "San Francisco, USA", type: "Full-Time" },
//     { id: 14, title: "Graphic Designer", domain: "Design", location: "Los Angeles, USA", type: "Part-Time" },
//     { id: 15, title: "Business Analyst", domain: "Business", location: "New York, USA", type: "Remote" },
//     { id: 16, title: "Sales Executive", domain: "Sales", location: "London, UK", type: "Full-Time" },
//     { id: 17, title: "Web Developer", domain: "Web Development", location: "Tokyo, Japan", type: "Remote" },
//     { id: 18, title: "System Architect", domain: "Technology", location: "Toronto, Canada", type: "Full-Time" },
//     { id: 19, title: "Cloud Engineer", domain: "Technology", location: "Paris, France", type: "Full-Time" },
//     { id: 20, title: "Cybersecurity Analyst", domain: "Security", location: "Sydney, Australia", type: "Part-Time" },
//     { id: 21, title: "Mobile Developer", domain: "Mobile Development", location: "Berlin, Germany", type: "Full-Time" },
//     { id: 22, title: "Product Manager", domain: "Management", location: "New York, USA", type: "Remote" },
//     { id: 23, title: "Game Developer", domain: "Gaming", location: "Los Angeles, USA", type: "Full-Time" },
//     { id: 24, title: "Network Engineer", domain: "Technology", location: "Toronto, Canada", type: "Remote" },
//     { id: 25, title: "AI Engineer", domain: "AI & Machine Learning", location: "Paris, France", type: "Full-Time" },
//     { id: 26, title: "Content Writer", domain: "Content Creation", location: "London, UK", type: "Part-Time" },
//     { id: 27, title: "SEO Specialist", domain: "Marketing", location: "Sydney, Australia", type: "Full-Time" },
//     { id: 28, title: "Business Development Manager", domain: "Sales", location: "Berlin, Germany", type: "Remote" },
//     { id: 29, title: "Digital Marketing Manager", domain: "Marketing", location: "Toronto, Canada", type: "Full-Time" },
//     { id: 30, title: "Cloud Architect", domain: "Technology", location: "Singapore", type: "Remote" },
//     { id: 31, title: "IT Support Specialist", domain: "IT Support", location: "Tokyo, Japan", type: "Part-Time" },
//     { id: 32, title: "Compliance Officer", domain: "Legal", location: "New York, USA", type: "Full-Time" },
//     { id: 33, title: "Legal Advisor", domain: "Legal", location: "Paris, France", type: "Remote" },
//     { id: 34, title: "Operations Manager", domain: "Management", location: "London, UK", type: "Full-Time" },
//     { id: 35, title: "E-commerce Manager", domain: "E-commerce", location: "San Francisco, USA", type: "Remote" },
//     { id: 36, title: "Database Administrator", domain: "Technology", location: "Sydney, Australia", type: "Full-Time" },
//     { id: 37, title: "Blockchain Developer", domain: "Technology", location: "Berlin, Germany", type: "Remote" },
//     { id: 38, title: "Social Media Manager", domain: "Marketing", location: "Los Angeles, USA", type: "Part-Time" },
//     { id: 39, title: "Automation Engineer", domain: "Engineering", location: "Tokyo, Japan", type: "Full-Time" },
//     { id: 40, title: "Video Editor", domain: "Content Creation", location: "Austin, USA", type: "Remote" },
//     { id: 41, title: "Software Tester", domain: "Quality Assurance", location: "Toronto, Canada", type: "Full-Time" },
//     { id: 42, title: "Cloud Solutions Architect", domain: "Technology", location: "Berlin, Germany", type: "Full-Time" },
//     { id: 43, title: "Customer Success Manager", domain: "Customer Service", location: "New York, USA", type: "Remote" },
//     { id: 44, title: "Data Engineer", domain: "AI & Machine Learning", location: "Paris, France", type: "Full-Time" },
//     { id: 45, title: "Chief Technology Officer", domain: "Management", location: "London, UK", type: "Remote" },
//     { id: 46, title: "Web Designer", domain: "Design", location: "Toronto, Canada", type: "Part-Time" },
//     { id: 47, title: "HR Specialist", domain: "Human Resources", location: "San Francisco, USA", type: "Full-Time" },
//     { id: 48, title: "Marketing Manager", domain: "Marketing", location: "Sydney, Australia", type: "Remote" },
//     { id: 49, title: "IT Security Specialist", domain: "Security", location: "Los Angeles, USA", type: "Full-Time" },
//     { id: 50, title: "Data Privacy Officer", domain: "Legal", location: "London, UK", type: "Remote" },
//     { id: 51, title: "Data Privacy Officer", domain: "Legal", location: "London, UK", type: "Remote" }
//   ];
  

// const JobList = () => {
//   const [visibleJobs, setVisibleJobs] = useState(10);

//   const loadMoreJobs = () => {
//     setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 10);
//   };

//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.heading}>
//         <h2>Current openings at Amlgo Labs</h2>
//       </div>
//       <div className={styles.jobListContainer}>
//         {jobs.slice(0, visibleJobs).map((job) => (
//           <div key={job.id} className={styles.jobCard}>
//             <div className={styles.jobInfo}>
//               <h3 className={styles.title}>{job.title}</h3>
//               <p className={styles.domain}>{job.domain}</p>
//               <p className={styles.location}>{job.location}</p>
//               <p className={styles.type}>{job.type}</p>
//             </div>
//             <div className={styles.actions}>
//               <button className={styles.detailsBtn}>Details</button>
//               <button className={styles.applyBtn}>Apply Now</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {visibleJobs < jobs.length && (
//         <div className={styles.loadMoreContainer}>
//           <button onClick={loadMoreJobs} className={styles.loadMoreBtn}>
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobList;


"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/pages/Components/Careers/JobList.module.css";

const jobs = [
    { id: 1, title: "Frontend Developer", domain: "Web Development", location: "New York, USA", type: "Full-Time" },
    { id: 2, title: "Data Scientist", domain: "AI & Machine Learning", location: "San Francisco, USA", type: "Remote" },
    { id: 3, title: "UI/UX Designer", domain: "Design", location: "London, UK", type: "Part-Time" },
    { id: 4, title: "Backend Developer", domain: "Web Development", location: "Berlin, Germany", type: "Full-Time" },
    { id: 5, title: "Project Manager", domain: "Management", location: "Paris, France", type: "Full-Time" },
    { id: 6, title: "Marketing Specialist", domain: "Marketing", location: "New York, USA", type: "Remote" },
    { id: 7, title: "DevOps Engineer", domain: "Web Development", location: "Toronto, Canada", type: "Full-Time" },
    { id: 8, title: "Product Designer", domain: "Design", location: "Austin, USA", type: "Part-Time" },
    { id: 9, title: "Data Analyst", domain: "AI & Machine Learning", location: "London, UK", type: "Remote" },
    { id: 10, title: "Software Engineer", domain: "Web Development", location: "Sydney, Australia", type: "Full-Time" },
    { id: 11, title: "HR Manager", domain: "Human Resources", location: "Singapore", type: "Remote" },
    { id: 12, title: "QA Engineer", domain: "Quality Assurance", location: "Berlin, Germany", type: "Part-Time" },
    { id: 13, title: "Full Stack Developer", domain: "Web Development", location: "San Francisco, USA", type: "Full-Time" },
    { id: 14, title: "Graphic Designer", domain: "Design", location: "Los Angeles, USA", type: "Part-Time" },
    { id: 15, title: "Business Analyst", domain: "Business", location: "New York, USA", type: "Remote" },
    { id: 16, title: "Sales Executive", domain: "Sales", location: "London, UK", type: "Full-Time" },
    { id: 17, title: "Web Developer", domain: "Web Development", location: "Tokyo, Japan", type: "Remote" },
    { id: 18, title: "System Architect", domain: "Technology", location: "Toronto, Canada", type: "Full-Time" },
    { id: 19, title: "Cloud Engineer", domain: "Technology", location: "Paris, France", type: "Full-Time" },
    { id: 20, title: "Cybersecurity Analyst", domain: "Security", location: "Sydney, Australia", type: "Part-Time" },
    { id: 21, title: "Mobile Developer", domain: "Mobile Development", location: "Berlin, Germany", type: "Full-Time" },
    { id: 22, title: "Product Manager", domain: "Management", location: "New York, USA", type: "Remote" },
    { id: 23, title: "Game Developer", domain: "Gaming", location: "Los Angeles, USA", type: "Full-Time" },
    { id: 24, title: "Network Engineer", domain: "Technology", location: "Toronto, Canada", type: "Remote" },
    { id: 25, title: "AI Engineer", domain: "AI & Machine Learning", location: "Paris, France", type: "Full-Time" },
    { id: 26, title: "Content Writer", domain: "Content Creation", location: "London, UK", type: "Part-Time" },
    { id: 27, title: "SEO Specialist", domain: "Marketing", location: "Sydney, Australia", type: "Full-Time" },
    { id: 28, title: "Business Development Manager", domain: "Sales", location: "Berlin, Germany", type: "Remote" },
    { id: 29, title: "Digital Marketing Manager", domain: "Marketing", location: "Toronto, Canada", type: "Full-Time" },
    { id: 30, title: "Cloud Architect", domain: "Technology", location: "Singapore", type: "Remote" },
    { id: 31, title: "IT Support Specialist", domain: "IT Support", location: "Tokyo, Japan", type: "Part-Time" },
    { id: 32, title: "Compliance Officer", domain: "Legal", location: "New York, USA", type: "Full-Time" },
    { id: 33, title: "Legal Advisor", domain: "Legal", location: "Paris, France", type: "Remote" },
    { id: 34, title: "Operations Manager", domain: "Management", location: "London, UK", type: "Full-Time" },
    { id: 35, title: "E-commerce Manager", domain: "E-commerce", location: "San Francisco, USA", type: "Remote" },
    { id: 36, title: "Database Administrator", domain: "Technology", location: "Sydney, Australia", type: "Full-Time" },
    { id: 37, title: "Blockchain Developer", domain: "Technology", location: "Berlin, Germany", type: "Remote" },
    { id: 38, title: "Social Media Manager", domain: "Marketing", location: "Los Angeles, USA", type: "Part-Time" },
    { id: 39, title: "Automation Engineer", domain: "Engineering", location: "Tokyo, Japan", type: "Full-Time" },
    { id: 40, title: "Video Editor", domain: "Content Creation", location: "Austin, USA", type: "Remote" },
    { id: 41, title: "Software Tester", domain: "Quality Assurance", location: "Toronto, Canada", type: "Full-Time" },
    { id: 42, title: "Cloud Solutions Architect", domain: "Technology", location: "Berlin, Germany", type: "Full-Time" },
    { id: 43, title: "Customer Success Manager", domain: "Customer Service", location: "New York, USA", type: "Remote" },
    { id: 44, title: "Data Engineer", domain: "AI & Machine Learning", location: "Paris, France", type: "Full-Time" },
    { id: 45, title: "Chief Technology Officer", domain: "Management", location: "London, UK", type: "Remote" },
    { id: 46, title: "Web Designer", domain: "Design", location: "Toronto, Canada", type: "Part-Time" },
    { id: 47, title: "HR Specialist", domain: "Human Resources", location: "San Francisco, USA", type: "Full-Time" },
    { id: 48, title: "Marketing Manager", domain: "Marketing", location: "Sydney, Australia", type: "Remote" },
    { id: 49, title: "IT Security Specialist", domain: "Security", location: "Los Angeles, USA", type: "Full-Time" },
    { id: 50, title: "Data Privacy Officer", domain: "Legal", location: "London, UK", type: "Remote" },
    { id: 51, title: "Data Privacy Officer", domain: "Legal", location: "London, UK", type: "Remote" }
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
