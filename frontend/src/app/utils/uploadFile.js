// utils/uploadFile.js

import path from 'path';
import fs from 'fs/promises';
import generateRandomString from './generateRandomString.js';

export default async function uploadFile(file, allowedExtensions = ['pdf', 'doc', 'docx']) {
    if (!file?.name) {
        throw new Error('No file provided');
    }

    const fileExt = file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExt)) {
        throw new Error('Unsupported file type');
    }

    const uniqueFileName = `${Date.now()}-${generateRandomString(8)}.${fileExt}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const filePath = path.join(uploadDir, uniqueFileName);

    await fs.mkdir(uploadDir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    return `/uploads/${uniqueFileName}`;
}
