
import { CheckCircle, Users, Building, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "10,00,000+", label: "Businesses Served" },
    { number: "50+", label: "Professional Services" },
    { number: "15+", label: "Years of Experience" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              India's Leading Business Services Platform
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              IndiaFilings has been helping entrepreneurs and businesses across India with their legal and compliance needs since 2009. We are the trusted partner for company registration, tax filing, trademark protection, and ongoing compliance services.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Qualified CAs, lawyers, and business consultants</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Technology Driven</h4>
                  <p className="text-gray-600">Modern platform for seamless service delivery</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                  <p className="text-gray-600">No hidden charges, clear pricing for all services</p>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
