import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'dpt3-filing',
      name: 'DPT-3 Filing',
      price: 3999
    });
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            DPT-3 Filing Services
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Expert assistance for mandatory DPT-3 annual filing for companies accepting deposits from public
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Filing - ₹3,999
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
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