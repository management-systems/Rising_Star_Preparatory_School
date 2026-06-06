import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function News() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-14">
        <h1 className="text-4xl font-serif text-primary text-center mb-4">News & Updates 📰</h1>
        <p className="text-center text-muted mb-12">Latest happenings at Rising Star</p>
        <div className="space-y-4">
          {[
            { title: 'Admissions Open for 2025-26! 🎉', date: 'Feb 2025', desc: 'Limited seats available for Playgroup, Nursery, LKG and UKG.' },
            { title: 'Annual Day Preparations Begin 🎭', date: 'Feb 2025', desc: 'Our little ones are rehearsing for the grand annual celebration.' },
            { title: 'New Outdoor Play Area Inaugurated 🌳', date: 'Jan 2025', desc: 'A bigger, safer play area with slides, swings, and sand pit!' },
          ].map((n) => (
            <div key={n.title} className="bg-card-bg border border-card-border rounded-2xl p-5">
              <p className="text-xs text-muted mb-1">{n.date}</p>
              <h3 className="font-bold text-foreground mb-1">{n.title}</h3>
              <p className="text-sm text-muted">{n.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
