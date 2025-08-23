
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/income-tax-notice/Breadcrumb";
import HeroSection from "@/components/income-tax-notice/HeroSection";
import DetailsSection from "@/components/income-tax-notice/DetailsSection";
import DocumentsSection from "@/components/income-tax-notice/DocumentsSection";
import OffersSection from "@/components/income-tax-notice/OffersSection";

const IncomeTaxNotice = () => {
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

export default IncomeTaxNotice;
