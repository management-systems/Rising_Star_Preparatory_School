import HeroSlider from "@/components/home/HeroSlider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSnippet from "@/components/home/AboutSnippet";
import Programs from "@/components/home/Programs";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsCounter from "@/components/home/StatsCounter";
import Gallery from "@/components/home/PhotoHighlights";
import Testimonials from "@/components/home/Testimonials";
import ContactStrip from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSnippet />
        <Programs />
        <WhyChooseUs />
        <StatsCounter />
        <Gallery />
        <Testimonials />
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}



