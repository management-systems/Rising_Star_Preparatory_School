import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Simple hardcoded admin for now
  if (email === 'admin@gracemontessori.edu.in' && password === 'admin123') {
    return NextResponse.json({ accessToken: 'demo-token', message: 'Login successful' });
  }

  return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
}

