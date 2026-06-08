'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-gray-300 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.jpg" alt="Grace Montessori Pre School & Day Care" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-serif font-bold text-white">Grace Montessori</span>
          </div>
          <p className="text-gray-400 leading-relaxed">A trusted early childhood education center building strong foundations for your child&apos;s future.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-gray-400">
            <Link href="/about" className="block hover:text-[#F5C563] transition">About Us</Link>
            <Link href="/admissions" className="block hover:text-[#F5C563] transition">Admissions</Link>
            <Link href="/gallery" className="block hover:text-[#F5C563] transition">Gallery</Link>
            <Link href="/events" className="block hover:text-[#F5C563] transition">Events</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">For Parents</h4>
          <div className="space-y-2 text-gray-400">
            <Link href="/contact" className="block hover:text-[#F5C563] transition">Enquire for Your Child</Link>
            <Link href="/admissions" className="block hover:text-[#F5C563] transition">Fee Structure</Link>
            <Link href="/events" className="block hover:text-[#F5C563] transition">School Calendar</Link>
            <Link href="/gallery" className="block hover:text-[#F5C563] transition">Photo Gallery</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <div className="space-y-2 text-gray-400">
            <p>377/28, Near Jyoti Park, Gali No. 7,<br/>Near Sector 7 Extension,<br/>Gurugram, Haryana, India</p>
            <p>+91 99106-30184</p>
            <p>info@gracemontessori.edu.in</p>
            <p className="text-xs text-gray-500 mt-2">Mon–Fri: 8:00 AM – 1:00 PM<br/>Sat: 8:00 AM – 12:00 PM</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-5 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Grace Montessori Pre School & Day Care. All rights reserved.</p>
        <Link href="/admin/login" className="mt-2 sm:mt-0 hover:text-[#F5C563] transition">Staff Login</Link>
      </div>
    </footer>
  );
}



