import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 space-y-4">
            <div className="relative bg-blue-800 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center min-h-[350px] overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="assets/pf-registration.jpg"
                  alt="Provident Fund"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="z-10 relative">
                <h2 className="text-2xl font-bold">PF REGISTRATION</h2>
                <p className="mt-2 text-sm border-t border-b py-1">
                  PF Registration - Online Application - United Fillings
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">PF Registration</h1>
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
                (90)
              </a>
            </div>
            <p className="text-gray-600">
              PF registration is the process through which an employer registers
              with the Employees Provident Fund Organisation (EPFO) to
              participate in the Provident Fund scheme.
            </p>

            <Card className="border-dashed border-green-500 mt-4">
              <CardContent className="p-4 space-y-3">
                <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />2 Exclusive Offers
                </div>
                <h3 className="font-bold">PF Registration</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                    Application Preparation
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                    Application Submission
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                    PF Employer Certificate
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                    PF Number
                  </li>
                </ul>
                <SendRequestButton 
                  serviceName="PF Registration"
                  className="mt-4 w-full"
                />
              </CardContent>
            </Card>

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
