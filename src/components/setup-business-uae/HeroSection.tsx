import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'setup-business-uae',
      name: 'Setup Business in UAE',
      price: 25000
    });
  };

  return (
    <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Setup Your Business in UAE
          </h1>
          <p className="text-xl mb-8 text-amber-100">
            Complete business incorporation and setup services in the United Arab Emirates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="bg-white text-amber-600 hover:bg-gray-100"
            >
              Get Started - ₹25,000
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-600"
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