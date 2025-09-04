import { Button } from "@/components/ui/button";

const BannerSection = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-2">PRODUCER COMPANY REGISTRATION</h2>
        <p className="text-blue-100 mb-4">Streamlined & Hassle-Free Process</p>
        <div className="absolute right-4 top-4">
          <img 
            src="https://img.indiafilings.com/images/producer-company-registration.jpg" 
            alt="Farmers" 
            className="w-32 h-20 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;