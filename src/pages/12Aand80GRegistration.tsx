
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/12a-80g-registration/Breadcrumb';
import HeroSection from '@/components/12a-80g-registration/HeroSection';

import DetailsSection from '@/components/12a-80g-registration/DetailsSection';
import DocumentsSection from '@/components/12a-80g-registration/DocumentsSection';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const TwelveAand80GRegistration = () => {
  return (
    <div className="bg-white min-h-screen">
      
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="mt-4 space-y-8">
            <HeroSection />
            
            <DetailsSection />
            <DocumentsSection />
          </div>
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

export default TwelveAand80GRegistration;
