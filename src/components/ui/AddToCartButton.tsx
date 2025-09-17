import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface AddToCartButtonProps {
  serviceId: string;
  serviceName: string;
  price: number;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link";
  children?: React.ReactNode;
}

const AddToCartButton = ({ 
  serviceId, 
  serviceName, 
  price, 
  className = "w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50",
  variant = "outline",
  children = "ADD"
}: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: serviceId,
      name: serviceName,
      price: price,
    });
    toast.success(`${serviceName} added to cart!`);
  };

  return (
    <Button 
      onClick={handleAddToCart}
      className={className}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default AddToCartButton;