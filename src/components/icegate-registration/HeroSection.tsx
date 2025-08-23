import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronDown, ChevronRight } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 relative bg-blue-800 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center h-full min-h-[300px] overflow-hidden">
            <div className="z-10 relative">
              <h2 className="text-2xl font-bold">ICEGATE REGISTRATION</h2>
              <p className="mt-2 text-sm">Fast & Secure ICEGATE Registration</p>
            </div>
            <img
              src="assets/icegate.jpg"
              alt="ICEGATE Registration"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">ICEGATE Registration</h1>
            <div className="flex items-center space-x-2 text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-5 h-5" />
              ))}
              <Star className="w-5 h-5 text-gray-300" />
              <a href="#" className="text-blue-600 hover:underline text-sm">
                (32)
              </a>
            </div>
            <p className="text-gray-600">
              Indian Customs Electronic Data Interchange Gateway (ICEGATE) is
              the national portal of Indian (CBIC) that provides e-filing
              services to the Custom Brokers (License Holder / F-card and G-card
              holders), IEC holders (and IEC authorised persons), Shipping
              Lines, Shipping agents, Airlines, Air Agents, Console Agents etc.
            </p>
            <div className="border rounded-md p-3 flex justify-between items-center">
              <span>ICEGATE Registration</span>
              <ChevronDown className="w-5 h-5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">
                    1 Exclusive Offers
                  </div>
                  <h3 className="font-bold">ICEGATE Registration</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      Application Preparation
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      Application Filing
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      ICEGATE Registration Number
                    </li>
                  </ul>
                  <SendRequestButton 
                    serviceName="ICEGATE Registration"
                    className="w-full mt-2"
                  />
                </CardContent>
              </Card>
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">
                    2 Exclusive Offers
                  </div>
                  <h3 className="font-bold">ICEGATE Registration + DSC</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      Application Preparation
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      Application Filing
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      ICEGATE Registration Number
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      Class 3 Encrypted DSC
                    </li>
                  </ul>
                  <SendRequestButton 
                    serviceName="ICEGATE Registration + DSC"
                    className="w-full mt-2"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-between text-sm text-blue-600 mt-4">
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>
              <a href="#" className="hover:underline">
                Refer a Friend
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
