const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Demat of Shares
          </h2>
          <p className="text-xl text-gray-600">
            Professional service to convert physical shares to electronic format
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              What is Dematerialization?
            </h3>
            <p className="text-gray-600 mb-6">
              Dematerialization is the process of converting physical share certificates into electronic form. This electronic format is stored in a Demat account, making trading and transfer of shares much easier and safer.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Eliminates risk of physical certificate loss
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Faster settlement of trades
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Easy transfer and transmission
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                No stamp duty on transfer
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Process Overview
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Submit Documents</h4>
                  <p className="text-gray-600">Physical certificates and required forms</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verification</h4>
                  <p className="text-gray-600">Document verification and processing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Conversion</h4>
                  <p className="text-gray-600">Electronic credit to Demat account</p>
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