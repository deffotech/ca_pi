
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/fssai-license/Breadcrumb';
import HeroSection from '@/components/fssai-license/HeroSection';
import OffersSection from '@/components/fssai-license/OffersSection';
import DocumentsSection from '@/components/fssai-license/DocumentsSection';
import DetailsSection from '@/components/fssai-license/DetailsSection';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const FSSAiLicense = () => {
  return (
    <div className="bg-white min-h-screen">
    
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="mt-4">
            <HeroSection />
            <OffersSection />
            <DocumentsSection />
            <DetailsSection />
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

export default FSSAiLicense;
