import dbConnect from '@/app/lib/mongodb';
import ContactUs from '@/app/models/ContactUs';
import sesClient from '@/app/config/aws/email/ses';
import { createEmailParams } from '@/app/utils/email/emailParams';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import { contactSchema } from '@/app/utils/validations/contactValidation';
import asyncHandler from '@/app/utils/asyncHandler/asyncHandler';

export const POST = asyncHandler(async (req) => {
  await dbConnect();

  const { name, email, message, phone } = await req.json();

  // Validate input data
  const { error } = contactSchema.validate({ name, email, message, phone }, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return {
      status: 400,
      body: { error: 'Validation failed', details: errorMessages },
    };
  }

  // Save contact details to database
  const newContact = new ContactUs({ name, email, message, phone });
  await newContact.save();

  // Send contact details to Team(admin)
  const adminParams = createEmailParams(
    'info@amlgolabs.com', // To: info@amlgolabs.com
    name,                 // userName
    'contactDetailsToAdmin', // templateName
    null,                    // Source (uses template default)
    email,                 //     CC
    email,                // For template
    phone,                // For template
    message               // For template
  );
  await sesClient.send(new SendEmailCommand(adminParams));

  return {
    status: 201,
    body: { message: 'Contact information saved successfully' },
  };
});