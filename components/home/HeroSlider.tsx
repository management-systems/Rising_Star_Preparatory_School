'use client';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Montessori Activities Transform Learning Into a Journey of Discovery',
    subtitle: 'Where every child explores, creates, and grows at their own pace',
    color: 'from-[#2B4C7E] to-[#1a365d]',
  },
  {
    title: 'A Safe, Nurturing & Fully AC Campus',
    subtitle: 'Live CCTV monitoring, trained educators, and a caring environment your child deserves',
    color: 'from-[#1a365d] to-[#2B4C7E]',
  },
  {
    title: 'Admissions Open for 2026–27',
    subtitle: 'Day Care | Playgroup | Nursery | LKG | UKG — Limited seats available',
    color: 'from-[#2B4C7E] to-[#3d6098]',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className={`relative min-h-[65vh] bg-gradient-to-br ${slide.color} flex items-center justify-center px-4 transition-all duration-700`}>
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-12 left-[10%] w-20 h-20 border-4 border-white rounded-full" />
        <div className="absolute top-32 right-[15%] w-12 h-12 border-4 border-white rotate-45" />
        <div className="absolute bottom-20 left-[20%] w-16 h-16 border-4 border-white rounded-lg rotate-12" />
        <div className="absolute bottom-32 right-[10%] w-10 h-10 border-4 border-white rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-[#F5C563] text-sm font-semibold uppercase tracking-wider mb-4">Rising Star Preparatory School</p>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight mb-5">{slide.title}</h1>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">{slide.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/contact" className="px-7 py-3 bg-[#E8763A] text-white rounded-lg font-semibold hover:bg-[#d66a32] transition shadow-lg">
            Book a Visit
          </a>
          <a href="/admissions" className="px-7 py-3 border-2 border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition">
            Enroll Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-8 h-1.5 rounded-full transition ${i === current ? 'bg-[#F5C563]' : 'bg-white/30'}`} />
        ))}
      </div>
    </section>
  );
}
