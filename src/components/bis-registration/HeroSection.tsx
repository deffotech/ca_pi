import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-4">
            <img
              src="/assets/logo.png"
              alt="BIS Registration"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:col-span-8 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              BIS Registration
            </h1>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="ml-2 text-gray-600">(5)</span>
            </div>
            <p className="mt-4 text-gray-600">
              Get BIS Certification with United Fillings to ensure your products meet
              Indian safety and quality standards.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4 relative">
                <img
                  src="/assets/logo.png"
                  alt="Assured by Ledgers"
                  className="h-6 absolute top-2 right-2"
                />
                <h3 className="font-bold text-lg">BIS Consultation</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">&gt;</span>{" "}
                    Consult Senior Scientist
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">&gt;</span>{" "}
                    Personalised Consultation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">&gt;</span>{" "}
                    Process & Pricing Finalisation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">&gt;</span>{" "}
                    100% Refund Guarantee
                  </li>
                </ul>
                <SendRequestButton 
                  serviceName="BIS Consultation"
                  className="mt-4 w-full"
                />
              </div>
              <div className="border rounded-lg p-4 relative">
                <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full absolute top-2 right-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold text-lg">BIS Certification</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">&gt;</span>{" "}
                    Application Preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">&gt;</span>{" "}
                    Lab Testing Support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">&gt;</span>{" "}
                    Application Filing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">&gt;</span>{" "}
                    BIS Certification
                  </li>
                </ul>
                <SendRequestButton 
                  serviceName="BIS Certification"
                  className="mt-4 w-full"
                />
              </div>
            </div>
            <div className="flex justify-between mt-6 text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Terms and conditions
              </a>
              <a href="#" className="text-blue-600 hover:underline">
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
