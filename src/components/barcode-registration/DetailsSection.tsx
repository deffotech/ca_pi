import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Barcode Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Apply Now for Barcode Registration
          </h2>
          <p>
            Barcode registration is registering your product with a unique
            barcode that barcode scanners can scan and read. The barcode helps
            in identifying your product and also helps in tracking your
            product's movement throughout the supply chain. Barcode registration
            is crucial for businesses; especially those involved in
            manufacturing, warehousing, and retail, as it helps streamline their
            operations and ensures product authenticity.
          </p>
          <p className="mt-2">
            At United Fillings, we provide a simple, hassle-free, affordable barcode
            registration online service to help you register barcodes for your
            product with a unique barcode. We assist you in obtaining and
            registering a barcode number with a barcode issuing agency. We also
            help you with the renewal of your barcode registration.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Barcode</h3>
          <p>
            A barcode is a pattern of parallel lines of varying width and
            spacing, along with digits; a machine can read that. It quickly
            encodes and identifies important product details such as product
            numbers, serial numbers, and batch numbers.
          </p>
          <p className="mt-2">
            Barcodes are widely used for efficient product identification in
            various industries, including supermarkets, clothing stores, and
            malls. They offer many advantages, such as reducing errors,
            cost-effectiveness, time-saving, and simplified inventory
            management. This global identification system benefits all parties
            in the supply chain, from manufacturers to logistics and
            wholesalers, by providing an easy and accurate way to identify
            products.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            How Do Businesses Use Barcodes?
          </h3>
          <p>
            Barcodes are a widely used technology that provides a unique symbol,
            typically consisting of parallel lines and a number, which can be
            scanned to retrieve product information from a database. Businesses
            utilize barcodes in several ways, including:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Inventory management:</strong> Large departmental stores
              with extensive product lines use barcode systems to track all
              aspects of the product cycle, from manufacturing to sales.
            </li>
            <li>
              <strong>Asset tracking:</strong> With the significant amount of IT
              assets businesses holds today, barcodes are used to tag and track
              assets in asset software.
            </li>
            <li>
              <strong>Returns tracking:</strong> In online shopping, barcodes
              can be used to track returns. They can also be attached to
              invoices to facilitate the tracking of payments from customers.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Types of Barcodes
          </h3>
          <p>
            Below, we explore various types of barcodes commonly used in
            different industries and applications:
          </p>
          <div className="mt-2 space-y-4">
            <div>
              <h4 className="font-semibold">EAN-13</h4>
              <p>
                Known as the International Article Number, which was formerly
                referred to as the European Article Number, the EAN-13 is a
                13-digit barcode extensively used in Europe, India, and other
                countries. It plays a crucial role in the global retail supply
                chain, facilitating efficient product tracking and
                identification.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">UPC-A</h4>
              <p>
                The Universal Product Code (UPC-A) is a 12-digit barcode widely
                used in the United States, Canada, the United Kingdom,
                Australia, and New Zealand. It is essential for standardizing
                and tracking retail products across these nations.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Introduction to GS1 Barcodes
          </h3>
          <p>
            GS1 is a not-for-profit, international organization that develops
            and maintains standards for barcodes used in global trade and
            logistics. GS1 barcodes help businesses to communicate product
            information efficiently and accurately across the supply chain.
            Below are the major types of GS1 barcodes, each designed for
            specific applications and industries:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>GS1 EAN/UPC Family Barcodes:</strong> These are the first
              and most commonly utilized GS1 barcodes. Known as GTINs (Global
              Trade Item Numbers) or EANs, these barcodes facilitate the
              marketing of products through modern retail channels.
            </li>
            <li>
              <strong>GS1 DataBar Family Barcodes:</strong> GS1 Barcode is
              primarily used for labelling fresh foods, these barcodes encode
              information such as batch numbers or expiration dates, along with
              other details like the item's weight at the time of purchase.
            </li>
            <li>
              <strong>GS1 Barcodes (1D):</strong> GS1-128 and ITF-14 are
              adaptable 1D barcodes designed for tracking items across global
              supply chains. The GS1-128 can incorporate any of the GS1
              identification keys and additional data, such as serial numbers
              and expiration dates. In contrast, the ITF-14 is tailored for
              corrugated materials and carries only the Global Trade Item Number
              (GTIN).
            </li>
            <li>
              <strong>GS1 Barcodes (2D):</strong> These square or rectangular
              barcodes, composed of many tiny dots, can store a vast amount of
              information. They are designed to be readable even when printed
              small or directly imprinted onto products, making them suitable
              for a wide range of industries, including manufacturing,
              warehousing, logistics, and healthcare.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Barcode Registration
          </h3>
          <p>
            Barcode registration refers to assigning a unique identification
            code to a product or item and linking it to a barcode symbol. This
            identification code can track the item through the supply chain and
            facilitate inventory management, pricing, and other business
            processes.
          </p>
          <p className="mt-2">
            To register a barcode, you must obtain a unique identification
            number from a global organization such as GS1 or EAN International.
            These organizations maintain databases of registered identification
            numbers and issue them to companies that want to use GS1 barcodes
            for their products.
          </p>
          <p className="mt-2">
            Once you have obtained an identification number, you can generate
            barcode symbols using software or hardware that supports the barcode
            format you want to use (e.g., UPC, EAN, Code 39, etc.). You can then
            print the barcode on labels or packaging for your products, ensuring
            the barcode symbol and identification code are correctly linked in
            your database.
          </p>
          <p className="mt-2">
            Registering your barcodes with a global organization ensures that
            your product information is globally recognized and standardized,
            allowing for efficient tracking and communication across different
            supply chain systems.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Types of Barcodes We Offer
          </h3>
          <p>
            We are pleased to offer you a package of 100 barcodes with different
            validity periods based on your turnover.
          </p>
          <p className="mt-2">
            For businesses with a turnover of up to 5 Crores, we offer:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>100 Barcodes with a validity of 1 year</li>
            <li>100 Barcodes with a validity of 2 years</li>
            <li>100 Barcodes with a validity of 3 years</li>
          </ul>
          <p className="mt-2">
            Our barcode registration service includes assistance with obtaining
            a barcode number and registering it with a barcode issuing agency.
            We also provide ongoing support and renewal services to ensure your
            barcodes remain up-to-date and compliant with industry standards.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Barcode registration Fees
          </h3>
          <p>
            Please note that the barcode registration fees may vary depending on
            the specific registration authority and the type of barcode being
            registered. However, in general, the fees are usually determined
            based on the following factors:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Turnover of the company: Companies with a higher turnover may be
              required to pay higher barcode registration fees.
            </li>
            <li>
              Several barcodes are required: The fees may also depend on the
              number of barcodes that must be registered.
            </li>
            <li>
              Subscription period: The fees may vary based on the subscription
              period for which the barcodes are being registered.
            </li>
          </ul>
          <p className="mt-2">
            Based on these factors, the fees for barcode registration in India
            can vary.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Advantages of Barcode Registration:
          </h3>
          <p>
            Barcode registration online offers several benefits to businesses,
            including:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Reduced errors:</strong> Barcode registration reduces
              errors as the information is automated and eliminates the need for
              manual data entry.
            </li>
            <li>
              <strong>Cost-effective and convenient:</strong> Barcode
              registration online is easy to obtain, cost-effective, and
              convenient to print. It can also be customized to meet specific
              business needs.
            </li>
            <li>
              <strong>Detailed product information:</strong> Barcodes contain
              detailed information about the product, such as product numbers,
              serial numbers, and batch numbers, which ensures product
              authenticity.
            </li>
            <li>
              <strong>Optimized inventory:</strong> Barcode registration
              captures all the product information, making tracking and managing
              inventory easier, resulting in a more efficient supply chain.
            </li>
            <li>
              <strong>Time-saving:</strong> Barcode registration process saves
              time as it allows for quick and easy access to product information
              through barcode readers.
            </li>
            <li>
              <strong>Accurate and faster billing:</strong> The automated
              information linked to the barcode ensures accurate billing,
              leading to more efficient decision-making.
            </li>
            <li>
              <strong>Unique and global identification:</strong> The bar-coding
              system facilitates unique and globally recognized identification,
              ensuring that no two products have the same code.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            How can United Fillings help with Barcode Registration?
          </h3>
          <p>
            Upload the necessary documents and business details on our web
            portal to obtain barcode registration online. Next, consult our
            business advisor regarding the product you wish to register for a
            barcode.
          </p>
          <p className="mt-2">
            Choose a package and complete the payment process using one of the
            various payment modes available. Once you place an order, one of our
            dedicated professionals will be assigned to your application. A
          </p>
          <p className="mt-2">
            After verifying the documents and information provided, our team
            will apply for barcode registration online. If the registration is
            successful, we will provide you with barcodes and a certificate.
          </p>
          <p className="mt-2">
            To complete the barcode registration process, you must submit
            several documents, as mentioned above. Additionally, you must submit
            a letter requesting the allocation of a barcode on your company
            letterhead.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
