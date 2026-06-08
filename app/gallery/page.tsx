'use client';
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Photo {
  id: string;
  name: string;
  album: string;
  preview: string;
}

const albumFilters = ['All', 'Classroom Activities', 'Outdoor Play', 'Annual Day', 'Sports Day', 'Festival Celebrations'];

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/api/gallery').then(r => r.json()).then(data => {
      setPhotos(data.map((p: any) => ({ ...p, id: p._id || p.id })));
    });
  }, []);

  const filtered = filter === 'All' ? photos : photos.filter(p => p.album === filter);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">Photo Gallery</p>
        <h1 className="text-4xl font-serif text-[#2B4C7E] text-center mb-3">Life at Grace Montessori</h1>
        <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">See how children spend their time — learning through play, building friendships, and reaching milestones.</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {albumFilters.map((a) => (
            <button
              key={a}
              onClick={() => setFilter(a)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === a ? 'bg-[#2B4C7E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {a}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl">
            <svg className="w-14 h-14 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <p className="text-gray-500 font-medium">No photos yet</p>
            <p className="text-sm text-gray-400 mt-1">{filter === 'All' ? 'Photos uploaded by admin will appear here' : `No photos in "${filter}" album`}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((photo) => (
              <div key={photo.id} className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-50">
                  <img src={(photo as any).imageUrl || photo.preview} alt={photo.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800 truncate">{photo.name}</p>
                  <p className="text-xs text-gray-400">{photo.album}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-10">Photos are shared with parent consent only.</p>
      </main>
      <Footer />
    </>
  );
}
