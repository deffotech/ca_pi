import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expert Assistance for ESI Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-gray-700">
        <p>
          Employee State Insurance (ESI) registration is a mandatory compliance
          requirement for businesses in India, governed by the Employee State
          Insurance Corporation (ESIC). This scheme provides social security and
          health insurance benefits to Indian workers earning a specified
          monthly wage, typically extending to their dependents. Depending on
          the business type and location, it applies to companies with 10 or
          more employees.
        </p>
        <p>
          At United Fillings, our team of experts is dedicated to assisting businesses in
          navigating the complexities of ESI and PF registration. With our
          comprehensive understanding of regulatory requirements and a
          client-centric approach, we ensure a seamless and hassle-free ESI EPF
          registration online process for your establishment, securing the
          wide-ranging benefits of the ESI scheme for your employees.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">ESI Scheme</h3>
          <p>
            ESI (Employee State Insurance) operates following the ESI Act of
            1948. It is a government scheme designed to provide social security
            benefits to workers. The administration of this scheme falls under
            the purview of the Employee State Insurance Corporation (ESIC).
            Employers must formally register their establishments with ESIC and
            furnish worker details for inclusion in the program.
          </p>
          <p>
            Complying with the intricate regulations stipulated by the
            government can pose a significant challenge for employers. United Fillings'
            ESI experts are available to assist you with these matters.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Definition and Scope of Establishments Under the ESI Act
          </h3>
          <p>
            The Employee State Insurance (ESI) Act categorises an establishment
            as any organised entity involving men or women, regardless of its
            physical location. This includes retail outlets and commercial
            shops, which are mandated to enroll in the ESI scheme if they employ
            10 workers or 20 in certain states, provided these employees earn up
            to Rs. 21,000 per month, or Rs. 25,000 for individuals with
            disabilities.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Who is eligible for ESI Registration?
          </h3>
          <p>
            According to the official notice, the following state
            government-affiliated entities fall under the scope of the ESI Act
            according to Section 1(5):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Retail outlets</li>
            <li>Dining establishments or hotels solely involved in sales</li>
            <li>Movie theatres, including preview facilities</li>
            <li>Establishments related to road transportation</li>
            <li>Newspaper organisations (exempt from the Factory Act)</li>
            <li>Private healthcare facilities</li>
            <li>Private educational institutions</li>
            <li>Casual workers employed by Municipal Corporations or Bodies</li>
          </ul>
          <p>
            These entities are required to register with the ESIC if they have a
            workforce of 10 or more individuals.
          </p>
          <p>
            Furthermore, the Central Government has expanded the ESI Act's
            Section 1(5) coverage to include the following central
            government-related entities:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Retail outlets</li>
            <li>Hotels and dining establishments</li>
            <li>Establishments related to road transportation</li>
            <li>Cinemas, including preview theatres</li>
            <li>Newspaper organisations</li>
            <li>
              Businesses involved in:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Insurance</li>
                <li>Non-Banking Financial Companies (NBFCs)</li>
                <li>Port trusts</li>
                <li>Airport authorities</li>
                <li>Warehousing</li>
              </ul>
            </li>
          </ul>
          <p>
            For these central government-associated entities, mandatory PF ESI
            registration is required when employing 20 or more individuals.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Eligibility criteria for ESI registration
          </h3>
          <p>The eligibility criteria for ESI registration are as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Employees in establishments, factories, or shops with more than 10
              employees are eligible for ESI benefits under Section 2(12) of the
              ESI Act, 1948.
            </li>
            <li>
              All workers and their dependents across various industries and
              sectors can receive ESI medical benefits from ESIC-run hospitals
              and dispensaries.
            </li>
            <li>
              Women employees earning less than Rs. 21,000 per month and
              individuals with disabilities earning less than Rs. 25,000 per
              month are eligible for maternity benefits under the ESI Act. This
              includes medical and cash benefits, as well as paid leave for
              various conditions such as pregnancy (pre and post-delivery),
              medical termination, miscarriage, and adoption. ESI EPF
              registration is required for the employees to obtain the financial
              benefits.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Advantages of ESIC Registration
          </h3>
          <p>
            ESI and PF registration offers employees a comprehensive suite of
            benefits, safeguarding their health, income, and family. Key
            benefits include for the ESI registration:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sickness Benefit:</strong> Employees are entitled to
              receive 70% of their wages for up to 91 days a year during
              certified sickness periods.
            </li>
            <li>
              <strong>Extended Sickness Benefit:</strong> Employees can receive
              an extended benefit at 80% of their wages for up to two years for
              certain long-term and severe diseases.
            </li>
            <li>
              <strong>Enhanced Sickness Benefit:</strong> Full wage compensation
              is provided for employees undergoing sterilisation, with 7 days
              for Vasectomy and 14 days for Tubectomy.
            </li>
            <li>
              <strong>Medical Benefits:</strong> Comprehensive medical care is
              available to employees and their families, ensuring their
              well-being.
            </li>
            <li>
              <strong>Retired Medical Benefits:</strong> Retired employees and
              their spouses are eligible for continued medical benefits upon
              paying an annual premium of Rs. 120.
            </li>
            <li>
              <strong>Maternity Benefit:</strong> Pregnant women are entitled to
              total wages as maternity benefit for 26 weeks, extendable by a
              month, ensuring financial stability during childbirth.
            </li>
            <li>
              <strong>Dependents' Benefit:</strong> In the unfortunate event of
              an employee's death due to employment injury, 90% of the
              employee's wages are provided to their dependents as a monthly
              payment.
            </li>
            <li>
              <strong>Temporary Disablement Benefit:</strong> Employees
              suffering from an employment injury receive 90% of their wages as
              a benefit until the disability lasts.
            </li>
            <li>
              <strong>Permanent Disablement Benefit:</strong> In cases of
              permanent disability, employees are entitled to a monthly payment
              of 90% of their wages based on the loss of earning capacity as
              assessed by a Medical Board.
            </li>
            <li>
              <strong>Funeral Expenses:</strong> A fixed sum of Rs. 15,000 is
              provided to the dependents or the individual conducting the last
              rites, assisting with funeral expenses.
            </li>
          </ul>
          <p>
            These are the major benefits for ESI registration. It is important
            to open up the various benefits through the PF ESI registration.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Documents Required for ESI Registration
          </h3>
          <p>
            For the ESIC registration online process, businesses are not
            required to submit physical documents. The necessary documents to be
            uploaded during the online registration include
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Business Registration Proof: One of the following based on the
              business type:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Factories Act Registration Certificate.</li>
                <li>Shops and Establishment Act Registration Certificate.</li>
              </ul>
            </li>
            <li>
              Establishment Incorporation Certificate, applicable as per the
              entity type:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Company Registration Certificate for companies.</li>
                <li>Partnership deed for partnership firms.</li>
              </ul>
            </li>
            <li>
              Goods and Services Tax (GST) Registration Certificate of the
              establishment.
            </li>
            <li>
              Company's Founding Documents:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Memorandum of Association (MoA).</li>
                <li>Articles of Association (AoA).</li>
              </ul>
            </li>
            <li>
              Establishment's Address Proof: One of the following can be
              provided:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>
                  Recent utility bill (electricity, gas, or telephone not older
                  than three months).
                </li>
                <li>Rental agreement for the establishment's premises.</li>
                <li>Property tax receipt for the establishment's location.</li>
              </ul>
            </li>
            <li>
              Employee Details: A comprehensive list of all employees at the
              establishment.
            </li>
            <li>
              PAN Cards: PAN details of the business and all employed
              individuals.
            </li>
            <li>
              Employee Compensation Details: Information on the salary/wages of
              all employees.
            </li>
            <li>
              Banking Information: A cancelled cheque from the company's bank
              account.
            </li>
            <li>
              Company Leadership Details:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>List of the company's directors.</li>
                <li>List of the company's shareholders.</li>
              </ul>
            </li>
            <li>
              Employee Attendance Register: Maintaining a record of employee
              attendance.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Compliances After ESIC Registration
          </h3>
          <p>
            After ESI (Employee's State Insurance) registration, an
            establishment must adhere to specific compliances and file requisite
            ESI returns. These obligations are crucial for ensuring seamless
            operation and adherence to regulatory standards. The mandatory
            compliances include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Attendance Register Maintenance:</strong> The
              establishment must diligently maintain an attendance register to
              record the attendance of all employees. This serves as a
              fundamental document for compliance and internal record-keeping.
            </li>
            <li>
              <strong>Register of Wages:</strong> A comprehensive register of
              wages for workers should be meticulously maintained. This register
              is vital for transparent documentation of salary details and
              ensures compliance with ESIC regulations.
            </li>
            <li>
              <strong>Inspection Book:</strong> An inspection book must be kept
              to record any inspection on the premises. This facilitates
              transparency and regulatory compliance during official
              inspections.
            </li>
            <li>
              <strong>Monthly Return and Challan Submission:</strong> The
              establishment must submit monthly returns and challans within the
              first 15 days of the succeeding month. This includes providing
              details of employees, their attendance, and the corresponding
              contributions to the ESIC.
            </li>
            <li>
              <strong>Accident Register:</strong> A register documenting
              accidents on the premises is mandatory. Accurate recording of
              accidents is essential for compliance. It facilitates a proactive
              approach towards workplace safety.
            </li>
          </ul>
          <p>
            These are crucial obligations that must be met. Other compliance
            regulations for EPF and ESIC registration have to be followed which
            you can ask those to our United Fillings experts.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            ESIC Registration Online Process
          </h3>
          <p>
            The process for ESIC registration has shifted from a manual to a
            completely online system, making it more accessible and efficient.
            Businesses looking to register under ESIC can now complete the
            entire process through the official ESIC portal. For those who find
            navigating online EPF ESIC registration a challenge, United Fillings offers
            expert assistance. Our team is well-versed in the intricacies of the
            ESIC online portal and can guide you through each step, ensuring a
            smooth and successful EPF ESIC registration for your business.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Why Choose United Fillings for ESI registration?
          </h3>
          <p>
            United Fillings' team of seasoned professionals, including chartered
            accountants and legal experts, offers premier legal and compliance
            ESI PF registration services in India. We recognize the critical
            nature of an employer's obligation for ESI registration and approach
            this task with the highest degree of diligence and attention to
            detail. Our EPF ESI Registration process is streamlined, efficient,
            and designed to save you time. Transparency is at the core of our
            service delivery, ensuring you receive regular updates throughout
            the process. Should you have any inquiries during the EPF ESI
            registration or filing process, our expert team is readily available
            to provide you with the necessary support and guidance.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
