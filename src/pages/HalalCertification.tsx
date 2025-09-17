
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/halal-certification/Breadcrumb';
import HeroSection from '@/components/halal-certification/HeroSection';
import DetailsSection from '@/components/halal-certification/DetailsSection';

const HalalCertification = () => {
  return (
    <div className="bg-white min-h-screen">
\      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="mt-4">
            <HeroSection />
            <DetailsSection />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HalalCertification;
