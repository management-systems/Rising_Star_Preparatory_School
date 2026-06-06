import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Admissions() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">Admissions</p>
        <h1 className="text-4xl font-serif text-[#2B4C7E] text-center mb-3">Enroll Your Child</h1>
        <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">Give your child the gift of a Montessori education in a safe, fully AC, and nurturing environment.</p>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#2B4C7E] to-[#1a365d] rounded-2xl p-8 text-center mb-14">
          <p className="text-[#F5C563] text-sm font-semibold uppercase tracking-wider mb-2">Session 2026–27</p>
          <h2 className="text-2xl font-serif font-bold text-white mb-2">Admissions Now Open</h2>
          <p className="text-white/70 mb-5">Day Care | Playgroup | Nursery | LKG | UKG — Limited seats</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-[#E8763A] text-white rounded-lg font-semibold hover:bg-[#d66a32] transition">
            Enquire for Your Child
          </Link>
        </div>

        {/* Process */}
        <h2 className="text-2xl font-serif text-[#2B4C7E] text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-4 gap-5 mb-16">
          {[
            { step: '01', title: 'Enquiry', desc: 'Fill our enquiry form or call us. Our counsellor will understand your child\'s needs.' },
            { step: '02', title: 'Campus Visit', desc: 'Visit our fully AC campus, see Montessori classrooms, and meet our educators.' },
            { step: '03', title: 'Application', desc: 'Submit the admission form with required documents and complete registration.' },
            { step: '04', title: 'Welcome Day', desc: 'Attend orientation, meet the class teacher, and your child begins their Montessori journey!' },
          ].map((s) => (
            <div key={s.step} className="relative bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
              <span className="text-3xl font-bold text-[#2B4C7E]/10 absolute top-3 right-4">{s.step}</span>
              <h3 className="font-bold text-gray-800 mb-2 mt-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Programs & Age */}
        <h2 className="text-2xl font-serif text-[#2B4C7E] text-center mb-8">Programs & Eligibility</h2>
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden mb-16">
          <table className="w-full text-sm">
            <thead className="bg-[#2B4C7E]/5">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Program</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Age</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Timings</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Highlights</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3 font-medium">Day Care</td><td className="px-5 py-3 text-gray-600">1.5 – 3 yrs</td><td className="px-5 py-3 text-gray-600">8:00 AM – 5:00 PM</td><td className="px-5 py-3 text-gray-600">Meals, nap, supervised play</td></tr>
              <tr className="bg-gray-50/50"><td className="px-5 py-3 font-medium">Playgroup</td><td className="px-5 py-3 text-gray-600">2 – 3 yrs</td><td className="px-5 py-3 text-gray-600">9:00 AM – 12:00 PM</td><td className="px-5 py-3 text-gray-600">Sensory, motor skills, social</td></tr>
              <tr><td className="px-5 py-3 font-medium">Nursery</td><td className="px-5 py-3 text-gray-600">3 – 4 yrs</td><td className="px-5 py-3 text-gray-600">8:30 AM – 12:30 PM</td><td className="px-5 py-3 text-gray-600">Montessori materials, literacy</td></tr>
              <tr className="bg-gray-50/50"><td className="px-5 py-3 font-medium">LKG</td><td className="px-5 py-3 text-gray-600">4 – 5 yrs</td><td className="px-5 py-3 text-gray-600">8:00 AM – 1:00 PM</td><td className="px-5 py-3 text-gray-600">Reading, writing, exploration</td></tr>
              <tr><td className="px-5 py-3 font-medium">UKG</td><td className="px-5 py-3 text-gray-600">5 – 6 yrs</td><td className="px-5 py-3 text-gray-600">8:00 AM – 1:00 PM</td><td className="px-5 py-3 text-gray-600">School readiness, independence</td></tr>
            </tbody>
          </table>
        </div>

        {/* Documents */}
        <h2 className="text-2xl font-serif text-[#2B4C7E] text-center mb-6">Documents Required</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          {['Child\'s birth certificate', 'Child\'s passport-size photos (4)', 'Parent\'s Aadhaar card (copy)', 'Previous school TC (if applicable)', 'Medical fitness certificate', 'Address proof'].map((doc) => (
            <div key={doc} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
              <span className="text-[#4CAF82]">✓</span>
              <span className="text-sm text-gray-700">{doc}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#E8763A]/5 border border-[#E8763A]/15 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-serif text-[#2B4C7E] mb-3">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">Our admissions counsellor is happy to answer your questions and schedule a campus visit for you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-7 py-3 bg-[#E8763A] text-white rounded-lg font-semibold hover:bg-[#d66a32] transition">
              Enquire Now
            </Link>
            <a href="tel:+919910630184" className="px-7 py-3 border-2 border-[#2B4C7E] text-[#2B4C7E] rounded-lg font-semibold hover:bg-[#2B4C7E]/5 transition">
              Call: +91 99106-30184
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
