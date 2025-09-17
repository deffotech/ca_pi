const OffersSection = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Special Offers
          </h2>
          <p className="text-xl text-gray-600">
            Limited time offers on capital increase services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Popular
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">33% OFF</h3>
            <p className="text-gray-600 mb-4">Standard capital increase service</p>
            <p className="text-3xl font-bold text-green-600">₹5,999</p>
            <p className="text-gray-500 line-through">₹8,999</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Express
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fast Track</h3>
            <p className="text-gray-600 mb-4">Quick processing in 10 days</p>
            <p className="text-3xl font-bold text-green-600">₹8,999</p>
            <p className="text-gray-500 line-through">₹12,999</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Premium
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Package</h3>
            <p className="text-gray-600 mb-4">With legal consultation & support</p>
            <p className="text-3xl font-bold text-green-600">₹11,999</p>
            <p className="text-gray-500 line-through">₹16,999</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;