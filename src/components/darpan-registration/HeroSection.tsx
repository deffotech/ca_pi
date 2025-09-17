
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronRight } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 flex items-center justify-center p-4">
           <img src="/lovable-uploads/darpan-hero.png" alt="Darpan Registration" className="object-contain rounded-lg max-h-[450px]" />
        </div>
        <div className="md:col-span-7 p-8">
          <h1 className="text-3xl font-bold">Darpan Registration</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">(40)</span>
          </div>
          <p className="text-gray-600 mb-4">
            NGO Darpan registration is the process of registering non-governmental organisations (NGOs), voluntary organisations, and related entities on the NGO Darpan portal, an online platform introduced by the Indian government to create a database of registered NGOs in India.
          </p>

          <Card className="border-green-200 mt-6">
            <CardContent className="p-4">
              <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">2 Exclusive Offers</div>
              <h3 className="font-bold mb-2">Basic</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Preparation</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Submission</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Darpan Number</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Darpan Certificate</li>
              </ul>
              <SendRequestButton 
                serviceName="Darpan Registration"
                className="mt-4 w-full"
              />
            </CardContent>
          </Card>
          
          <div className="flex justify-between items-center mt-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
