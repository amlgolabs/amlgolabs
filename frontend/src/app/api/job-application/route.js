import mongoose from 'mongoose';
import sesClient from '@/app/config/aws/email/ses';
import { createEmailParams } from '@/app/utils/email/emailParams';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import fs from 'fs/promises';
import path from 'path';

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

const jobApplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    coverLetter: { type: String, default: "" },
    resumeUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const JobApplication = mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema);

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
        // console.log("name, email, phone, coverLetter, cv, id, title", { name, email, phone, coverLetter, cv, jobId, jobTitle });

        if (!name || !email || !phone || !cv) {
            return new Response(
                JSON.stringify({ error: 'All fields are required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Generate unique filename for resume
        const fileExt = cv.name.split('.').pop();
        const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        const filePath = path.join(uploadDir, uniqueFileName);

        // Ensure upload directory exists
        await fs.mkdir(uploadDir, { recursive: true });

        // Save file to filesystem
        const buffer = Buffer.from(await cv.arrayBuffer());
        await fs.writeFile(filePath, buffer);

        // Generate public URL for resume
        const resumeUrl = `/uploads/${uniqueFileName}`;

        // Save to MongoDB
        const newApplication = new JobApplication({
            name,
            email,
            phone,
            coverLetter,
            resumeUrl,
        });
        await newApplication.save();

        const savedJobId = newApplication._id.toString()


        const companyEmailParams = createEmailParams(
            'krishna.singh@amlgolabs.com',
            name,
            'jobApplicationToAmlgoLabs',
            'jobs@amlgolabs.com',
            email,
            phone,
            coverLetter,
            savedJobId,
            jobId,
            jobTitle,
        );
        await sesClient.send(new SendEmailCommand(companyEmailParams));

        // Send thank you email to applicant
        const applicantEmailParams = createEmailParams(
            email,
            name,
            'jobApplicationThanks',
            'noreply@amlgolabs.com'
        );
        await sesClient.send(new SendEmailCommand(applicantEmailParams));

        return new Response(
            JSON.stringify({ message: 'Application submitted successfully' }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error processing job application:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
