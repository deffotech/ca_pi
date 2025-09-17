const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Udyam Registration
          </h2>
          <p className="text-xl text-gray-600">
            Official MSME registration portal for small and medium enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              What is Udyam Registration?
            </h3>
            <p className="text-gray-600 mb-6">
              Udyam Registration is the new online registration process for Micro, Small, and Medium Enterprises (MSMEs) in India. It replaced the earlier Udyog Aadhaar registration and provides a single platform for MSME registration.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Government subsidies and benefits
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Easy access to credit and loans
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Priority in government tenders
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Tax benefits and exemptions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              MSME Categories
            </h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Micro Enterprise</h4>
                <p className="text-gray-600 text-sm">Investment up to ₹1 crore and turnover up to ₹5 crore</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Small Enterprise</h4>
                <p className="text-gray-600 text-sm">Investment up to ₹10 crore and turnover up to ₹50 crore</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Medium Enterprise</h4>
                <p className="text-gray-600 text-sm">Investment up to ₹50 crore and turnover up to ₹250 crore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;