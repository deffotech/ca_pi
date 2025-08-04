
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
      {/* Test visibility with simple content */}
      <div className="w-full h-20 bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
        WEBSITE IS VISIBLE - Your site is working!
      </div>
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
