const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About AOA Amendment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Articles of Association (AOA) govern the internal management and operations of your company. Amendment allows you to modify rules related to directors, meetings, and corporate governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Internal Governance
            </h3>
            <p className="text-gray-600">
              Modify rules related to board meetings, director appointments, voting procedures, and internal decision-making processes.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Operational Changes
            </h3>
            <p className="text-gray-600">
              Update provisions for share transfers, dividend distribution, borrowing powers, and other operational aspects of the company.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Legal Compliance
            </h3>
            <p className="text-gray-600">
              Ensure all amendments comply with Companies Act provisions and maintain proper corporate governance standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;