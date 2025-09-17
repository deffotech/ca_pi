import { Star } from "lucide-react";
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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <img
          src="assets/trade-mark.jpg"
          alt="Trademark Registration"
          className="rounded-lg shadow-md w-full"
        />
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Related Services</h2>
          <ul className="text-sm text-blue-600 mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Incorporation Certificate
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partnership Deed
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                PAN Card
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-semibold">
                Load More
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Trademark Registration
        </h1>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <span className="text-gray-600 ml-2 text-sm">(23158)</span>
        </div>
        <p className="mt-4 text-gray-600">
          Secure your Trademark with United Fillings.com seamless filing. Covers
          government fees for one class, ensuing hassle-free protection.
        </p>
        <div className="mt-6">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="TM Filing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tm-filing">TM Filing</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card className="border-green-500 border-2">
            <CardContent className="p-4">
              <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full inline-block">
                1 Exclusive Offers
              </div>
              <h3 className="font-bold mt-2">TM Filing</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                <li>Trademark Search</li>
                <li>Trademark Filing</li>
                <li>Government Fee</li>
                <li>Trademark for one class</li>
                <li>Trademark Software</li>
              </ul>
              <SendRequestButton 
                serviceName="Trademark Filing"
                className="w-full mt-4"
              />
            </CardContent>
          </Card>
          <Card className="border-green-500 border-2">
            <CardContent className="p-4">
              <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full inline-block">
                1 Exclusive Offers
              </div>
              <h3 className="font-bold mt-2">TM Filing + Form 48</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                <li>Trademark Search</li>
                <li>INR 500 Stamp Paper (Form 48)</li>
                <li>Trademark Filing</li>
                <li>Government Fee</li>
                <li>Trademark for one class</li>
                <li>Trademark Software</li>
              </ul>
              <SendRequestButton 
                serviceName="Trademark Filing + Form 48"
                className="w-full mt-4"
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
    </section>
  );
};

export default HeroSection;
