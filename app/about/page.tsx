import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-[#E8763A] text-sm font-semibold uppercase tracking-wide text-center mb-2">About Us</p>
        <h1 className="text-4xl font-serif text-[#2B4C7E] text-center mb-3">A Montessori School Built on Trust</h1>
        <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">Where your child&apos;s early years are shaped by Montessori-certified educators in a safe, air-conditioned, and caring environment.</p>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-to-br from-[#F5C563]/15 to-[#E8763A]/10 rounded-2xl h-64 flex items-center justify-center">
            <div className="w-28 h-28 bg-[#2B4C7E] rounded-full flex items-center justify-center">
              \u003Cimg src=\u0022/logo.jpg\u0022 alt=\u0022Grace Montessori\u0022 className=\u0022w-full h-full object-cover rounded-full\u0022 /\u003E
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-serif text-[#2B4C7E] mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Grace Montessori Pre School & Day Care began with a vision to create the kind of school every parent dreams of — safe, warm, structured, and genuinely invested in each child&apos;s growth. Under the leadership of Mrs. Manju Sangwan, we have built a nurturing Montessori environment in the heart of Gurugram.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today we serve 500+ families with a fully air-conditioned campus, live CCTV for parents, day care for working families, and a team of well-qualified Montessori-trained educators who truly care about each child.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#2B4C7E]/5 border border-[#2B4C7E]/10 rounded-xl p-6">
            <h3 className="font-bold text-[#2B4C7E] mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">To provide a joyful Montessori environment where children discover their potential through hands-on learning, creativity, and guided independence.</p>
          </div>
          <div className="bg-[#E8763A]/5 border border-[#E8763A]/10 rounded-xl p-6">
            <h3 className="font-bold text-[#E8763A] mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">To be the most trusted Montessori school — where every child is confident, curious, and ready for their next learning adventure.</p>
          </div>
          <div className="bg-[#4CAF82]/5 border border-[#4CAF82]/10 rounded-xl p-6">
            <h3 className="font-bold text-[#4CAF82] mb-2">Our Approach</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Montessori method with child-led exploration, sensory materials, mixed-age learning, and daily parent communication via app updates.</p>
          </div>
        </div>

        {/* Principal */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-[#2B4C7E]/10 rounded-full flex items-center justify-center">
                <span className="text-4xl">👩🏫</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-xl font-serif text-[#2B4C7E] mb-3">From the Founder&apos;s Desk</h2>
              <p className="text-gray-600 italic leading-relaxed mb-4">
                &ldquo;Montessori activities transform learning into a journey of discovery and inspiration. At Grace Montessori, we don&apos;t just educate children — we nurture their natural curiosity in a safe, caring, and stimulating environment.&rdquo;
              </p>
              <p className="font-bold text-gray-800">Mrs. Manju Sangwan</p>
              <p className="text-sm text-gray-500">Founder & Principal · Montessori Certified Educator</p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <h2 className="text-2xl font-serif text-[#2B4C7E] text-center mb-8">Our Facilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Fully Air-Conditioned', desc: 'Temperature-controlled classrooms for comfort in all seasons' },
            { title: 'Live CCTV Access', desc: 'Parents can watch their child in real-time via secure feed' },
            { title: 'Day Care Facility', desc: 'Extended hours with meals, nap, and supervised activities' },
            { title: 'Montessori Materials', desc: 'Authentic Montessori learning materials in every classroom' },
            { title: 'Indoor Play Zone', desc: 'Soft-play area, building blocks, and creative corners' },
            { title: 'Outdoor Playground', desc: 'Safe equipment for running, climbing, and free play' },
            { title: 'Hygienic Kitchen', desc: 'Nutritious meals prepared fresh under strict hygiene' },
            { title: 'Medical & First Aid', desc: 'On-call pediatrician and trained first-aid staff' },
          ].map((f) => (
            <div key={f.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 text-sm mb-1">{f.title}</h4>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}



