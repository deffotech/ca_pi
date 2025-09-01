import { Star, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import SendRequestButton from "@/components/ui/SendRequestButton";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <div className="bg-blue-600 rounded-lg text-white overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold">OPC REGISTRATION</h2>
              <div className="bg-white text-blue-600 text-center py-2 rounded mt-4">
                OPC Registration Name Entry Register Online
              </div>
            </div>
            <img
              src="assets/one-person-company.jpg"
              alt="OPC Registration"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-sm">
              <p>PAN Card</p>
              <p>Passport</p>
              <p>Voters Identity Card</p>
              <a href="#" className="font-semibold mt-2 inline-block">
                Load More
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-8">
          <h1 className="text-2xl font-bold text-gray-800">OPC Registration</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-500">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="text-gray-600 ml-2">(2141)</span>
          </div>
          <p className="text-gray-600 mb-4">
            Instant Name Application for Company.
          </p>

          <Select defaultValue="mca_approval">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="MCA Name Approval" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mca_approval">MCA Name Approval</SelectItem>
              <SelectItem value="andaman">
                Andaman and Nicobar Islands
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="text-xs font-bold text-green-600 mb-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold mb-2">MCA Name Approval</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Name Application Fee
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Instant Filing
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    4 Name Choice
                  </li>
                </ul>
                <SendRequestButton 
                serviceName="12A Registration"
                className="mt-4 w-full"
              />
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="text-xs font-bold text-green-600 mb-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold mb-2">Andaman and Nicobar Islands</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    MCA Name Approval
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Company Incorporation
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    PAN & TAN Registration
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Government Fees & Stamp Duty
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    3 DSCs (Hyper Tokens)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    DSC Downloading & Shipping Support
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Bank Account Opening Assistance
                  </li>
                </ul>
                <SendRequestButton 
                serviceName="12A Registration"
                className="mt-4 w-full"
              />
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Refer a Friend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
