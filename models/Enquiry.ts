import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  parentName: { type: String, required: true },
  childName: { type: String, required: true },
  childAge: { type: String },
  phone: { type: String, required: true },
  email: { type: String },
  message: { type: String },
  status: { type: String, default: 'New', enum: ['New', 'Contacted', 'Closed'] },
}, { timestamps: true });

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
