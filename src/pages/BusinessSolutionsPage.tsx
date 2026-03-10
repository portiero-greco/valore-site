import { Building2, Shield, Truck, Banknote, Users, Laptop, CreditCard, FileText, Check } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { useState } from "react";

export function BusinessSolutionsPage() {
  const { t, language } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);
  const isTouchRef = { current: false };

  const safeText = {
    title:    t?.businessSolutions?.title    || "Business Solutions",
    subtitle: t?.businessSolutions?.subtitle || "Comprehensive insurance coverage for your business.",
  };

  const categories = [
    {
      id: "propertyInsurance",
      icon: Building2,
      photo: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&fit=crop",
      title: t.businessSolutions.categories.propertyInsurance.title,
      description: t.businessSolutions.categories.propertyInsurance.description,
      items: t.businessSolutions.categories.propertyInsurance.risks,
    },
    {
      id: "vehicleInsurance",
      icon: Truck,
      photo: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&fit=crop",
      title: t.businessSolutions.categories.vehicleInsurance.title,
      description: t.businessSolutions.categories.vehicleInsurance.description,
      items: null,
    },
    {
      id: "moneyInsurance",
      icon: Banknote,
      photo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&fit=crop",
      title: t.businessSolutions.categories.moneyInsurance.title,
      description: null,
      items: t.businessSolutions.categories.moneyInsurance.risks,
    },
    {
      id: "personnelInsurance",
      icon: Users,
      photo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&fit=crop",
      title: t.businessSolutions.categories.personnelInsurance.title,
      description: t.businessSolutions.categories.personnelInsurance.description,
      items: null,
    },
    {
      id: "civilLiability",
      icon: Shield,
      photo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fit=crop",
      title: t.businessSolutions.categories.civilLiability.title,
      description: null,
      items: [
        t.businessSolutions.categories.civilLiability.general.title,
        t.businessSolutions.categories.civilLiability.employer.title,
        t.businessSolutions.categories.civilLiability.professional.title,
        t.businessSolutions.categories.civilLiability.product.title,
        t.businessSolutions.categories.civilLiability.pollution.title,
        t.businessSolutions.categories.civilLiability.carrier.title,
        t.businessSolutions.categories.civilLiability.directors.title,
      ],
    },
    {
      id: "cyberRisks",
      icon: Laptop,
      photo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&fit=crop",
      title: t.businessSolutions.categories.cyberRisks.title,
      description: t.businessSolutions.categories.cyberRisks.description,
      items: null,
    },
    {
      id: "creditInsurance",
      icon: CreditCard,
      photo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80&fit=crop",
      title: t.businessSolutions.categories.creditInsurance.title,
      description: t.businessSolutions.categories.creditInsurance.description,
      items: null,
    },
    {
      id: "guaranteeLetters",
      icon: FileText,
      photo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop",
      title: t.businessSolutions.categories.guaranteeLetters.title,
      description: t.businessSolutions.categories.guaranteeLetters.description,
      items: null,
    },
  ];

  const HEADER_H = 72;

  return (
    <>
      <style>{`
        .bs-wrap {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding-left: 52px;
          background: #111827;
        }

        .bs-header {
          flex-shrink: 0;
          height: ${HEADER_H}px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          background: #111827;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .bs-tiles {
          flex: 1;
          display: flex;
          min-height: 0;
          overflow: hidden;
        }

        .bs-tile {
          flex: 1;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bs-tile.active { flex: 3; }

        .bs-tile-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease;
          filter: brightness(0.38) saturate(0.7);
        }
        .bs-tile.active .bs-tile-photo {
          transform: scale(1.06);
          filter: brightness(0.28) saturate(0.8);
        }

        .bs-tile-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
          z-index: 1;
        }

        .bs-tile::after {
          content: '';
          position: absolute;
          top: 10%; bottom: 10%; right: 0;
          width: 1px;
          background: rgba(255,255,255,0.1);
          z-index: 2;
        }
        .bs-tile:last-child::after { display: none; }

        .bs-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 22px;
          z-index: 3;
        }

        .bs-icon-wrap {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(82,164,71,0.2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px;
          flex-shrink: 0;
          transition: background 0.3s;
        }
        .bs-tile.active .bs-icon-wrap { background: #52a447; }

        .bs-num {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.3);
          margin-bottom: 8px;
          transition: color 0.3s;
        }
        .bs-tile.active .bs-num { color: #52a447; }

        .bs-title {
          font-size: clamp(11px, 1vw, 14px);
          font-weight: 700;
          color: white;
          line-height: 1.3;
          margin-bottom: 0;
          transition: all 0.4s ease;
          letter-spacing: -0.01em;
        }
        .bs-tile.active .bs-title {
          font-size: clamp(15px, 1.4vw, 20px);
          margin-bottom: 10px;
        }

        .bs-desc {
          font-size: 12.5px;
          color: rgba(255,255,255,0.7);
          line-height: 1.65;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s ease, opacity 0.4s ease;
        }
        .bs-tile.active .bs-desc {
          max-height: 300px;
          opacity: 1;
        }

        .bs-items {
          list-style: none;
          padding: 0; margin: 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.5s ease, opacity 0.4s ease;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .bs-tile.active .bs-items {
          max-height: 400px;
          opacity: 1;
        }

        .bs-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 11.5px;
          color: rgba(255,255,255,0.65);
          line-height: 1.45;
        }

        .bs-item-dot {
          width: 14px; height: 14px;
          border-radius: 50%;
          background: rgba(82,164,71,0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }

        .bs-accent {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #52a447;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          z-index: 4;
        }
        .bs-tile.active .bs-accent { transform: scaleX(1); }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .bs-wrap {
            padding-left: 0;
            height: 100vh;
            overflow: hidden;
          }

          .bs-header {
            height: auto;
            min-height: 52px;
            padding: 12px 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .bs-header p {
            text-align: left !important;
            max-width: 100% !important;
          }

          .bs-tiles {
            flex-direction: column;
            height: 0;
            flex: 1;
            overflow: hidden;
          }

          .bs-tile {
            flex: 1 !important;
            min-height: 0 !important;
            width: 100%;
            transition: flex 0.45s cubic-bezier(0.4,0,0.2,1);
          }
          .bs-tile.active {
            flex: 4 !important;
          }

          .bs-tile::after { display: none; }
          .bs-tile:not(:last-child)::before {
            content: '';
            position: absolute;
            bottom: 0; left: 0; right: 0;
            height: 1px;
            background: rgba(255,255,255,0.1);
            z-index: 4;
          }

          .bs-content {
            justify-content: flex-end;
            padding: 14px 20px;
          }

          .bs-icon-wrap { width: 28px; height: 28px; margin-bottom: 6px; }
          .bs-num { margin-bottom: 4px; }
          .bs-title { font-size: 13px !important; }
          .bs-tile.active .bs-title { font-size: 17px !important; margin-bottom: 8px; }
          .bs-tile.active .bs-desc { max-height: 300px; }
          .bs-item { font-size: 11px; }
          .bs-tile.active .bs-items { max-height: 400px; }
        }

        @media (max-width: 480px) {
          .bs-header { padding: 10px 20px; }
          .bs-content { padding: 12px 16px; }
          .bs-tile.active .bs-title { font-size: 15px !important; }
        }
      `}</style>

      <div className="bs-wrap">
        <div className="bs-header">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <div style={{ height: 1, width: 28, backgroundColor: "#52a447" }} />
              <span style={{ color: "#52a447", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Business</span>
            </div>
            <h2 style={{ fontSize: "clamp(16px, 1.6vw, 22px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
              {safeText.title}
            </h2>
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", maxWidth: 340, textAlign: "right", margin: 0, lineHeight: 1.6 }}>
            {safeText.subtitle}
          </p>
        </div>

        <div className="bs-tiles">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = hovered === i;
            return (
              <div
                key={cat.id}
                className={`bs-tile${isActive ? " active" : ""}`}
                onMouseEnter={() => { if (!isTouchRef.current) setHovered(i); }}
                onMouseLeave={() => { if (!isTouchRef.current) setHovered(null); }}
                onTouchStart={(e) => { isTouchRef.current = true; setHovered(hovered === i ? null : i); }}
                onClick={() => { if (!isTouchRef.current) setHovered(hovered === i ? null : i); }}
              >
                <img src={cat.photo} alt={cat.title} className="bs-tile-photo" loading="lazy" />
                <div className="bs-tile-grad" />
                <div className="bs-content">
                  <div className="bs-icon-wrap">
                    <Icon size={16} color={isActive ? "white" : "#52a447"} />
                  </div>
                  <div className="bs-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="bs-title">{cat.title}</h3>
                  {cat.description && <p className="bs-desc">{cat.description}</p>}
                  {cat.items && cat.items.length > 0 && (
                    <ul className="bs-items">
                      {cat.items.slice(0, 5).map((item: string, ii: number) => (
                        <li key={ii} className="bs-item">
                          <div className="bs-item-dot"><Check size={8} color="#52a447" /></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="bs-accent" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}