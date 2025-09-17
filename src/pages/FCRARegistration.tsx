import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/fcra-registration/Breadcrumb";
import HeroSection from "@/components/fcra-registration/HeroSection";
import DetailsSection from "@/components/fcra-registration/DetailsSection";
import DocumentsSection from "@/components/fcra-registration/DocumentsSection";
import OffersSection from "@/components/fcra-registration/OffersSection";

const FCRARegistration = () => {
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

export default FCRARegistration;