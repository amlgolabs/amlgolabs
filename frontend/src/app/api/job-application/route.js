// api/job-application.js
import { SendEmailCommand } from '@aws-sdk/client-ses';
import connectDB from '@/app/lib/mongodb';
import JobApplication from '@/app/models/JobApplication';
import sesClient from '@/app/config/aws/email/ses';
import { createEmailParams } from '@/app/utils/email/emailParams';
import { jobApplicationSchema } from '@/app/utils/validations/jobApplicationValidation';
import asyncHandler from '@/app/utils/asyncHandler/asyncHandler';
import uploadFile from '@/app/utils/uploadFile';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = asyncHandler(async (req) => {
  await connectDB();

  const formData = await req.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const coverLetter = formData.get('coverLetter');
  const cv = formData.get('cv');
  const jobId = formData.get('id');
  const jobTitle = formData.get('title');

  const { error } = jobApplicationSchema.validate(
    { name, email, phone, coverLetter, cv, jobId, jobTitle },
    { abortEarly: false }
  );

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return {
      status: 400,
      body: { error: 'Validation failed', details: errorMessages },
    };
  }

  let resumeUrl;
  try {
    resumeUrl = await uploadFile(cv);
  } catch (err) {
    return {
      status: 400,
      body: { error: err.message || 'File upload failed' },
    };
  }

  const newApplication = new JobApplication({
    name,
    email,
    phone,
    coverLetter,
    resumeUrl,
  });

  await newApplication.save();
  const savedJobId = newApplication._id.toString();

  const companyEmailParams = createEmailParams(
    'jobs@amlgolabs.com',
    name,
    'jobApplicationToAmlgoLabs',
    'jobs@amlgolabs.com',
    null,
    email,
    phone,
    coverLetter,
    savedJobId,
    jobId,
    jobTitle
  );
  await sesClient.send(new SendEmailCommand(companyEmailParams));

  const applicantEmailParams = createEmailParams(
    email,
    name,
    'jobApplicationThanks',
    'noreply@amlgolabs.com',
    null,
    jobTitle
  );
  applicantEmailParams.Destination.CcAddresses = ['jobs@amlgolabs.com'];
  await sesClient.send(new SendEmailCommand(applicantEmailParams));

  return {
    status: 201,
    body: { message: 'Application submitted successfully' },
  };
});
