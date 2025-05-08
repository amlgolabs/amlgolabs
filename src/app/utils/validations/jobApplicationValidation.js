// utils/validations/jobApplicationValidation.js
const Joi = require('joi');

const jobApplicationSchema = Joi.object({
    name: Joi.string().min(2).required().messages({
        'string.base': 'Name must be a string',
        'string.min': 'Name must be at least 2 characters long',
        'any.required': 'Name is required',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required',
    }),
    phone: Joi.string()
        .pattern(/^(\+?\d{1,15}|0\d{9,14})$/)
        .required()
        .messages({
            'string.pattern.base': 'Phone must be a valid phone number (e.g., +1234567890 or 0123456789)',
            'any.required': 'Phone is required',
        }),
    coverLetter: Joi.string().optional().allow('').messages({
        'string.base': 'Cover letter must be a string',
    }),
    cv: Joi.object().required().custom((value, helpers) => {
        if (!(value instanceof File)) {
            return helpers.error('file.required');
        }
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        if (!allowedTypes.includes(value.type)) {
            return helpers.error('file.type');
        }
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (value.size > maxSize) {
            return helpers.error('file.size');
        }
        return value;
    }).messages({
        'file.required': 'CV file is required',
        'file.type': 'CV must be a PDF, DOC, or DOCX file',
        'file.size': 'CV file size must not exceed 5MB',
    }),
    jobId: Joi.string().required().messages({
        'string.base': 'Job ID must be a string',
        'any.required': 'Job ID is required',
    }),
    jobTitle: Joi.string().min(2).required().messages({
        'string.base': 'Job title must be a string',
        'string.min': 'Job title must be at least 2 characters long',
        'any.required': 'Job title is required',
    }),
});

module.exports = { jobApplicationSchema };