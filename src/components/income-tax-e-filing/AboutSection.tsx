import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const steps = [
    {
      title: "Sign-in & create profile",
      description: "Quick & simple onboarding",
    },
    { title: "Quick Data Entry", description: "Details auto-fetched" },
    { title: "Review returns", description: "Details auto-filled" },
    {
      title: "ITR Computation",
      description: "Select between old and new regime",
    },
    { title: "File return", description: "File return & get acknowledgement" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Income Tax e Filing</h2>
      <p className="text-gray-600 mb-6">
        Filing Income Tax return is a crucial duty of every taxpayer in India,
        ensuring adherence to the nation's tax regulations. Income tax e-filing
        online streamlines this process for both individuals and businesses.
        It's a convenient and efficient way to file taxes with the Income Tax
        Department. Early ITR e-filing helps avoid errors and last-minute
        technical glitches, ensuring a smoother submission process.
      </p>
      <p className="text-gray-600 mb-6">
        United Fillings simplifies the entire income tax e-filing process by providing an
        online, user-friendly platform. Our experts guide you step-by-step, from
        auto-fetching your pre-filled data to assisting you in choosing the
        right tax regime. Whether you're an individual or a business owner, our
        team of experts provides personalised assistance based on your income
        and requirements.
      </p>
      <p className="text-gray-600 mb-8">
        Experience a seamless ITR filing process online with United Fillings and say
        goodbye to tax season stress!
      </p>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-center mb-6">
          5 Quick Steps to file your ITR Online
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-[150px]">
                <div className="bg-blue-100 rounded-full p-3 mb-2">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <p className="font-semibold">{step.title}</p>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block border-t-2 border-dashed border-gray-300 flex-grow mt-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
