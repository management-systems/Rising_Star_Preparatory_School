'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    schoolName: 'Grace Montessori Pre School & Day Care',
    tagline: 'Montessori activities transform learning into a journey of discovery and inspiration',
    principal: 'Mrs. Manju Sangwan',
    phone: '9910630184',
    email: 'info@gracemontessori.edu.in',
    address: '377/28, Near Jyoti Park, Gali No. 7, Near Sector 7 Extension, Gurugram, Haryana',
    timingWeekday: '8:00 AM – 1:00 PM',
    timingSaturday: '8:00 AM – 12:00 PM',
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const sidebarItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: 'Gallery', href: '/admin/gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { label: 'Admissions', href: '/admin/admissions', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { label: 'Events', href: '/admin/events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { label: 'Enquiries', href: '/admin/enquiries', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Settings', href: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex">
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-200">
        <div className="h-16 flex items-center px-6 border-b border-gray-100"><div className="w-8 h-8 rounded-lg overflow-hidden mr-3\u0022\u003E\u003Cimg src=\u0022/logo.jpg\u0022 alt=\u0022Logo\u0022 className=\u0022w-full h-full object-cover\u0022 /\u003E</div><div className="leading-tight"><p className="font-bold text-sm text-gray-800">Grace Montessori</p><p className="text-[10px] text-gray-400">Admin Panel</p></div></div>
        <nav className="flex-1 px-3 py-4 space-y-1">{sidebarItems.map((item) => (<Link key={item.label} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${'/admin/settings' === item.href ? 'bg-[#2B4C7E]/5 text-[#2B4C7E]' : 'text-gray-600 hover:bg-gray-50'}`}><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>{item.label}</Link>))}</nav>
        <div className="px-3 py-4 border-t border-gray-100"><Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>Back to Website</Link></div>
      </aside>
      {sidebarOpen && <div className="fixed inset-0 z-50 lg:hidden"><div className="fixed inset-0 bg-black/30" onClick={() => setSidebarOpen(false)} /><aside className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-xl z-10 p-4"><button onClick={() => setSidebarOpen(false)} className="mb-4 p-1 text-gray-400"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button><nav className="space-y-1">{sidebarItems.map((item) => (<Link key={item.label} href={item.href} onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>{item.label}</Link>))}</nav></aside></div>}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6"><div className="flex items-center gap-3"><button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 text-gray-500"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button><h1 className="text-lg font-semibold text-gray-800">Settings</h1></div><div className="w-9 h-9 bg-[#2B4C7E] rounded-full flex items-center justify-center"><span className="text-white text-xs font-bold">MS</span></div></header>
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-3xl">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">School Information</h2>

            {saved && (
              <div className="bg-green-50 border border-green-100 text-green-700 text-sm px-4 py-3 rounded-lg mb-6">
                Settings saved successfully!
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">School Name</label>
                  <input type="text" value={settings.schoolName} onChange={(e) => setSettings({...settings, schoolName: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Principal Name</label>
                  <input type="text" value={settings.principal} onChange={(e) => setSettings({...settings, principal: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Tagline / Slogan</label>
                <input type="text" value={settings.tagline} onChange={(e) => setSettings({...settings, tagline: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Phone Number</label>
                  <input type="tel" value={settings.phone} onChange={(e) => setSettings({...settings, phone: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
                  <input type="email" value={settings.email} onChange={(e) => setSettings({...settings, email: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Address</label>
                <textarea rows={2} value={settings.address} onChange={(e) => setSettings({...settings, address: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E] resize-none" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Mon–Fri Timing</label>
                  <input type="text" value={settings.timingWeekday} onChange={(e) => setSettings({...settings, timingWeekday: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Saturday Timing</label>
                  <input type="text" value={settings.timingSaturday} onChange={(e) => setSettings({...settings, timingSaturday: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="px-6 py-2.5 bg-[#2B4C7E] text-white rounded-lg text-sm font-medium hover:bg-[#1a365d] transition">
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}




