import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/aoa-amendment/Breadcrumb";
import HeroSection from "@/components/aoa-amendment/HeroSection";
import DetailsSection from "@/components/aoa-amendment/DetailsSection";
import DocumentsSection from "@/components/aoa-amendment/DocumentsSection";
import OffersSection from "@/components/aoa-amendment/OffersSection";

const AOAAmendment = () => {
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

export default AOAAmendment;