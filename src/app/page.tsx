import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import MethodSection from '@/components/landing/MethodSection';
import OfferSection from '@/components/landing/OfferSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import WrongAdviceSection from '@/components/landing/WrongAdviceSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <WrongAdviceSection />
        <MethodSection />
        <OfferSection />
        <TestimonialsSection />
        <FaqSection />
        <GuaranteeSection />
      </main>
      <Footer />
    </div>
  );
}
