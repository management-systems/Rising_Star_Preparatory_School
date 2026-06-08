import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Gallery from '@/models/Gallery';

export async function GET() {
  await connectDB();
  const photos = await Gallery.find().sort({ createdAt: -1 });
  return NextResponse.json(photos);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const photo = await Gallery.create(body);
  return NextResponse.json(photo, { status: 201 });
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Gallery.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
