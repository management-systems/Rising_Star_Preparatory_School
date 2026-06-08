'use client';
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 100, suffix: '+', label: 'Happy Students' },
  { value: 10, suffix: '+', label: 'Trained Educators' },
  { value: 10, suffix: '+', label: 'Years of Trust' },
  { value: 98, suffix: '%', label: 'Parent Satisfaction' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const start = Date.now();
        const animate = () => {
          const progress = Math.min((Date.now() - start) / 1500, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className="text-3xl md:text-4xl font-bold text-white">{count}{suffix}</div>;
}

export default function StatsCounter() {
  return (
    <section className="py-14 px-4 bg-[#2B4C7E]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-white/60 text-sm mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



