import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SendRequestButton from "@/components/ui/SendRequestButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 space-y-4">
            <div className="relative bg-blue-800 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center min-h-[250px] overflow-hidden">
              <div className="z-10 relative">
                <h2 className="text-xl font-bold">
                  Legal Entity Identifier Code
                </h2>
                <p className="mt-2 text-lg">
                  Essential ID for Business Compliance
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop"
                alt="Legal Entity Identifier"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">Legal Entity Identifier Code</h1>
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm ml-2"
              >
                (1)
              </a>
            </div>
            <p className="text-gray-600">
              LEI Code is required for companies involved in global financial
              transactions. Get your Legal Entity Identifier Code quickly and
              easily with United Fillings.
            </p>

            <Select defaultValue="1">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Year</SelectItem>
                <SelectItem value="3">3 Years</SelectItem>
                <SelectItem value="5">5 Years</SelectItem>
              </SelectContent>
            </Select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">
                    2 Exclusive Offers
                  </div>
                  <h3 className="font-bold">1 Year</h3>
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
                      Legal Entity Identifier Certificate
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      LEI Number
                    </li>
                  </ul>
                  <SendRequestButton 
                    serviceName="Legal Entity Identifier Code - 1 Year"
                    className="mt-4 w-full"
                  />
                </CardContent>
              </Card>
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">
                    2 Exclusive Offers
                  </div>
                  <h3 className="font-bold">3 Years</h3>
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
                      Legal Entity Identifier Certificate
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                      LEI Number
                    </li>
                  </ul>
                  <SendRequestButton 
                    serviceName="Legal Entity Identifier Code - 3 Years"
                    className="mt-4 w-full"
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
