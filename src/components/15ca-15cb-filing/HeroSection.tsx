
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              15CA - 15CB Filing Service
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Get professional assistance for 15CA - 15CB form filing for foreign remittances. Ensure compliance with RBI and Income Tax regulations.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">₹2,999</span>
              <span className="text-gray-500 line-through">₹4,999</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">40% OFF</span>
            </div>
            <SendRequestButton 
              serviceName="15CA - 15CB Filing"
              className="mt-6"
            />
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15CA Form Preparation</li>
                  <li>• 15CB Certificate Processing</li>
                  <li>• RBI Compliance Check</li>
                  <li>• Expert Consultation</li>
                  <li>• Document Review</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
