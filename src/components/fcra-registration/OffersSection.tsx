import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const OffersSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (planType: string, price: number) => {
    addToCart({
      id: `fcra-registration-${planType.toLowerCase()}`,
      name: `FCRA Registration - ${planType}`,
      price: price
    });
    
    toast({
      title: "Added to Cart",
      description: `FCRA Registration ${planType} plan has been added to your cart.`,
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
            Choose the perfect plan for your FCRA registration needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">₹35,000</div>
            <div className="text-gray-500 line-through mb-6">₹60,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                FCRA Application Filing
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Document Preparation
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Email Support
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Basic', 35000)}
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
            <div className="text-3xl font-bold text-green-600 mb-2">₹50,000</div>
            <div className="text-gray-500 line-through mb-6">₹75,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Complete FCRA Process
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Legal Compliance Check
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Phone & Email Support
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Query Response Management
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Standard', 50000)}
            >
              Choose Standard
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">₹75,000</div>
            <div className="text-gray-500 line-through mb-6">₹1,00,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                End-to-End FCRA Service
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Compliance Consultation
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Dedicated Support Manager
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Annual Return Assistance
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Premium', 75000)}
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