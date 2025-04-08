// job application route.js
import path from 'path';
import fs from 'fs/promises';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import connectDB from '@/app/lib/mongodb';
import JobApplication from '@/app/models/JobApplication';
import sesClient from '@/app/config/aws/email/ses';
import { createEmailParams } from '@/app/utils/email/emailParams';

export async function POST(req) {
    await connectDB();

    try {
        const formData = await req.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const coverLetter = formData.get('coverLetter');
        const cv = formData.get('cv');
        const jobId = formData.get('id');
        const jobTitle = formData.get('title');

        if (!name || !email || !phone || !cv) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const fileExt = cv.name.split('.').pop();
        const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        const filePath = path.join(uploadDir, uniqueFileName);
        await fs.mkdir(uploadDir, { recursive: true });

        const buffer = Buffer.from(await cv.arrayBuffer());
        await fs.writeFile(filePath, buffer);

        const resumeUrl = `/uploads/${uniqueFileName}`;

        const newApplication = new JobApplication({
            name,
            email,
            phone,
            coverLetter,
            resumeUrl,
        });

        await newApplication.save();
        const savedJobId = newApplication._id.toString();

        // Send candidate details to jobs@amlgolabs.com (no CC)
        const companyEmailParams = createEmailParams(
            'jobs@amlgolabs.com',   // To: jobs@amlgolabs.com
            name,                   // userName
            'jobApplicationToAmlgoLabs', // templateName
            'jobs@amlgolabs.com',   // Source
            null,                   // No CC
            email,                  // candidate email
            phone,                  // candidate phone
            coverLetter,            // candidate cover letter
            savedJobId,             // application ID
            jobId,                  // job ID
            jobTitle                // job title
        );
        await sesClient.send(new SendEmailCommand(companyEmailParams));

        // Send thanks email to applicant with CC to jobs@amlgolabs.com
        const applicantEmailParams = createEmailParams(
            email,                  // To: candidate email
            name,                   // userName
            'jobApplicationThanks', // templateName
            'noreply@amlgolabs.com', // Source
            null,                   // No CC via parameter (set manually below)
            jobTitle                // For template
        );
        applicantEmailParams.Destination.CcAddresses = ['jobs@amlgolabs.com']; // CC only for applicant email
        await sesClient.send(new SendEmailCommand(applicantEmailParams));

        return new Response(
            JSON.stringify({ message: 'Application submitted successfully' }),
            {
                status: 201, // Use 201 for resource creation
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error processing job application:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
