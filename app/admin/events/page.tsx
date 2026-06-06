'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  status: 'Upcoming' | 'Completed';
}

export default function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', date: '', time: '', venue: '', description: '' });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent: Event = { id: Date.now().toString(), ...form, status: 'Upcoming' };
    setEvents([newEvent, ...events]);
    setForm({ title: '', date: '', time: '', venue: '', description: '' });
    setShowForm(false);
  };

  const toggleStatus = (id: string) => {
    setEvents(events.map(ev => ev.id === id ? { ...ev, status: ev.status === 'Upcoming' ? 'Completed' : 'Upcoming' } : ev));
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this event?')) setEvents(events.filter(ev => ev.id !== id));
  };

  return (
    <AdminShell title="Events">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">{events.length} events</p>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2.5 bg-[#2B4C7E] text-white rounded-lg text-sm font-medium hover:bg-[#1a365d] transition">
          {showForm ? 'Cancel' : '+ Add Event'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">New Event</h3>
          <form onSubmit={handleAdd} className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-700 block mb-1">Event Title *</label>
              <input type="text" required value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Date *</label>
              <input type="date" required value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Time</label>
              <input type="time" value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Venue</label>
              <input type="text" value={form.venue} onChange={(e) => setForm({...form, venue: e.target.value})} placeholder="e.g. School Auditorium" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
              <input type="text" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2B4C7E]" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="px-5 py-2.5 bg-[#2B4C7E] text-white rounded-lg text-sm font-medium hover:bg-[#1a365d] transition">Save Event</button>
            </div>
          </form>
        </div>
      )}

      {events.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <p className="text-sm text-gray-500">No events created yet</p>
            <p className="text-xs text-gray-400 mt-1">Click &quot;+ Add Event&quot; to create one</p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {events.map((ev) => (
            <div key={ev.id} className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-800">{ev.title}</h3>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${ev.status === 'Upcoming' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{ev.status}</span>
                </div>
                <p className="text-sm text-gray-500">{ev.date}{ev.time && ` · ${ev.time}`}{ev.venue && ` · ${ev.venue}`}</p>
                {ev.description && <p className="text-sm text-gray-400 mt-0.5">{ev.description}</p>}
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => toggleStatus(ev.id)} className="text-xs text-[#2B4C7E] hover:text-[#1a365d] font-medium">{ev.status === 'Upcoming' ? 'Mark Complete' : 'Mark Upcoming'}</button>
                <button onClick={() => handleDelete(ev.id)} className="text-xs text-red-500 hover:text-red-700 font-medium">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}

function AdminShell({ title, children }: { title: string; children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: 'Gallery', href: '/admin/gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { label: 'Admissions', href: '/admin/admissions', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { label: 'Events', href: '/admin/events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { label: 'Enquiries', href: '/admin/enquiries', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Settings', href: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  ];
  return (
    <div className="min-h-screen bg-[#F0F2F5] flex">
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-200">
        <div className="h-16 flex items-center px-6 border-b border-gray-100"><div className="w-8 h-8 bg-[#2B4C7E] rounded-lg flex items-center justify-center mr-3"><span className="text-white font-bold text-xs">RS</span></div><div className="leading-tight"><p className="font-bold text-sm text-gray-800">Rising Star</p><p className="text-[10px] text-gray-400">Admin Panel</p></div></div>
        <nav className="flex-1 px-3 py-4 space-y-1">{sidebarItems.map((item) => (<Link key={item.label} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${'/admin/events' === item.href ? 'bg-[#2B4C7E]/5 text-[#2B4C7E]' : 'text-gray-600 hover:bg-gray-50'}`}><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>{item.label}</Link>))}</nav>
        <div className="px-3 py-4 border-t border-gray-100"><Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 transition"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>Back to Website</Link></div>
      </aside>
      {sidebarOpen && <div className="fixed inset-0 z-50 lg:hidden"><div className="fixed inset-0 bg-black/30" onClick={() => setSidebarOpen(false)} /><aside className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-xl z-10 p-4"><button onClick={() => setSidebarOpen(false)} className="mb-4 p-1 text-gray-400"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button><nav className="space-y-1">{sidebarItems.map((item) => (<Link key={item.label} href={item.href} onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>{item.label}</Link>))}</nav></aside></div>}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6"><div className="flex items-center gap-3"><button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 text-gray-500"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button><h1 className="text-lg font-semibold text-gray-800">{title}</h1></div><div className="w-9 h-9 bg-[#2B4C7E] rounded-full flex items-center justify-center"><span className="text-white text-xs font-bold">MS</span></div></header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
