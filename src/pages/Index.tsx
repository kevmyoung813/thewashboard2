import { usePageMeta } from "@/hooks/usePageMeta";
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
  usePageMeta({
    title: "The Washboard - Laundromat in Murray, KY | Wash & Fold Service",
    description:
      "Clean, modern laundromat serving Murray, KY and Murray State. Self-service laundry, wash & fold, and comfortable space. Open every day.",
  });

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
