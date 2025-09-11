
const PopularSearches = () => {
  const searchItems = [
    { name: "Partnership", href: "/partnership" },
    { name: "Limited Liability Partnership", href: "/limited-liability-partnership" },
    { name: "Digital Signature", href: "/digital-signature" },
    { name: "Copyright Registration", href: "/copyright-registration" },
    { name: "Trademark Registration", href: "/trademark-registration" },
    { name: "MSME Registration", href: "/udyam-registration" },
    { name: "Trade License", href: "/trade-license" },
    { name: "LLP Compliance", href: "/llp-compliance" },
    { name: "Private Limited Company", href: "/private-limited-company" },
    { name: "One Person Company", href: "/one-person-company" },
    { name: "GST Registration", href: "/gst-registration" },
    { name: "GST Return Filing", href: "/gst-return-filing" },
    { name: "Income Tax E-Filing", href: "/income-tax-e-filing-new" },
    { name: "PF Registration", href: "/pf-registration" },
    { name: "ESI Registration", href: "/esi-registration" },
    { name: "FSSAI Registration", href: "/fssai-registration" },
    { name: "FSSAI License", href: "/fssai-license" },
    { name: "Import Export Code", href: "/import-export-code" },
    { name: "Startup India", href: "/startup-india" },
    { name: "Section 8 Company", href: "/section-8-company" },
    { name: "Trust Registration", href: "/trust-registration" },
    { name: "Patent Registration", href: "/patent-registration" },
    { name: "Producer Company", href: "/producer-company" },
    { name: "Public Limited Company", href: "/public-limited-company" },
    { name: "Shop and Establishment", href: "/shop-and-establishment-act" },
    { name: "Professional Tax Registration", href: "/professional-tax-registration" },
    { name: "TAN Registration", href: "/tan-registration" },
    { name: "TDS Return Filing", href: "/tds-return-filing" },
    { name: "Society Registration", href: "/society-registration" },
    { name: "Indian Subsidiary", href: "/indian-subsidiary" }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Popular Searches</h3>
        <div className="flex flex-wrap gap-3">
          {searchItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="bg-white hover:bg-green-50 text-green-600 px-4 py-2 rounded border border-gray-200 hover:border-green-300 transition-colors text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
