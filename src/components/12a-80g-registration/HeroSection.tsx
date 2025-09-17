import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12 gap-0">
        <div className="md:col-span-5 lg:col-span-4 flex items-center justify-center p-8 bg-black">
          <img
            src="/lovable-uploads/3a16634c-246d-4475-8774-b29e6d955635.png"
            alt="12A and 80G Registration"
            className="object-contain rounded-lg max-h-[450px]"
          />
        </div>
        <div className="md:col-span-7 lg:col-span-8 p-8">
          <h1 className="text-3xl font-bold">12A and 80G Registration</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">(5)</span>
          </div>
          <p className="text-gray-600 mb-4">
            Obtain 12A registration effortlessly with United Fillings to get tax-exemption
            for your charitable organization and get 80G registration for your
            charitable organization with United Fillings and allow donors to claim tax
            deductions.
          </p>
          <Select defaultValue="12a">
            <SelectTrigger className="w-full md:w-2/3">
              <SelectValue placeholder="Select Registration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12a">12A Registration</SelectItem>
              <SelectItem value="80g">80G Registration</SelectItem>
              <SelectItem value="both">12A and 80G Registration</SelectItem>
            </SelectContent>
          </Select>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold mb-2">12A Registration</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                    Application Preparation
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                    Application Filing
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                    12A Registration Number
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                    12A Certificate
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
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold mb-2">80G Registration</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                    Application Preparation
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                    Application Filing
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                    80G Registration Number
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                    80G Certificate
                  </li>
                </ul>
                <SendRequestButton 
                serviceName="80G Registration"
                className="mt-4 w-full"
              />
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm">
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
