import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { LeadModal } from "./components/LeadModal";

// Pages
import { HomePage } from "./pages/HomePage";
import { ServicePage } from "./pages/ServicePage";
import { LocationPage } from "./pages/LocationPage";
import { PackagesPage } from "./pages/PackagesPage";
import { BlogIndexPage } from "./pages/BlogIndexPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppShell: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [modalPackage, setModalPackage] = useState<string | undefined>(undefined);

  const handleOpenDemoModal = (service?: string, pkg?: string) => {
    setModalService(service);
    setModalPackage(pkg);
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <ScrollToTop />

      {/* Main Header */}
      <Header onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/ar" element={<HomePage onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/ar/" element={<HomePage onOpenDemoModal={handleOpenDemoModal} />} />

          {/* 10 Core Services (English + Arabic) */}
          <Route
            path="/zatca-e-invoicing-erp"
            element={<ServicePage slugOverride="zatca-e-invoicing-erp" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/zatca-e-invoicing-erp"
            element={<ServicePage slugOverride="zatca-e-invoicing-erp" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/industry-software"
            element={<ServicePage slugOverride="industry-software" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/industry-software"
            element={<ServicePage slugOverride="industry-software" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/industry-software/manpower-supply"
            element={<ServicePage slugOverride="industry-software" subIndustry="manpower-supply" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/industry-software/manpower-supply"
            element={<ServicePage slugOverride="industry-software" subIndustry="manpower-supply" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/industry-software/equipment-rental"
            element={<ServicePage slugOverride="industry-software" subIndustry="equipment-rental" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/industry-software/equipment-rental"
            element={<ServicePage slugOverride="industry-software" subIndustry="equipment-rental" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/industry-software/material-trading"
            element={<ServicePage slugOverride="industry-software" subIndustry="material-trading" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/industry-software/material-trading"
            element={<ServicePage slugOverride="industry-software" subIndustry="material-trading" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/website-design-development"
            element={<ServicePage slugOverride="website-design-development" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/website-design-development"
            element={<ServicePage slugOverride="website-design-development" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/business-email"
            element={<ServicePage slugOverride="business-email" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/business-email"
            element={<ServicePage slugOverride="business-email" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/company-profile-branding"
            element={<ServicePage slugOverride="company-profile-branding" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/company-profile-branding"
            element={<ServicePage slugOverride="company-profile-branding" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/digital-marketing"
            element={<ServicePage slugOverride="digital-marketing" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/digital-marketing"
            element={<ServicePage slugOverride="digital-marketing" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/accounting-vat-support"
            element={<ServicePage slugOverride="accounting-vat-support" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/accounting-vat-support"
            element={<ServicePage slugOverride="accounting-vat-support" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/gps-fleet-tracking"
            element={<ServicePage slugOverride="gps-fleet-tracking" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/gps-fleet-tracking"
            element={<ServicePage slugOverride="gps-fleet-tracking" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/ai-dashcam-monitoring"
            element={<ServicePage slugOverride="ai-dashcam-monitoring" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/ai-dashcam-monitoring"
            element={<ServicePage slugOverride="ai-dashcam-monitoring" onOpenDemoModal={handleOpenDemoModal} />}
          />

          <Route
            path="/remote-support-training"
            element={<ServicePage slugOverride="remote-support-training" onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/ar/remote-support-training"
            element={<ServicePage slugOverride="remote-support-training" onOpenDemoModal={handleOpenDemoModal} />}
          />

          {/* Popular Packages */}
          <Route path="/packages" element={<PackagesPage onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/ar/packages" element={<PackagesPage onOpenDemoModal={handleOpenDemoModal} />} />

          {/* Locations */}
          <Route path="/locations/:city" element={<LocationPage onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/ar/locations/:city" element={<LocationPage onOpenDemoModal={handleOpenDemoModal} />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ar/about" element={<AboutPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ar/contact" element={<ContactPage />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/ar/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/ar/blog/:slug" element={<BlogDetailPage />} />

          {/* FAQ */}
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/ar/faq" element={<FAQPage />} />

          {/* Legal: Privacy & Terms */}
          <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/ar/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/ar/terms" element={<LegalPage type="terms" />} />

          {/* Fallback 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Floating Action Buttons */}
      <FloatingActions onOpenDemoModal={() => handleOpenDemoModal()} />

      {/* Global Demo Booking & Quote Modal */}
      <LeadModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemoModal}
        initialService={modalService}
        initialPackage={modalPackage}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </BrowserRouter>
  );
}
