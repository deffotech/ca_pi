
import { Button } from '@/components/ui/button';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Sidebar = () => {
  const { items, totalPrice, clearCart, removeFromCart } = useCart();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
      {items.length === 0 ? (
        <div className="text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-semibold text-gray-800">Your cart is empty</h3>
          <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cart Items</h3>
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-gray-800">{item.name}</h4>
                  <p className="text-sm text-green-600 font-semibold">₹{item.price.toLocaleString()} x {item.quantity}</p>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-800">Total:</span>
              <span className="font-bold text-lg text-green-600">₹{totalPrice.toLocaleString()}</span>
            </div>
            <Button 
              onClick={clearCart}
              variant="outline"
              className="w-full mb-2"
            >
              Clear Cart
            </Button>
          </div>
        </div>
      )}

      <div className="mt-6 text-sm text-center">
        <span className="text-gray-600">Existing User? </span>
        <Link to="/auth" className="font-medium text-green-600 hover:text-green-700">Login</Link>
      </div>
    </div>
  );
};

export default Sidebar;
