import mongoose from 'mongoose';

const AdmissionSchema = new mongoose.Schema({
  childName: { type: String, required: true },
  parentName: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: String },
  program: { type: String },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Approved', 'Rejected'] },
}, { timestamps: true });

export default mongoose.models.Admission || mongoose.model('Admission', AdmissionSchema);
