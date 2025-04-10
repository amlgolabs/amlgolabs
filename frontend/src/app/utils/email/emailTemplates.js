// emailTemplates.js
import config from "@/app/config/config";
const templates = {
    contactDetailsToAdmin: {
        source: "noreply@amlgolabs.com",
        subject: "New Contact Form",
        body: (name, email, phone, message) =>
            `Dear Team,\n\nA new contact form submission has been received:\n\n` +
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\n` +
            `Please review and respond accordingly.\n\nBest regards,\nAmlgo Labs System`
    },
    contactUsThanks: {
        source: "info@amlgolabs.com",
        subject: "Thank You for Contacting Amlgo Labs",
        body: (name) => `Dear ${name},
      
Thank you for reaching out to Amlgo Labs. We have received your message and appreciate you taking the time to connect with us.
      
Our team will review your inquiry and get back to you as soon as possible.
      
We look forward to assisting you.
      
Best regards,  
The Amlgo Labs Team`
    },
    jobApplicationToAmlgoLabs: {
        source: "noreply@amlgolabs.com",
        subject: (name, email, phone, coverLetter, savedJobId, jobId, jobTitle) =>
            `New application received for the position ${jobTitle} [${jobId}]`,
        body: (name, email, phone, coverLetter, savedJobId, jobId,
            jobTitle,) =>

            `Job Opening: ${jobTitle} [${jobId}]\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nResume URL: ${config.endpoint}/api/view-resume/${savedJobId}\nCover Letter: ${coverLetter}\n\n`
    },
    jobApplicationThanks: {
        source: "jobs@amlgolabs.com",
        subject: "Thanks for submitting your application for a job at Amlgo Labs",
        body: (name, jobTitle) => ({
            Html: {
                Data: `
                <p>Dear ${name},</p>
                <p>This is to let you know that we have received your application. We appreciate your interest in Amlgo Labs and the position of <strong>${jobTitle}</strong> for which you applied. If you are selected for an interview, you can expect a phone call from our Human Resources staff shortly.</p>
                <p>Thank you, again, for your interest in our company. We do appreciate the time that you invested in this application.</p>
                <p>Sincerely,<br>HR Manager<br>Amlgo Labs</p>
            `
            },
        }),
    }
};

const getEmailTemplate = (templateName, ...args) => {
    const template = templates[templateName];
    if (!template) {
        throw new Error(`Template "${templateName}" not found`);
    }
    return {
        source: template.source,
        subject: typeof template.subject === 'function' ? template.subject(...args) : template.subject,
        body: template.body(...args),
    };
};

module.exports = { getEmailTemplate };