import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "moa-amendment",
      name: "MOA Amendment",
      price: 4999,
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              MOA Amendment Service
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Professional Memorandum of Association amendment service. Modify your company's fundamental documents with expert assistance and ensure legal compliance.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">₹4,999</span>
              <span className="text-gray-500 line-through">₹7,999</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">38% OFF</span>
            </div>
            <Button onClick={handleAddToCart} className="mt-6 bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• MOA Amendment Drafting</li>
                  <li>• Board Resolution Preparation</li>
                  <li>• MCA Filing Support</li>
                  <li>• Legal Compliance Review</li>
                  <li>• Expert Consultation</li>
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