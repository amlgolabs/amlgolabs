import dbConnect from '@/app/lib/mongodb';
import ContactUs from '@/app/models/ContactUs';
import sesClient from '@/app/config/aws/email/ses';
import { createEmailParams } from '@/app/utils/email/emailParams';
import { SendEmailCommand } from '@aws-sdk/client-ses';

export async function POST(req) {
  await dbConnect();

  try {
    const { name, email, message, phone } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send thank-you email to the user with CC to info@amlgolabs.com
    const thankYouParams = createEmailParams(
      email,             
      name,             
      'contactUsThanks', 
      'noreply@amlgolabs.com', // Source
      'info@amlgolabs.com'  // CC
    );
    await sesClient.send(new SendEmailCommand(thankYouParams));

    // Save contact details to database
    const newContact = new ContactUs({ name, email, message, phone });
    await newContact.save();

    // Send contact details to admin (no CC)
    const adminParams = createEmailParams(
      'info@amlgolabs.com', // To: info@amlgolabs.com
      name,                 // userName
      'contactDetailsToAdmin', // templateName
      null,                 // Source (uses template default)
      email,                // For template
      phone,                // For template
      message               // For template
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