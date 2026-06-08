import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import cloudinary from '@/lib/cloudinary';

export async function GET() {
  await connectDB();
  const photos = await Gallery.find().sort({ createdAt: -1 });
  return NextResponse.json(photos);
}

export async function POST(req: Request) {
  await connectDB();
  const { name, album, imageUrl } = await req.json();

  // Upload base64 image to Cloudinary
  const uploadResult = await cloudinary.uploader.upload(imageUrl, {
    folder: 'grace-montessori/gallery',
  });

  const photo = await Gallery.create({
    name,
    album,
    imageUrl: uploadResult.secure_url,
  });

  return NextResponse.json(photo, { status: 201 });
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Gallery.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
