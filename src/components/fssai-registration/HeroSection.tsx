import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AddToCartButton from "@/components/ui/AddToCartButton";
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
          <div className="rounded-lg overflow-hidden">
            <img
              src="assets/fssai-registration.jpg"
              alt="FSSAI Registration"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-6">
            <ul className="mt-2 space-y-2 text-gray-600">
              <li className="p-3 border rounded-md">PAN Card</li>
              <li className="p-3 border rounded-md">Aadhaar Card</li>
              <li className="p-3 border rounded-md">Electricity Bill</li>
            </ul>
            <button className="text-blue-600 font-semibold mt-2">
              Load More
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h1 className="text-3xl font-bold">FSSAI Registration</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="ml-2 text-blue-600 font-semibold">(1627)</span>
          </div>
          <p className="mt-4 text-gray-600">
            FSSAI registration application preparation and filing for small food
            businesses, petty retailers, juice shops and hawkers by FSSAI
            consultant.
          </p>
          <div className="mt-6">
            <Select defaultValue="1-year">
              <SelectTrigger className="w-full md:w-1/2">
                <SelectValue placeholder="Select Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-year">
                  FSSAI Registration - 1 Year
                </SelectItem>
                <SelectItem value="3-years">
                  FSSAI Registration - 3 Years
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="border-dashed border-green-500">
              <CardContent className="p-6">
                <div className="text-orange-500 text-xs font-bold mb-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold text-lg">
                  FSSAI Registration - 1 Year
                </h3>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Application Preparation
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Application Filing
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />1
                    Year Registration
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    LEDGERS Platform
                  </li>
                </ul>
                <AddToCartButton
                  serviceId="fssai-registration-1year"
                  serviceName="FSSAI Registration - 1 Year"
                  price={2999}
                  className="mt-4 w-full"
                >
                  ADD TO CART - ₹2,999
                </AddToCartButton>
              </CardContent>
            </Card>
            <Card className="border-dashed border-green-500">
              <CardContent className="p-6">
                <div className="text-orange-500 text-xs font-bold mb-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold text-lg">
                  FSSAI Registration - 3 Years
                </h3>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Application Preparation
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    Application Filing
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />3
                    Years Registration
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    LEDGERS Platform
                  </li>
                </ul>
                <AddToCartButton
                  serviceId="fssai-registration-3years"
                  serviceName="FSSAI Registration - 3 Years"
                  price={4999}
                  className="mt-4 w-full"
                >
                  ADD TO CART - ₹4,999
                </AddToCartButton>
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
