const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Company Winding Up
          </h2>
          <p className="text-xl text-gray-600">
            Professional service for closing and dissolving companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              What is Company Winding Up?
            </h3>
            <p className="text-gray-600 mb-6">
              Company winding up is the process of bringing a company to an end and distributing its assets to claimants. It is the last stage of a company's existence and can be voluntary or compulsory under the Companies Act, 2013.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Voluntary or compulsory winding up
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Asset liquidation and distribution
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Creditor and shareholder settlement
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
                  <h4 className="font-semibold text-gray-900">Board Resolution</h4>
                  <p className="text-gray-600">Directors pass resolution for winding up</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Shareholder Approval</h4>
                  <p className="text-gray-600">Special resolution by shareholders</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Liquidator Appointment</h4>
                  <p className="text-gray-600">Appoint liquidator for asset management</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Final Settlement</h4>
                  <p className="text-gray-600">Settle all debts and distribute assets</p>
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