import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: 'udyam-registration',
      name: 'Udyam Registration',
      price: 2500
    });
    
    toast({
      title: "Added to Cart",
      description: "Udyam Registration service has been added to your cart.",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Udyam Registration
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get your MSME registration under the Udyam portal. Access government benefits, subsidies, and business opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={handleAddToCart}
              >
                Add to Cart - ₹2,500
              </Button>
              <Button size="lg" variant="outline">
                Talk to Expert
              </Button>
            </div>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <span>⭐ 4.8/5 Rating</span>
              <span className="mx-2">•</span>
              <span>50,000+ MSMEs Registered</span>
            </div>
          </div>
          <div className="lg:text-right">
            <img 
              src="/lovable-uploads/f6943072-16a1-4ed4-ada7-494ea3a433fe.png" 
              alt="Udyam Registration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;