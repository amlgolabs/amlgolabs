import { SendRawEmailCommand } from '@aws-sdk/client-ses';
import sesClient from '@/app/config/aws/email/ses';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

export async function POST(req) {
  const { name, email, pdfName } = await req.json();

  try {
    const pdfPath = path.join(process.cwd(), 'public/documents', `${pdfName}.pdf`);

    if (!fs.existsSync(pdfPath)) {
      return new Response(JSON.stringify({ error: 'PDF not found' }), { status: 404 });
    }

    const pdfContent = fs.readFileSync(pdfPath);
    const pdfBase64 = pdfContent.toString('base64');
    const contentType = mime.lookup(pdfPath) || 'application/pdf';

    const boundary = `NextBoundary-${Date.now()}`;
    const rawMessage = [
      `From: "Amlgo Labs" <noreply@amlgolabs.com>`,
      `To: ${email}`,
      `Subject: Your Requested Case Study`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/plain; charset=UTF-8`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      `Hi ${name},\n\nThank you for your interest. Please find the requested case study attached.\n\nRegards,\nAmlgo Labs`,
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

    const params = {
      RawMessage: { Data: Buffer.from(rawMessage) },
    };

    await sesClient.send(new SendRawEmailCommand(params));

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('PDF email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
