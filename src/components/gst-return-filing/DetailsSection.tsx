const DetailsSection = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          What is GST Return?
        </h2>
        <p className="mt-4 text-gray-600">
          A GST Return is a detailed statement that captures all the financial
          transactions of a person registered under GST, reflecting revenues and
          expenditures. GST filing online is a mandatory submission for every
          holder of GSTIN to the tax authorities, allowing them to determine the
          net tax liability with precision.
        </p>
        <p className="mt-2 text-gray-600">
          The GST return filing online encompasses several critical elements:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
          <li>
            <strong>Purchases:</strong> It records in detail the purchases the
            taxpayer has made.
          </li>
          <li>
            <strong>Sales:</strong> It provides a comprehensive log of the
            taxpayer's sales activities.
          </li>
          <li>
            <strong>Output GST (On Sales):</strong> It notes the GST charged on
            the taxpayer's sales.
          </li>
          <li>
            <strong>Input Tax Credit (GST Paid on Purchases):</strong> It lists
            the GST paid on purchases, which is eligible to be deducted from the
            GST owed on sales.
          </li>
        </ul>
        <p className="mt-2 text-gray-600">
          For those seeking guidance on GST return filing online or support with
          managing their GST compliance, United Fillings offers GST software designed to
          streamline the process.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Who Should File GST Returns?
        </h2>
        <p className="mt-4 text-gray-600">
          GST returns must be filed by any business or individual registered
          under the GST regime. This obligation applies to entities whose annual
          aggregate turnover surpasses the specified threshold, which is set by
          the tax authorities and may differ for various classifications of
          taxpayers, such as standard taxpayers and those opting for the
          composition scheme. All those applicable entities must file GST
          returns before the due date to avoid late GST filing charges.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          How Many Returns are there under GST?
        </h2>
        <p className="mt-4 text-gray-600">
          Within the Goods and Services Tax (GST) system, 13 returns cater to
          different facets of a taxpayer's financial dealings. It's important to
          recognize that not all taxpayers must file every type of return; the
          specific returns that need to be filed depend on the taxpayer's
          category and the particulars of their GST registration.
        </p>
        <p className="mt-2 text-gray-600">
          Below is a snapshot of the 13 GST returns:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
          <li>
            <strong>GSTR-1:</strong> Filed for disclosing details of outward
            supplies, essentially the sales.
          </li>
          <li>
            <strong>GSTR-3B:</strong> A summarised return that outlines both
            sales and purchases, inclusive of tax payments.
          </li>
          <li>
            <strong>GSTR-4:</strong> Applicable to those under the Composition
            Scheme, summarizing turnover and corresponding tax.
          </li>
          <li>
            <strong>GSTR-5:</strong> For non-resident taxpayers conducting
            taxable transactions in India.
          </li>
          <li>
            <strong>GSTR-5A:</strong> For providers of online information and
            database access or retrieval services.
          </li>
          <li>
            <strong>GSTR-6:</strong> Used by Input Service Distributors for
            detailing input tax credit distribution.
          </li>
          <li>
            <strong>GSTR-7:</strong> For entities required to deduct TDS under
            GST.
          </li>
          <li>
            <strong>GSTR-8:</strong> To be filed by e-commerce operators
            reporting transactions on their platform.
          </li>
          <li>
            <strong>GSTR-9:</strong> An annual comprehensive return summarizing
            all periodical filings over the fiscal year.
          </li>
          <li>
            <strong>GSTR-10:</strong> The final return upon cancellation or
            surrender of GST registration.
          </li>
          <li>
            <strong>GSTR-11:</strong> For those with a Unique Identity Number,
            claiming refunds on their purchases.
          </li>
          <li>
            <strong>CMP-08:</strong> A quarterly statement for Composition
            Scheme taxpayers detailing tax liability.
          </li>
          <li>
            <strong>ITC-04:</strong> For manufacturers to declare details about
            goods dispatched to and received from a job worker.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mt-4">
          Due dates for various types of GST returns
        </h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  GST Return
                </th>
                <th scope="col" className="px-6 py-3">
                  Type of Taxpayer
                </th>
                <th scope="col" className="px-6 py-3">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-1</td>
                <td className="px-6 py-4">Regular Taxpayer</td>
                <td className="px-6 py-4">
                  Monthly: 11th of the following month
                  <br />
                  Quarterly: 13th of the month following the quarter
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  GSTR-2A (Auto-generated)
                </td>
                <td className="px-6 py-4">All Taxpayers</td>
                <td className="px-6 py-4">
                  Auto-generated, utilized for reconciliation purposes
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-3B</td>
                <td className="px-6 py-4">Regular Taxpayer</td>
                <td className="px-6 py-4">
                  Monthly: 20th of the following month
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-4</td>
                <td className="px-6 py-4">Composition Scheme Dealer</td>
                <td className="px-6 py-4">
                  Annually: 30th of April following the end of the financial
                  year
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-5</td>
                <td className="px-6 py-4">Non-Resident Foreign Taxpayer</td>
                <td className="px-6 py-4">20th of the following month</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-6</td>
                <td className="px-6 py-4">Input Service Distributor</td>
                <td className="px-6 py-4">13th of the following month</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-7</td>
                <td className="px-6 py-4">Tax Deducted at Source (TDS)</td>
                <td className="px-6 py-4">10th of the following month</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-8</td>
                <td className="px-6 py-4">E-commerce Operator</td>
                <td className="px-6 py-4">10th of the following month</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-9</td>
                <td className="px-6 py-4">Regular Taxpayer (Annual)</td>
                <td className="px-6 py-4">
                  31st December of the following financial year
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">GSTR-9C</td>
                <td className="px-6 py-4">Regular Taxpayer (Annual)</td>
                <td className="px-6 py-4">
                  Filed along with GSTR-9, by 31st December of the following
                  financial year
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Penalty for Late Filing GST Returns
        </h2>
        <p className="mt-4 text-gray-600">
          If you submit GST returns late, you could face penalties and
          additional GST filing charges. Businesses should submit on time to
          avoid these costs. Here's what you need to know about late GST
          returns:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
          <li>
            <strong>Filing Returns is Required:</strong> Every registered
            taxpayer has to file GST returns regularly, even if there's no
            business activity.
          </li>
          <li>
            <strong>Delays Lead to More Delays:</strong> If you miss a filing
            deadline, you can't file for the next period until you've filed for
            the previous one. This can lead to a pile-up of late returns.
          </li>
          <li>
            <strong>Penalties for Late Filing:</strong> If you file GSTR-1 late,
            for example, you'll get a penalty that shows up when you file
            GSTR-3B. You are required to pay GST filing charges for delayed
            filing.
          </li>
          <li>
            <strong>Interest on Late Tax Payments:</strong> If you owe taxes and
            pay late, you'll be charged 18% interest per year on the amount you
            owe, starting from the day after the due date until you pay
          </li>
          <li>
            <strong>Late GST return filing fees:</strong> The law sets the late
            GST return filing fees at Rs. 100 per day for each CGST and SGST,
            with a maximum of Rs. 5,000.
          </li>
          <li>
            <strong>Annual Return Late Fees:</strong> For yearly returns like
            GSTR-9 and GSTR-9C, the late fee is capped at 0.25% of your turnover
            in your state or UT unless the government provides relief or changes
            the fees.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;
