import { useState, useRef } from "react";
import { Menu, X, Languages, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/LanguageContext";
import { assets } from "../lib/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef<number | null>(null);
  const formsTimeoutRef = useRef<number | null>(null);

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      // If we're already on home page, just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setIsInsuranceOpen(false);
    setIsFormsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "el" : "en");
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsInsuranceOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsInsuranceOpen(false);
    }, 150);
  };

  const handleFormsMouseEnter = () => {
    if (formsTimeoutRef.current) {
      clearTimeout(formsTimeoutRef.current);
      formsTimeoutRef.current = null;
    }
    setIsFormsOpen(true);
  };

  const handleFormsMouseLeave = () => {
    formsTimeoutRef.current = window.setTimeout(() => {
      setIsFormsOpen(false);
    }, 150);
  };

  const navLinks = [
    { label: t.nav.about, href: "about" },
    { label: t.nav.history, href: "history" }
  ];

  const navLinksAfter = [
    { label: t.nav.uniqueCoverages, href: "unique-coverages" },
    { label: t.nav.contact, href: "contact" }
  ];

  const insuranceDropdownItems = [
    { label: t.nav.solutionsForIndividuals, href: "individual-solutions", type: "scroll" },
    { label: t.nav.faqIndividuals, href: "/faq-individuals", type: "route" },
    { label: t.nav.solutionsForBusinesses, href: "/business-solutions", type: "route" },
    { label: t.nav.faqBusinesses, href: "/faq-businesses", type: "route" }
  ];

  const formsDropdownItems = [
    { label: t.nav.healthForm, href: "/health-form", type: "route" },
    { label: t.nav.propertyForm, href: "/property-form", type: "route" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={assets.logo} 
                alt="Valore Assicurativo" 
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            
            {/* Insurance Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1"
              >
                {t.nav.insurance}
                <ChevronDown className={`w-4 h-4 transition-transform ${isInsuranceOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isInsuranceOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {insuranceDropdownItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        if (item.type === "route") {
                          navigate(item.href);
                        } else {
                          scrollToSection(item.href);
                        }
                      }}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Forms Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleFormsMouseEnter}
              onMouseLeave={handleFormsMouseLeave}
            >
              <button
                className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1"
              >
                {t.nav.forms}
                <ChevronDown className={`w-4 h-4 transition-transform ${isFormsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isFormsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {formsDropdownItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        if (item.type === "route") {
                          navigate(item.href);
                        } else {
                          scrollToSection(item.href);
                        }
                      }}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinksAfter.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === "en" ? "ΕΛ" : "EN"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === "en" ? "ΕΛ" : "EN"}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-green-600 transition-colors text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Mobile Insurance Dropdown */}
              <div>
                <button
                  onClick={() => setIsInsuranceOpen(!isInsuranceOpen)}
                  className="text-gray-700 hover:text-green-600 transition-colors text-left py-2 flex items-center gap-1 w-full"
                >
                  {t.nav.insurance}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isInsuranceOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isInsuranceOpen && (
                  <div className="pl-4 flex flex-col space-y-2 mt-2">
                    {insuranceDropdownItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => {
                          if (item.type === "route") {
                            navigate(item.href);
                          } else {
                            scrollToSection(item.href);
                          }
                        }}
                        className="text-gray-600 hover:text-green-600 transition-colors text-left py-2"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Forms Dropdown */}
              <div>
                <button
                  onClick={() => setIsFormsOpen(!isFormsOpen)}
                  className="text-gray-700 hover:text-green-600 transition-colors text-left py-2 flex items-center gap-1 w-full"
                >
                  {t.nav.forms}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isFormsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isFormsOpen && (
                  <div className="pl-4 flex flex-col space-y-2 mt-2">
                    {formsDropdownItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => {
                          if (item.type === "route") {
                            navigate(item.href);
                          } else {
                            scrollToSection(item.href);
                          }
                        }}
                        className="text-gray-600 hover:text-green-600 transition-colors text-left py-2"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {navLinksAfter.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-green-600 transition-colors text-left py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}