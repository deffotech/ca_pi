
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/15ca-15cb-filing/Breadcrumb";
import HeroSection from "@/components/15ca-15cb-filing/HeroSection";
import DetailsSection from "@/components/15ca-15cb-filing/DetailsSection";
import DocumentsSection from "@/components/15ca-15cb-filing/DocumentsSection";
import OffersSection from "@/components/15ca-15cb-filing/OffersSection";

const FifteenCA15CBFiling = () => {
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

export default FifteenCA15CBFiling;
