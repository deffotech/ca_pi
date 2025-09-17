import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Users } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const OffersSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'llp-form11-filing',
      name: 'LLP Form 11 Filing',
      price: 2999
    });
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our LLP Form 11 Service?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional compliance support for your LLP annual filing requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Accurate Filing</h3>
            <p className="text-gray-600 text-sm">Error-free Form 11 preparation and submission</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Timely Compliance</h3>
            <p className="text-gray-600 text-sm">Filed within statutory deadlines</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Penalty Avoidance</h3>
            <p className="text-gray-600 text-sm">Prevent late filing penalties and consequences</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">Professional assistance from LLP experts</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleAddToCart}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
          >
            Start Form 11 Filing - ₹2,999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;