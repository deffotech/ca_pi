
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/gst-revocation/Breadcrumb";
import HeroSection from "@/components/gst-revocation/HeroSection";
import OffersSection from "@/components/gst-revocation/OffersSection";
import DetailsSection from "@/components/gst-revocation/DetailsSection";
import Sidebar from "@/components/gst-revocation/Sidebar";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const GstRevocation = () => {
  return (
    <div className="bg-white">
     
      <main className="max-w-screen-xl mx-auto px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <HeroSection />
            <OffersSection />
            <DetailsSection />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-16 w-auto px-6 text-lg z-50">
        <MessageSquare className="mr-3 h-6 w-6" />
        Live Chat with Experts
      </Button>
    </div>
  );
};

export default GstRevocation;

