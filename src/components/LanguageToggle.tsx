import { useLanguage } from "../lib/LanguageContext";
import { useState, useEffect } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("scroll-container") || window;
      const y = el instanceof Window ? window.scrollY : (el as HTMLElement).scrollTop;
      setScrolled(y >= 40);
    };
    const el = document.getElementById("scroll-container") || window;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .lang-toggle {
          position: fixed;
          top: 16px;
          right: 18px;
          z-index: 300;
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          overflow: hidden;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .lang-toggle.scrolled {
          background: rgba(255,255,255,0.96);
          border-color: #e5e7eb;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
        }
        .lang-toggle-btn {
          padding: 7px 11px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.45);
          transition: color 0.2s, background 0.2s;
          line-height: 1;
        }
        .lang-toggle.scrolled .lang-toggle-btn {
          color: #9ca3af;
        }
        .lang-toggle-btn.active {
          color: #52a447;
          background: rgba(82,164,71,0.12);
        }
        .lang-toggle.scrolled .lang-toggle-btn.active {
          color: #52a447;
          background: rgba(82,164,71,0.1);
        }
        .lang-toggle-btn:not(.active):hover {
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.08);
        }
        .lang-toggle.scrolled .lang-toggle-btn:not(.active):hover {
          color: #374151;
          background: rgba(0,0,0,0.04);
        }
        .lang-toggle-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.18);
          flex-shrink: 0;
          transition: background 0.3s;
        }
        .lang-toggle.scrolled .lang-toggle-divider {
          background: #e5e7eb;
        }
        @media (max-width: 768px) {
          .lang-toggle {
            top: 12px;
            right: 12px;
          }
        }
      `}</style>

      <div className={`lang-toggle${scrolled ? " scrolled" : ""}`}>
        <button
          className={`lang-toggle-btn${language === "el" ? " active" : ""}`}
          onClick={() => setLanguage("el")}
          title="Ελληνικά"
        >
          GR
        </button>
        <div className="lang-toggle-divider" />
        <button
          className={`lang-toggle-btn${language === "en" ? " active" : ""}`}
          onClick={() => setLanguage("en")}
          title="English"
        >
          EN
        </button>
      </div>
    </>
  );
}
