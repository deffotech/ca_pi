import { Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";
const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <div className="bg-blue-600 rounded-lg text-white overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold">PARTNERSHIP</h2>
              <h2 className="text-2xl font-bold mb-4">REGISTRATION</h2>
              <div className="bg-white text-blue-600 text-center py-2 rounded">
                Partnership Deed & Stamp Paper
              </div>
            </div>
            <img
              src="assets/partnership-registration.jpg"
              alt="Partnership"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-sm">
              <p>Pan Card</p>
              <p>Aadhar Card</p>
              <p>Rental Agreement</p>
              <a href="#" className="font-semibold mt-2 inline-block">
                Load More
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Partnership Firm Registration
          </h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-500">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="text-gray-600 ml-2">(1061)</span>
          </div>
          <p className="text-gray-600 mb-4">
            Get Your Partnership Firm in Just 5-7 Days - 100% Online &
            Hassle-Free! Start your partnership firm registration with an
            expert-drafted deed by our team. Stamp paper will be under the
            client scope.
          </p>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Andaman and Nicobar Islands" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="andaman">
                Andaman and Nicobar Islands
              </SelectItem>
              <SelectItem value="arunachal">Arunachal Pradesh</SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="text-xs font-bold text-green-600 mb-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold mb-2">Andaman and Nicobar Islands</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Partnership deed draft
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    PAN Card Registration
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    GST Registration
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Shipping and Handling
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Bank Account Opening Assistance
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    LEDGERS Software - 1 Year
                  </li>
                </ul>
               <div className="flex gap-2 mt-4">
                  <AddToCartButton
                    serviceId="Andaman and Nicobar Islands"
                    serviceName="Andaman and Nicobar Islands"
                    price={2999}
                    className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                    variant="outline"
                  >
                    ADD TO CART - ₹2,999
                  </AddToCartButton>
                  <AddToWishlistButton
                    serviceId="Andaman and Nicobar Islands"
                    serviceName="Andaman and Nicobar Islands"
                    price={2999}
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="text-xs font-bold text-green-600 mb-2">
                  2 Exclusive Offers
                </div>
                <h3 className="font-bold mb-2">Arunachal Pradesh</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Partnership deed draft
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    PAN Card Registration
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    GST Registration
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Shipping and Handling
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    Bank Account Opening Assistance
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                    LEDGERS Software - 1 Year
                  </li>
               </ul>
                <div className="flex gap-2 mt-4">
                  <AddToCartButton
                    serviceId="Arunachal Pradesh"
                    serviceName="Arunachal Pradesh"
                    price={4999}
                    className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                    variant="outline"
                  >
                    ADD TO CART - ₹4,999
                  </AddToCartButton>
                  <AddToWishlistButton
                    serviceId="Arunachal Pradesh"
                    serviceName="Arunachal Pradesh"
                    price={4999}
                  />
                </div>
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
