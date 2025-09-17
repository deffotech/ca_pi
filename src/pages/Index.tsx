
import Hero from '@/components/Hero';
import UpdatesSection from '@/components/UpdatesSection';
import Services from '@/components/Services';
import Features from '@/components/Features';
import About from '@/components/About';
import EnterprisePartnership from '@/components/EnterprisePartnership';
import PopularSearches from '@/components/PopularSearches';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <UpdatesSection />
      <Services />
      <Features />
      <About />
      <EnterprisePartnership />
      <PopularSearches />
      <Footer />
    </div>
  );
};

export default Index;
