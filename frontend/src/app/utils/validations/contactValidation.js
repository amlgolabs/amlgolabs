const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 2 characters long',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),
  message: Joi.string().min(5).required().messages({
    'string.base': 'Message must be a string',
    'string.min': 'Message must be at least 5 characters long',
    'any.required': 'Message is required',
  }),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).optional().messages({
    'string.pattern.base': 'Phone must be a valid phone number (e.g., +1234567890)',
  }),
});

module.exports = { contactSchema };