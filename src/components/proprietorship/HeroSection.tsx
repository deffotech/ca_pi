import { Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Proprietorship"
              className="rounded-lg w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 bg-blue-900 bg-opacity-70 text-white p-4 rounded-tl-lg w-full">
              <h3 className="font-bold text-lg leading-tight">
                PROPRIETORSHIP REGISTRATION
              </h3>
              <p className="text-xs mt-1">
                From Start to Finish, We Help You Launch your business with CA
                PI
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p className="font-medium">PAN Card</p>
            <p className="font-medium mt-1">Aadhaar Card</p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-1 inline-block"
            >
              Load More
            </a>
          </div>
        </div>
        <div className="md:col-span-8">
          <h1 className="text-3xl font-bold text-gray-800">Proprietorship</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star className="w-5 h-5 text-gray-300" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(13147)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Assistance for GST registration with 1 year LEDGERS Accounting
            software license for invoicing, GST E-invoicing and GST filing
            through LEDGERS.
          </p>

          {/* <div className="mt-4">
            <Select defaultValue="gst-software-registration">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gst-software-registration">
                  GST Software & Registration
                </SelectItem>
                <SelectItem value="gst-filing-registration">
                  GST Filing & Registration - 6 Months
                </SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card className="border-green-500 border-2">
              <CardContent className="p-4">
                <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full inline-block">
                  2 Exclusive Offers
                </div>
                <h4 className="font-bold mt-2">GST Software & Registration</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    GST Registration Application
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    DIY GST Clarification
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    DIY GST Filing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    LEDGERS GST Software - 1 Year License
                  </li>
                </ul>
                <div className="flex gap-2 mt-4">
                  <AddToCartButton
                    serviceId="gst-software-registration"
                    serviceName="GST Software & Registration"
                    price={2999}
                    className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                    variant="outline"
                  >
                    ADD TO CART - ₹2,999
                  </AddToCartButton>
                  <AddToWishlistButton
                    serviceId="gst-software-registration"
                    serviceName="GST Software & Registration"
                    price={2999}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full inline-block">
                  2 Exclusive Offers
                </div>
                <h4 className="font-bold mt-2">
                  GST Filing & Registration - 6 Months
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    GST Registration Application
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    DIY GST Clarification
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    GST Filing by Accountant 6 Months
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    GST Filing Training & Setup
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />{" "}
                    LEDGERS GST Software - 1 Year License
                  </li>
                </ul>
                <div className="flex gap-2 mt-4">
                  <AddToCartButton
                    serviceId="gst-filing-registration-6months"
                    serviceName="GST Filing & Registration - 6 Months"
                    price={4999}
                    className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                    variant="outline"
                  >
                    ADD TO CART - ₹4,999
                  </AddToCartButton>
                  <AddToWishlistButton
                    serviceId="gst-filing-registration-6months"
                    serviceName="GST Filing & Registration - 6 Months"
                    price={4999}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
