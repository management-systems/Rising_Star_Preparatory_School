import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String },
  venue: { type: String },
  description: { type: String },
  status: { type: String, default: 'Upcoming', enum: ['Upcoming', 'Completed'] },
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
