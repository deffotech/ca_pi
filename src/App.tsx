import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Partner from "./pages/Partner";

// Import service pages
import BusinessRegistration from "./pages/BusinessRegistration";
import Proprietorship from "./pages/Proprietorship";
import Partnership from "./pages/Partnership";
import OnePersonCompany from "./pages/OnePersonCompany";
import LLP from "./pages/LLP";
import PrivateLimitedCompany from "./pages/PrivateLimitedCompany";
import PublicLimitedCompany from "./pages/PublicLimitedCompany";
import Section8Company from "./pages/Section8Company";
import TrustRegistration from "./pages/TrustRegistration";
import ProducerCompany from "./pages/ProducerCompany";
import NidhiCompany from "./pages/NidhiCompany";
import IndianSubsidiary from "./pages/IndianSubsidiary";
import StartupIndia from "./pages/StartupIndia";
import TradeLicense from "./pages/TradeLicense";
import FSSAIRegistration from "./pages/FSSAIRegistration";
import FSSAiLicense from "./pages/FSSAiLicense";
import HalalCertification from "./pages/HalalCertification";
import IcegateRegistration from "./pages/IcegateRegistration";
import ImportExportCode from "./pages/ImportExportCode";
import TrademarkRegistration from "./pages/TrademarkRegistration";
import CopyrightRegistration from "./pages/CopyrightRegistration";
import PatentRegistration from "./pages/PatentRegistration";
import GstRegistration from "./pages/GstRegistration";
import GstReturnFiling from "./pages/GstReturnFiling";
import IncomeTaxEFilingNew from "./pages/IncomeTaxEFilingNew";
import DigitalSignature from "./pages/DigitalSignature";
import PFRegistration from "./pages/PFRegistration";
import ESIRegistration from "./pages/ESIRegistration";
import DematOfShares from "./pages/DematOfShares";
import WindingUpLLP from "./pages/WindingUpLLP";
import WindingUpCompany from "./pages/WindingUpCompany";
import UdyamRegistration from "./pages/UdyamRegistration";
import FCRARegistration from "./pages/FCRARegistration";
import CompanyCompliance from "./pages/CompanyCompliance";
import LlpCompliance from "./pages/LlpCompliance";
import TANRegistration from "./pages/TANRegistration";
import TDSReturnFiling from "./pages/TDSReturnFiling";
// import SetupBusinessUAE from "./pages/SetupBusinessUAE";
import Consultation from "./pages/Consultation";
import TalkToExpert from "./pages/TalkToExpert";
import AboutUs from "./pages/AboutUs";
import Guide from "./pages/Guide";
import LegalEntityIdentifierCode from "./pages/LegalEntityIdentifierCode";
import ISORegistration from "./pages/ISORegistration";
import ProfessionalTaxRegistration from "./pages/ProfessionalTaxRegistration";
import RCMCRegistration from "./pages/RCMCRegistration";
import ReraRegistrationForAgents from "./pages/ReraRegistrationForAgents";
import Twelve_A_80G_Registration from "./pages/12Aand80GRegistration";
import Twelve_A_Registration from "./pages/12ARegistration";
import EightyG_Registration from "./pages/EightyGRegistration";
import ApedaRegistration from "./pages/ApedaRegistration";
import BarcodeRegistration from "./pages/BarcodeRegistration";
import BisRegistration from "./pages/BisRegistration";
import CertificateOfIncumbency from "./pages/CertificateOfIncumbency";
import DarpanRegistration from "./pages/DarpanRegistration";
import ShopAndEstablishmentAct from "./pages/ShopAndEstablishmentAct";
import DrugLicense from "./pages/DrugLicense";
import FireLicense from "./pages/FireLicense";
import GstAnnualReturnFilingGstr9 from "./pages/GstAnnualReturnFilingGstr9";
import GstLutForm from "./pages/GstLutForm";
import GstNotice from "./pages/GstNotice";
import GstRegistrationForForeigners from "./pages/GstRegistrationForForeigners";
import GstRegistrationAmendment from "./pages/GstRegistrationAmendment";
import GstRevocation from "./pages/GstRevocation";
import Gstr10ReturnFiling from "./pages/Gstr10ReturnFiling";
import ITR1ReturnFiling from "./pages/ITR1ReturnFiling";
import ITR2ReturnFiling from "./pages/ITR2ReturnFiling";
import ITR3ReturnFiling from "./pages/ITR3ReturnFiling";
import ITR4ReturnFiling from "./pages/ITR4ReturnFiling";
import ITR5ReturnFiling from "./pages/ITR5ReturnFiling";
import ITR6ReturnFiling from "./pages/ITR6ReturnFiling";
import ITR7ReturnFiling from "./pages/ITR7ReturnFiling";
import Fifteen_CA_15CB_Filing from "./pages/15CA15CBFiling";
import IncomeTaxNotice from "./pages/IncomeTaxNotice";
import NameChangeCompany from "./pages/NameChangeCompany";
import RegisteredOfficeChangeCompany from "./pages/RegisteredOfficeChangeCompany";
import DINEkycFiling from "./pages/DINEkycFiling";
import DINReactivation from "./pages/DINReactivation";
import DirectorChange from "./pages/DirectorChange";
// import RemoveDirector from "./pages/RemoveDirector";
// import Adt1Filing from "./pages/Adt1Filing";
import DPT3Filing from "./pages/DPT3Filing";
import LLPForm11Filing from "./pages/LLPForm11Filing";
// import DormantStatusFiling from "./pages/DormantStatusFiling";
import MOAAmendment from "./pages/MOAAmendment";
import AOAAmendment from "./pages/AOAAmendment";
import AuthorizedCapitalIncrease from "./pages/AuthorizedCapitalIncrease";
import ShareTransfer from "./pages/ShareTransfer";
import FDIFilingWithRBI from "./pages/FDIFilingWithRBI";
import FLAReturnFiling from "./pages/FLAReturnFiling";
import FSSAIRenewal from "./pages/FSSAIRenewal";
import FSSAIReturnFiling from "./pages/FSSAIReturnFiling";
import PFReturnFiling from "./pages/PFReturnFiling";
import ESIReturnFiling from "./pages/ESIReturnFiling";
import ProfessionalTaxReturnFiling from "./pages/ProfessionalTaxReturnFiling";
import PartnershipCompliance from "./pages/PartnershipCompliance";
import ProprietorshipCompliance from "./pages/ProprietorshipCompliance";
import Bookkeeping from "./pages/Bookkeeping";
import OpcCompliance from "./pages/OpcCompliance";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/services" element={<Services />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/business-registration" element={<BusinessRegistration />} />
              
              {/* Business Registration Routes */}
              <Route path="/proprietorship" element={<Proprietorship />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/one-person-company" element={<OnePersonCompany />} />
              <Route path="/limited-liability-partnership" element={<LLP />} />
              <Route path="/private-limited-company" element={<PrivateLimitedCompany />} />
              <Route path="/public-limited-company" element={<PublicLimitedCompany />} />
              <Route path="/section-8-company" element={<Section8Company />} />
              <Route path="/trust-registration" element={<TrustRegistration />} />
              <Route path="/producer-company" element={<ProducerCompany />} />
              <Route path="/nidhi-company" element={<NidhiCompany />} />
              <Route path="/indian-subsidiary" element={<IndianSubsidiary />} />
              <Route path="/startup-india" element={<StartupIndia />} />
              <Route path="/trade-license" element={<TradeLicense />} />
              <Route path="/fssai-registration" element={<FSSAIRegistration />} />
              <Route path="/fssai-license" element={<FSSAiLicense />} />
              <Route path="/halal-certification" element={<HalalCertification />} />
              <Route path="/icegate-registration" element={<IcegateRegistration />} />
              <Route path="/import-export-code" element={<ImportExportCode />} />
              {/* <Route path="/society-registration" element={<SocietyRegistration />} /> */}
               <Route path="/setup-business-uae" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
                 <div className="text-center">
                   <h1 className="text-3xl font-bold text-gray-900 mb-4">Setup Business in UAE</h1>
                   <p className="text-gray-600 mb-6">This page is under development. Coming soon!</p>
                   <a href="/consultation" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                     Contact Us for Details
                   </a>
                 </div>
               </div>} />
              <Route path="/setup-business-usa" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Setup Business in USA</h1>
                  <p className="text-gray-600 mb-6">This page is under development. Coming soon!</p>
                  <a href="/consultation" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Contact Us for Details
                  </a>
                </div>
              </div>} /> 
              
              {/* Trademark Routes */}
              <Route path="/trademark-registration" element={<TrademarkRegistration />} />
              <Route path="/copyright-registration" element={<CopyrightRegistration />} />
              <Route path="/patent-registration" element={<PatentRegistration />} />
              
              {/* GST Routes */}
              <Route path="/gst-registration" element={<GstRegistration />} />
              <Route path="/gst-return-filing" element={<GstReturnFiling />} />
              <Route path="/gst-annual-return-filing-gstr9" element={<GstAnnualReturnFilingGstr9 />} />
              <Route path="/gst-lut-form" element={<GstLutForm />} />
              <Route path="/gst-notice" element={<GstNotice />} />
              <Route path="/gst-registration-for-foreigners" element={<GstRegistrationForForeigners />} />
              <Route path="/gst-registration-amendment" element={<GstRegistrationAmendment />} />
              <Route path="/gst-revocation" element={<GstRevocation />} />
              <Route path="/gst-gstr-10" element={<Gstr10ReturnFiling />} />
              
              {/* Tax Routes */}
              <Route path="/income-tax-e-filing-new" element={<IncomeTaxEFilingNew />} />
              <Route path="/itr-1-return-filing" element={<ITR1ReturnFiling />} />
              <Route path="/itr-2-return-filing" element={<ITR2ReturnFiling />} />
              <Route path="/itr-3-return-filing" element={<ITR3ReturnFiling />} />
              <Route path="/itr-4-return-filing" element={<ITR4ReturnFiling />} />
              <Route path="/itr-5-return-filing" element={<ITR5ReturnFiling />} />
              <Route path="/itr-6-return-filing" element={<ITR6ReturnFiling />} />
              <Route path="/itr-7-return-filing" element={<ITR7ReturnFiling />} />
              <Route path="/15ca-15cb-filing" element={<Fifteen_CA_15CB_Filing />} />
              <Route path="/tan-registration" element={<TANRegistration />} />
              <Route path="/tds-return-filing" element={<TDSReturnFiling />} />
              <Route path="/income-tax-notice" element={<IncomeTaxNotice />} />
              
              {/* Other service routes continue... */}
              <Route path="/digital-signature" element={<DigitalSignature />} />
              <Route path="/pf-registration" element={<PFRegistration />} />
              <Route path="/esi-registration" element={<ESIRegistration />} />
              <Route path="/demat-of-shares" element={<DematOfShares />} />
              <Route path="/winding-up-llp" element={<WindingUpLLP />} />
              <Route path="/winding-up-company" element={<WindingUpCompany />} />
              <Route path="/udyam-registration" element={<UdyamRegistration />} />
              <Route path="/fcra-registration" element={<FCRARegistration />} />
              <Route path="/company-compliance" element={<CompanyCompliance />} />
              <Route path="/llp-compliance" element={<LlpCompliance />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/talk-to-expert" element={<TalkToExpert />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/guide" element={<Guide />} />
              
              {/* Additional routes */}
              <Route path="/legal-entity-identifier-code" element={<LegalEntityIdentifierCode />} />
              <Route path="/iso-registration" element={<ISORegistration />} />
              <Route path="/professional-tax-registration" element={<ProfessionalTaxRegistration />} />
              <Route path="/rcmc-registration" element={<RCMCRegistration />} />
              <Route path="/rera-registration-for-agents" element={<ReraRegistrationForAgents />} />
              <Route path="/12a-80g-registration" element={<Twelve_A_80G_Registration />} />
              <Route path="/12a-registration" element={<Twelve_A_Registration />} />
              <Route path="/80g-registration" element={<EightyG_Registration />} />
              <Route path="/apeda-registration" element={<ApedaRegistration />} />
              <Route path="/barcode-registration" element={<BarcodeRegistration />} />
              <Route path="/bis-registration" element={<BisRegistration />} />
              <Route path="/certificate-of-incumbency" element={<CertificateOfIncumbency />} />
              <Route path="/darpan-registration" element={<DarpanRegistration />} />
              <Route path="/shop-and-establishment-act" element={<ShopAndEstablishmentAct />} />
              <Route path="/drug-license" element={<DrugLicense />} />
              <Route path="/fire-license" element={<FireLicense />} />
              
              {/* MCA Routes */}
              <Route path="/name-change-company" element={<NameChangeCompany />} />
              <Route path="/registered-office-change-company" element={<RegisteredOfficeChangeCompany />} />
              <Route path="/din-ekyc-filing" element={<DINEkycFiling />} />
              <Route path="/din-reactivation" element={<DINReactivation />} />
              <Route path="/director-change" element={<DirectorChange />} />
              {/* <Route path="/remove-director" element={<RemoveDirector />} /> */}
              {/* <Route path="/adt1-filing" element={<Adt1Filing />} /> */}
              <Route path="/dpt3-filing" element={<DPT3Filing />} />
              <Route path="/llp-form11-filing" element={<LLPForm11Filing />} />
              {/* <Route path="/dormant-status-filing" element={<DormantStatusFiling />} /> */}
              <Route path="/moa-amendment" element={<MOAAmendment />} />
              <Route path="/aoa-amendment" element={<AOAAmendment />} />
              <Route path="/authorized-capital-increase" element={<AuthorizedCapitalIncrease />} />
              <Route path="/share-transfer" element={<ShareTransfer />} />
              
              {/* Compliance Routes */}
              <Route path="/fdi-filing-rbi" element={<FDIFilingWithRBI />} />
              <Route path="/fla-return-filing" element={<FLAReturnFiling />} />
              <Route path="/fssai-renewal" element={<FSSAIRenewal />} />
              <Route path="/fssai-return-filing" element={<FSSAIReturnFiling />} />
              <Route path="/pf-return-filing" element={<PFReturnFiling />} />
              <Route path="/esi-return-filing" element={<ESIReturnFiling />} />
              <Route path="/professional-tax-return-filing" element={<ProfessionalTaxReturnFiling />} />
              <Route path="/partnership-compliance" element={<PartnershipCompliance />} />
              <Route path="/proprietorship-compliance" element={<ProprietorshipCompliance />} />
              <Route path="/bookkeeping" element={<Bookkeeping />} />
              <Route path="/opc-compliance" element={<OpcCompliance />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
