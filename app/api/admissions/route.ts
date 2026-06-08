import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Admission from '@/models/Admission';

export async function GET() {
  await connectDB();
  const admissions = await Admission.find().sort({ createdAt: -1 });
  return NextResponse.json(admissions);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const admission = await Admission.create(body);
  return NextResponse.json(admission, { status: 201 });
}

export async function PATCH(req: Request) {
  await connectDB();
  const { id, status } = await req.json();
  await Admission.findByIdAndUpdate(id, { status });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Admission.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
