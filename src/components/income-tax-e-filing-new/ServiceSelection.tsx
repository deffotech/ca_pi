
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ServiceSelection = () => {
  const services = [
    {
      title: "30 Minutes - Tax Consultation",
      features: [
        "Tax Consultation",
        "Business Consultation", 
        "Legal consultation",
        "Commercial Consultation"
      ]
    },
    {
      title: "30 Minutes - Tax Consultation",
      features: [
        "Tax Consultation", 
        "Business Consultation",
        "Legal consultation",
        "Commercial Consultation"
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Income Tax E-Filing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="p-6">
            <h3 className="font-semibold mb-4">{service.title}</h3>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600">• {feature}</li>
              ))}
            </ul>
            <Button 
              className="w-full"
              style={{ backgroundColor: '#C5BAFF', borderColor: '#C5BAFF', color: '#000' }}
              onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
            >
              Enquire Now
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceSelection;
