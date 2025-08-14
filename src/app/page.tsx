import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import MethodSection from '@/components/landing/MethodSection';
import OfferSection from '@/components/landing/OfferSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <TestimonialsSection />
        <MethodSection />
        <OfferSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
