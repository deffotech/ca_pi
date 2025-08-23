
import ExpertRequestForm from '@/components/ExpertRequestForm';

const CartSidebar = () => {
  return (
    <aside className="w-full max-w-md mx-auto bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 sticky top-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Expert Assistance</h3>
        <p className="text-gray-500 mb-4 text-sm">
          Fill out the form below and our experts will contact you within 24 hours. Provide as much detail as possible so we can better understand your needs and provide you with the most relevant assistance.
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-semibold text-sm">1</span>
            </div>
            <span className="text-sm">Fill out the contact form</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-semibold text-sm">2</span>
            </div>
            <span className="text-sm">Our expert reviews your request</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-semibold text-sm">3</span>
            </div>
            <span className="text-sm">We contact you within 24 hours</span>
          </div>
        </div>
      </div>
      <ExpertRequestForm />
    </aside>
  );
};

export default CartSidebar;
