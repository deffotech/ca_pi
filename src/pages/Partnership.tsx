
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/partnership/Breadcrumb';
import HeroSection from '@/components/partnership/HeroSection';
import Sidebar from '@/components/partnership/Sidebar';
import DetailsSection from '@/components/partnership/DetailsSection';
import ComparisonTable from '@/components/proprietorship/ComparisonTable';
import OffersSection from '@/components/consultation/OffersSection';
import PricingSection from '@/components/partnership/PricingSection';
import DocumentsSection from '@/components/partnership/DocumentsSection';

const Partnership = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <PricingSection />
              <DetailsSection />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Proprietorship vs Limited Liability Partnership (LLP) vs Company</h2>
                <ComparisonTable />
              </div>
              <DocumentsSection />
              <OffersSection />
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

export default Partnership;
