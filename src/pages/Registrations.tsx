
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/registrations/Breadcrumb';
import HeroSection from '@/components/registrations/HeroSection';
import OffersSection from '@/components/business-registration/OffersSection';
import ServicesGrid from '@/components/registrations/ServicesGrid';
import RightSidebar from '@/components/business-registration/RightSidebar';
import LeftSidebarNav from '@/components/business-registration/LeftSidebarNav';
import PopularSearches from '@/components/business-registration/PopularSearches';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const Registrations = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="grid grid-cols-12 gap-8 mt-4">
            <aside className="hidden lg:block lg:col-span-2">
              <LeftSidebarNav />
            </aside>
            <div className="col-span-12 lg:col-span-7">
              <HeroSection />
              <OffersSection />
              <ServicesGrid />
            </div>
            <aside className="col-span-12 lg:col-span-3">
              <RightSidebar />
            </aside>
          </div>
          <PopularSearches />
        </main>
      </div>
      <Footer />
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-16 w-auto px-6 text-lg z-50">
        <MessageSquare className="mr-3 h-6 w-6" />
        Live Chat with Experts
      </Button>
    </div>
  );
};

export default Registrations;

