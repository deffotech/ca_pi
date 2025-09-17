
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/itr6-return-filing/Breadcrumb";
import HeroSection from "@/components/itr6-return-filing/HeroSection";
import OffersDiscountSection from "@/components/itr6-return-filing/OffersDiscountSection";
import DetailsSection from "@/components/itr6-return-filing/DetailsSection";
import Sidebar from "@/components/itr6-return-filing/Sidebar";

const ITR6ReturnFiling = () => {
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

export default ITR6ReturnFiling;
