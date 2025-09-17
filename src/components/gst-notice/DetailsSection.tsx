const DetailsSection = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          What is GST Notice?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Notices under GST serve as official communications from GST
          Authorities to taxpayers. These notices serve various purposes,
          including reminders of detected defaults in compliance with GST laws
          or requests for additional taxpayer information. They are crucial in
          maintaining tax compliance and ensuring the proper functioning of the
          GST system.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          These notices may go by different names, the specific type of notice
          depends on factors such as the nature of the default detected or the
          actions required from the taxpayer. Common grounds for receiving
          notices include failure to register under GST when required by law,
          late or non-filing of GST returns, underpayment or non-payment of GST,
          and incorrect claims of Input Tax Credit. Upon receiving a notice,
          taxpayers must respond promptly within the specified timeframe.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Types of GST Notices
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          As mentioned above, in the context of Goods and Services Tax (GST) in
          India, taxpayers may receive various notices from the tax authorities.
          Some common types include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Show Cause Notice (SCN):</span> This
            is issued by the tax authorities to a taxpayer when they suspect
            that there has been a violation of GST laws or incorrect reporting
            of transactions. The taxpayer must provide a valid explanation or
            justification within a specified period.
          </li>
          <li>
            <span className="font-semibold">Demand Notice:</span> A demand
            notice is issued when the tax authorities determine a tax liability
            due from the taxpayer. This notice specifies the amount of tax due
            along with any applicable interest or penalties.
          </li>
          <li>
            <span className="font-semibold">Scrutiny Notice:</span> A scrutiny
            notice is sent to a taxpayer when the tax authorities examine the
            taxpayer's GST returns or other documents in detail to ensure
            compliance with GST laws. This may involve a thorough examination of
            the taxpayer's records and transactions.
          </li>
          <li>
            <span className="font-semibold">Assessment Notice:</span> This
            notice is issued by the tax authorities after assessing the
            taxpayer's GST liability based on the information provided in the
            GST returns and any other relevant documents. It specifies the final
            amount of tax liability, including any adjustments or corrections
            made by the tax authorities.
          </li>
          <li>
            <span className="font-semibold">Recovery Notice:</span> If a
            taxpayer fails to pay the tax liability as per the demand notice, a
            recovery notice may be issued, specifying the outstanding amount and
            initiating steps for recovery, including attachment of assets or
            bank accounts.
          </li>
          <li>
            <span className="font-semibold">Notice for Personal Hearing:</span>{" "}
            In certain cases, the tax authorities may summon the taxpayer for a
            personal hearing to present their case or provide additional
            information in response to any discrepancies or issues identified
            during the assessment or scrutiny process.
          </li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-4">
          Taxpayers must respond to these notices promptly and provide accurate
          information and documents as required by the tax authorities to avoid
          any adverse consequences, such as penalties or prosecution for
          non-compliance.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Valid Modes to Send GST Notices
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          As per Section 169 of the CGST Act, specific modes have been
          prescribed for the valid service of GST notices. Any notice or
          communication sent through a method not listed under this section will
          not be considered valid under GST law.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Taxpayers should be aware of the legally recognized modes of
          communication, which include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Hand delivery:</span> Directly
            handing over the notice to the taxpayer or their representative,
            either personally or via courier/messenger
          </li>
          <li>
            <span className="font-semibold">Registered or Speed Post:</span>{" "}
            Sending the notice to the taxpayer’s last known business address
            through registered post, speed post, or courier with acknowledgment
            due.
          </li>
          <li>
            <span className="font-semibold">Email Communication:</span> Sending
            the notice to the taxpayer’s registered email address.
          </li>
          <li>
            <span className="font-semibold">GST Portal:</span> Uploading the
            notice to the taxpayer’s account on the GST portal, making it
            accessible after logging in.
          </li>
          <li>
            <span className="font-semibold">Newspaper Publication:</span>{" "}
            Publishing the notice in a local newspaper widely circulated in the
            area of the taxpayer’s last known residence.
          </li>
          <li>
            <span className="font-semibold">Affixing Notice:</span> If other
            modes are not possible, affixing the notice at a prominent place at
            the taxpayer’s last known place of business or residence. If deemed
            insufficient, a copy may also be posted on the notice board of the
            concerned GST officer’s office.
          </li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-4">
          Any communication received through modes not specified under the GST
          law need not be acted upon by the taxpayer, as such notices hold no
          legal standing.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Common Reasons for Receiving GST Notices
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Below are the primary reasons why GST authorities might issue notices:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Discrepancies between details reported in GSTR-1 and GSTR-3B lead to
            a scrutiny notice.
          </li>
          <li>
            Variances in Input Tax Credit (ITC) claims in GSTR-3B compared to
            GSTR-2B/2A.
          </li>
          <li>
            Failing to file GSTR-1 and GSTR-3B for over six months
            consecutively.
          </li>
          <li>
            Mismatches in information declared on GSTR-1 and the e-way bill
            portal.
          </li>
          <li>
            Prices are not lowering following a GST rate cut as mandated by the
            Central Board of Indirect Taxes and Customs (CBIC), constituting
            profiteering and violating consumer rights to benefit from reduced
            rates.
          </li>
          <li>
            Non-payment or underpayment of GST, potentially leading to a show
            cause notice (SCN), regardless of fraudulent intent.
          </li>
          <li>
            Inappropriate claims for GST refunds, with or without fraudulent
            intent, attracting a show cause notice (SCN).
          </li>
          <li>Incorrect availing or use of Input Tax Credit.</li>
          <li>
            Operating without GST registration when required and not fulfilling
            tax and other obligations under the GST Act.
          </li>
          <li>
            Reporting inconsistencies for exports in GSTR-1, especially when
            shipping or export bills are lodged in ICEGATE but not reflected in
            GSTR-1.
          </li>
          <li>
            Failure to provide required record-keeping information to tax
            authorities.
          </li>
          <li>Undergoing audits conducted by tax authorities.</li>
          <li>
            Not submitting information returns to tax authorities within the
            prescribed timeframe.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Comprehensive Overview of GST Notices and Required Responses
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          In the below table, we have listed out the varieties of GST notices,
          description, action to be taken, time limit to respond and effects of
          not responding.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Sl No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name of the Form-Notice
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Reply or Action to be Taken
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time Limit to Respond
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Consequence of Non-response
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">1</td>
                <td className="px-6 py-4 align-top">GSTR-3A</td>
                <td className="px-6 py-4 align-top">
                  Default notice to non-filers of GST returns in GSTR-1,
                  GSTR-3B, GSTR-4, or GSTR-8
                </td>
                <td className="px-6 py-4 align-top">
                  File the pending GST Returns along with any late fees and
                  interest on the GST liability
                </td>
                <td className="px-6 py-4 align-top">15 days from receipt</td>
                <td className="px-6 py-4 align-top">
                  Tax assessed on available information; Penalty of Rs. 10,000
                  or 10% of tax due, whichever is higher
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">2</td>
                <td className="px-6 py-4 align-top">CMP-05</td>
                <td className="px-6 py-4 align-top">
                  Show cause notice questioning the eligibility for the
                  composition scheme
                </td>
                <td className="px-6 py-4 align-top">
                  Justify eligibility for the composition scheme
                </td>
                <td className="px-6 py-4 align-top">15 days from receipt</td>
                <td className="px-6 py-4 align-top">
                  Penalty under section 122 and CMP-07 order denying composition
                  scheme benefits
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">3</td>
                <td className="px-6 py-4 align-top">REG-03</td>
                <td className="px-6 py-4 align-top">
                  Notice for clarification or additional documents at the time
                  of GST registration or amendment
                </td>
                <td className="px-6 py-4 align-top">
                  Provide clarification or documents in REG-04
                </td>
                <td className="px-6 py-4 align-top">
                  Within 7 working days from receipt
                </td>
                <td className="px-6 py-4 align-top">
                  Application rejection informed in REG-05
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">4</td>
                <td className="px-6 py-4 align-top">REG-17</td>
                <td className="px-6 py-4 align-top">
                  Show cause notice for potential GST registration cancellation
                </td>
                <td className="px-6 py-4 align-top">
                  Submit reasons in REG-18 against cancellation
                </td>
                <td className="px-6 py-4 align-top">
                  Within 7 working days from receipt
                </td>
                <td className="px-6 py-4 align-top">
                  Cancellation of GST registration in REG-19
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">5</td>
                <td className="px-6 py-4 align-top">REG-23</td>
                <td className="px-6 py-4 align-top">
                  Show cause notice for revocation of GST registration
                  cancellation
                </td>
                <td className="px-6 py-4 align-top">Submit reply in REG-24</td>
                <td className="px-6 py-4 align-top">
                  Within 7 working days from receipt
                </td>
                <td className="px-6 py-4 align-top">
                  Cancellation of GST registration revocation
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">6</td>
                <td className="px-6 py-4 align-top">REG-27</td>
                <td className="px-6 py-4 align-top">
                  Notice for GST migration issues for VAT regime taxpayers
                </td>
                <td className="px-6 py-4 align-top">
                  Apply in REG-26 and present before tax authority
                </td>
                <td className="px-6 py-4 align-top">Not prescribed</td>
                <td className="px-6 py-4 align-top">
                  Cancellation of provisional registration in REG-28
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">7</td>
                <td className="px-6 py-4 align-top">PCT-03</td>
                <td className="px-6 py-4 align-top">
                  Show cause notice for GST practitioner misconduct
                </td>
                <td className="px-6 py-4 align-top">
                  Respond within the notice's prescribed time
                </td>
                <td className="px-6 py-4 align-top">
                  Within the notice's prescribed time
                </td>
                <td className="px-6 py-4 align-top">
                  Cancellation of GST practitioner license
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">8</td>
                <td className="px-6 py-4 align-top">RFD-08</td>
                <td className="px-6 py-4 align-top">
                  Show cause notice for potential GST refund rejection
                </td>
                <td className="px-6 py-4 align-top">Respond in RFD-09</td>
                <td className="px-6 py-4 align-top">
                  Within 15 days from receipt
                </td>
                <td className="px-6 py-4 align-top">
                  GST refund application rejection in RFD-06
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">9</td>
                <td className="px-6 py-4 align-top">ASMT-02</td>
                <td className="px-6 py-4 align-top">
                  Notice for additional information for provisional assessment
                </td>
                <td className="px-6 py-4 align-top">
                  Provide information in ASMT-03
                </td>
                <td className="px-6 py-4 align-top">
                  Within 15 days from notice service
                </td>
                <td className="px-6 py-4 align-top">
                  Provisional assessment application rejection
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">10</td>
                <td className="px-6 py-4 align-top">ASMT-06</td>
                <td className="px-6 py-4 align-top">
                  Notice for additional information for final assessment
                  (post-provisional assessment)
                </td>
                <td className="px-6 py-4 align-top">Respond within 15 days</td>
                <td className="px-6 py-4 align-top">
                  Within 15 days from receipt
                </td>
                <td className="px-6 py-4 align-top">
                  Final assessment in ASMT-07 without taxpayer input
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">11</td>
                <td className="px-6 py-4 align-top">ASMT-10</td>
                <td className="px-6 py-4 align-top">
                  Scrutiny notice for discrepancies in GST return
                </td>
                <td className="px-6 py-4 align-top">
                  Provide explanations in ASMT-11
                </td>
                <td className="px-6 py-4 align-top">
                  Prescribed time in notice or a max of 30 days from service
                </td>
                <td className="px-6 py-4 align-top">
                  Assessment based on available information, potential
                  prosecution and penalty
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">12</td>
                <td className="px-6 py-4 align-top">ASMT-14</td>
                <td className="px-6 py-4 align-top">
                  Show cause notice for best judgment assessment under section
                  63
                </td>
                <td className="px-6 py-4 align-top">
                  Provide written reply and appear before authority
                </td>
                <td className="px-6 py-4 align-top">
                  Within 15 days from notice
                </td>
                <td className="px-6 py-4 align-top">
                  Unfavorable assessment order in ASMT-15
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">13</td>
                <td className="px-6 py-4 align-top">ADT-01</td>
                <td className="px-6 py-4 align-top">
                  Notice for audit by Tax authority under Section 65
                </td>
                <td className="px-6 py-4 align-top">
                  Appear in person or produce records as directed
                </td>
                <td className="px-6 py-4 align-top">
                  Within the notice's prescribed time
                </td>
                <td className="px-6 py-4 align-top">
                  Presumed absence of books of account, initiating proceedings
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">14</td>
                <td className="px-6 py-4 align-top">RVN-01</td>
                <td className="px-6 py-4 align-top">
                  Revisional authority notice under section 108 before revising
                  appeal orders
                </td>
                <td className="px-6 py-4 align-top">
                  Respond and/or appear as directed
                </td>
                <td className="px-6 py-4 align-top">
                  Within 7 working days from service
                </td>
                <td className="px-6 py-4 align-top">
                  Decision based on available records and merits, ex parte
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">15</td>
                <td className="px-6 py-4 align-top">
                  Notice of Enquiry by Directorate of Anti-profiteering
                </td>
                <td className="px-6 py-4 align-top">
                  Inquiry for not passing on ITC or reduced GST rates benefits
                </td>
                <td className="px-6 py-4 align-top">
                  Cooperate and provide evidence
                </td>
                <td className="px-6 py-4 align-top">
                  As specified in the notice
                </td>
                <td className="px-6 py-4 align-top">
                  Ex parte proceedings based on available evidence
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">16</td>
                <td className="px-6 py-4 align-top">DRC-01</td>
                <td className="px-6 py-4 align-top">
                  Demand of Tax show cause notice for underpaid or unpaid tax
                </td>
                <td className="px-6 py-4 align-top">
                  Pay demanded tax amount in DRC-03, with interest and penalty
                  if applicable. Use DRC-06 for responses
                </td>
                <td className="px-6 py-4 align-top">
                  Within 30 days from receipt
                </td>
                <td className="px-6 py-4 align-top">
                  Higher penalty or prosecution within three years from annual
                  return due date
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">17</td>
                <td className="px-6 py-4 align-top">DRC-10 & DRC-17</td>
                <td className="px-6 py-4 align-top">
                  Notice of Auction of Goods under section 79 for recovery
                </td>
                <td className="px-6 py-4 align-top">
                  Pay outstanding demand per DRC-09
                </td>
                <td className="px-6 py-4 align-top">
                  Specified before sale, not before 15 days from notice issue
                </td>
                <td className="px-6 py-4 align-top">
                  Proceed to e-auction and sale
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">18</td>
                <td className="px-6 py-4 align-top">DRC-11</td>
                <td className="px-6 py-4 align-top">
                  Notice to successful auction bidder
                </td>
                <td className="px-6 py-4 align-top">Pay total bid amount</td>
                <td className="px-6 py-4 align-top">
                  Within 15 days from auction date
                </td>
                <td className="px-6 py-4 align-top">
                  Possible re-auction by officer
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">19</td>
                <td className="px-6 py-4 align-top">DRC-13</td>
                <td className="px-6 py-4 align-top">
                  Notice for tax recovery from a third person
                </td>
                <td className="px-6 py-4 align-top">
                  Deposit specified amount and respond in DRC-14
                </td>
                <td className="px-6 py-4 align-top">Not applicable</td>
                <td className="px-6 py-4 align-top">
                  Considered a defaulter for specified amount, subject to
                  prosecution and penalties
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">20</td>
                <td className="px-6 py-4 align-top">DRC-16</td>
                <td className="px-6 py-4 align-top">
                  Notice for attachment and sale of goods/shares under section
                  79
                </td>
                <td className="px-6 py-4 align-top">
                  Prohibited from transferring/creating charge on goods; must
                  comply with notice
                </td>
                <td className="px-6 py-4 align-top">Not applicable</td>
                <td className="px-6 py-4 align-top">
                  Prosecution and/or penalties for contravention
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Reply to GST Notices
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          To navigate the process of responding to GST notices efficiently,
          follow these essential steps:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Review the Notice:</span> Carefully
            read the GST notice to understand the issue or discrepancy
            highlighted by the tax authorities.
          </li>
          <li>
            <span className="font-semibold">Gather Documentation:</span> Collect
            all relevant documents, records, and evidence that pertain to the
            matter raised in the notice.
          </li>
          <li>
            <span className="font-semibold">Access the GST Portal:</span> Log in
            to the GST portal to prepare your response. Ensure you have the
            necessary login credentials and access rights.
          </li>
          <li>
            <span className="font-semibold">Use Digital/E-Signature:</span>{" "}
            Authenticate your submission with your digital signature or
            e-signature, as authorised.
          </li>
          <li>
            <span className="font-semibold">Clear Dues:</span> If the notice
            involves tax or interest dues, ensure these are paid according to
            the specified procedure before responding.
          </li>
          <li>
            <span className="font-semibold">Submit Your Response:</span> File
            your reply on the GST portal, attaching all necessary documentation
            and evidence to support your case.
          </li>
          <li>
            <span className="font-semibold">Keep Records:</span> Maintain a
            detailed record of all communications, submissions, and payments
            related to the GST notice for future reference.
          </li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-4">
          For effective replies, United Fillings experts are here to guide you through the
          process, ensuring your response is comprehensive and compliant.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Consequences of Non-Response to GST Notices
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Failure to reply to GST notices within the specified time frame
          subjects the taxpayer to penalties and further legal actions following
          GST regulations based on the individual circumstances of each case
          (refer to the table provided above).
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Choose United Fillings for Simplified GST Solutions
        </h2>
        <p className="text-gray-600 leading-relaxed">
          United Fillings stands out as your trusted partner in navigating the
          complexities of GST compliance. By facilitating effortless GST
          registration and meticulous GSTR filing, we proactively minimise the
          risk of receiving unwelcome GST notices. Should you receive any
          notices, there's no cause for concern. Our dedicated team of GST
          experts is equipped to handle the situation with precision and
          expertise. Our experts will craft and submit a comprehensive and
          compliant response to any GST notices on your behalf, ensuring that
          your business remains in good standing with minimal disruption. With
          United Fillings, you can file your annual return form before GSTR 9 last date
          with confidence, knowing that you have a reliable partner guiding you
          through the process.
        </p>
      </div>
    </section>
  );
};

export default DetailsSection;
