import mongoose from 'mongoose';

const popupLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    pdfName: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.PopupLead || mongoose.model('PopupLead', popupLeadSchema);
