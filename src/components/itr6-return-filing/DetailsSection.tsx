const DetailsSection = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">ITR 6 Applicability</h2>
        <p className="text-gray-600 mb-4">
          ITR 6 applies to all companies except those claiming an exemption
          under Section 11 of the Income Tax Act. Section 11 applies to income
          derived from property held under a trust or legal obligation for
          charitable or religious purposes. Therefore, companies with income
          used for charitable or religious purposes are not eligible to file ITR
          6.
        </p>

        <h3 className="text-xl font-semibold mb-3">Applicable Entities</h3>
        <p className="text-gray-600 mb-3">
          Companies registered under the Companies Act of 2013 or the Companies
          Act of 1956 are required to file the ITR 6 Form. This includes:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Private Limited Company</li>
          <li>One Person Company</li>
          <li>Public Limited Company</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Who is Not Eligible to File the ITR 6 Form?
        </h2>
        <p className="text-gray-600 mb-3">
          The following entities are not eligible to file the ITR 6 Form:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Individuals</li>
          <li>Hindu Undivided Family (HUF)</li>
          <li>Firms</li>
          <li>Associations of Persons (AOP)</li>
          <li>Bodies of Individuals (BOI)</li>
          <li>Local Authorities</li>
          <li>Artificial Judicial Persons</li>
          <li>
            Companies that seek exemption under section 11 of the Income Tax Act
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">ITR 6 Due Date</h2>
        <p className="text-gray-600">
          Every company is required to file its Income Tax Return under Section
          139 of the Income Tax Act by October 31st of the assessment year. If
          transfer pricing is involved, such a company is required to file its
          Income Tax Return by November 30th of the assessment year.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          The Importance of Timely ITR Filing for Companies
        </h2>
        <p className="text-gray-600 mb-4">
          Filing ITR 6 on or before the due date not only ensures compliance
          with tax laws but also offers several financial and operational
          advantages for your business.
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-3">
          <li>
            <strong>Carry Forward of Losses:</strong> Filing on time allows a
            company to carry forward its losses for adjustment against future
            profits. According to Section 72 of the Income Tax Act, companies
            can carry forward business losses up to 8 subsequent assessment
            years.
          </li>
          <li>
            <strong>Avoiding Penalties and Interest:</strong> Late filing incurs
            a fee under Section 234F of the Income Tax Act. Additionally, timely
            filing helps avoid interest charges on any outstanding tax
            liabilities.
          </li>
          <li>
            <strong>Reduced Risk of Scrutiny:</strong> Timely filing minimizes
            the risk of scrutiny by tax authorities. Late submissions can raise
            red flags, potentially leading to notices and further examinations.
          </li>
          <li>
            <strong>Quicker Refund Processing:</strong> Filing your income tax
            return on time facilitates faster processing of tax refunds from the
            income tax department.
          </li>
          <li>
            <strong>Enhanced Credit Opportunities:</strong> Timely filed tax
            returns are often required by banks and financial institutions as
            part of loan and credit facility applications.
          </li>
          <li>
            <strong>Smoother Winding-Up Process:</strong> If a company decides
            to cease operations, having all Income Tax returns filed on time is
            essential for a smoother and quicker winding-up process.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Structure of ITR 6 Form</h2>
        <p className="text-gray-600 mb-4">
          ITR 6 is divided into Part A and Part B (along with the subsections)
          with multiple schedules that include information relevant to the
          income and tax of the taxpayer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">
              Part A (and its subsections)
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <strong>General information:</strong> Basic details of the
                entity, such as name, PAN number, address, CIN, incorporation
                date, etc.
              </li>
              <li>
                <strong>Trading Account:</strong> Details relevant to the
                company's income and expenditures.
              </li>
              <li>
                <strong>Balance sheet:</strong> Company's details such as
                liabilities, current liabilities, share capital, and more.
              </li>
              <li>
                <strong>Manufacturing account:</strong> Figures for
                manufacturing accounts relating to inventory.
              </li>
              <li>
                <strong>Profit and Loss Account:</strong> Details of the
                company's profit or loss during the relevant financial year.
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">
              Part B (and its subsections)
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <strong>Part B-TI:</strong> Computation of Total Income
              </li>
              <li>
                <strong>Part B-TTI:</strong> Computation of tax liability for
                the total income
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Procedure for Filing ITR Form 6
        </h2>
        <p className="text-gray-600 mb-4">
          After logging into the Income Tax Portal, navigate to the "e-Filing"
          section, select "Income Tax Returns," and choose ITR Form 6 for
          filing. To ensure a smooth and accurate filing of ITR Form 6, the
          Income Tax Department recommends that taxpayers follow these steps in
          the correct sequence:
        </p>

        <ol className="list-decimal pl-6 text-gray-600 space-y-2">
          <li>
            <strong>Part A:</strong> Begin by filling out the taxpayer's basic
            details, including personal information and income sources.
          </li>
          <li>
            <strong>Schedules:</strong> Complete the relevant schedules that
            apply to your company's income, deductions, and tax details.
          </li>
          <li>
            <strong>Part B:</strong> Fill in the total income, tax computation,
            and any carry-forward losses.
          </li>
          <li>
            <strong>Verification:</strong> Review all the information provided
            and complete the verification section to validate the accuracy of
            your return.
          </li>
          <li>
            <strong>Submit the ITR:</strong> Once all sections are filled out
            and verified, submit the ITR Form 6 electronically.
          </li>
          <li>
            <strong>Acknowledgement:</strong> After successful submission,
            download the acknowledgement receipt (ITR-V) for your records.
          </li>
        </ol>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Documents Required for Filing ITR-6
        </h2>
        <p className="text-gray-600">
          When filing the ITR-6 return form, no annexures or documents,
          including TDS certificates, need to be attached. Taxpayers are advised
          to reconcile the taxes that have been deducted, collected, or paid on
          their behalf by comparing these amounts with their Tax Credit
          Statement (Form 26AS).
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Streamline Your ITR 6 Filing with United Fillings!
        </h2>
        <p className="text-gray-600 mb-4">
          United Fillings offers comprehensive support for ITR 6 filing, ensuring a smooth
          and hassle-free experience for companies. With expert guidance from
          our team of professionals, we assist in understanding the specific
          requirements and deadlines associated with ITR 6. Our services include
          accurate preparation and filing of the return, ensuring compliance
          with the Income Tax Act.
        </p>
        <p className="text-gray-600">
          Ready to simplify your ITR 6 filing process? Contact United Fillings now for
          expert assistance and ensure your compliance with ease.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Form ITR 1 (Sahaj) for AY 2020-21
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            ITR-1 For AY 2020-21 Notified: Key Changes
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Guidelines for Filling ITR-2 for AY 2020-2021
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            ITR-3 for AY 2020-2021
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Form ITR 4 (Sugam) for AY 2020-21
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            ITR-5 for AY 2020-2021
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            ITR-6 for AY 2020-2021
          </a>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
