import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import connectDB from '../../../lib/mongodb';
import JobApplication from '../../../models/JobApplication';

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDB();

    const application = await JobApplication.findById(id);
    if (!application || !application.resumeUrl) {
      return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
    }

    const filename = path.basename(application.resumeUrl);
    const filePath = path.join(process.cwd(), 'public', 'uploads', filename);
    const fileBuffer = await fs.readFile(filePath);

    const ext = path.extname(filename).toLowerCase();
    const contentType =
      ext === '.pdf'
        ? 'application/pdf'
        : ext === '.docx'
          ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          : ext === '.doc'
            ? 'application/msword'
            : 'application/octet-stream';

    const safeName = application.name.replace(/\s+/g, '_');
    const downloadFileName = `${safeName}_Resume${ext}`;

    const dispositionType = ext === '.pdf' ? 'inline' : 'attachment';

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `${dispositionType}; filename="${downloadFileName}"`,
      },
    });

  } catch (error) {
    console.error('Error serving resume:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

