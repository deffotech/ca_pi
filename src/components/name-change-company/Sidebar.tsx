
import { ShoppingBag } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-full max-w-md mx-auto bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 sticky top-8">
      <div className="text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">Your cart is empty</h3>
        <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
      </div>
    </aside>
  );
};

export default Sidebar;
