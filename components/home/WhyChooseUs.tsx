'use client';
import React from 'react';

const features = [
  { icon: '🧒', title: 'Montessori Environment', desc: 'Child-led, hands-on learning that builds independence, concentration, and a love for discovery.' },
  { icon: '🛡️', title: 'Safety & Security', desc: 'Live CCTV coverage, strict visitor protocols, trained security, and real-time parent access.' },
  { icon: '🎯', title: 'Different Approach', desc: 'We don\'t just teach — we let children explore, question, and learn through experience and play.' },
  { icon: '🧼', title: 'Health & Hygiene', desc: 'Sanitized classrooms, regular health checkups, nutritious meals, and strict cleanliness standards.' },
  { icon: '💛', title: 'Nurturing & Caring', desc: 'A warm, family-like atmosphere where every child feels safe, valued, and emotionally supported.' },
  { icon: '👩‍🏫', title: 'Well-Qualified Teachers', desc: 'Montessori-certified, experienced educators who understand early childhood development deeply.' },
  { icon: '🏠', title: 'Day Care Facility', desc: 'Extended hours day care with meals, nap time, and supervised activities for working parents.' },
  { icon: '📹', title: 'Live CCTV Access', desc: 'Parents can watch their child in real-time via secure live CCTV feed from anywhere.' },
  { icon: '❄️', title: 'Fully Air-Conditioned', desc: 'Comfortable, temperature-controlled classrooms ensuring your child stays healthy in all seasons.' },
  { icon: '⚽', title: 'Indoor & Outdoor Activities', desc: 'Balance of structured indoor learning and outdoor play — sports, yoga, dance, and nature exploration.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">Why Choose Us</p>
      <h2 className="text-3xl font-serif text-[#2B4C7E] text-center mb-3">What Makes Us the Right Choice</h2>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto italic">&ldquo;Montessori activities transform learning into a journey of discovery and inspiration&rdquo;</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#2B4C7E]/20 transition-all">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-gray-800 mb-1.5">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
