import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-auto">
          <img
            src="/lovable-uploads/789c416a-2d10-43cc-91db-4eb7f4ef33ef.png"
            alt="Income Tax E-Filing"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 p-6 flex flex-col justify-end">
            <h1 className="text-3xl font-bold text-white">
              Income Tax E-Filing
            </h1>
            <p className="text-white mt-2">
              Filing for an individual with salary income
            </p>
          </div>
        </div>
        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold">Income Tax E-Filing</h2>
          <div className="flex items-center mt-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-4 h-4" />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">(7854)</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            E-file your income tax return (ITR) online through United Fillings quickly at
            an affordable price. Get free income tax support for ITR filing.
          </p>

          <div className="mt-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Salaried Person" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salaried">Salaried Person</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card className="mt-4">
            <CardContent className="p-4">
              <h3 className="font-semibold text-green-600">3 Secure Offers</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">ITR e-Filing</p>
                    <ul className="list-disc list-inside text-xs text-gray-500">
                      <li>Income Tax computation</li>
                      <li>Income Tax eFile copy</li>
                      <li>Tax Consultation</li>
                      <li>E-filing</li>
                    </ul>
                  </div>
                  <Button>ADD</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">30 Minutes Tax Consultation</p>
                  <ul className="list-disc list-inside text-xs text-gray-500">
                    <li>Tax Consultation</li>
                    <li>Business Consultation</li>
                    <li>Legal Consultation</li>
                    <li>Expert on Professionals</li>
                  </ul>
                </div>
                <Button>ADD</Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Refer a Friend
            </a>
          </div>

          <div className="mt-4 space-y-2">
            <h3 className="font-semibold">Offers and discounts</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                LEDGERS - Compliance Platform
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                Save 10% with GST Registration
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
