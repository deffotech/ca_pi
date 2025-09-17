import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronRight, CheckCircle } from "lucide-react";
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
            <div className="relative bg-black text-white p-6 rounded-lg flex flex-col items-center justify-center text-center min-h-[350px] overflow-hidden">
              <div className="z-10 relative">
                <h2 className="text-2xl font-bold">ISO Certification</h2>
                <p className="mt-2 text-lg">Digital & Hassle-Free</p>
                <p className="mt-4 text-sm font-light">
                  Let United Fillings simplify your ISO certification process.
                </p>
              </div>
              <img
                src="/lovable-uploads/789c416a-2d10-43cc-91db-4eb7f4ef33ef.png"
                alt="ISO Certification"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">ISO Registration</h1>
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
                (110)
              </a>
            </div>
            <p className="text-gray-600">
              International Organization for Standardization (ISO) certification
              establishes credibility and trust among consumers, clients and
              other business partners. In today's international marketplace,
              such a designation validates that an organization adheres to
              global standards of quality assurance, manufacturing and business.
            </p>

            <Select defaultValue="non-audited">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Certification Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="non-audited">
                  Non-Audited - ISO 9001:2018
                </SelectItem>
                <SelectItem value="audited">
                  Audited - ISO 14001:2018
                </SelectItem>
              </SelectContent>
            </Select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    APPROVED BY LAWYERS
                  </div>
                  <h3 className="font-bold">Non - Audited - ISO 9001:2018</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      Application Preparation
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      Application Filing
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      ISO Auditing
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      ISO Certification
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      100% Refund Guarantee
                    </li>
                  </ul>
                  <SendRequestButton 
                    serviceName="ISO Registration - Non-Audited ISO 9001:2018"
                    className="mt-4 w-full"
                  />
                </CardContent>
              </Card>
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    APPROVED BY LAWYERS
                  </div>
                  <h3 className="font-bold">Audited - ISO 14001:2018</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      Application Preparation
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      Application Filing
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      ISO Auditing
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      ISO Certification
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                      100% Refund Guarantee
                    </li>
                  </ul>
                  <SendRequestButton 
                    serviceName="ISO Registration - Audited ISO 14001:2018"
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
