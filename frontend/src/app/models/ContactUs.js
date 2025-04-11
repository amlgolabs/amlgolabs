// models/ContactUs.js
import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true, default: '' },
  email: { type: String, required: true, default: '' },
  message: { type: String, required: true, default: '' },
  phone: { type: String, required: false, default: '' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.ContactUs || mongoose.model('ContactUs', contactUsSchema);
