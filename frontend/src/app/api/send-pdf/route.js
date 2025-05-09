// import { SendRawEmailCommand } from '@aws-sdk/client-ses';
// import sesClient from '@/app/config/aws/email/ses';
// import fs from 'fs';
// import path from 'path';
// import mime from 'mime-types';

// export async function POST(req) {
//   const { name, email, pdfName } = await req.json();

//   try {
//     const pdfPath = path.join(process.cwd(), 'public/documents', `${pdfName}.pdf`);

//     if (!fs.existsSync(pdfPath)) {
//       return new Response(JSON.stringify({ error: 'PDF not found' }), { status: 404 });
//     }

//     const pdfContent = fs.readFileSync(pdfPath);
//     const pdfBase64 = pdfContent.toString('base64');
//     const contentType = mime.lookup(pdfPath) || 'application/pdf';

//     const boundary = `NextBoundary-${Date.now()}`;
//     const rawMessage = [
//       `From: "Amlgo Labs" <noreply@amlgolabs.com>`,
//       `To: ${email}`,
//       `Subject: Your Requested Case Study`,
//       `MIME-Version: 1.0`,
//       `Content-Type: multipart/mixed; boundary="${boundary}"`,
//       ``,
//       `--${boundary}`,
//       `Content-Type: text/plain; charset=UTF-8`,
//       `Content-Transfer-Encoding: 7bit`,
//       ``,
//       `Hi ${name},\n\nThank you for your interest. Please find the requested case study attached.\n\nRegards,\nAmlgo Labs`,
//       ``,
//       `--${boundary}`,
//       `Content-Type: ${contentType}; name="${pdfName}.pdf"`,
//       `Content-Description: ${pdfName}.pdf`,
//       `Content-Disposition: attachment; filename="${pdfName}.pdf";`,
//       `Content-Transfer-Encoding: base64`,
//       ``,
//       pdfBase64,
//       `--${boundary}--`,
//     ].join('\n');

//     const params = {
//       RawMessage: { Data: Buffer.from(rawMessage) },
//     };

//     await sesClient.send(new SendRawEmailCommand(params));

//     return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
//   } catch (error) {
//     console.error('PDF email error:', error);
//     return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
//   }
// }


// import { SendRawEmailCommand } from '@aws-sdk/client-ses';
// import sesClient from '@/app/config/aws/email/ses';
// import fs from 'fs';
// import path from 'path';
// import mime from 'mime-types';
// import PopupLead from '@/app/models/PopupLead';
// import dbConnect from '@/app/lib/mongodb';


// export async function POST(req) {

//   await dbConnect();

//   const { name, email, pdfName } = await req.json();

//   try {
//     const pdfPath = path.join(process.cwd(), 'public/documents', `${pdfName}.pdf`);

//     if (!fs.existsSync(pdfPath)) {
//       return new Response(JSON.stringify({ error: 'PDF not found' }), { status: 404 });
//     }

//     const newLead = new PopupLead({ name, email, pdfName });
//       await newLead.save();

//     const pdfContent = fs.readFileSync(pdfPath);
//     const pdfBase64 = pdfContent.toString('base64');
//     const contentType = mime.lookup(pdfPath) || 'application/pdf';

//     const boundary = `NextBoundary-${Date.now()}`;
//     const rawMessage = [
//       `From: "Amlgo Labs" <noreply@amlgolabs.com>`,
//       `To: ${email}`,
//       `Subject: Requested Case Study from Amlgo Labs`,
//       `MIME-Version: 1.0`,
//       `Content-Type: multipart/mixed; boundary="${boundary}"`,
//       ``,
//       `--${boundary}`,
//       `Content-Type: text/plain; charset=UTF-8`,
//       `Content-Transfer-Encoding: 7bit`,
//       ``,
//       `Hi ${name},\n\n` +
//       `Thank you for your interest in our case study! We’re excited to share valuable insights that showcase how real-world businesses are transforming with the power of data.\n\n` +
//       `As promised, Please find the attached Case Study.\n\n` +
//       `At Amlgo Labs (https://www.amlgolabs.com), we specialize in turning data into actionable intelligence. From predictive analytics to cutting-edge Generative AI, our solutions are designed to help organizations unlock new levels of efficiency, innovation, and growth. Whether you're navigating complex datasets or aiming to automate decision-making, we’re here to guide your AI journey.\n\n` +
//       `Explore More Success Stories\n\n` +
//       `Check out how other businesses are harnessing the power of AI with us:\n` +
//       `Case Study: Enhancing Customer Experience with AI (https://www.amlgolabs.com/case-studies/customer-experience)\n` +
//       `Case Study: Automating Risk Management in Financial Services (https://www.amlgolabs.com/case-studies/risk-management)\n` +
//       `Case Study: Predictive Maintenance in Manufacturing (https://www.amlgolabs.com/case-studies/predictive-maintenance)\n\n` +
//       `Strategic Partnerships that Power Innovation\n\n` +
//       `We proudly collaborate with leading technology providers, cloud platforms, and industry leaders to deliver best-in-class AI and analytics solutions. Our alliances with AWS, Microsoft Azure, and Snowflake enable us to build secure, scalable, and high-performance systems tailored to your needs.\n\n` +
//       `If you have any questions or would like to explore how we can support your business goals, don’t hesitate to reach out. We're always here to help.\n\n` +
//       `Best regards,\n` +
//       `Amlgo Labs`,
//       ``,
//       `--${boundary}`,
//       `Content-Type: ${contentType}; name="${pdfName}.pdf"`,
//       `Content-Description: ${pdfName}.pdf`,
//       `Content-Disposition: attachment; filename="${pdfName}.pdf";`,
//       `Content-Transfer-Encoding: base64`,
//       ``,
//       pdfBase64,
//       `--${boundary}--`,
//     ].join('\n');

//     const params = {
//       RawMessage: { Data: Buffer.from(rawMessage) },
//     };

//     await sesClient.send(new SendRawEmailCommand(params));

//     return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
//   } catch (error) {
//     console.error('PDF email error:', error);
//     return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
//   }
// }



import { SendRawEmailCommand } from '@aws-sdk/client-ses';
import sesClient from '@/app/config/aws/email/ses';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import PopupLead from '@/app/models/PopupLead';
import dbConnect from '@/app/lib/mongodb';

export async function POST(req) {
  await dbConnect();

  const { name, email, pdfName } = await req.json();

  try {
    const pdfPath = path.join(process.cwd(), 'public/documents', `${pdfName}.pdf`);

    if (!fs.existsSync(pdfPath)) {
      return new Response(JSON.stringify({ error: 'PDF not found' }), { status: 404 });
    }

    // Save the lead to MongoDB
    const newLead = new PopupLead({ name, email, pdfName });
    await newLead.save();

    // Send PDF email to the user
    const pdfContent = fs.readFileSync(pdfPath);
    const pdfBase64 = pdfContent.toString('base64');
    const contentType = mime.lookup(pdfPath) || 'application/pdf';

    const boundary = `NextBoundary-${Date.now()}`;
    const rawMessage = [
      `From: "Amlgo Labs" <noreply@amlgolabs.com>`,
      `To: ${email}`,
      `Subject: Requested Case Study from Amlgo Labs`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/plain; charset=UTF-8`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      `Hi ${name},\n\n` +
      `Thank you for your interest in our case study! We’re excited to share valuable insights that showcase how real-world businesses are transforming with the power of data.\n\n` +
      `As promised, Please find the attached Case Study.\n\n` +
      
      `If you have any questions or would like to explore how we can support your business goals, don’t hesitate to reach out at info@amlgolabs.com. We're always here to help.\n\n` +
      `Best regards,\n` +
      `Amlgo Labs`,
      ``,
      `--${boundary}`,
      `Content-Type: ${contentType}; name="${pdfName}.pdf"`,
      `Content-Description: ${pdfName}.pdf`,
      `Content-Disposition: attachment; filename="${pdfName}.pdf";`,
      `Content-Transfer-Encoding: base64`,
      ``,
      pdfBase64,
      `--${boundary}--`,
    ].join('\n');

    const userEmailParams = {
      RawMessage: { Data: Buffer.from(rawMessage) },
    };

    await sesClient.send(new SendRawEmailCommand(userEmailParams));

    // Send form data to admin email (info@amlgolabs.com)
    const adminEmailMessage = [
      `From: "Amlgo Labs" <noreply@amlgolabs.com>`,
      `To: info@amlgolabs.com`,
      `Subject: New Case Study Lead Submission`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=UTF-8`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      `Hello Admin,\n\n` +
      `A new lead has submitted the case study form. Below are the details:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Requested Case Study: ${pdfName}\n\n` +
      `This data has been saved to the database.\n\n` +
      `Best regards,\n` +
      `Amlgo Labs`,
    ].join('\n');

    const adminEmailParams = {
      RawMessage: { Data: Buffer.from(adminEmailMessage) },
    };

    try {
      await sesClient.send(new SendRawEmailCommand(adminEmailParams));
      console.log('Admin email sent successfully');
    } catch (adminError) {
      console.error('Error sending admin email:', adminError);
      // Do not throw error to avoid affecting user response
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('PDF email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}