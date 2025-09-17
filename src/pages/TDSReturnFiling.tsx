
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/tds-return-filing/Breadcrumb";
import HeroSection from "@/components/tds-return-filing/HeroSection";
import DetailsSection from "@/components/tds-return-filing/DetailsSection";
import DocumentsSection from "@/components/tds-return-filing/DocumentsSection";
import OffersSection from "@/components/tds-return-filing/OffersSection";

const TDSReturnFiling = () => {
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

export default TDSReturnFiling;
