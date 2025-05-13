// "use client";

// import { useParams } from "next/navigation";
// import JobDescription from "../JobDescription";

// const JobDetails = () => {
//   const { jobId } = useParams(); // Correct way to get dynamic route params in App Router

//   return (
//     <div>
//       {/* <h1>Job Details for ID: {jobId}</h1> */}
//       <JobDescription/>
//     </div>
//   );
// };

// export default JobDetails;



// "use client";

// import { useParams } from "next/navigation";
// import JobDescription from "../JobDescription";
// import { jobs } from "../data/jobs";

// const JobDetails = () => {

//   const slugify = (str) => 
//     str.toLowerCase()
//       .trim()
//       .replace(/\s+/g, '-')       // Replace spaces with -
//       .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
//       .replace(/\-\-+/g, '-');    // Replace multiple - with single -
  
//   const { jobId } = useParams();
  
//   // Find the job matching the slug
//   const job = jobs.find((j) => slugify(j.title) === jobId);
  
//   if (!job) {
//     return <div>Job not found!</div>;
//   }

//   return (
//     <div>
//       <JobDescription job={job} /> {/* Pass job as prop */}
//     </div>
//   );
// };

// export default JobDetails;



"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import JobDescription from "../JobDescription";
import {  fetchSingleJob } from "@/app/lib/api";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to slugify job titles
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");

   useEffect(() => {
    const getJob = async () => {
      try {
        const jobData = await fetchSingleJob({ id: jobId });
        setJob(jobData);
      } catch (err) {
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) getJob();
  }, [jobId]);

  if (loading) return <div>Loading...</div>;
  if (!job) return <div>Job not found!</div>;

  return (
    <div>
      <JobDescription job={job} />
    </div>
  );
};

export default JobDetails;
