
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/company-compliance/Breadcrumb";
import DetailsSection from "@/components/company-compliance/DetailsSection";
import HeroSection from "@/components/company-compliance/HeroSection";
import OffersDiscountSection from "@/components/company-compliance/OffersDiscountSection";
import PricingSection from "@/components/company-compliance/PricingSection";
import Sidebar from "@/components/company-compliance/Sidebar";

const CompanyCompliance = () => {
  return (
    <div className="bg-white">
      
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <HeroSection />
            <PricingSection />
            <OffersDiscountSection />
            <DetailsSection />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyCompliance;
