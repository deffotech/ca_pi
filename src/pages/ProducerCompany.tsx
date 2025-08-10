
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/producer-company/Breadcrumb';
import HeroSection from '@/components/producer-company/HeroSection';
import Sidebar from '@/components/producer-company/Sidebar';
import DetailsSection from '@/components/producer-company/DetailsSection';
import DocumentsSection from '@/components/producer-company/DocumentsSection';

const ProducerCompany = () => {
  return (
    <div className="bg-white min-h-screen">
    
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
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

export default ProducerCompany;
