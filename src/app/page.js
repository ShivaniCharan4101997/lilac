
import Hero from "@/app/components/Hero";
import SectionFeatures from "@/app/components/SectionFeatures";
import SectionAbout from "@/app/components/SectionAbout";
import SectionFAQs from "@/app/components/SectionFAQs";
import SectionCTA from "@/app/components/SectionCTA";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Divider from "@/app/ui/Divider";
import OurOffice from "@/app/components/OurOffice";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Divider />
      <SectionFeatures />
      <SectionAbout />
      <OurOffice />
      <SectionFAQs />
      <SectionCTA />
      <Footer />
    </div>
  );
}
