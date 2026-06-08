'use client';
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const events = [
  { title: 'Summer Camp 2025', date: '2025-05-30', displayDate: 'May 1 – May 30, 2025', desc: 'Swimming, yoga, art, and fun workshops for enrolled and new students.' },
  { title: 'Annual Day Celebration', date: '2025-03-20', displayDate: 'March 20, 2025', desc: 'Your child performs on stage! Dance, drama, and award ceremony.' },
  { title: 'Parent-Teacher Meeting', date: '2025-03-05', displayDate: 'March 5, 2025', desc: 'One-on-one discussion about your child\'s progress with their class teacher.' },
  { title: 'Open House & Campus Tour', date: '2025-02-22', displayDate: 'February 22, 2025', desc: 'Visit the school, meet educators, and explore our facilities.' },
  { title: 'Republic Day Celebration', date: '2025-01-26', displayDate: 'January 26, 2025', desc: 'Flag hoisting, patriotic songs, and fancy dress by our little ones.' },
  { title: 'Christmas & New Year Party', date: '2024-12-22', displayDate: 'December 22, 2024', desc: 'Holiday fun with Santa, gifts, cake, and class activities.' },
];

function getStatus(dateStr: string): 'Upcoming' | 'Completed' {
  return new Date(dateStr) >= new Date() ? 'Upcoming' : 'Completed';
}

export default function Events() {
  const eventsWithStatus = events.map(e => ({ ...e, status: getStatus(e.date) }));
  const upcoming = eventsWithStatus.filter(e => e.status === 'Upcoming');
  const past = eventsWithStatus.filter(e => e.status === 'Completed');

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">School Calendar</p>
        <h1 className="text-4xl font-serif text-[#2B4C7E] text-center mb-3">Events & Activities</h1>
        <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">We believe celebrations and community events are essential to your child&apos;s growth.</p>

        {upcoming.length > 0 && (
          <>
            <h2 className="text-xl font-serif text-[#2B4C7E] mb-4">Upcoming Events</h2>
            <div className="space-y-3 mb-12">
              {upcoming.map((e) => (
                <div key={e.title} className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-sm transition-shadow">
                  <div className="sm:w-48 shrink-0">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#4CAF82]/10 text-[#4CAF82]">Upcoming</span>
                    <p className="text-sm text-gray-500 mt-1">{e.displayDate}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{e.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {past.length > 0 && (
          <>
            <h2 className="text-xl font-serif text-[#2B4C7E] mb-4">Past Events</h2>
            <div className="space-y-3">
              {past.map((e) => (
                <div key={e.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 opacity-80">
                  <div className="sm:w-48 shrink-0">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-200 text-gray-500">Completed</span>
                    <p className="text-sm text-gray-400 mt-1">{e.displayDate}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">{e.title}</h3>
                    <p className="text-sm text-gray-400 mt-0.5">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
