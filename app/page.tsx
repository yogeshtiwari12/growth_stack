import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import StatsSection from "@/components/StatsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProcessSection from "@/components/ProcessSection";
import CaseHighlightsSection from "@/components/CaseHighlightsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";



const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoBar />
      <StatsSection />
      <WhatWeDoSection />
      <ProcessSection />
      <CaseHighlightsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
    </main>
  );
};

export default Index;
