'use client';
import React, { useState } from 'react';

const testimonials = [
  { parent: 'Priya Sharma', child: 'Aarav, Nursery', rating: 5, msg: 'The transformation in my son has been remarkable. He went from being hesitant to drop-off to running in with excitement every morning. The teachers genuinely care.' },
  { parent: 'Rahul & Neha Gupta', child: 'Anaya, LKG', rating: 5, msg: 'We researched many schools before choosing Grace Montessori. The structured curriculum, regular updates, and the visible development in Anaya confirmed we made the right choice.' },
  { parent: 'Dr. Sneha Patel', child: 'Vihaan, Playgroup', rating: 5, msg: 'As a pediatrician, I appreciate how well the school balances learning with age-appropriate play. The hygiene standards and nutrition focus are exactly what I expect.' },
  { parent: 'Amit Verma', child: 'Ishaan, UKG', rating: 4, msg: 'Great school with dedicated staff. My son has become very confident and social. The only thing I wish is slightly longer school hours, but overall very satisfied.' },
  { parent: 'Kavita Joshi', child: 'Myra, Nursery', rating: 4, msg: 'The school provides a wonderful environment for young kids. Communication with parents is excellent. Would love to see more outdoor sports options in future.' },
  { parent: 'Sanjay Mehta', child: 'Aadhya, LKG', rating: 4, msg: 'My daughter loves going to school every day. Teachers are patient and caring. The fee is on the higher side but the quality of education justifies it completely.' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">Testimonials</p>
      <h2 className="text-3xl font-serif text-[#2B4C7E] text-center mb-10">What Parents Say About Us</h2>
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <div className="flex gap-1 mb-4">
          {[1,2,3,4,5].map((s) => (
            <span key={s} className={`text-lg ${s <= t.rating ? 'text-[#F5C563]' : 'text-gray-200'}`}>★</span>
          ))}
        </div>
        <p className="text-gray-600 text-lg leading-relaxed mb-5 italic">&ldquo;{t.msg}&rdquo;</p>
        <div>
          <p className="font-bold text-gray-800">{t.parent}</p>
          <p className="text-sm text-gray-500">Parent of {t.child}</p>
        </div>
        <div className="flex gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`w-8 h-1.5 rounded-full transition ${i === idx ? 'bg-[#2B4C7E]' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}



