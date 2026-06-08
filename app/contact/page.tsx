'use client';
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  const [form, setForm] = useState({ parentName: '', childName: '', childAge: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">Get In Touch</p>
        <h1 className="text-4xl font-serif text-[#2B4C7E] text-center mb-3">Enquire About Your Child</h1>
        <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">Tell us about your little one and we&apos;ll guide you through the best program for their age and needs.</p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form - 3 cols */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="bg-[#4CAF82]/10 border border-[#4CAF82]/20 rounded-2xl p-10 text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600">Our admissions counsellor will contact you within 24 hours to discuss the best options for your child.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Parent / Guardian Name *</label>
                    <input type="text" required value={form.parentName} onChange={(e) => setForm({...form, parentName: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2B4C7E] text-sm" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Child&apos;s Name *</label>
                    <input type="text" required value={form.childName} onChange={(e) => setForm({...form, childName: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2B4C7E] text-sm" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Child&apos;s Age *</label>
                    <select required value={form.childAge} onChange={(e) => setForm({...form, childAge: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2B4C7E] text-sm">
                      <option value="">Select age</option>
                      <option value="2">2 years</option>
                      <option value="2.5">2.5 years</option>
                      <option value="3">3 years</option>
                      <option value="3.5">3.5 years</option>
                      <option value="4">4 years</option>
                      <option value="4.5">4.5 years</option>
                      <option value="5">5 years</option>
                      <option value="5.5">5.5 years</option>
                      <option value="6">6 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Phone Number *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2B4C7E] text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Email Address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2B4C7E] text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Any specific questions or requirements?</label>
                  <textarea rows={3} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="E.g., transport availability, food allergies, preferred batch timing..." className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2B4C7E] text-sm resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-[#E8763A] text-white rounded-lg font-semibold hover:bg-[#d66a32] transition">
                  Submit Enquiry
                </button>
                <p className="text-xs text-gray-400 text-center">We respect your privacy. Your information will not be shared.</p>
              </form>
            )}
          </div>

          {/* Info - 2 cols */}
          <div className="md:col-span-2 space-y-5">
            <div className="bg-[#2B4C7E]/5 border border-[#2B4C7E]/10 rounded-xl p-5">
              <h3 className="font-semibold text-[#2B4C7E] mb-2">Visit Our Campus</h3>
              <p className="text-sm text-gray-600">Grace Montessori Pre School & Day Care<br/>377/28, Near Jyoti Park, Gali No. 7<br/>Near Sector 7 Extension, Gurugram, Haryana</p>
            </div>
            <div className="bg-[#E8763A]/5 border border-[#E8763A]/10 rounded-xl p-5">
              <h3 className="font-semibold text-[#E8763A] mb-2">Call Principal</h3>
              <p className="text-sm text-gray-600">Mrs. Manju Sangwan<br/>+91 99106-30184</p>
            </div>
            <div className="bg-[#4CAF82]/5 border border-[#4CAF82]/10 rounded-xl p-5">
              <h3 className="font-semibold text-[#4CAF82] mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">info@gracemontessori.edu.in</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-700 mb-2">Office Hours</h3>
              <p className="text-sm text-gray-600">Monday – Friday: 8:00 AM – 1:00 PM<br/>Saturday: 8:00 AM – 12:00 PM<br/>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}



