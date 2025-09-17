
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Users,
  Building,
  Award,
  Handshake,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Partner = () => {
  const benefits = [
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal support for all your business needs",
    },
    {
      icon: Building,
      title: "Bulk Processing",
      description: "Streamlined solutions for multiple entities",
    },
    {
      icon: Award,
      title: "Priority Support",
      description: "24/7 premium customer service",
    },
    {
      icon: Handshake,
      title: "Custom Solutions",
      description: "Tailored services for your industry",
    },
  ];

  const features = [
    "Volume discounts for bulk services",
    "Dedicated compliance dashboard",
    "Custom reporting and analytics",
    "API integration capabilities",
    "White-label solutions available",
    "Training and onboarding support",
  ];

  const partnerTypes = [
    {
      title: "CA Firms",
      description: "Chartered Accountant firms looking to expand their service offerings",
      benefits: ["Dedicated CA support", "Technical expertise", "Compliance assistance"]
    },
    {
      title: "Consultants",
      description: "Business consultants who want to offer comprehensive solutions",
      benefits: ["Business setup guidance", "Ongoing support", "Client management tools"]
    },
    {
      title: "Corporate Service Providers",
      description: "Organizations providing business services to multiple clients",
      benefits: ["Bulk processing", "Custom integrations", "Dedicated support team"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                Partnership Program
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Partner with United Fillings to provide comprehensive business services to your clients. 
                Our enterprise solutions are designed for accounting firms, consultants, and business service providers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Partner with United Fillings?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-blue-100 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg">
                  <span>Apply for Partnership</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Features Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Partnership Benefits</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-50">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Who Can Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with various types of professional service providers to expand our reach and serve clients better.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Partner with United Fillings?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact our partnership team to discuss how we can work together to serve your clients better.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 8106223262</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">partnerships@capi.in</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">Chennai, Tamil Nadu</p>
              </div>
            </div>

            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partner;
