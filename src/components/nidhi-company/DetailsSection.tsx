const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Nidhi Company Registration</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          A Nidhi Company is a type of non-banking financial company (NBFC) that deals exclusively with its members. 
          It is established with the primary objective of cultivating the habit of thrift and savings among its members, 
          receiving deposits from, and lending to, its members only.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features of Nidhi Company</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Minimum 7 members required for incorporation</li>
          <li>Minimum paid-up share capital of Rs. 5 lakhs</li>
          <li>Business limited to accepting deposits and lending to members only</li>
          <li>No requirement for RBI license</li>
          <li>Governed by Companies Act, 2013 and Nidhi Rules, 2014</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Benefits</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Easy incorporation process</li>
          <li>No RBI license required</li>
          <li>Limited regulatory compliance</li>
          <li>Mutual benefit organization</li>
          <li>Tax benefits available</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;