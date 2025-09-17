import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DetailsSection = () => {
  const applicableStates = [
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Gujarat",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Pondicherry",
    "Punjab",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "West Bengal",
  ];
  const nonApplicableStates = [
    "Central",
    "Andaman and Nicobar Islands",
    "Arunachal Pradesh",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Rajasthan",
    "Uttar Pradesh",
    "Uttarakhand",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Professional Tax Registration Certificate and Compliance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Professional tax is a direct tax levied on persons earning an income
          by either practicing a profession, employment, calling, or trade.
          Unlike income tax imposed by the Central Government, professional tax
          payment is levied by the government of a state or union territory in
          India. In the case of salaried and wage earners, the professional tax
          is liable to be deducted by the Employer from the salary/wages, and
          the same is to be deposited to the state government. In the case of
          other classes of individuals, this tax is liable to be paid by the
          employee himself. The tax calculation and amount collected may vary
          from one State to another, but it has a maximum limit of Rs. 2500/-
          per year. To comply with these rules, the P tax registration must be
          completed by the respective entity without fail.
        </p>
        <p className="font-semibold text-green-600">
          Get expert help from United Fillings for seamless professional tax payment based
          on your state's rules and regulations!
        </p>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Professional Tax Applicability
          </h3>
          <p>
            This tax is levied on all kinds of professions, trades, and
            employment. Professional tax payment is applicable to the following
            classes of persons:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>An Individual</li>
            <li>A Hindu Undivided Family (HUF)</li>
            <li>
              A Company/Firm/Co-operative Society/Association of persons or a
              body of individuals, whether incorporated or not
            </li>
          </ul>
          <p className="mt-2">
            The professionals earning an income from salary or other practices
            such as a lawyer, teachers, doctors, chartered accountants, etc. are
            required to do P tax registration, obtain P tax certificate and pay
            professional tax.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Professional Tax Applicable States across India
          </h3>
          <p>
            Please refer to the following table to know more about the states
            which impose PTRC registration in India:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Applicable States</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {applicableStates.map((state) => (
                    <li key={state}>{state}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Non-Applicable States</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {nonApplicableStates.map((state) => (
                    <li key={state}>{state}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            These are the applicable and non-applicable states subjected to
            registration and obtain Professional tax number.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">Professional Tax Rate</h3>
          <p>
            The maximum amount payable per annum towards professional tax is INR
            2,500. The professional tax is usually a slab amount based on the
            gross income of the professional. It is deducted from his income
            every month.
          </p>
          <p>
            The Commercial Taxes Department of a state/union territory is the
            nodal agency that collects professional tax on the basis of
            predetermined tax slabs which vary for each state and union
            territory. The tax is calculated on the annual taxable income of the
            individual; however, it can be paid either annually or monthly.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Who Pays Profession Tax?
          </h3>
          <p>
            In the case of Salaried and Wage-earners, the Professional Tax is
            liable to be deducted by the Employer from the Salary/Wages, and the
            Employer is liable to deposit the same with the state government.
          </p>
          <p>
            Self-employed persons who carry out their profession or trade on
            their own and fall in the ambit of profession tax are liable to pay
            the tax themselves to the state government. This class of people
            must done the registration and obtain Professional tax number.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Employer’s Responsibility for Professional Tax
          </h3>
          <p>
            The owner of a business is responsible for deducting professional
            tax from the salaries of his employees and paying the amount so
            collected to the appropriate government department. He/she has to
            furnish a return to the tax department in the prescribed form within
            the specified time. The return should include proof of tax payment.
            In case of not enclosing the payment proof, the register will
            consider the return incomplete and invalid. Thus, all the entities
            with a professional tax enrollment certificate must pay the
            professional tax in the specified time.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Exemptions for Professional Tax Payment
          </h3>
          <p>
            There are exemptions provided for certain individuals to pay
            Professional Tax under the Professional Tax Rules. The following
            individuals are exempted from paying Professional Tax and PTRC
            registration:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Parents of children with permanent disability or mental disability
            </li>
            <li>
              Members of the forces as defined in the Army Act, 1950, the Air
              Force Act, 1950, and the Navy Act, 1957 including members of
              auxiliary forces or reservists, serving in the State.
            </li>
            <li>Badli workers in the textile industry</li>
            <li>
              An individual suffering from a permanent physical disability
              (including blindness)
            </li>
            <li>
              Women exclusively engaged as agents under the Mahila Pradhan
              Kshetriya Bachat Yojana or Director of Small Savings.
            </li>
            <li>
              Parents or guardians of individuals suffering from a mental
              disability.
            </li>
            <li>Individuals, above 65 years of age</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Professional Tax Registration Certificate and Compliance
          </h3>
          <p>
            P Tax registration for professionals is mandatory within 30 days of
            employing staff in a business or, in the case of professionals, 30
            days from the start of the practice.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Application for a P tax certificate should be made to the assessed
              state tax department within 30 days of employing staff for his
              business.
            </li>
            <li>
              If the assessee has more than one place of work, then the
              application should be made separately to each authority with
              respect to the place of work under the jurisdiction of that
              authority.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Due Dates for Professional Tax Payment
          </h3>
          <p>
            If an employer has employed more than 20 employees, he is required
            to make the payment within 15 days from the end of the month.
            However, if an employer has less than 20 employees, he is required
            to pay quarterly (i.e. by the 15th of next month from the end of the
            quarter).
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Professional Tax Return
          </h3>
          <p>
            The Professional Tax Return is to be filed by all the persons who
            are subject to professional tax and the due dates for filing of such
            returns vary from State to State.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Benefits of Professional Tax Registration
          </h3>
          <p>
            The benefits of P tax registration for professionals are given
            below.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              It is simple to comply with the Professional Tax Compliance, which
              results in a smooth P tax registration process with minimum
              restrictions.
            </li>
            <li>
              It is compulsory to pay Professional tax and complete PTRC
              registration as per the law. Hence, the timely payment of
              Professional tax can help avoid penalties and any punitive action
              against the Employer or a self-employed person.
            </li>
            <li>
              Professional Tax Compliance is simple, which can enable a smooth
              and hassle-free Registration Process.
            </li>
            <li>
              The Professional Tax acts as a revenue source for the state
              governments that helps the government to implement schemes for the
              various welfare and development of the region.
            </li>
            <li>
              The Employer or the self-employed person with a professional tax
              enrollment certificate can claim a deduction on the previously
              paid professional tax.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            How to Register for Professional Tax?
          </h3>
          <p>
            Professional tax registration process: The process for fulfilling
            professional tax obligations varies by state. Additionally, filing
            deadlines for these taxes also differ depending on state
            regulations. Professionals/Employers required to follow the
            procedures outlined below for how to register for professional tax
            and pay the tax.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              The applicant must file the application form and the requisite
              documents.
            </li>
            <li>
              The applicant needs to submit the Application with the necessary
              documents to the concerned state government. A copy of the same
              should also be submitted to the tax department.
            </li>
            <li>
              On receipt of an application, the tax authority shall scrutinize
              the application to ensure that all the information is correct.
            </li>
            <li>
              Issue of P Tax Certificate: The authority will issue the P tax
              certificate after successfully scrutinizing all the documents.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Penalties Related To Professional Tax Registration
          </h3>
          <p>
            When professional tax policy becomes applicable, all such
            jurisdictions may impose a penalty for failure to register
            Profession Tax. However, the precise amount of the Penalty will
            depend on state regulatory law.
          </p>
          <p>
            There are also penalties for failing to submit the PT return by the
            deadline and withholding payments after they are due. Each state’s
            professional tax regulations determine the actual fine. Businesses
            that fail to register professional tax, pay taxes late, or file
            returns on time may face fines, late fees, or imprisonment.
          </p>
          <p>
            Failure to make a payment by the due date and failure to file a
            return by the due date carries additional penalties. For example,
            the following information outlines the penalty amount imposed by the
            Maharashtra Government for late filing or failure to pay
            Professional Tax in Maharashtra.
          </p>
          <Table className="mt-4">
            <TableHeader>
              <TableRow>
                <TableHead>Nature of default</TableHead>
                <TableHead>Penalty Leviable</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Not obtaining PT registration</TableCell>
                <TableCell>Rs.5/- per day</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Late filing of PT return</TableCell>
                <TableCell>Rs.1,000/-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Late payment of PT dues</TableCell>
                <TableCell>Interest @1.25% p.m. Penalty @10%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="mt-2 text-sm text-gray-600">
            For example, professional tax of Rs.1 Lakh is delayed by 12 months,
            then the simple interest payable is Rs.1,250/- and a Penalty of
            Rs.10,000. Total= Rs.11,250
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Maximum Penalty for delay in payment of Rs.1 Lakh for a year and
            return filing also delayed = 12250
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold pt-4 mb-2">
            Seamless Professional Tax Registration Services with United Fillings
          </h3>
          <p>
            United Fillings can assist you in simplifying the process of obtaining a
            Professional Tax Registration Certificate in India. Here's how our
            services can benefit you:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Expert Guidance: United Fillings provides expert guidance on the Tax
              Registration process for professionals. Our team is well-versed in
              the nuances of tax regulations and can ensure that your
              registration complies with the latest rules.
            </li>
            <li>
              Application Submission: United Fillings will handle submitting your Tax
              Registration application to the relevant authorities on your
              behalf. This ensures accuracy and compliance with all legal
              requirements.
            </li>
            <li>
              Timely Processing: With United Fillings' professional handling, you can
              expect timely processing of your application, reducing waiting
              times and allowing you to obtain your P tax certificate promptly.
            </li>
            <li>
              Customized Support: United Fillings understands that each business and
              profession has unique requirements. We offer personalized support
              tailored to your needs, ensuring your registration aligns
              perfectly with your professional status.
            </li>
            <li>
              Compliance Assurance: Staying updated with ever-changing tax laws
              and regulations is crucial. United Fillings pays attention to the details,
              ensuring that your registration complies with all necessary tax
              laws and guidelines.
            </li>
            <li>
              Customer Support: Should you have any questions or concerns during
              the registration process, United Fillings' customer support team is readily
              available to address your queries and provide timely assistance.
            </li>
          </ul>
        </div>

        <p className="font-semibold text-green-600">
          File Your Professional Taxes Efficiently with United Fillings!
        </p>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
