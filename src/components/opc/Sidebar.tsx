
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
  const { addToCart } = useCart();

  

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
      <div className="text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">Connect with our Experts</h3>
        <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
      </div>

      <div className="mt-6 text-sm text-center">
        <span className="text-gray-600">Existing User? </span>
        <Link to="/auth" className="font-medium text-green-600 hover:text-green-700">Login</Link>
      </div>

      <form className="mt-6 space-y-4">
        <div>
          <Input type="text" placeholder="Name" />
        </div>
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="flex">
            <Input type="text" value="+91" readOnly className="w-16 rounded-r-none bg-gray-100 text-center" />
            <Input type="tel" placeholder="Phone" className="rounded-l-none" />
        </div>
       
        <Button className='w-full'
          type="button" 
         
        >
          send 
        </Button>
      </form>
    </div>
  );
};

export default Sidebar;
