import mongoose from 'mongoose';
import sesClient from '@/app/config/aws/email/ses';
import { createEmailParams } from '@/app/utils/email/emailParams';
import { SendEmailCommand } from '@aws-sdk/client-ses';

// Connect to MongoDB
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

// Define the ContactUs schema
const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true, default: '' },
  email: { type: String, required: true, default: '' },
  message: { type: String, required: true, default: '' },
  phone: { type: String, required: false, default: '' },
  createdAt: { type: Date, default: Date.now },
});

const ContactUs = mongoose.models.ContactUs || mongoose.model('ContactUs', contactUsSchema);

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, message, phone } = await req.json();

    console.log({ name, email, message, phone });

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // First email: Thank you email to user
    const thankYouParams = createEmailParams(
      email,              // toEmail
      name,              // name
      'contactUsThanks', // template
      'info@amlgolabs.com', // fromEmail
      email,             // email
      phone             // phone
    );

    await sesClient.send(new SendEmailCommand(thankYouParams));

    // Save to database
    const newContact = new ContactUs({ name, email, message, phone });
    await newContact.save();
    console.log('Contact information saved:', newContact);

    // Second email: Notification to admin
    const adminParams = createEmailParams(
      'krishna.singh@amlgolabs.com',    // toEmail (replace with actual admin email)
      name,                    // name
      'contactDetailsToAdmin', // template
      'noreply@amlgolabs.com', // fromEmail
      email,                   // email
      message                  // message instead of phone
    );

    await sesClient.send(new SendEmailCommand(adminParams));

    return new Response(
      JSON.stringify({ message: 'Contact information saved successfully' }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error saving contact information:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}