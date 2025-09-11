
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/income-tax-e-filing/Breadcrumb";
import HeroSection from "@/components/income-tax-e-filing/HeroSection";
import AboutSection from "@/components/income-tax-e-filing/AboutSection";
import WhoNeedsToEFileSection from "@/components/income-tax-e-filing/WhoNeedsToEFileSection";
import EligibilitySection from "@/components/income-tax-e-filing/EligibilitySection";
import FormsAndDatesSection from "@/components/income-tax-e-filing/FormsAndDatesSection";
import DocumentsAndProcedureSection from "@/components/income-tax-e-filing/DocumentsAndProcedureSection";
import Sidebar from "@/components/income-tax-e-filing/Sidebar";

const IncomeTaxEFiling = () => {
  return (
    <div className="bg-white">
      
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <HeroSection />
            <AboutSection />
            <WhoNeedsToEFileSection />
            <EligibilitySection />
            <FormsAndDatesSection />
            <DocumentsAndProcedureSection />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
      <div className="fixed bottom-8 right-8">
        <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-green-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          <span>Live Chat with Experts</span>
        </a>
      </div>
    </div>
  );
};

export default IncomeTaxEFiling;
