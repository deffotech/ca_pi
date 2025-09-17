const complianceData = [
  {
    compliance: "Commencement of Business Certificate (COB)",
    dueDate: "Within 180 days of incorporation",
  },
  {
    compliance: "Appointment of Auditor and Filing E-form ADT-1",
    dueDate: "Within 15 days of the AGM",
  },
  {
    compliance: "Holding Board Meetings",
    dueDate: "As per the schedule of board meetings",
  },
  {
    compliance: "Conducting the Annual General Meeting (AGM)",
    dueDate: "Within 9 months from financial year-end",
  },
  {
    compliance: "INC-20A: Declaration for Commencement of Business",
    dueDate: "Within 180 days of incorporation",
  },
  {
    compliance: "AOC-4: Filing of Financial Statements",
    dueDate: "Within 30 days of the AGM",
  },
  {
    compliance: "MGT-7A: Annual Returns for Small Companies/OPCs",
    dueDate: "Within 60 days of the AGM",
  },
  {
    compliance: "DIR-12: Appointment/Resignation of Directors",
    dueDate: "Within 30 days of appointment/resignation",
  },
  {
    compliance: "DIR-3 KYC: Director KYC Submission",
    dueDate: "By September 30th each year",
  },
  {
    compliance: "MGT-14: Filing of Board Resolutions",
    dueDate: "Within 30 days of passing the resolution",
  },
  {
    compliance: "DPT-3: Return of Deposits",
    dueDate: "By June 30th each year",
  },
  {
    compliance: "Directors’ Report",
    dueDate: "At least 21 days before the AGM",
  },
  {
    compliance: "Maintenance of Statutory Registers and Books of Accounts",
    dueDate: "Throughout the financial year",
  },
  {
    compliance:
      "Circulation of Financial Statements and Other Relevant Documents",
    dueDate: "At least 21 days before the AGM",
  },
];

const DetailsSection = () => {
  return (
    <section className="text-gray-700 space-y-6">
      <h2 className="text-2xl font-bold">
        Expert Guidance on Compliance for Private Limited Companies
      </h2>
      <p>
        Navigating compliance can be a complex challenge for private limited
        companies in India. Adhering to the comprehensive requirements of the
        Companies Act 2013, including director appointments, shareholder
        meetings, and other regulatory obligations, is crucial but can often
        seem overwhelming.
      </p>
      <p>
        That's where United Fillings steps in. We provide expert guidance and
        comprehensive solutions tailored to your company's needs, simplifying
        the compliance process from registration to ongoing obligations. Our
        team of specialists is equipped with in-depth knowledge of Indian
        business laws and regulations, ensuring your company meets company
        compliance requirements. Whether you are a startup or an established
        enterprise, United Fillings is your partner in simplifying compliance.
      </p>
      <p className="font-semibold">
        Let's make Company compliance hassle-free together! Get Started now!
      </p>

      <h3 className="text-xl font-bold pt-4">
        Compliance for Private Limited Company
      </h3>
      <p>
        Compliance refers to adhering to orders, rules, or requests. For a
        private limited company incorporated in India, Compliance with the
        Companies Act 2013, which includes obligations to the Registrar of
        Companies (RoC), is essential for private limited companies in India.
        This legislation governs various aspects, including the appointment,
        qualification, remuneration, and retirement of directors and the conduct
        of board and shareholder meetings. Compliance with Registrar of
        Companies (RoC) regulations is mandatory for every private limited
        company, regardless of turnover or capital amount.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Compliance Related to the Registrar - ROC Complaince</li>
        <li>
          Compliance Beyond the Registrar's Purview - Non-Registrar compliance
        </li>
      </ul>

      <h3 className="text-xl font-bold pt-4">
        ROC Compliance for Private Limited Company
      </h3>
      <p>
        As mentioned above, These are obligations that a company must fulfil in
        accordance with the regulations set by the Registrar of Companies (ROC)
        or equivalent authority. They typically involve statutory filings and
        adherence to the Companies Act provisions.
      </p>
      <p>
        Ensuring adherence to ROC compliance is pivotal for companies operating
        in India. ROC Compliance for Private limited company can be broadly
        classified into:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Annual Compliance: These are the regular, yearly filings and
          disclosures companies must make, including submitting annual returns
          and financial statements.
        </li>
        <li>
          Event-Based Compliance: These are specific compliances that need to be
          addressed as and when certain events occur within the company, such as
          changes in the company's management, share capital, or registered
          office.
        </li>
        <li>
          Other Compliances: This category includes a range of other regulatory
          obligations that might not fall strictly under annual or event-based
          categories but are essential for maintaining the company's legal
          status, such as director KYC updates and maintenance of statutory
          registers.
        </li>
      </ul>

      <h4 className="text-lg font-bold pt-4">
        Annual Compliances for Private Limited Company
      </h4>
      <div className="space-y-4">
        <p>
          Annual compliances are a critical aspect of corporate governance for
          companies registered in India. Key annual compliances include:
        </p>
        <p>
          <span className="font-semibold">
            INC-20A: Declaration for Commencement of Business:
          </span>{" "}
          For companies registered in India post-November 2019 with a share
          capital, securing a Commencement of Business Certificate is a
          prerequisite before initiating any business activities or exercising
          borrowing powers. This certificate must be acquired within 180 days of
          incorporation by filing Form INC-20A.
        </p>
        <p>
          <span className="font-semibold">
            Appointment of Auditor and Filing E-form ADT-1:
          </span>{" "}
          The first auditor must be appointed within 30 days of incorporation
          and ratified by the shareholders during the first Annual General
          Meeting (AGM). Following the AGM, Form ADT-1 confirming the auditor's
          appointment must be filed with the Registrar of Companies (ROC) within
          15 days.
        </p>
        <p>
          <span className="font-semibold">Board Meetings:</span> The first board
          meeting should be held within 30 days of incorporation. Subsequently,
          companies must hold at least four board meetings every year, ensuring
          that the interval between two meetings is at most 120 days.
        </p>
      </div>

      <div className="overflow-x-auto pt-4">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Annual compliances for Private Limited Company
              </th>
              <th scope="col" className="px-6 py-3">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {complianceData.map((item, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4">{item.compliance}</td>
                <td className="px-6 py-4">{item.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-lg font-bold pt-4">
        Event-Based Compliances for Private Limited Company
      </h4>
      <p>
        Besides the annual filings, there are various other compliances that
        need to be compiled with on occurrence of any event in the company.
      </p>
      <p>Here are specific instances of such events:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Change in the authorized capital or the paid-up capital of the
          company.
        </li>
        <li>Allotment of new shares or transfer new shares</li>
        <li>giving loans to other companies</li>
        <li>giving loans to directors</li>
        <li>
          Appointment of managing or whole-time Director and their payment
        </li>
        <li>
          when a bank account is opened or closed, or there is a change in the
          signatories of a bank account.
        </li>
        <li>
          if there is an appointment or change of the statutory auditors of the
          company
        </li>
      </ul>

      <h4 className="text-lg font-bold pt-4">Non-Registrar compliance</h4>
      <p>
        These regulatory obligations do not directly involve the ROC but are
        essential for lawful business operations. They may be governed by
        various other regulatory bodies and laws, depending on the nature of the
        business, its size, and the industry it operates in. These include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Payment of Periodic Tax Due</li>
        <li>Filing of Periodic Returns</li>
        <li>Regulatory Assessment and Reporting</li>
      </ul>

      <h4 className="text-lg font-bold pt-4">Non-compliance Penalty</h4>
      <p>
        Non-compliance with the rules and regulations of the Companies Act in
        India can result in penalties for the company and its defaulting
        members. Penalties typically involve fines imposed for the duration of
        the non-compliance. Additionally, delays in annual filings may incur
        additional fees. Therefore, companies should fulfil their compliance
        obligations promptly to avoid penalties and financial repercussions.
      </p>

      <h3 className="text-xl font-bold pt-4">
        Streamline Company Compliance with United Fillings
      </h3>
      <p>
        With United Fillings, entrepreneurs can seamlessly complete their company
        compliance requirements. We offer access to the LEDGERS compliance
        platform, a dedicated Compliance Manager, accounting, secretarial
        services, MCA annual return filing, and income tax return filing.
      </p>
    </section>
  );
};
export default DetailsSection;
