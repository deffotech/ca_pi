import Footer from "@/components/Footer";
import Breadcrumb from "@/components/moa-amendment/Breadcrumb";
import HeroSection from "@/components/moa-amendment/HeroSection";
import DetailsSection from "@/components/moa-amendment/DetailsSection";
import DocumentsSection from "@/components/moa-amendment/DocumentsSection";
import OffersSection from "@/components/moa-amendment/OffersSection";

const MOAAmendment = () => {
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

export default MOAAmendment;