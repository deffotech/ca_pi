
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">FDI FILING WITH RBI</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm">5.0</span>
          </div>
          <p className="text-blue-100 mb-6">
            Get help for filing downloadable Form including FC certificate
          </p>
          
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-3">Documents Required:</h3>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Board resolution</li>
                <li>• MOA & AOA Certificate</li>
                <li>• Financial statements</li>
                <li>• Pan Card & Form</li>
                <li>• Appointment &</li>
                <li>• Acknowledgment copy</li>
              </ul>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
              ADD
            </Button>
          </div>
        </div>
        <div className="relative p-8">
          <img 
            src="/lovable-uploads/b86e15be-d49f-48f6-a867-66675951108e.png" 
            alt="FDI Filing with RBI" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
