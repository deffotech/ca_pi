
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/trust-registration/Breadcrumb';
import HeroSection from '@/components/trust-registration/HeroSection';
import PricingSection from '@/components/trust-registration/PricingSection';
import OffersSection from '@/components/consultation/OffersSection';
import DetailsSection from '@/components/trust-registration/DetailsSection';
import DocumentsSection from '@/components/trust-registration/DocumentsSection';
import Sidebar from '@/components/trust-registration/Sidebar';

const TrustRegistration = () => {
  return (
    <div className="bg-white min-h-screen">
     
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <PricingSection />
              <OffersSection />
              <DetailsSection />
              <DocumentsSection />
            </div>
            <aside className="lg:col-span-4">
              <Sidebar />
            </aside>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TrustRegistration;
