import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Admission from '@/models/Admission';
import Enquiry from '@/models/Enquiry';
import Gallery from '@/models/Gallery';
import Event from '@/models/Event';

export async function GET() {
  await connectDB();
  const [students, enquiries, photos, events] = await Promise.all([
    Admission.countDocuments(),
    Enquiry.countDocuments(),
    Gallery.countDocuments(),
    Event.countDocuments(),
  ]);
  return NextResponse.json({ students, enquiries, photos, events });
}
