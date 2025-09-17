import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const OffersSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (planType: string, price: number) => {
    addToCart({
      id: `demat-of-shares-${planType.toLowerCase()}`,
      name: `Demat of Shares - ${planType}`,
      price: price
    });
    
    toast({
      title: "Added to Cart",
      description: `Demat of Shares ${planType} plan has been added to your cart.`,
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
            Choose the perfect plan for your demat requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">₹10,000</div>
            <div className="text-gray-500 line-through mb-6">₹15,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Up to 10 Certificates
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Basic Processing
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Email Support
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Basic', 10000)}
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
            <div className="text-3xl font-bold text-green-600 mb-2">₹15,000</div>
            <div className="text-gray-500 line-through mb-6">₹20,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Up to 25 Certificates
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Priority Processing
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Phone & Email Support
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Document Pickup
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Standard', 15000)}
            >
              Choose Standard
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">₹25,000</div>
            <div className="text-gray-500 line-through mb-6">₹30,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Unlimited Certificates
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Express Processing
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Dedicated Support
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Free Pickup & Delivery
              </li>
            </ul>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleAddToCart('Premium', 25000)}
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