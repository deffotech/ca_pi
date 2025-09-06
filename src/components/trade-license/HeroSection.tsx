import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SendRequestButton from "@/components/ui/SendRequestButton";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div
            className="bg-blue-600 rounded-lg text-white p-8 flex flex-col items-center justify-center h-80 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/lovable-uploads/789c416a-2d10-43cc-91db-4eb7f4ef33ef.png')",
            }}
          ></div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Documents Required</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li className="p-3 border rounded-md">PAN Card</li>
              <li className="p-3 border rounded-md">Aadhar Card</li>
              <li className="p-3 border rounded-md">Rental agreement</li>
            </ul>
            <button className="text-blue-600 font-semibold mt-2">
              Load More
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h1 className="text-3xl font-bold">Trade License</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="ml-2 text-blue-600 font-semibold">(158)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Trade license is mandatory for businesses operating in a commercial
            property. Easily apply for Trade License online using IndiaFilings.
          </p>
          <div className="mt-6">
            <Select defaultValue="chennai">
              <SelectTrigger className="w-full md:w-1/2">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="telangana">Telangana</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="border-dashed border-green-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">Chennai</h3>
                  <img
                    src="https://indiafilings.com/images/home/assured-by-ledgers.svg"
                    alt="Assured by Ledgers"
                  />
                </div>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Application Preparation
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Application Filing
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Trade License Number
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />1
                    Year Trade License
                  </li>
                </ul>
                <SendRequestButton 
                serviceName="12A Registration"
                className="mt-4 w-full"
              />
              </CardContent>
            </Card>
            <Card className="border-dashed border-green-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">Telangana</h3>
                  <img
                    src="https://indiafilings.com/images/home/assured-by-ledgers.svg"
                    alt="Assured by Ledgers"
                  />
                </div>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Application Preparation
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Application Filing
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Trade License Number
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />1
                    Year Trade License
                  </li>
                </ul>
                <SendRequestButton 
                serviceName="12A Registration"
                className="mt-4 w-full"
              />
              </CardContent>
            </Card>
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
    </Card>
  );
};

export default HeroSection;
