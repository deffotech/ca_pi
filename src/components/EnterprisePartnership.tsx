
import {
  Users,
  Building,
  Award,
  Handshake,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const EnterprisePartnership = () => {
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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Enterprise Partnership Program
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Partner with United Fillings to provide comprehensive business services to
              your clients. Our enterprise solutions are designed for accounting
              firms, consultants, and business service providers.
            </p>

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

            <Link 
              to="/partner"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg w-fit"
            >
              <span>Become a Partner</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
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

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl border border-green-400/30">
              <h4 className="font-semibold text-green-300 mb-2">
                Ready to Scale?
              </h4>
              <p className="text-green-100 text-sm mb-4">
                Join our network of successful partners and grow your business
                with our proven platform.
              </p>
              <Link 
                to="/partner"
                className="text-green-300 font-semibold hover:text-green-200 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePartnership;
