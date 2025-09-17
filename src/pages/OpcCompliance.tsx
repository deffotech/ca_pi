
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/opc-compliance/Breadcrumb";
import DetailsSection from "@/components/opc-compliance/DetailsSection";
import HeroSection from "@/components/opc-compliance/HeroSection";
import OffersDiscountSection from "@/components/opc-compliance/OffersDiscountSection";
import Sidebar from "@/components/opc-compliance/Sidebar";

const OpcCompliance = () => {
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

export default OpcCompliance;
