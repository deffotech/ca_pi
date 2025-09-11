
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Sidebar = () => {
  const { items, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  return (
    <aside className="space-y-6 sticky top-8">
      <Card>
        <CardContent className="pt-6">
          {items.length === 0 ? (
            <div className="text-center">
              <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-semibold text-gray-800">Your cart is empty</h3>
              <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Your Cart ({totalItems})</h3>
                <button
                  onClick={clearCart}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Clear All
                </button>
              </div>
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-sm text-gray-500">₹{item.price.toLocaleString()} x {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700 ml-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total: ₹{totalPrice.toLocaleString()}</span>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold" size="lg">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}

          <div className="mt-6 text-sm text-center">
            <span className="text-gray-600">Existing User? </span>
            <Link to="/auth" className="font-medium text-green-600 hover:text-green-700">Login</Link>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Offers and discounts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <img src="/lovable-uploads/b82916f3-a462-4bfc-ac5e-a5da577d3e2a.png" alt="Brand Guard" className="h-10 w-10 mr-4"/>
            <div>
              <p className="font-semibold">Brand Guard - Trademark Protection Platform</p>
              <p className="text-sm text-gray-500">Monitor and protect your brand from infringement</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
