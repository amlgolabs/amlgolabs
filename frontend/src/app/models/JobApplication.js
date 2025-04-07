import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  coverLetter: String,
  resumeUrl: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.JobApplication ||
  mongoose.model('JobApplication', jobApplicationSchema);
