
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/business-income-tax/Breadcrumb";
import HeroSection from "@/components/business-income-tax/HeroSection";
import OffersDiscountSection from "@/components/business-income-tax/OffersDiscountSection";
import DetailsSection from "@/components/business-income-tax/DetailsSection";
import Sidebar from "@/components/business-income-tax/Sidebar";

const BusinessIncomeTax = () => {
  return (
    <div className="bg-white">
      
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <HeroSection />
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

export default BusinessIncomeTax;
