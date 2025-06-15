
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import BusinessRegistration from "./pages/BusinessRegistration";
import Registrations from "./pages/Registrations";
import Consultation from "./pages/Consultation";
import Proprietorship from "./pages/Proprietorship";
import Partnership from "./pages/Partnership";
import OnePersonCompany from "./pages/OnePersonCompany";
import LLP from "./pages/LLP";
import PrivateLimitedCompany from "./pages/PrivateLimitedCompany";
import PublicLimitedCompany from "./pages/PublicLimitedCompany";
import Section8Company from "./pages/Section8Company";
import TrustRegistration from "./pages/TrustRegistration";
import ProducerCompany from "./pages/ProducerCompany";
import IndianSubsidiary from "./pages/IndianSubsidiary";
import StartupIndia from "./pages/StartupIndia";
import TradeLicense from "./pages/TradeLicense";
import FSSAIRegistration from "./pages/FSSAIRegistration";
import FSSAiLicense from "./pages/FSSAiLicense";
import HalalCertification from "./pages/HalalCertification";
import IcegateRegistration from "./pages/IcegateRegistration";
import ImportExportCode from "./pages/ImportExportCode";
import LegalEntityIdentifierCode from "./pages/LegalEntityIdentifierCode";
import ISORegistration from "./pages/ISORegistration";
import PFRegistration from "./pages/PFRegistration";
import ESIRegistration from "./pages/ESIRegistration";
import ProfessionalTaxRegistration from "./pages/ProfessionalTaxRegistration";
import RCMCRegistration from "./pages/RCMCRegistration";
import ReraRegistrationForAgents from "./pages/ReraRegistrationForAgents";
import TwelveAand80GRegistration from "./pages/12Aand80GRegistration";
import TwelveARegistration from "./pages/12ARegistration";
import BisRegistration from "./pages/BisRegistration";
import BarcodeRegistration from "./pages/BarcodeRegistration";
import ApedaRegistration from "./pages/ApedaRegistration";
import EightyGRegistration from "./pages/EightyGRegistration";
import CertificateOfIncumbency from "./pages/CertificateOfIncumbency";
import DarpanRegistration from "./pages/DarpanRegistration";
import DigitalSignature from "./pages/DigitalSignature";
import ShopAndEstablishmentAct from "./pages/ShopAndEstablishmentAct";
import DrugLicense from "./pages/DrugLicense";
import IncomeTaxEFiling from "./pages/IncomeTaxEFiling";
import FireLicense from "./pages/FireLicense";
import TrademarkRegistration from "./pages/TrademarkRegistration";
import CopyrightRegistration from "./pages/CopyrightRegistration";
import PatentRegistration from "./pages/PatentRegistration";
import GstRegistration from "./pages/GstRegistration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/business-registration" element={<BusinessRegistration />} />
          <Route path="/registrations" element={<Registrations />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/proprietorship" element={<Proprietorship />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/one-person-company" element={<OnePersonCompany />} />
          <Route path="/limited-liability-partnership" element={<LLP />} />
          <Route path="/private-limited-company" element={<PrivateLimitedCompany />} />
          <Route path="/public-limited-company" element={<PublicLimitedCompany />} />
          <Route path="/section-8-company" element={<Section8Company />} />
          <Route path="/trust-registration" element={<TrustRegistration />} />
          <Route path="/producer-company" element={<ProducerCompany />} />
          <Route path="/indian-subsidiary" element={<IndianSubsidiary />} />
          <Route path="/startup-india" element={<StartupIndia />} />
          <Route path="/trade-license" element={<TradeLicense />} />
          <Route path="/fssai-registration" element={<FSSAIRegistration />} />
          <Route path="/fssai-license" element={<FSSAiLicense />} />
          <Route path="/halal-certification" element={<HalalCertification />} />
          <Route path="/icegate-registration" element={<IcegateRegistration />} />
          <Route path="/import-export-code" element={<ImportExportCode />} />
          <Route path="/legal-entity-identifier-code" element={<LegalEntityIdentifierCode />} />
          <Route path="/iso-registration" element={<ISORegistration />} />
          <Route path="/pf-registration" element={<PFRegistration />} />
          <Route path="/esi-registration" element={<ESIRegistration />} />
          <Route path="/professional-tax-registration" element={<ProfessionalTaxRegistration />} />
          <Route path="/rcmc-registration" element={<RCMCRegistration />} />
          <Route path="/rera-registration-for-agents" element={<ReraRegistrationForAgents />} />
          <Route path="/12a-80g-registration" element={<TwelveAand80GRegistration />} />
          <Route path="/12a-registration" element={<TwelveARegistration />} />
          <Route path="/bis-registration" element={<BisRegistration />} />
          <Route path="/barcode-registration" element={<BarcodeRegistration />} />
          <Route path="/apeda-registration" element={<ApedaRegistration />} />
          <Route path="/80g-registration" element={<EightyGRegistration />} />
          <Route path="/certificate-of-incumbency" element={<CertificateOfIncumbency />} />
          <Route path="/darpan-registration" element={<DarpanRegistration />} />
          <Route path="/digital-signature" element={<DigitalSignature />} />
          <Route path="/shop-and-establishment-act" element={<ShopAndEstablishmentAct />} />
          <Route path="/drug-license" element={<DrugLicense />} />
          <Route path="/income-tax-e-filing" element={<IncomeTaxEFiling />} />
          <Route path="/fire-license" element={<FireLicense />} />
          <Route path="/trademark-registration" element={<TrademarkRegistration />} />
          <Route path="/copyright-registration" element={<CopyrightRegistration />} />
          <Route path="/patent-registration" element={<PatentRegistration />} />
          <Route path="/gst-registration" element={<GstRegistration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
