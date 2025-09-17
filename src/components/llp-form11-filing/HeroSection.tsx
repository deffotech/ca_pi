import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'llp-form11-filing',
      name: 'LLP Form 11 Filing',
      price: 2999
    });
  };

  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            LLP Form 11 Filing Services
          </h1>
          <p className="text-xl mb-8 text-green-100">
            Mandatory annual filing for Limited Liability Partnerships with expert compliance support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Start Filing - ₹2,999
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
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