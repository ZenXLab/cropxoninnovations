import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import WhyCropxonSection from "@/components/sections/WhyCropxonSection";
import TechnologySection from "@/components/sections/TechnologySection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cropxon Innovations — Building Foundational Systems</title>
        <meta
          name="description"
          content="Cropxon Innovations is a deep-technology company building operating systems, cognition platforms, and infrastructure layers for enterprise and government."
        />
        <meta
          name="keywords"
          content="enterprise technology, infrastructure, operating systems, cognition platforms, deep tech"
        />
        <link rel="canonical" href="https://cropxon.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <HeroSection />
          <VisionSection />
          <EcosystemSection />
          <PartnersSection />
          <WhyCropxonSection />
          <TechnologySection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
