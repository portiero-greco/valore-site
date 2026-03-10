import { useState, useEffect, useRef } from "react";
import { Languages, Home, Clock, Shield, Star, Users, Link2, Phone, FileText, Building2, ChevronRight } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const [atTop, setAtTop] = useState(true);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const lastScrollY = useRef(0);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hideOn = [
    "/personal-insurance",
    "/boat-insurance",
    "/health-programs",
    "/pet-insurance",
    "/home-insurance",
    "/vehicle-insurance",
    "/faq-individuals",
    "/business-solutions",
    "/faq-businesses",
    "/health-form",
    "/property-form",
  ];

  useEffect(() => {
    const getContainer = () => document.getElementById("scroll-container") || window;
    let container = getContainer();
    const handleScroll = () => {
      const scrollY = container instanceof Window ? window.scrollY : (container as HTMLElement).scrollTop;
      setAtTop(scrollY < 40);
      lastScrollY.current = scrollY;
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") { navigate(`/#${id}`); }
    else {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
    setExpandedItem(null);
    setSidebarOpen(false);
  };

  const toggleLanguage = () => setLanguage(language === "en" ? "el" : "en");

  const navItems = [
    { id: "home",     icon: Home,      label: language === "el" ? "Αρχική"       : "Home",               href: "hero",                 type: "scroll", sub: null },
    { id: "history",  icon: Clock,     label: language === "el" ? "Ιστορία"      : "History",             href: "history",              type: "scroll", sub: null },
    { id: "ind",      icon: Shield,    label: language === "el" ? "Λύσεις"       : "Solutions",           href: "individual-solutions", type: "scroll",
      sub: [
        { label: language === "el" ? "Ιδιώτες"      : "For Individuals", href: "individual-solutions", type: "scroll" },
        { label: language === "el" ? "Επιχειρήσεις" : "For Businesses",  href: "/business-solutions",  type: "route"  },
        { label: language === "el" ? "FAQ Ιδιώτες"  : "FAQ Individuals", href: "/faq-individuals",     type: "route"  },
        { label: language === "el" ? "FAQ Επιχ."    : "FAQ Businesses",  href: "/faq-businesses",      type: "route"  },
      ]
    },
    { id: "unique",   icon: Star,      label: language === "el" ? "Μοναδικές Καλύψεις" : "Unique Coverages", href: "unique-coverages", type: "scroll", sub: null },
    { id: "clients",  icon: Users,     label: language === "el" ? "Πελάτες"      : "Clients",             href: "clients",              type: "scroll", sub: null },
    { id: "partners", icon: Link2,     label: language === "el" ? "Συνεργάτες"   : "Partners",            href: "connections",          type: "scroll", sub: null },
    { id: "forms",    icon: FileText,  label: language === "el" ? "Φόρμες"       : "Forms",               href: "/health-form",         type: "route",
      sub: [
        { label: language === "el" ? "Φόρμα Υγείας"   : "Health Form",   href: "/health-form",   type: "route" },
        { label: language === "el" ? "Φόρμα Ακινήτου" : "Property Form", href: "/property-form", type: "route" },
      ]
    },
    { id: "contact",  icon: Phone,     label: language === "el" ? "Επικοινωνία"  : "Contact",             href: "contact",              type: "scroll", sub: null },
  ];

  const handleItemEnter = (id: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setExpandedItem(id);
  };
  const handleItemLeave = () => {
    hoverTimeout.current = setTimeout(() => setExpandedItem(null), 150);
  };
  const handleSubEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  if (hideOn.includes(location.pathname)) return null;

  return (
    <>
      <style>{`
        .nb-rail {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 199;
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 8px 0;
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-right: 1px solid rgba(255,255,255,0.1);
          border-radius: 0 10px 10px 0;
        }
        .nb-rail.nb-rail-solid {
          background: rgba(255,255,255,0.96);
          border-right: 1px solid #e5e7eb;
          box-shadow: 4px 0 24px rgba(0,0,0,0.06);
        }

        .nb-rail-btn {
          position: relative;
          width: 52px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          border-left: 2px solid transparent;
          transition: background 0.2s, border-color 0.2s;
          color: rgba(255,255,255,0.6);
        }
        .nb-rail-solid .nb-rail-btn { color: #6b7280; }
        .nb-rail-btn:hover,
        .nb-rail-btn.active {
          background: rgba(82,164,71,0.12);
          border-left-color: #52a447;
          color: #52a447;
        }

        .nb-panel {
          position: fixed;
          left: 52px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 198;
          background: rgba(255,255,255,0.97);
          border: 1px solid #e5e7eb;
          border-radius: 0 10px 10px 0;
          box-shadow: 6px 0 32px rgba(0,0,0,0.08);
          min-width: 200px;
          overflow: hidden;
          animation: nb-slide-in 0.18s ease;
        }
        @keyframes nb-slide-in {
          from { opacity: 0; transform: translateY(-50%) translateX(-8px); }
          to   { opacity: 1; transform: translateY(-50%) translateX(0);    }
        }

        .nb-panel-header {
          padding: 14px 18px 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9ca3af;
          border-bottom: 1px solid #f3f4f6;
        }

        .nb-panel-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 11px 18px;
          font-size: 13.5px;
          font-weight: 500;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .nb-panel-item:hover { background: rgba(82,164,71,0.07); color: #52a447; }

        .nb-subpanel {
          position: fixed;
          left: 252px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 197;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          box-shadow: 6px 0 32px rgba(0,0,0,0.08);
          min-width: 180px;
          overflow: hidden;
          animation: nb-slide-in 0.15s ease;
        }

        .nb-subpanel-item {
          display: block;
          width: 100%;
          padding: 11px 18px;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .nb-subpanel-item:hover { background: rgba(82,164,71,0.07); color: #52a447; }

        .nb-rail-divider {
          height: 1px;
          margin: 4px 8px;
          background: rgba(255,255,255,0.12);
          transition: background 0.3s;
        }
        .nb-rail-solid .nb-rail-divider { background: #e5e7eb; }

        @media (max-width: 768px) {
          .nb-rail, .nb-panel, .nb-subpanel { display: none; }
        }
      `}</style>

      <div className={`nb-rail${atTop ? "" : " nb-rail-solid"}`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = expandedItem === item.id;
          return (
            <button
              key={item.id}
              className={`nb-rail-btn${isActive ? " active" : ""}`}
              onMouseEnter={() => handleItemEnter(item.id)}
              onMouseLeave={handleItemLeave}
              onClick={() => !item.sub && (item.type === "route" ? navigate(item.href) : scrollToSection(item.href))}
              title={item.label}
            >
              <Icon size={17} />
            </button>
          );
        })}
        <div className="nb-rail-divider" />
        <button
          className="nb-rail-btn"
          onClick={toggleLanguage}
          title={language === "en" ? "Switch to Greek" : "Switch to English"}
        >
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.08em" }}>
            {language === "en" ? "ΕΛ" : "EN"}
          </span>
        </button>
      </div>

      {expandedItem && (() => {
        const item = navItems.find(n => n.id === expandedItem);
        if (!item) return null;
        return (
          <div
            className="nb-panel"
            onMouseEnter={handleSubEnter}
            onMouseLeave={handleItemLeave}
          >
            <div className="nb-panel-header">{item.label}</div>
            {item.sub ? (
              item.sub.map((s, i) => (
                <button key={i} className="nb-panel-item"
                  onClick={() => s.type === "route" ? (navigate(s.href), setExpandedItem(null)) : scrollToSection(s.href)}
                >
                  {s.label}
                  <ChevronRight size={13} style={{ color: "#d1d5db" }} />
                </button>
              ))
            ) : (
              <button className="nb-panel-item"
                onClick={() => item.type === "route" ? (navigate(item.href), setExpandedItem(null)) : scrollToSection(item.href)}
              >
                {language === "el" ? "Μετάβαση" : "Go to"} {item.label}
              </button>
            )}
          </div>
        );
      })()}
    </>
  );
}