const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Society Registration</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          A Society is a non-profit organization registered under the Societies Registration Act, 1860. 
          It is formed by a group of people who come together for promoting art, science, literature, 
          charitable purposes, or any other useful purpose.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Minimum 7 members required for registration</li>
          <li>Non-profit organization with charitable objectives</li>
          <li>Governed by memorandum of association and rules</li>
          <li>Eligible for tax exemptions under 80G and 12A</li>
          <li>Can receive foreign funding with FCRA registration</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Benefits</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Legal recognition and separate legal entity</li>
          <li>Tax exemption benefits available</li>
          <li>Can accept donations and grants</li>
          <li>Perpetual succession</li>
          <li>Limited liability of members</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;