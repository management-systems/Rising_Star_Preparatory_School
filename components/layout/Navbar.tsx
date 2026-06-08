'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Grace Montessori Pre School & Day Care" className="w-10 h-10 rounded-full object-cover" />
          <div className="leading-tight">
            <span className="font-serif font-bold text-[#2B4C7E] text-base block">Grace Montessori</span>
            <span className="text-[10px] text-gray-500 tracking-wide uppercase">Preparatory School</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-[#2B4C7E] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/admissions" className="px-5 py-2 bg-[#E8763A] text-white rounded-lg text-sm font-semibold hover:bg-[#d66a32] transition shadow-sm">
            Enroll Now
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 px-3 text-sm font-medium text-gray-600 hover:text-[#2B4C7E] hover:bg-blue-50 rounded-lg">
              {l.label}
            </Link>
          ))}
          <Link href="/admissions" onClick={() => setOpen(false)} className="block py-2 px-3 text-sm font-semibold text-[#E8763A]">
            Enroll Now →
          </Link>
        </nav>
      )}
    </header>
  );
}



