const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About DPT-3 Filing</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          DPT-3 is a mandatory annual return that must be filed by companies that have accepted 
          deposits from the public. This form provides details about the deposits accepted, 
          repaid, and outstanding as on the date of filing.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Who Must File DPT-3?</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Companies that have accepted deposits from public</li>
          <li>Companies with outstanding deposits</li>
          <li>Companies that have repaid all deposits during the year</li>
          <li>Eligible companies under Companies Act, 2013</li>
          <li>NBFCs accepting public deposits</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Filing Timeline</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Must be filed within 30 days from the date of AGM</li>
          <li>Maximum 60 days from the end of financial year</li>
          <li>Late filing attracts penalty and consequences</li>
          <li>Non-filing may result in prosecution</li>
          <li>Regular compliance maintains good standing</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;