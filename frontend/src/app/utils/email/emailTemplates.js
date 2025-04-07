// emailTemplates.js
const templates = {
    contactDetailsToAdmin: {
        source: "info@amlgolabs.com",
        subject: "New Contact Form Submission",
        body: (name, email, phone, message) =>
            `Dear Admin,\n\nA new contact form submission has been received:\n\n` +
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
    }
    ,
    jobApplicationToAmlgoLabs: {
        source: "noreply@amlgolabs.com",
        subject: "New Job Application Received",
        body: (name, email, phone, coverLetter, resumeUrl) =>
            `Dear Team,\n\nA new job application has been received:\n\n` +
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCover Letter: ${coverLetter}\nResume URL: ${process.env.NEXT_PUBLIC_BASE_URL}${resumeUrl}\n\n` +
            `Please review the application.\n\nBest regards,\nAmlgo Labs System`,
    },
    jobApplicationThanks: {
        source: "jobs@amlgolabs.com",
        subject: "Job Application Received",
        body: (name) => `Dear ${name},

This is to let you know that we have received your submission. We appreciate your interest in Amlgo Labs. If you are selected for the next process, you can expect a phone call from our HR Team shortly.  
    
Thank you, again, for your interest in our company. We do appreciate the time that you invested in this process.  
    
Sincerely,  
HR Manager  
Amlgo Labs  
    
(Note: This is a system-generated email. Please do not reply.)`
    }


};

const getEmailTemplate = (templateName, ...args) => {
    const template = templates[templateName];
    if (!template) {
        throw new Error(`Template "${templateName}" not found`);
    }
    return {
        source: template.source,
        subject: template.subject,
        body: template.body(...args),
    };
};

module.exports = { getEmailTemplate };