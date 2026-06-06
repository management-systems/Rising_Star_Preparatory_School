'use client';
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const albums = [
  { id: 'classroom', name: 'Classroom Activities', count: 8, color: 'from-[#F5C563]/30 to-[#E8763A]/15', photos: ['Circle time learning', 'Story reading session', 'Number recognition', 'Alphabet tracing', 'Group activity', 'Show & tell', 'Puzzle solving', 'Craft project'] },
  { id: 'outdoor', name: 'Outdoor Play', count: 6, color: 'from-[#4CAF82]/20 to-[#4CAF82]/10', photos: ['Slide time', 'Sand pit play', 'Running race', 'Ball games', 'Nature walk', 'Garden exploration'] },
  { id: 'annual', name: 'Annual Celebrations', count: 8, color: 'from-[#9C5FB5]/20 to-[#9C5FB5]/10', photos: ['Stage performance', 'Dance recital', 'Prize distribution', 'Group photo', 'Costume parade', 'Parent audience', 'Chief guest welcome', 'Closing ceremony'] },
  { id: 'art', name: 'Art & Creativity', count: 6, color: 'from-[#E8763A]/20 to-[#F5C563]/15', photos: ['Finger painting', 'Clay modelling', 'Paper craft', 'Drawing session', 'Color mixing', 'Collage making'] },
  { id: 'sports', name: 'Sports & Movement', count: 6, color: 'from-[#2B4C7E]/15 to-[#2B4C7E]/5', photos: ['Yoga session', 'Relay race', 'Balancing act', 'Hula hoop', 'Dance movement', 'Warm-up exercises'] },
  { id: 'milestones', name: 'Learning Milestones', count: 6, color: 'from-[#4CAF82]/15 to-[#F5C563]/15', photos: ['First writing', 'Reading aloud', 'Math activity', 'Science experiment', 'Graduation day', 'Certificate ceremony'] },
];

const photoColors = ['bg-[#F5C563]/20', 'bg-[#4CAF82]/15', 'bg-[#E8763A]/15', 'bg-[#9C5FB5]/15', 'bg-[#2B4C7E]/10', 'bg-[#F5C563]/15', 'bg-[#4CAF82]/10', 'bg-[#E8763A]/10'];

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const selected = albums.find(a => a.id === activeAlbum);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">Photo Gallery</p>
        <h1 className="text-4xl font-serif text-[#2B4C7E] text-center mb-3">Life at Rising Star</h1>
        <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">See how children spend their time — learning through play, building friendships, and reaching milestones.</p>

        {!activeAlbum ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {albums.map((a) => (
                <button key={a.id} onClick={() => setActiveAlbum(a.id)} className={`bg-gradient-to-br ${a.color} rounded-xl h-44 flex flex-col items-center justify-center text-center p-4 hover:shadow-md transition-shadow border border-gray-100 cursor-pointer w-full`}>
                  <span className="font-semibold text-gray-700 text-sm">{a.name}</span>
                  <span className="text-xs text-gray-500 mt-1">{a.count} photos</span>
                </button>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-8">Photos are shared with parent consent only.</p>
          </>
        ) : (
          <>
            <button onClick={() => setActiveAlbum(null)} className="mb-6 text-sm font-semibold text-[#2B4C7E] hover:text-[#E8763A] transition-colors">
              ← Back to Albums
            </button>
            <h2 className="text-2xl font-serif text-[#2B4C7E] mb-6">{selected?.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selected?.photos.map((photo, i) => (
                <div key={photo} className={`${photoColors[i % photoColors.length]} rounded-xl h-40 flex items-center justify-center border border-gray-100`}>
                  <span className="text-sm text-gray-600 font-medium text-center px-3">{photo}</span>
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
