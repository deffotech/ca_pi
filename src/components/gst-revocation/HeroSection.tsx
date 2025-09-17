import { Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <img
          src="/lovable-uploads/ef059ded-5ba4-44f9-b1de-9e26f1117873.png"
          alt="GST Services"
          className="rounded-lg shadow-md w-full"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800">GST Revocation</h1>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current text-gray-300" />
          </div>
          <span className="ml-2 text-sm text-gray-600">(28)</span>
        </div>
        <p className="mt-4 text-gray-600">
          GST Revocation service by United Fillings helps businesses restore their
          canceled GST registration by assisting with application preparation,
          submission, and follow-up. Our experts ensure seamless and timely
          reinstatement, allowing businesses to resume operations without
          interruptions.
        </p>

        <div className="mt-6">
          <Select defaultValue="andaman">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="andaman">
                Andaman and Nicobar Islands
              </SelectItem>
              <SelectItem value="andhra">Andhra Pradesh</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border-green-500 border-2">
            <CardContent className="p-4">
              <div className="text-center bg-green-100 text-green-700 text-xs font-bold py-1 px-2 rounded-full mb-3 inline-block">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold text-gray-800">
                Andaman and Nicobar Islands
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Filing Revocation Application</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Followup and Clarifications</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Reactivated GSTIN</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>GST Compliance Advisory</span>
                </li>
              </ul>
              <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">
                ADD
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center bg-green-100 text-green-700 text-xs font-bold py-1 px-2 rounded-full mb-3 inline-block">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold text-gray-800">Andhra Pradesh</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Filing Revocation Application</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Followup and Clarifications</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Reactivated GSTIN</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>GST Compliance Advisory</span>
                </li>
              </ul>
              <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">
                ADD
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
