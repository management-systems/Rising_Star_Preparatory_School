'use client';
import React, { useState, useEffect } from 'react';

export default function ContactPopup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!submitted) setShow(true);
    }, 60000);
    // Show first time after 60 seconds
    const initial = setTimeout(() => {
      if (!submitted) setShow(true);
    }, 60000);
    return () => { clearInterval(timer); clearTimeout(initial); };
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(form.phone.replace(/[\s-]/g, ''))) return;
    setSubmitted(true);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-black/40" onClick={() => setShow(false)} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 z-10">
        <button onClick={() => setShow(false)} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="text-3xl mb-2">✓</div>
            <p className="font-semibold text-gray-800">Thank You!</p>
            <p className="text-sm text-gray-500 mt-1">We&apos;ll call you shortly.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-5">
              <img src="/logo.jpg" alt="Grace Montessori" className="w-12 h-12 rounded-full mx-auto mb-2 object-cover" />
              <h3 className="font-serif font-bold text-[#2B4C7E] text-lg">Quick Enquiry</h3>
              <p className="text-xs text-gray-500 mt-1">Get a callback from our counsellor</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number (10 digits)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]"
              />
              <button type="submit" className="w-full py-2.5 bg-[#E8763A] text-white rounded-lg font-semibold text-sm hover:bg-[#d66a32] transition">
                Request Callback
              </button>
            </form>
            <p className="text-[10px] text-gray-400 text-center mt-3">We&apos;ll never spam you.</p>
          </>
        )}
      </div>
    </div>
  );
}
