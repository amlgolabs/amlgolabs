import path from 'path';
import fs from 'fs';
import JobApplication from '../../../../public'; 

export const downloadPdfById = async (req, res) => {
    try {
        const { id } = req.params;

        // 1. Find the application by ID
        const application = await JobApplication.findById(id);
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        // 2. Extract the relative resume URL from MongoDB (e.g. "/uploads/filename.docx")
        const resumeRelativePath = application.resumeUrl;

        // 3. Construct the absolute file path on the server
        const resumeAbsolutePath = path.join(process.cwd(), 'public', resumeRelativePath);

        console.log('Resolved resume path:', resumeAbsolutePath); // for debugging

        // 4. Check if file exists
        if (!fs.existsSync(resumeAbsolutePath)) {
            return res.status(404).json({ error: 'File not found on server' });
        }

        // 5. Send the file as a downloadable attachment
        return res.download(resumeAbsolutePath);
    } catch (error) {
        console.error('Error while downloading resume:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};
