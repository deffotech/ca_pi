import Footer from "@/components/Footer";
import Breadcrumb from "@/components/share-transfer/Breadcrumb";
import HeroSection from "@/components/share-transfer/HeroSection";
import DetailsSection from "@/components/share-transfer/DetailsSection";
import DocumentsSection from "@/components/share-transfer/DocumentsSection";
import OffersSection from "@/components/share-transfer/OffersSection";

const ShareTransfer = () => {
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

export default ShareTransfer;