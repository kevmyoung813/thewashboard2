import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import LocalTrustSection from "@/components/LocalTrustSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CommitmentSection from "@/components/CommitmentSection";
import MapContactSection from "@/components/MapContactSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <LocalTrustSection />
        <ServicesSection />
        <HowItWorksSection />
        <CommitmentSection />
        <MapContactSection />
        <BlogPreviewSection />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
