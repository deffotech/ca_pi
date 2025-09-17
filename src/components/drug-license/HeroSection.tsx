import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="h-full min-h-[550px] bg-gray-200">
            <img
              src="/lovable-uploads/8f5a9b8e-901a-44fe-8254-7060ce84a2e7.png"
              alt="Drug License"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-8 p-8">
          <h1 className="text-3xl font-bold">Drug License</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(2)</span>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            United Fillings offers comprehensive assistance in obtaining Drug Licenses for
            manufacturing, sale, and distribution of pharmaceuticals. Our
            experts ensure compliance with regulatory requirements, enabling
            businesses to operate legally and efficiently.
          </p>

          <Card className="border-green-300 border-dashed mt-6 max-w-sm">
            <CardContent className="p-4">
              <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold mb-2">Chennai</h3>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />
                  Consult Senior Expert
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />
                  Personalised Consultation
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />
                  Process & Pricing Finalisation
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
              >
                ADD
              </Button>
            </CardContent>
          </Card>

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
