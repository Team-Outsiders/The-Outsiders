import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import MembersSection from "@/components/MembersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <TechStackSection />
      <MembersSection />
      <Footer />
    </main>
  );
};

export default Index;
