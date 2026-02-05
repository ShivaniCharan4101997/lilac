
import Hero from "@/app/components/Hero";
import SectionContact from "@/app/components/SectionContact";
import SectionFeatures from "@/app/components/SectionFeatures";
import SectionWorkWithMe from "@/app/components/SectionWorkWithMe";
import SectionAbout from "@/app/components/SectionAbout";
import SectionFAQs from "@/app/components/SectionFAQs";
import SectionBackground from "@/app/components/SectionBackground";
import SectionCTA from "@/app/components/SectionCTA";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div >
        <Navbar />
        <Hero/>
        <SectionContact/>
        <SectionFeatures/>
        <SectionWorkWithMe/>
        <SectionAbout/>
        <SectionFAQs/>
        <SectionBackground/>
        <SectionCTA/>
        <Footer/>
    </div>
  );
}
