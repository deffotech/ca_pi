import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const OffersSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (planType: string, price: number) => {
    addToCart({
      id: `winding-up-llp-${planType.toLowerCase()}`,
      name: `Winding Up LLP - ${planType}`,
      price: price
    });
    
    toast({
      title: "Added to Cart",
      description: `Winding Up LLP ${planType} plan has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Special Offers
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your LLP closure needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">₹20,000</div>
            <div className="text-gray-500 line-through mb-6">₹30,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Simple Winding Up
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Basic Documentation
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Email Support
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Basic', 20000)}
            >
              Choose Basic
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">₹25,000</div>
            <div className="text-gray-500 line-through mb-6">₹35,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Complete Winding Up
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Asset Liquidation Support
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Phone & Email Support
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Legal Compliance
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Standard', 25000)}
            >
              Choose Standard
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">₹35,000</div>
            <div className="text-gray-500 line-through mb-6">₹45,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Full Service Winding Up
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Asset Valuation & Sale
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Dedicated Support Team
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Complete Legal Documentation
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Premium', 35000)}
            >
              Choose Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;