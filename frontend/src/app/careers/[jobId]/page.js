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



"use client";

import { useParams } from "next/navigation";
import JobDescription from "../JobDescription";
import { jobs } from "../data/jobs";

const JobDetails = () => {
  const { jobId } = useParams(); // jobId is actually your slug (like 'data-engineer')

  // Find the job matching the slug
  const job = jobs.find((j) => 
    j.title.toLowerCase().replace(/\s+/g, '-') === jobId
  );

  if (!job) {
    return <div>Job not found!</div>; // Handle if no matching job found
  }

  return (
    <div>
      <JobDescription job={job} /> {/* Pass job as prop */}
    </div>
  );
};

export default JobDetails;
