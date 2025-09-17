
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/tan-registration/Breadcrumb";
import HeroSection from "@/components/tan-registration/HeroSection";
import DetailsSection from "@/components/tan-registration/DetailsSection";
import DocumentsSection from "@/components/tan-registration/DocumentsSection";
import OffersSection from "@/components/tan-registration/OffersSection";

const TANRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />
      </div>
      <HeroSection />
      <DetailsSection />
      <DocumentsSection />
      <OffersSection />
      <Footer />
    </div>
  );
};

export default TANRegistration;
