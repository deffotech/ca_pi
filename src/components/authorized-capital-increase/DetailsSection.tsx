const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Authorized Capital Increase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Authorized capital represents the maximum amount of share capital that a company can issue. Increasing authorized capital provides flexibility for future fund raising and business expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Business Expansion
            </h3>
            <p className="text-gray-600">
              Increase authorized capital to support business growth, new projects, or to accommodate future investment rounds.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Regulatory Process
            </h3>
            <p className="text-gray-600">
              The process involves board resolution, shareholder approval, MCA filing, and payment of applicable stamp duty and fees.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Future Flexibility
            </h3>
            <p className="text-gray-600">
              Higher authorized capital provides flexibility for future equity dilution and strategic business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;