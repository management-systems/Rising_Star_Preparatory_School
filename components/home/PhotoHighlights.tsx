'use client';
import React from 'react';
import Link from 'next/link';

const photos = [
  { label: 'Classroom Activities', color: 'from-[#F5C563]/30 to-[#E8763A]/15' },
  { label: 'Outdoor Play', color: 'from-[#4CAF82]/20 to-[#4CAF82]/10' },
  { label: 'Annual Celebrations', color: 'from-[#9C5FB5]/20 to-[#9C5FB5]/10' },
  { label: 'Art & Creativity', color: 'from-[#E8763A]/20 to-[#F5C563]/15' },
  { label: 'Sports & Movement', color: 'from-[#2B4C7E]/15 to-[#2B4C7E]/5' },
  { label: 'Learning Milestones', color: 'from-[#4CAF82]/15 to-[#F5C563]/15' },
];

export default function PhotoHighlights() {
  return (
    <section className="py-16 px-4 bg-[#F7F8FC]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">Gallery</p>
        <h2 className="text-3xl font-serif text-[#2B4C7E] text-center mb-3">A Glimpse Into Our School Life</h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">See how your child will spend their days — learning, playing, and growing</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p) => (
            <Link key={p.label} href="/gallery" className={`bg-gradient-to-br ${p.color} rounded-xl h-40 flex items-center justify-center group hover:shadow-md transition-shadow border border-gray-100`}>
              <span className="font-semibold text-gray-700 text-sm text-center px-3 group-hover:text-[#2B4C7E] transition-colors">{p.label}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery" className="px-6 py-3 bg-[#2B4C7E] text-white rounded-lg font-semibold text-sm hover:bg-[#1a365d] transition">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
