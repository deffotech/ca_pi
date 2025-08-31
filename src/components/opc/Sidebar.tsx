
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'opc-registration',
      name: 'One Person Company Registration',
      price: 12999
    });
    toast.success('One Person Company Registration added to cart!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
      <div className="text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">Your cart is empty</h3>
        <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
      </div>

      <Button 
        type="button" 
        onClick={handleAddToCart}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base mt-6" 
        size="lg"
      >
        Add to Cart - ₹12,999
      </Button>
    </div>
  );
};

export default Sidebar;
