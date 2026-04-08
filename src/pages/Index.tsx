import { LocaleProvider } from "@/hooks/useLocale";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <LocaleProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <DifferentialsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LocaleProvider>
  );
};

export default Index;
