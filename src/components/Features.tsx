import { CheckCircle, Clock, Shield, Users, Award, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Online Process",
      description:
        "Complete your business registration and compliance requirements entirely online with our streamlined digital platform.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Fast processing times with most services completed within 7-15 business days, keeping your business moving forward.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "Bank-level security with complete regulatory compliance, ensuring your business data and processes are protected.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Dedicated team of chartered accountants, company secretaries, and legal experts to guide you through every step.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Award,
      title: "Trusted by 10L+ Businesses",
      description:
        "Join over 1 million satisfied customers who trust United Fillings for their business and compliance needs.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description:
        "Real-time notifications and updates on your application status, so you're always in the loop.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose United Fillings?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We make business registration and compliance simple, fast, and
            reliable with our cutting-edge technology and expert support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
