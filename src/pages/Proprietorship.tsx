
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/proprietorship/Breadcrumb';
import HeroSection from '@/components/proprietorship/HeroSection';
import Sidebar from '@/components/proprietorship/Sidebar';
import DetailsSection from '@/components/proprietorship/DetailsSection';
import ComparisonTable from '@/components/proprietorship/ComparisonTable';


const Proprietorship = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <DetailsSection />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Proprietorship vs Limited Liability Partnership (LLP) vs Company</h2>
                <ComparisonTable />
              </div>
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

export default Proprietorship;
