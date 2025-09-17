import { Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToCartButton from "@/components/ui/AddToCartButton";

const OffersSection = () => {
  const incorporationItems = [
    "MCA Name Approval",
    "10 Digital Signatures",
    "Incorporation Fee", 
    "Company Incorporation",
    "Share Certificate",
    "Hyper Token",
    "DSC Support & Shipping",
    "Bank Account Assistance"
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      {/* Header with rating */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Producer Company</h1>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-blue-600 text-sm">(3)</span>
        </div>
        <p className="text-gray-600 text-sm">
          Easily register a Producer company registration through IndiaFilings 
          including incorporation kit and share certificates.
        </p>
      </div>

      {/* Offers Section */}
      <div className="mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full inline-block mb-3">
            3 Exclusive Offers
          </div>
          
          <h3 className="font-bold text-gray-800 mb-3">Incorporation</h3>
          
          <div className="space-y-2 mb-4">
            {incorporationItems.map((item, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <ChevronRight className="h-4 w-4 mr-2 text-gray-400" />
                {item}
              </div>
            ))}
          </div>

          <AddToCartButton
            serviceId="producer-company-incorporation"
            serviceName="Producer Company Incorporation"
            price={19999}
            className="w-full bg-green-600 hover:bg-green-700 text-white border-0"
            variant="default"
          >
            ADD TO CART - ₹19,999
          </AddToCartButton>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex justify-between text-sm">
        <a href="#" className="text-blue-600 hover:underline">
          Terms and conditions
        </a>
        <a href="#" className="text-blue-600 hover:underline">
          Refer a Friend
        </a>
      </div>
    </div>
  );
};

export default OffersSection;