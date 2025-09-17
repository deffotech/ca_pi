import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Users } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const OffersSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'society-registration',
      name: 'Society Registration',
      price: 5999
    });
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Society Registration Service?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional support for establishing your non-profit organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">Professional assistance throughout registration</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Processing</h3>
            <p className="text-gray-600 text-sm">Fast registration within statutory timelines</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal Compliance</h3>
            <p className="text-gray-600 text-sm">Complete adherence to registration requirements</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Post Registration</h3>
            <p className="text-gray-600 text-sm">Ongoing support for society operations</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleAddToCart}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
          >
            Register Society - ₹5,999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;