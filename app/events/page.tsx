'use client';
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  status: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('school_events');
    if (stored) {
      const parsed: Event[] = JSON.parse(stored);
      // Auto-update status based on date
      const updated = parsed.map(ev => ({
        ...ev,
        status: new Date(ev.date) >= new Date() ? 'Upcoming' : 'Completed'
      }));
      setEvents(updated);
    }
  }, []);

  const upcoming = events.filter(e => e.status === 'Upcoming');
  const past = events.filter(e => e.status === 'Completed');

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">School Calendar</p>
        <h1 className="text-4xl font-serif text-[#2B4C7E] text-center mb-3">Events & Activities</h1>
        <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">We believe celebrations and community events are essential to your child&apos;s growth.</p>

        {events.length === 0 ? (
          <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl">
            <svg className="w-14 h-14 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <p className="text-gray-500 font-medium">No events scheduled yet</p>
            <p className="text-sm text-gray-400 mt-1">Check back soon for upcoming activities!</p>
          </div>
        ) : (
          <>
            {upcoming.length > 0 && (
              <>
                <h2 className="text-xl font-serif text-[#2B4C7E] mb-4">Upcoming Events</h2>
                <div className="space-y-3 mb-12">
                  {upcoming.map((e) => (
                    <div key={e.id} className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-sm transition-shadow">
                      <div className="sm:w-48 shrink-0">
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-[#4CAF82]/10 text-[#4CAF82]">Upcoming</span>
                        <p className="text-sm text-gray-500 mt-1">{formatDate(e.date)}{e.time && ` · ${e.time}`}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{e.title}</h3>
                        {e.venue && <p className="text-sm text-gray-500 mt-0.5">Venue: {e.venue}</p>}
                        {e.description && <p className="text-sm text-gray-400 mt-0.5">{e.description}</p>}
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
                    <div key={e.id} className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 opacity-80">
                      <div className="sm:w-48 shrink-0">
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-200 text-gray-500">Completed</span>
                        <p className="text-sm text-gray-400 mt-1">{formatDate(e.date)}{e.time && ` · ${e.time}`}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">{e.title}</h3>
                        {e.venue && <p className="text-sm text-gray-400 mt-0.5">Venue: {e.venue}</p>}
                        {e.description && <p className="text-sm text-gray-400 mt-0.5">{e.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
