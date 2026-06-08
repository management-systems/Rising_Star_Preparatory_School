import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function GET() {
  await connectDB();
  const enquiries = await Enquiry.find().sort({ createdAt: -1 });
  return NextResponse.json(enquiries);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const enquiry = await Enquiry.create(body);
  return NextResponse.json(enquiry, { status: 201 });
}

export async function PATCH(req: Request) {
  await connectDB();
  const { id, status } = await req.json();
  await Enquiry.findByIdAndUpdate(id, { status });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Enquiry.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
