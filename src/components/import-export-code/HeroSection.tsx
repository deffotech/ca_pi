import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronRight } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  const [showMoreDocs, setShowMoreDocs] = useState(false);
  const initialDocs = ["PAN Card", "Aadhaar Card", "Incorporation Certificate"];
  const moreDocs = ["Cancelled Bank Cheque", "Electricity Bill"];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 space-y-4">
            <div className="relative bg-blue-800 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center min-h-[250px] overflow-hidden">
              <div className="z-10 relative">
                <h2 className="text-xl font-bold">Start Import & Exports</h2>
                <p className="mt-2 text-lg">Get IE Code Registration</p>
              </div>
              <img
                src="assets/import-export.jpg"
                alt="Import Export"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            </div>
            <Card className="p-4">
              <ul className="space-y-3 text-sm text-gray-700">
                {initialDocs.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
                {showMoreDocs &&
                  moreDocs.map((doc) => <li key={doc}>{doc}</li>)}
              </ul>
              <button
                onClick={() => setShowMoreDocs(!showMoreDocs)}
                className="text-blue-600 hover:underline text-sm mt-3"
              >
                {showMoreDocs ? "Load Less" : "Load More"}
              </button>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">Import Export Code</h1>
            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-5 h-5" />
              ))}
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm ml-2"
              >
                (1857)
              </a>
            </div>
            <p className="text-gray-600">
              Get DGFT IE Code to start importing and exporting from India with
              foreign currency account for FOREX transactions. Unlock LEDGERS
              with expert invoicing capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">
                    2 Exclusive Offers
                  </div>
                  <h3 className="font-bold">IE Code Registration</h3>
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
                      IE Code Number
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      Import Export Certificate
                    </li>
                  </ul>
                  <SendRequestButton 
                    serviceName="IE Code Registration"
                    className="w-full mt-2"
                  />
                </CardContent>
              </Card>
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">
                    2 Exclusive Offers
                  </div>
                  <h3 className="font-bold">IE Code + ICEGATE + DSC</h3>
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
                      IE Code Number
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      Import Export Certificate
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
                    serviceName="IE Code + ICEGATE + DSC"
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
