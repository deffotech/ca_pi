import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-green-500 border-2">
          <CardContent className="p-4">
            <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full inline-block">
              2 Exclusive Offers
            </div>
            <h4 className="font-bold mt-2">Producer Company Registration</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                Company Name Reservation
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                DIN & DSC for Directors
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                MOA & AOA Drafting
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                Producer Company Registration
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <AddToCartButton
                serviceId="producer-company-registration"
                serviceName="Producer Company Registration"
                price={19999}
                className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                variant="outline"
              >
                ADD TO CART - ₹19,999
              </AddToCartButton>
              <AddToWishlistButton
                serviceId="producer-company-registration"
                serviceName="Producer Company Registration"
                price={19999}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full inline-block">
              2 Exclusive Offers
            </div>
            <h4 className="font-bold mt-2">Producer Company + GST</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                Producer Company Registration
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                GST Registration
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                Bank Account Opening Support
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                LEDGERS Software - 1 Year License
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <AddToCartButton
                serviceId="producer-company-gst-registration"
                serviceName="Producer Company + GST"
                price={24999}
                className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                variant="outline"
              >
                ADD TO CART - ₹24,999
              </AddToCartButton>
              <AddToWishlistButton
                serviceId="producer-company-gst-registration"
                serviceName="Producer Company + GST"
                price={24999}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-between mt-4 text-sm">
        <Link to="#" className="text-blue-600 hover:underline">
          Terms and conditions
        </Link>
        <Link to="#" className="text-blue-600 hover:underline">
          Refer a Friend
        </Link>
      </div>
    </div>
  );
};

export default PricingSection;