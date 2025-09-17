const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About LLP Form 11 Filing</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          Form 11 is the annual information statement that every Limited Liability Partnership (LLP) 
          must file with the Registrar of Companies. It contains information about the LLP's 
          activities, partners, and financial status.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Filing Requirements</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>All LLPs must file Form 11 annually</li>
          <li>Filing deadline is within 60 days of financial year end</li>
          <li>Contains details of partners and their contributions</li>
          <li>Includes information about business activities</li>
          <li>Required for maintaining LLP compliance</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Consequences of Non-Filing</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Penalty of ₹100 per day of delay</li>
          <li>LLP may be struck off from register</li>
          <li>Partners may face disqualification</li>
          <li>Legal consequences and prosecution</li>
          <li>Difficulty in bank operations and compliance</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;