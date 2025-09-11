
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/indian-subsidiary/Breadcrumb';
import HeroSection from '@/components/indian-subsidiary/HeroSection';
import Sidebar from '@/components/indian-subsidiary/Sidebar';
import DetailsSection from '@/components/indian-subsidiary/DetailsSection';
import RequirementsSection from '@/components/indian-subsidiary/RequirementsSection';
import OffersSection from '@/components/indian-subsidiary/OffersSection';

const IndianSubsidiary = () => {
  return (
    <div className="bg-white min-h-screen">
     
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <OffersSection />
              <DetailsSection />
              <RequirementsSection />
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

export default IndianSubsidiary;
