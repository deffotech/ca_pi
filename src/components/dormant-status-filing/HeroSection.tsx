import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'dormant-status-filing',
      name: 'Dormant Status Filing',
      price: 4999
    });
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dormant Company Status Filing
          </h1>
          <p className="text-xl mb-8 text-purple-100">
            Apply for dormant status to reduce compliance burden for inactive companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Apply Now - ₹4,999
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;