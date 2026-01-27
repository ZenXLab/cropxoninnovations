import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import EcosystemFlowSection from "@/components/sections/EcosystemFlowSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import EcosystemInterconnection from "@/components/sections/EcosystemInterconnection";
import PlatformComparisonTable from "@/components/sections/PlatformComparisonTable";
import WhyCropxonSection from "@/components/sections/WhyCropxonSection";
import TechnologySection from "@/components/sections/TechnologySection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>OriginX Labs — Building Foundational Systems</title>
        <meta
          name="description"
          content="OriginX Labs is a deep-technology company building operating systems, cognition platforms, and infrastructure layers for enterprise and government."
        />
        <meta
          name="keywords"
          content="enterprise technology, infrastructure, operating systems, cognition platforms, deep tech"
        />
        <link rel="canonical" href="https://originxlabs.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Spacer for fixed header */}
        <div className="h-16" />
        
        <main>
          <HeroSection />
          <EcosystemFlowSection />
          <EcosystemSection />
          <EcosystemInterconnection />
          <PlatformComparisonTable />
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
