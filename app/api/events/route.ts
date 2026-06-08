import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Event from '@/models/Event';

export async function GET() {
  await connectDB();
  const events = await Event.find().sort({ date: -1 });
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const event = await Event.create(body);
  return NextResponse.json(event, { status: 201 });
}

export async function PATCH(req: Request) {
  await connectDB();
  const { id, status } = await req.json();
  await Event.findByIdAndUpdate(id, { status });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Event.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
