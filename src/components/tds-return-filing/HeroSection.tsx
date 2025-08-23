
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "tds-return-filing",
      name: "TDS Return Filing",
      price: 2499,
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              TDS Return Filing Service
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Expert TDS return filing service for quarterly compliance. Avoid penalties and ensure timely submission of your TDS returns.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">₹2,499</span>
              <span className="text-gray-500 line-through">₹3,999</span>
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
                  <li>• Quarterly TDS Return Preparation</li>
                  <li>• Form 24Q, 26Q, 27Q Filing</li>
                  <li>• TDS Certificate Generation</li>
                  <li>• Reconciliation Support</li>
                  <li>• Expert Review & Filing</li>
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
