import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutStory from "@/components/sections/AboutStory";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import Agents from "@/components/sections/Agents";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutStory />
        <FeaturedProperties />
        <Agents />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
