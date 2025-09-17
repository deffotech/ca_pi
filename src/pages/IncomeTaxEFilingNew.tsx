
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/income-tax-e-filing-new/Breadcrumb";
import HeroSection from "@/components/income-tax-e-filing-new/HeroSection";
import ServiceSelection from "@/components/income-tax-e-filing-new/ServiceSelection";
import QuickSteps from "@/components/income-tax-e-filing-new/QuickSteps";
import WhoNeedsToFile from "@/components/income-tax-e-filing-new/WhoNeedsToFile";
import Sidebar from "@/components/income-tax-e-filing-new/Sidebar";

const IncomeTaxEFilingNew = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3 space-y-8">
            <HeroSection />
            <ServiceSelection />
            <QuickSteps />
            <WhoNeedsToFile />
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

export default IncomeTaxEFilingNew;
