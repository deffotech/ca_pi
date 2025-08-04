import React from 'react';
import { Heart, X, ShoppingCart } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface WishlistDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistDropdown: React.FC<WishlistDropdownProps> = ({ isOpen, onClose }) => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
    });
    removeFromWishlist(item.id);
    toast.success(`${item.name} moved to cart!`);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Wishlist</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-8">
            <Heart className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-xs text-gray-500">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleMoveToCart(item)}
                      className="p-1 hover:bg-green-100 rounded text-green-600"
                      title="Move to Cart"
                    >
                      <ShoppingCart className="h-3 w-3" />
                    </button>
                    <button 
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                      title="Remove from Wishlist"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-3">
              <Button 
                onClick={clearWishlist}
                variant="outline" 
                size="sm"
                className="w-full"
              >
                Clear Wishlist
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistDropdown;