"use client";

import { useParams } from "next/navigation";
import JobDescription from "../JobDescription";

const JobDetails = () => {
  const { jobId } = useParams(); // Correct way to get dynamic route params in App Router

  return (
    <div>
      {/* <h1>Job Details for ID: {jobId}</h1> */}
      <JobDescription/>
    </div>
  );
};

export default JobDetails;
