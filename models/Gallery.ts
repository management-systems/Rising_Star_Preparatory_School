import mongoose from 'mongoose';

const GallerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  album: { type: String, required: true },
  imageUrl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);
