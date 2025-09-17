const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About FCRA Registration
          </h2>
          <p className="text-xl text-gray-600">
            Legal authorization to receive foreign contributions for social welfare activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              What is FCRA?
            </h3>
            <p className="text-gray-600 mb-6">
              Foreign Contribution (Regulation) Act (FCRA) is a law that regulates the acceptance and utilization of foreign contributions by individuals, associations, and companies in India. Organizations need FCRA registration to legally receive foreign funding.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Legal acceptance of foreign funds
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Enhanced credibility with donors
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Access to international funding
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Compliance with government regulations
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              FCRA Process
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Eligibility Check</h4>
                  <p className="text-gray-600">Verify organization eligibility and requirements</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Document Preparation</h4>
                  <p className="text-gray-600">Prepare comprehensive application documents</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Online Application</h4>
                  <p className="text-gray-600">Submit application through FCRA portal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Approval & Certificate</h4>
                  <p className="text-gray-600">Receive FCRA certificate upon approval</p>
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