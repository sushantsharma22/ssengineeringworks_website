import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import StatsCounter from '@/components/home/StatsCounter';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ClientMarquee from '@/components/home/ClientMarquee';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <StatsCounter />
      <WhyChooseUs />
      <ClientMarquee />
      <CTABanner />
    </div>
  );
}
