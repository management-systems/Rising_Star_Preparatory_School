'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutSnippet() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gradient-to-br from-[#F5C563]/20 to-[#E8763A]/10 rounded-2xl h-72 flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <div className="w-24 h-24 bg-[#2B4C7E] rounded-full mx-auto flex items-center justify-center mb-3">
              \u003Cimg src=\u0022/logo.jpg\u0022 alt=\u0022Grace Montessori\u0022 className=\u0022w-full h-full object-cover rounded-full\u0022 /\u003E
            </div>
            <p className="text-sm text-gray-500 font-medium">Montessori School · Est. 2014</p>
          </div>
        </div>
        <div>
          <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide mb-2">About Our School</p>
          <h2 className="text-3xl font-serif text-[#2B4C7E] mb-4">A Montessori Environment Where Children Thrive</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Grace Montessori is a trusted Montessori-based early childhood education center. Our fully air-conditioned campus with live CCTV access, qualified Montessori-trained teachers, and day care facility gives your child the safest and most enriching start to life.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1.5 bg-[#2B4C7E]/8 text-[#2B4C7E] text-xs rounded-lg font-semibold border border-[#2B4C7E]/15">Montessori Method</span>
            <span className="px-3 py-1.5 bg-[#E8763A]/8 text-[#E8763A] text-xs rounded-lg font-semibold border border-[#E8763A]/15">Fully AC Campus</span>
            <span className="px-3 py-1.5 bg-[#4CAF82]/8 text-[#4CAF82] text-xs rounded-lg font-semibold border border-[#4CAF82]/15">Live CCTV</span>
            <span className="px-3 py-1.5 bg-[#9C5FB5]/8 text-[#9C5FB5] text-xs rounded-lg font-semibold border border-[#9C5FB5]/15">Day Care</span>
          </div>
          <Link href="/about" className="text-[#2B4C7E] font-semibold text-sm hover:text-[#E8763A] transition-colors">
            Read More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}



