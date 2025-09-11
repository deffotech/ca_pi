import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: 'fcra-registration',
      name: 'FCRA Registration',
      price: 50000
    });
    
    toast({
      title: "Added to Cart",
      description: "FCRA Registration service has been added to your cart.",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              FCRA Registration
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get FCRA registration to legally receive foreign contributions. Expert assistance for NGOs, trusts, and societies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={handleAddToCart}
              >
                Add to Cart - ₹50,000
              </Button>
              <Button size="lg" variant="outline">
                Talk to Expert
              </Button>
            </div>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <span>⭐ 4.9/5 Rating</span>
              <span className="mx-2">•</span>
              <span>200+ FCRA Approvals</span>
            </div>
          </div>
          <div className="lg:text-right">
            <img 
              src="/lovable-uploads/8892b4d6-7b9e-4f9c-a358-2a4158a0603d.png" 
              alt="FCRA Registration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;