
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'din-ekyc-filing',
      name: 'DIN eKYC Filing',
      price: 1999
    });
    toast.success('DIN eKYC Filing added to cart!');
  };

  return (
    <aside className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-8">
      <div className="text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-xl font-semibold text-gray-900">Your cart is empty</h3>
        <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
      </div>

      <div className="mt-6">
        <p className="text-center text-sm">
          Existing User? <Link to="/login" className="font-medium text-green-600 hover:text-green-500">Login</Link>
        </p>

        <form action="#" method="POST" className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Name"
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">🇮🇳 +91</span>
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="Phone"
                className="block w-full rounded-md border-0 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="gst-credit"
              name="gst-credit"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
            />
            <label htmlFor="gst-credit" className="ml-2 block text-sm text-gray-900">Enter GSTIN to get 18% GST Credit</label>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
