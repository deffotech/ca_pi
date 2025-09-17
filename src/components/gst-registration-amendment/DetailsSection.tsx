const DetailsSection = () => {
  return (
    <section className="space-y-6 text-gray-700">
      <h2 className="text-2xl font-bold text-gray-800">
        GST Registration Amendment
      </h2>
      <p>
        After obtaining GST registration, various scenarios may arise where
        updating details becomes necessary, leading to a GST Amendment. GST
        amendment refers to the process of making changes or updates to the
        details provided during GST registration. These changes could include
        alterations to business information, contact details, or other crucial
        particulars. GST amendments are necessary to ensure that the information
        provided to tax authorities remains accurate and up-to-date, reflecting
        any changes in business operations or structure. By keeping GST
        registration details current, businesses can maintain compliance with
        tax regulations and avoid potential penalties
      </p>
      <p>
        United Fillings experts are here to assist. With our expertise and guidance,
        applying for GST registration amendment becomes seamless. From ensuring
        compliance with regulatory requirements to expediting the application
        process, United Fillings experts provide comprehensive support, ensuring
        businesses can easily adapt to evolving needs.
      </p>

      <div className="p-4 bg-blue-50 rounded-lg flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-gray-800">GST Registration</h3>
          <p className="mt-2">
            Under the Goods and Services Tax (GST) regime, GST Registration is a
            process by which businesses and individuals are required to register
            themselves with the tax authorities if their turnover exceeds the
            threshold limits specified by the government. Once registered, they
            are issued a unique Goods and Services Tax Identification Number
            (GSTIN), which they use for filing GST returns, paying taxes, and
            complying with other GST regulations.
          </p>
          <p className="mt-2">
            Obtain your GST registration effortlessly with United Fillings!
          </p>
        </div>
        <button className="ml-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex-shrink-0">
          Get Started!
        </button>
      </div>

      <h3 className="text-xl font-bold text-gray-800">
        Amendment of GST registration
      </h3>
      <p>
        Amendment of GST registration refers to modifying or updating the
        details provided during the initial GST registration. It allows
        registered individuals or entities to change their registration
        information as required by updating particulars such as business
        address, contact details, authorized signatories, business activities,
        or any other relevant information.
      </p>

      <h3 className="text-xl font-bold text-gray-800">
        Types of GST Registration Amendments
      </h3>
      <p>
        Amendment of registration under GST details is structured into three
        primary categories, each defined by the required authorisation level and
        the timeline for implementing changes. Moreover, when requesting
        amendments to certain sections of the registration application, it's
        mandatory to justify the need for these changes as part of the GST
        registration protocol.
      </p>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-lg">Amendments to Core Fields</h4>
          <p>
            Amendments in this category concern critical information such as the
            legal name of the business, the main business location, and any
            secondary business locations. Changes to these core fields require
            approval from the appropriate governing body and usually take about
            15 days to receive confirmation. These changes are integral to the
            business's GST registration identity.
          </p>
          <h5 className="font-semibold mt-2">Core Field Details</h5>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              The legal name of the business providing the PAN remains unchanged
            </li>
            <li>
              Main and secondary business locations, assuming there's no change
              in the state
            </li>
            <li>
              Changes involving key stakeholders like promoters, partners,
              Karta, the managing committee, or the CEO
            </li>
            <li>Verification and Approval</li>
          </ul>
          <p className="mt-2">
            Amendments to core fields necessitate verification and approval by a
            tax official. This is because changes in core fields often relate to
            fundamental aspects of the business identity and legal standing,
            which could impact tax liability and compliance.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">
            Amendments to Non-core Fields
          </h4>
          <p>
            This category includes all other registration details that don't
            need approval from a regulatory body. Changes to non-core fields can
            be made directly online, facilitating a swift update process. This
            category essentially covers all details outside of core fields,
            allowing businesses to modify certain information conveniently.
          </p>
          <h5 className="font-semibold mt-2">Included Changes:</h5>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Updates to bank account details</li>
            <li>Adjustments in business information</li>
            <li>Updates to the list of goods and services offered</li>
            <li>
              Modifications to state-specific details without altering the state
            </li>
            <li>Changes in authorized signatories or representatives</li>
            <li>
              Updates or modifications in details of existing stakeholders like
              promoters, partners, or Karta
            </li>
            <li>
              Minor adjustments in the current main or secondary business
              locations
            </li>
          </ul>
          <h5 className="font-semibold mt-2">No Official Approval Required</h5>
          <p>
            Amendments in non-core fields do not require approval from a tax
            official. The taxpayer can make these changes directly through the
            GST portal, and they are generally processed automatically.
          </p>
        </div>
      </div>

      <p>
        The distinctions between core and non-core fields are outlined in the
        table below:
      </p>
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
              >
                Core fields (Approval Required)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
              >
                Non-Core fields (No Approval Required)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 align-top">
                <ul className="list-disc space-y-1 text-sm text-gray-600">
                  <li>
                    Name of the Business (Legal Name) if there is no change in
                    PAN
                  </li>
                  <li>Addition / Deletion of Stakeholders</li>
                  <li>
                    Principal Place of Business (other than a change in State)
                  </li>
                  <li>
                    Additional Place of Business (other than a change in State)
                  </li>
                </ul>
              </td>
              <td className="px-6 py-4 align-top">
                <p className="text-sm text-gray-600">
                  All the other fields of registration application except the
                  following:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-600">
                  <li>The Legal name of the business,</li>
                  <li>Addition/ deletion of stakeholder details</li>
                  <li>Principal place of business</li>
                  <li>Another place of business.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="font-semibold text-lg">Updating Email or Mobile Number</h4>
      <p>
        A specific procedure is followed to update the contact email or mobile
        number linked with the GST account, starting with an online verification
        process on the common GST portal. This step is further reinforced with
        an OTP (One-Time Password) verification, ensuring the contact details
        are accurate and secure, thus maintaining the integrity of the GST
        registration information.
      </p>

      <h3 className="text-xl font-bold text-gray-800">
        Eligibility Criteria for Amendment of GST Registration
      </h3>
      <p>
        Any taxpayer of the following category registered under GST can file the
        amendment of registration under GST:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>New Registrants & Normal Taxpayers</li>
        <li>
          TDS/ TCS Registrants, UN Bodies, Embassies & others, and Notified
          persons having UIN
        </li>
        <li>Non-Resident Taxable Person</li>
        <li>GST Practitioner</li>
        <li>
          Online Details and Database Access or Retrieval Service Provider
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800">
        GST Amendment – Changes to Business Name
      </h3>
      <p>
        In instances where a GST name change is needed due to alterations in a
        business's legal name, the GST registration certificate remains valid
        and does not require cancellation. Instead, the GST name change can be
        executed by amending the existing GST registration to mirror the new
        business name.
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          This amendment process involves submitting FORM GST REG-14 on the GST
          portal within 15 days following the event of the business name change.
        </li>
        <li>
          Upon submission for the GST name change, the GST Officer must review
          the application and, if found satisfactory, approve the amendment to
          the business name within 15 working days using FORM GST REG-15.
        </li>
        <li>
          Following approval, the amendment will be effective from the date the
          need for the change arose.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800">
        GST Amendment – Changes to Address
      </h3>
      <p>
        In case of any changes to the address of the principal place of business
        or any other area of business, GST FORM REG-14 can be filed. For changes
        to address, proof of address for the new location must be provided in
        the GST registration amendment application. Accepted proof of address
        includes:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          <strong>For Own Premises:</strong> Any document supporting the
          premises' ownership, such as the latest Property Tax Receipt,
          Municipal Khata copy, or copy of the Electricity Bill.
        </li>
        <li>
          <strong>For Rented or Leased premises:</strong> A copy of the valid
          Rent / Lease Agreement with any document supporting the Lessor's
          ownership of the premises, such as the Latest Property Tax Receipt,
          Municipal Khata copy, or copy of the Electricity Bill.
        </li>
        <li>
          <strong>
            For premises not falling under any of the above categories:
          </strong>{" "}
          A copy of the Consent Letter with any document in support of the
          consenter's ownership of the premises, like a Municipal Khata copy or
          an Electricity Bill copy. The same documents may be uploaded for
          shared properties.
        </li>
        <li>
          <strong>
            For rented/leased premises where the Rent/lease agreement is
            unavailable:
          </strong>{" "}
          An affidavit to that effect should be attached along with any document
          supporting the possession of the premises, like a copy of the
          Electricity Bill.
        </li>
        <li>
          If the principal place of business is located in an SEZ or the
          applicant is an SEZ developer, Necessary documents/certificates issued
          by the Government of India must be uploaded.
        </li>
      </ul>
      <p>
        All changes to address recorded in the GST portal must be updated within
        15 days of the change. When an application for a change of GST address
        is made, the GST office approves the change within 15 days. The date of
        Amendment on approval by the Officer is the date of the occurrence of
        the event warranting the Amendment.
      </p>

      <h3 className="text-xl font-bold text-gray-800">
        GST Amendment – Changes to Promoter Information
      </h3>
      <p>
        In case of addition, deletion, or retirement of partners or directors,
        Karta, Managing Committee, Board of Trustees, Chief Executive Officer or
        equivalent responsible for the day-to-day affairs of the business, a GST
        amendment application must be filed within 15 days of such an event.
      </p>
      <p>
        On receipt of an application for GST amendment, the concerned officer
        would approve the change or request for additional information within 15
        days of application.
      </p>

      <h3 className="text-xl font-bold text-gray-800">
        GST Amendment – Changes to Mobile Number or Email ID
      </h3>
      <p>
        Any changes to the mobile number or email ID mentioned on the GST Common
        Portal can be made by the Authorized Signatory using his/her digital
        signature after an online verification process. Changes to a mobile
        number or email ID do not require filing a GST amendment application or
        verification by an Officer. Changes to email or mobile numbers in the
        GST common portal are considered routine changes.
      </p>

      <h3 className="text-xl font-bold text-gray-800">
        GST Amendment – Changes to PAN
      </h3>
      <p>
        If a business or PAN constitution changes, a GST Amendment application
        cannot be made. Only a new GST registration application in FORM GST
        REG-01 can be submitted for changes to PAN.
      </p>

      <h3 className="text-xl font-bold text-gray-800">
        Limitations in GST Registration Amendments
      </h3>
      <p>
        The following outlines specific details that cannot be altered within
        the GST registration framework:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          <strong>PAN Card Details:</strong> As mentioned above, Altering PAN
          card information is impossible because GST registration is directly
          linked to the PAN number.
        </li>
        <li>
          <strong>Change in Business Type:</strong> Under GST, changing your
          business type to require a new PAN is not straightforward; it
          typically involves cancelling your existing GST registration and
          applying for a new one.
        </li>
        <li>
          <strong>Moving Between States:</strong> Similarly, when a business
          relocates its primary place of operation from one state to another, it
          modifies the?GSTIN. Consequently, this situation necessitates
          cancelling the existing GST registration and submitting a fresh
          application for a new GST registration in the new state.
        </li>
        <li>
          <strong>Modifying the Primary Authorized Signatory:</strong> Changing
          the primary authorized signatory requires adding a new primary
          signatory; without fulfilling this condition, updating the primary
          signatory in GST registration is not possible.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800">
        GST Amendment Time Limit
      </h3>
      <p>
        The GST Amendment Time Limit is explained below, highlighting the key
        deadlines and steps involved in the process:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          <strong>Notification Deadline:</strong> Taxpayers must be informed of
          changes to their GST details on the common portal within 15 days
          following the event that necessitates the change through a GST
          amendment application.
        </li>
        <li>
          <strong>Officer Approval:</strong> The designated officer is tasked
          with verifying and approving the amendment application within 15
          working days from its receipt. Approval makes the amendment effective
          retroactively from the date of the event prompting the change.
        </li>
        <li>
          <strong>Notice for Additional Information:</strong> Suppose the
          amendment application is deemed unjustified or the documents are
          incomplete or incorrect. In that case, the officer may issue a notice
          for the taxpayer to provide additional information or clarification
          within 15 days
        </li>
        <li>
          The taxpayer has seven days from receiving the notice to submit the
          necessary clarification or further details.
        </li>
        <li>
          <strong>Approval or Rejection:</strong> Upon a satisfactory response
          from the taxpayer, the officer will approve the GST amendment
          application.
        </li>
        <li>
          The officer may reject the application if the taxpayer's response is
          insufficient.
        </li>
        <li>
          <strong>Automatic Amendment:</strong> Suppose the officer does not act
          within 15 days of receiving the amendment application or within seven
          working days of receiving additional information or clarification. In
          that case, the registration certificate will be automatically amended
          as requested. The amended certificate will be available on the Common
          Portal.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800">
        GST Registration Amendment Procedure
      </h3>
      <p>
        The application must be filed on the GST Common Portal to amend your GST
        registration.
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          <strong>Application Filing:</strong> You can file your amendment
          application on the GST Common Portal, specifying whether it's for core
          or non-core field changes.
        </li>
        <li>
          <strong>Selecting Amendment Type:</strong> For core amendments: Choose
          the specific core field you need to amend, such as business details,
          principal or additional places of business, or promoters/partners
          details. For non-core amendments: Select the appropriate non-core
          field you wish to update.
        </li>
        <li>
          <strong>Editing and Document Upload:</strong> Amend the required
          details within the selected field. Where necessary, upload supporting
          documents (e.g., address proof for changes to the principal place of
          business or ID proof for changes in partner/promoter details).
        </li>
        <li>
          <strong>Submission and Verification:</strong> After making changes,
          provide a reason for the amendment and its date, then proceed to 'Save
          and Continue'. Verify the amendment application using DSC,
          e-signature, or EVC, which will generate an Application Reference
          Number (ARN). An acknowledgement will be sent to your registered
          contact details.
        </li>
        <li>
          <strong>Review and Approval (for core field amendments):</strong> A
          tax officer will review the core field amendment application. Upon
          approval, you'll receive an approval order and an updated registration
          certificate. If the application is rejected, a notification will be
          sent to your registered contact details.
        </li>
        <li>
          <strong>Automatic Update (for non-core field amendments):</strong>{" "}
          Non-core field amendments are automatically updated upon submission
          and do not require tax officer approval. These changes are effective
          from the event date that necessitated the amendment.
        </li>
      </ul>
      <p>
        Note: If there's an ongoing amendment application with a generated ARN,
        another amendment cannot be submitted until the first is resolved. For
        non-core amendments, if a core amendment is pending, you will be
        notified and can choose to proceed; however, core changes won't reflect
        until approved.
      </p>

      <h3 className="text-xl font-bold text-gray-800">
        Streamline Your GST Amendment Process with United Fillings
      </h3>
      <p>
        United Fillings provides comprehensive assistance with the GST amendment process,
        ensuring seamless navigation through regulatory requirements. Leveraging
        our expertise, businesses can efficiently handle amendments, whether
        they involve core fields like business details or non-core fields like
        bank details. Our platform simplifies the application filing on the GST
        Common Portal, guiding users through each step, from initial filing to
        document submission and verification. With United Fillings, businesses can
        confidently manage GST registration changes, ensuring compliance with
        regulatory standards while minimizing administrative burdens.
      </p>
    </section>
  );
};

export default DetailsSection;
