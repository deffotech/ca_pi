const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About LLP Winding Up
          </h2>
          <p className="text-xl text-gray-600">
            Professional service for closing and dissolving Limited Liability Partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              What is LLP Winding Up?
            </h3>
            <p className="text-gray-600 mb-6">
              LLP winding up is the process of closing down a Limited Liability Partnership in accordance with the provisions of the LLP Act, 2008. It involves settling all debts, distributing assets, and formally dissolving the partnership.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Voluntary or compulsory closure
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Asset liquidation and distribution
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Debt settlement process
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Legal compliance and documentation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Winding Up Process
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Resolution Passing</h4>
                  <p className="text-gray-600">Partners pass special resolution for winding up</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Liquidator Appointment</h4>
                  <p className="text-gray-600">Appoint liquidator for asset management</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Asset Settlement</h4>
                  <p className="text-gray-600">Settle debts and distribute remaining assets</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Final Dissolution</h4>
                  <p className="text-gray-600">File final forms and dissolve LLP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;