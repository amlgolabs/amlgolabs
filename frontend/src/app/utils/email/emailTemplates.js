// emailTemplates.js
const templates = {
    contactDetailsToAdmin: {
        source: "krishna.singh@amlgolabs.com",
        subject: "New Contact Form Submission",
        body: (name, email, phone, message) =>
            `Dear Admin,\n\nA new contact form submission has been received:\n\n` +
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\n` +
            `Please review and respond accordingly.\n\nBest regards,\nAmlgo Labs System`
    },
    contactUsThanks: {
        source: "info@amlgolabs.com",
        subject: "Contact Us Form Submission",
        body: (name) => `Hi ${name}, thank you for reaching out to us!`,
    },
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
    This is to let you know that we have received your submission. We appreciate your interest in Amlgo Labs. If you are selected for an interview, you can expect a phone call from our Human Resources staff shortly.  
    
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