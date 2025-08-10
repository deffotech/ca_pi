const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About ADT-1 Filing</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          ADT-1 is a mandatory form that needs to be filed with the Ministry of Corporate Affairs (MCA) 
          for the appointment of auditors in companies. This form is required to be filed within 15 days 
          of the auditor's appointment.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">When is ADT-1 Required?</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>First appointment of auditor</li>
          <li>Re-appointment of existing auditor</li>
          <li>Appointment of new auditor after resignation</li>
          <li>Casual vacancy filling</li>
          <li>Change of auditor during the term</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Compliance Points</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Must be filed within 15 days of appointment</li>
          <li>Requires auditor's consent and qualification details</li>
          <li>Board resolution mandatory for appointment</li>
          <li>Late filing attracts penalty</li>
          <li>Digital signature of authorized person required</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;