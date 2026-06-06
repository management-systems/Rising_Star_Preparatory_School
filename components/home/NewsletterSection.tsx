'use client';
import React from 'react';
import Link from 'next/link';

export default function ContactStrip() {
  return (
    <section className="py-14 px-4 bg-gradient-to-r from-[#2B4C7E] to-[#1a365d]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">Give Your Child the Best Start</h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">Schedule a campus visit, speak to our counsellor, or start the admission process for your little one.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/admissions" className="px-7 py-3 bg-[#E8763A] text-white rounded-lg font-semibold hover:bg-[#d66a32] transition shadow-lg">
            Start Admission Process
          </Link>
          <Link href="/contact" className="px-7 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition">
            Enquire About Your Child
          </Link>
        </div>
      </div>
    </section>
  );
}
