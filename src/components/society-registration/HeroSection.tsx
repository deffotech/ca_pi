import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'society-registration',
      name: 'Society Registration',
      price: 5999
    });
  };

  return (
    <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Society Registration Services
          </h1>
          <p className="text-xl mb-8 text-emerald-100">
            Expert assistance for registering your society under Societies Registration Act
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100"
            >
              Register Now - ₹5,999
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
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