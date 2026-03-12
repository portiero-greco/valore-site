import { FAQIndividualsPage } from "./pages/FAQIndividualsPage";
import { BusinessSolutionsPage } from "./pages/BusinessSolutionsPage";
import { FAQBusinessesPage } from "./pages/FAQBusinessesPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./lib/LanguageContext";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { PersonalInsurancePage } from "./pages/PersonalInsurancePage";
import { BoatInsurancePage } from "./pages/BoatInsurancePage";
import { HealthProgramsPage } from "./pages/HealthProgramsPage";
import { PetInsurancePage } from "./pages/PetInsurancePage";
import { HomeInsurancePage } from "./pages/HomeInsurancePage";
import { VehicleInsurancePage } from "./pages/VehicleInsurancePage";
import { HealthFormPage } from "./pages/HealthFormPage";
import { PropertyFormPage } from "./pages/PropertyFormPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { LanguageToggle } from "./components/LanguageToggle";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <LanguageToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-insurance" element={<PersonalInsurancePage />} />
          <Route path="/boat-insurance" element={<BoatInsurancePage />} />
          <Route path="/health-programs" element={<HealthProgramsPage />} />
          <Route path="/pet-insurance" element={<PetInsurancePage />} />
          <Route path="/home-insurance" element={<HomeInsurancePage />} />
          <Route path="/vehicle-insurance" element={<VehicleInsurancePage />} />
          <Route path="/faq-individuals" element={<FAQIndividualsPage />} />
          <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
          <Route path="/faq-businesses" element={<FAQBusinessesPage />} />
          <Route path="/health-form" element={<HealthFormPage />} />
          <Route path="/property-form" element={<PropertyFormPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}