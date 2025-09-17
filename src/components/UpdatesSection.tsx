
import { Calendar, FileText } from 'lucide-react';

const UpdatesSection = () => {
  const updates = [
    {
      title: "From July 1, 2025, GST returns pending over 3 years can no longer be filed. Act Now!",
      date: "30 Jun 2025",
      tag: "GST Update",
      type: "update"
    },
    {
      title: "ITR 1 & ITR 4 enabled for AY 2025-26 with prefilled data. File your return now!",
      date: "05 Jun 2025", 
      tag: "ITR Filing",
      type: "update"
    },
    {
      title: "Attention Taxpayers! Excel Utility for ITR 1 & 4 (AY 2025-26) is now live. File Now!",
      date: "02 Jun 2025",
      tag: "ITR Filing", 
      type: "update"
    }
  ];

  const dueDates = [
    {
      title: "Provident Fund EPF & ESI Returns and Payment for May 2025",
      date: "15 Jun 2025"
    },
    {
      title: "Issuance of TDS Certificates Form 16/16A for Jan to March 2025",
      date: "15 Jun 2025"
    },
    {
      title: "Advance tax Payment for April to June 2025 (1st Installment)",
      date: "15 Jun 2025"
    },
    {
      title: "GSTR 3B for May 2025(Monthly)",
      date: "20 Jun 2025"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Updates & Alerts */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Updates & Alerts</h3>
            </div>
            <div className="space-y-4">
              {updates.map((update, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">{update.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Published on: {update.date}</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {update.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Due Dates */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-orange-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Due Dates</h3>
            </div>
            <div className="space-y-4">
              {dueDates.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">{item.title}</h4>
                  <div className="text-xs text-gray-500">Due Date: {item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
