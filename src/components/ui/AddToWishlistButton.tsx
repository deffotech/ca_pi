import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { toast } from "sonner";
import { Heart } from "lucide-react";

interface AddToWishlistButtonProps {
  serviceId: string;
  serviceName: string;
  price: number;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link";
  children?: React.ReactNode;
}

const AddToWishlistButton = ({ 
  serviceId, 
  serviceName, 
  price, 
  className = "p-2 hover:bg-gray-100 rounded-lg",
  variant = "ghost",
  children
}: AddToWishlistButtonProps) => {
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleWishlistToggle = () => {
    if (isInWishlist(serviceId)) {
      removeFromWishlist(serviceId);
      toast.success(`${serviceName} removed from wishlist`);
    } else {
      addToWishlist({
        id: serviceId,
        name: serviceName,
        price: price,
      });
      toast.success(`${serviceName} added to wishlist!`);
    }
  };

  return (
    <Button 
      onClick={handleWishlistToggle}
      className={className}
      variant={variant}
    >
      <Heart 
        className={`h-4 w-4 ${isInWishlist(serviceId) ? 'fill-current text-red-500' : ''}`} 
      />
      {children}
    </Button>
  );
};

export default AddToWishlistButton;