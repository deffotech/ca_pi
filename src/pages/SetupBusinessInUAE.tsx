import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Globe, FileText, Users, Shield, TrendingUp } from 'lucide-react';

const SetupBusinessInUAE = () => {
  const benefits = [
    {
      icon: Building,
      title: "Free Zone Benefits",
      description: "100% foreign ownership, tax exemptions, and full repatriation of capital and profits"
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Gateway to Middle East, Africa, and Asia with excellent connectivity"
    },
    {
      icon: FileText,
      title: "Easy Setup Process",
      description: "Streamlined registration process with minimal documentation requirements"
    },
    {
      icon: Users,
      title: "Business Support",
      description: "Dedicated business support services and networking opportunities"
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Strong legal framework and intellectual property protection"
    },
    {
      icon: TrendingUp,
      title: "Growth Potential",
      description: "Access to growing markets and diverse business opportunities"
    }
  ];

  const services = [
    {
      title: "Free Zone Company Registration",
      description: "Register your business in UAE free zones with 100% ownership",
      price: "Starting from ₹25,000"
    },
    {
      title: "Mainland Company Setup",
      description: "Establish a mainland company with local sponsorship",
      price: "Starting from ₹35,000"
    },
    {
      title: "Visa Processing",
      description: "Business and employment visa services for you and your team",
      price: "Starting from ₹15,000"
    },
    {
      title: "Banking Services",
      description: "Assistance with corporate bank account opening",
      price: "Starting from ₹10,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Setup Business in UAE
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Establish your business presence in the UAE with our expert guidance. 
              From free zone registration to mainland company setup, we help you navigate 
              the entire process seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg">
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Setup Business in UAE?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The UAE offers exceptional business opportunities with its strategic location, 
              tax benefits, and investor-friendly policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our UAE Business Setup Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to help you establish and grow your business in the UAE
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple 5-Step Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make UAE business setup simple and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "Free initial consultation to understand your requirements" },
              { step: "2", title: "Documentation", desc: "We help prepare all required documents" },
              { step: "3", title: "Application", desc: "Submit application to relevant authorities" },
              { step: "4", title: "Approval", desc: "Track application status and get approvals" },
              { step: "5", title: "Setup Complete", desc: "Your business is ready to operate in UAE" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Setup Your Business in UAE?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert guidance and start your UAE business journey today. 
            Our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Download Free Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SetupBusinessInUAE;
