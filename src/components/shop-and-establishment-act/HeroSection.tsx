
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-4">
            <div className="relative h-full min-h-[550px] bg-gray-200">
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e2775df?q=80&w=1000&auto=format&fit=crop" alt="Shop and Establishment Registration" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
                    <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col items-center text-center max-w-sm mx-auto border-2 border-white/50">
                        <h2 className="text-2xl font-bold uppercase">Shop and Establishment Registration</h2>
                        <div className="text-sm mt-4 bg-white text-blue-700 font-semibold py-2 px-4 rounded-full">Get the support to start and scale your business⚡</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:col-span-8 p-8">
          <h1 className="text-3xl font-bold">Shop and Establishment Act</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(265)</span>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            The Telangana Shops And Establishments Act of 1988 prescribes the applicable labour laws for those who wish to run a business in the state. The act has regulated working hours, wages and working conditions in all charitable trusts, educational institutions, printing establishments, as well as commercial establishments.
          </p>

          <Select defaultValue="andhra">
            <SelectTrigger className="w-full md:w-[280px]">
                <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="andhra">Andhra Pradesh</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-green-300 border-dashed">
                <CardContent className="p-4">
                <img src="https://indiafilings.com/images/approved-by-ledgers.svg" alt="Approved by Ledgers" className="h-5 mb-2" />
                <h3 className="font-bold mb-2">Andhra Pradesh</h3>
                <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />Application Preparation</li>
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />Shop And Establishment Act Certificate</li>
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />Valid for 1 calendar year</li>
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />LEDGERS Platform</li>
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />100% Refund Guarantee</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700">ADD</Button>
                </CardContent>
            </Card>
            <Card className="border-green-300 border-dashed">
                <CardContent className="p-4">
                <img src="https://indiafilings.com/images/approved-by-ledgers.svg" alt="Approved by Ledgers" className="h-5 mb-2" />
                <h3 className="font-bold mb-2">Delhi</h3>
                <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />Application Preparation</li>
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />Shop And Establishment Act Certificate</li>
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />Valid for 1 calendar year</li>
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />LEDGERS Platform</li>
                    <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-0.5 shrink-0" />100% Refund Guarantee</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700">ADD</Button>
                </CardContent>
            </Card>
          </div>
          
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
