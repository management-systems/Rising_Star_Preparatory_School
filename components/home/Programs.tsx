'use client';
import React from 'react';

const programs = [
  { name: 'Day Care', age: '1.5–3 yrs', desc: 'Safe, loving care with meals, nap time, and supervised play for working parents', color: 'border-l-[#F5C563]', bg: 'bg-[#F5C563]/5' },
  { name: 'Playgroup', age: '2–3 yrs', desc: 'Sensory exploration, motor skills, and social bonding through Montessori activities', color: 'border-l-[#E8763A]', bg: 'bg-[#E8763A]/5' },
  { name: 'Nursery', age: '3–4 yrs', desc: 'Creative expression, early literacy, number concepts, and hands-on discovery', color: 'border-l-[#4CAF82]', bg: 'bg-[#4CAF82]/5' },
  { name: 'LKG', age: '4–5 yrs', desc: 'Structured reading readiness, writing skills, logical thinking & exploration', color: 'border-l-[#2B4C7E]', bg: 'bg-[#2B4C7E]/5' },
  { name: 'UKG', age: '5–6 yrs', desc: 'School readiness — fluent communication, math foundations & independence', color: 'border-l-[#9C5FB5]', bg: 'bg-[#9C5FB5]/5' },
];

export default function Programs() {
  return (
    <section className="py-16 px-4 bg-[#F7F8FC]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">Programs We Offer</p>
        <h2 className="text-3xl font-serif text-[#2B4C7E] text-center mb-3">Montessori-Based Learning Stages</h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Each program follows the Montessori method — child-led, hands-on, and matched to developmental milestones</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <div key={p.name} className={`${p.bg} border-l-4 ${p.color} rounded-xl p-5 hover:shadow-md transition-shadow`}>
              <h3 className="font-bold text-gray-800 text-lg mb-1">{p.name}</h3>
              <p className="text-xs text-gray-500 font-semibold mb-3">{p.age}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
