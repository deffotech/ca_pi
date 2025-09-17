import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Users } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const OffersSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'setup-business-uae',
      name: 'Setup Business in UAE',
      price: 25000
    });
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our UAE Business Setup Service?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert guidance for establishing your business in the UAE market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">Professional support throughout setup process</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Processing</h3>
            <p className="text-gray-600 text-sm">Quick business registration and approvals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal Compliance</h3>
            <p className="text-gray-600 text-sm">Full compliance with UAE regulations</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ongoing Support</h3>
            <p className="text-gray-600 text-sm">Continued assistance post-incorporation</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleAddToCart}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
          >
            Setup UAE Business - ₹25,000
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;