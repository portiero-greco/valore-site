import { useLanguage } from "../lib/LanguageContext";
import { Link } from "react-router-dom";
import { assets } from "../lib/assets";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function IndividualSolutions() {
  const { t, language } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  const safeText = {
    title:    t?.individualSolutions?.title    || "Individual Solutions",
    subtitle: t?.individualSolutions?.subtitle || "Tailored insurance for every aspect of your life.",
  };

  const solutions = [
    { image: assets.homeInsurance,    path: "/home-insurance",    ...t.individualSolutions.categories.homeInsurance    },
    { image: assets.vehicleInsurance, path: "/vehicle-insurance", ...t.individualSolutions.categories.vehicleInsurance },
    { image: assets.boatInsurance,    path: "/boat-insurance",    ...t.individualSolutions.categories.boatInsurance    },
    { image: assets.healthPrograms,   path: "/health-programs",   ...t.individualSolutions.categories.healthPrograms   },
    { image: assets.petInsurance,     path: "/pet-insurance",     ...t.individualSolutions.categories.petInsurance     },
  ];

  const HEADER_H = 72;

  return (
    <>
      <style>{`
        .isol-wrap {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #f9fafb;
        }

        .isol-header {
          flex-shrink: 0;
          height: ${HEADER_H}px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          background: white;
          border-bottom: 1px solid #f0f0f0;
        }

        .isol-tiles {
          flex: 1;
          display: flex;
          min-height: 0;
          overflow: hidden;
        }

        .isol-tile {
          flex: 1;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }
        .isol-tile.active { flex: 2.2; }

        .isol-tile img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease;
          filter: brightness(0.45) saturate(0.7);
        }
        .isol-tile.active img {
          transform: scale(1.06);
          filter: brightness(0.35) saturate(0.8);
        }

        .isol-tile::after {
          content: '';
          position: absolute;
          top: 10%; bottom: 10%; right: 0;
          width: 1px;
          background: rgba(255,255,255,0.12);
        }
        .isol-tile:last-child::after { display: none; }

        .isol-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px 24px;
          z-index: 2;
        }

        .isol-num {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 10px;
          transition: color 0.3s;
        }
        .isol-tile.active .isol-num { color: #52a447; }

        .isol-title {
          font-size: clamp(14px, 1.3vw, 19px);
          font-weight: 700;
          color: white;
          line-height: 1.25;
          margin-bottom: 0;
          transition: all 0.4s ease;
          letter-spacing: -0.01em;
        }
        .isol-tile.active .isol-title {
          font-size: clamp(18px, 1.8vw, 26px);
          margin-bottom: 8px;
        }

        .isol-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          line-height: 1.65;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s ease, opacity 0.4s ease;
        }
        .isol-tile.active .isol-desc {
          max-height: 80px;
          opacity: 1;
        }

        .isol-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s ease, opacity 0.4s ease, margin-top 0.3s ease;
          font-size: 13px;
          font-weight: 600;
          color: #52a447;
          text-decoration: none;
        }
        .isol-tile.active .isol-cta {
          max-height: 40px;
          opacity: 1;
          margin-top: 14px;
        }

        .isol-accent {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #52a447;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .isol-tile.active .isol-accent { transform: scaleX(1); }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .isol-wrap {
            height: 100vh;
            overflow: hidden;
          }

          .isol-header {
            height: auto;
            min-height: 56px;
            padding: 14px 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .isol-header p {
            text-align: left !important;
            max-width: 100% !important;
          }

          .isol-tiles {
            flex-direction: column;
            flex: 1;
            height: 0;
            overflow: hidden;
          }

          /* All tiles share space equally — active one expands */
          .isol-tile {
            flex: 1 !important;
            height: auto !important;
            width: 100%;
            transition: flex 0.45s cubic-bezier(0.4,0,0.2,1);
          }
          .isol-tile.active {
            flex: 3 !important;
          }

          .isol-tile::after { display: none; }
          .isol-tile:not(:last-child)::before {
            content: '';
            position: absolute;
            bottom: 0; left: 0; right: 0;
            height: 1px;
            background: rgba(255,255,255,0.1);
            z-index: 3;
          }

          .isol-content { padding: 16px 20px; }

          .isol-title { font-size: 15px !important; }
          .isol-tile.active .isol-title { font-size: 20px !important; }
          .isol-desc { font-size: 13px; }
          .isol-cta  { font-size: 13px; }
        }

        @media (max-width: 480px) {
          .isol-header { padding: 12px 20px; }
        }
      `}</style>

      <div className="isol-wrap">
        <div className="isol-header">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <div style={{ height: 1, width: 28, backgroundColor: "#52a447" }} />
              <span style={{ color: "#52a447", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>{language === "el" ? "Ιδιώτες" : "Individual"}</span>
            </div>
            <h2 style={{ fontSize: "clamp(16px, 1.6vw, 22px)", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", margin: 0 }}>
              {safeText.title}
            </h2>
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", maxWidth: 340, textAlign: "right", margin: 0, lineHeight: 1.6 }}>
            {safeText.subtitle}
          </p>
        </div>

        <div className="isol-tiles">
          {solutions.map((s, i) => (
            <Link
              key={i}
              to={s.path}
              className={`isol-tile${hovered === i ? " active" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setHovered(i)}
            >
              <img src={s.image} alt={s.title} />
              <div className="isol-content">
                <div className="isol-num">0{i + 1}</div>
                <h3 className="isol-title">{s.title}</h3>
                <p className="isol-desc">{s.description}</p>
                <span className="isol-cta">
                  {language === "el" ? "Περισσότερα" : "Learn more"} <ArrowUpRight size={14} />
                </span>
              </div>
              <div className="isol-accent" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}