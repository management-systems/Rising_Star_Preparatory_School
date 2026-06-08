'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Gallery', href: '/admin/gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Admissions', href: '/admin/admissions', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { label: 'Events', href: '/admin/events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Enquiries', href: '/admin/enquiries', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label: 'Settings', href: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
];

const albumOptions = ['Classroom Activities', 'Outdoor Play', 'Annual Day', 'Sports Day', 'Festival Celebrations', 'Art & Craft', 'Field Trips', 'Music & Dance'];

interface Photo {
  id: string;
  name: string;
  album: string;
  preview: string;
  uploadedAt: string;
}

export default function AdminGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [album, setAlbum] = useState(albumOptions[0]);
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [filterAlbum, setFilterAlbum] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem('gallery_photos');
    if (stored) setPhotos(JSON.parse(stored));
  }, []);

  const savePhotos = (updated: Photo[]) => {
    setPhotos(updated);
    localStorage.setItem('gallery_photos', JSON.stringify(updated));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !preview) return;
    setUploading(true);

    const reader = new FileReader();
    reader.onload = () => {
      const newPhoto: Photo = {
        id: Date.now().toString(),
        name: caption || file.name,
        album,
        preview: reader.result as string,
        uploadedAt: new Date().toLocaleDateString(),
      };
      savePhotos([newPhoto, ...photos]);
      setFile(null);
      setPreview(null);
      setCaption('');
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this photo?')) {
      savePhotos(photos.filter((p) => p.id !== id));
    }
  };

  const filteredPhotos = filterAlbum === 'All' ? photos : photos.filter(p => p.album === filterAlbum);

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-200">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="w-8 h-8 bg-[#2B4C7E] rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xs">RS</span>
          </div>
          <div className="leading-tight">
            <p className="font-bold text-sm text-gray-800">Grace Montessori</p>
            <p className="text-[10px] text-gray-400">Admin Panel</p>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.label} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${active ? 'bg-[#2B4C7E]/5 text-[#2B4C7E]' : 'text-gray-600 hover:bg-gray-50'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-3 py-4 border-t border-gray-100">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/30" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-xl z-10 p-4">
            <button onClick={() => setSidebarOpen(false)} className="mb-4 p-1 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Gallery Management</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:inline">{photos.length} photos</span>
            <div className="w-9 h-9 bg-[#2B4C7E] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">MS</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Upload Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Upload New Photo</h2>
            <form onSubmit={handleUpload}>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Album</label>
                  <select value={album} onChange={(e) => setAlbum(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2B4C7E]/20 focus:border-[#2B4C7E]">
                    {albumOptions.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Caption</label>
                  <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Describe this photo..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2B4C7E]/20 focus:border-[#2B4C7E]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Photo</label>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#2B4C7E]/5 file:text-[#2B4C7E] hover:file:bg-[#2B4C7E]/10 cursor-pointer" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                {preview && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shrink-0">
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
                <button type="submit" disabled={!file || uploading} className="px-5 py-2.5 bg-[#2B4C7E] text-white rounded-lg text-sm font-medium hover:bg-[#1a365d] transition disabled:opacity-50 disabled:cursor-not-allowed">
                  {uploading ? 'Uploading...' : 'Upload Photo'}
                </button>
              </div>
            </form>
          </div>

          {/* Gallery */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">All Photos</h2>
              <select value={filterAlbum} onChange={(e) => setFilterAlbum(e.target.value)} className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none">
                <option value="All">All Albums</option>
                {albumOptions.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            {filteredPhotos.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="text-sm text-gray-500 font-medium">No photos yet</p>
                <p className="text-xs text-gray-400 mt-1">Upload your first photo using the form above</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPhotos.map((photo) => (
                  <div key={photo.id} className="group relative bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <div className="aspect-square">
                      <img src={photo.preview} alt={photo.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-800 truncate">{photo.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{photo.album} · {photo.uploadedAt}</p>
                    </div>
                    <button onClick={() => handleDelete(photo.id)} className="absolute top-2 right-2 w-7 h-7 bg-white/90 border border-gray-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-red-50 hover:border-red-200 hover:text-red-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}




