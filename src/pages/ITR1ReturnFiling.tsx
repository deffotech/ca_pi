
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/itr1-return-filing/Breadcrumb";
import HeroSection from "@/components/itr1-return-filing/HeroSection";
import DetailsSection from "@/components/itr1-return-filing/DetailsSection";
import DocumentsSection from "@/components/itr1-return-filing/DocumentsSection";
import FAQSection from "@/components/itr1-return-filing/FAQSection";
import Sidebar from "@/components/itr1-return-filing/Sidebar";

const ITR1ReturnFiling = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3 space-y-8">
            <HeroSection />
            <DetailsSection />
            <DocumentsSection />
            <FAQSection />
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

export default ITR1ReturnFiling;
