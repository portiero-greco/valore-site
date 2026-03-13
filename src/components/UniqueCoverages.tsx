import { Shield, Heart, Home, FileText, Scale, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { useState } from "react";

export function UniqueCoverages() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState<number>(0);

  const coverages = [
    {
      icon: Heart,
      photo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80&fit=crop",
      title: t.uniqueCoverages.groupamaHealth.title,
      description: t.uniqueCoverages.groupamaHealth.description,
      features: t.uniqueCoverages.groupamaHealth.features,
    },
    {
      icon: Shield,
      photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&fit=crop",
      title: t.uniqueCoverages.eurolifeGroup.title,
      description: t.uniqueCoverages.eurolifeGroup.description,
      features: t.uniqueCoverages.eurolifeGroup.options,
    },
    {
      icon: Home,
      photo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop",
      title: t.uniqueCoverages.homeInsurance.title,
      description: t.uniqueCoverages.homeInsurance.description,
      features: t.uniqueCoverages.homeInsurance.features,
    },
    {
      icon: FileText,
      photo: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80&fit=crop",
      title: t.uniqueCoverages.guaranteeLetters.title,
      description: t.uniqueCoverages.guaranteeLetters.description,
      features: [t.uniqueCoverages.guaranteeLetters.note],
    },
    {
      icon: Scale,
      photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&fit=crop",
      title: t.uniqueCoverages.professionalLiability.title,
      description: t.uniqueCoverages.professionalLiability.description,
      features: t.uniqueCoverages.professionalLiability.terms?.items,
    },
  ];

  const activeItem = coverages[active];
  const ActiveIcon = activeItem.icon;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        @keyframes uc-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .uc-animate { animation: uc-fade-up 0.45s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .uc-animate-delay-1 { animation-delay: 0.06s; }
        .uc-animate-delay-2 { animation-delay: 0.12s; }
        .uc-animate-delay-3 { animation-delay: 0.18s; }

        .uc-wrap {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #0d2818;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .uc-topbar {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 56px 0 108px;
          height: 72px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .uc-eyebrow { display: flex; align-items: center; gap: 10px; }
        .uc-eyebrow-line  { height: 1px; width: 28px; background: #52a447; }
        .uc-eyebrow-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #52a447; }

        .uc-topbar-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(15px, 1.4vw, 20px);
          font-weight: 500;
          color: #fff;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .uc-topbar-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          font-weight: 300;
          max-width: 320px;
          text-align: right;
          line-height: 1.6;
          margin: 0;
        }

        .uc-body {
          flex: 1;
          display: flex;
          min-height: 0;
          height: 0;
          align-items: stretch;
        }

        .uc-list {
          flex: 0 0 42%;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255,255,255,0.07);
          position: relative;
          height: 100%;
          align-self: stretch;
        }

        .uc-list-item {
          flex: 1;
          min-height: 0;
          display: flex;
          align-items: center;
          padding: 0 40px 0 108px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          position: relative;
          transition: background 0.3s;
          gap: 20px;
          overflow: hidden;
        }
        .uc-list-item:last-child { border-bottom: none; }
        .uc-list-item:hover { background: rgba(255,255,255,0.03); }
        .uc-list-item.uc-active { background: rgba(82,164,71,0.07); }

        .uc-list-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 1;
          transition: opacity 0.4s ease;
          filter: brightness(0.35) saturate(0.6);
          z-index: 0;
        }
        .uc-list-item.uc-active .uc-list-photo { filter: brightness(0.45) saturate(0.7); }
        .uc-list-item:hover .uc-list-photo { filter: brightness(0.42) saturate(0.65); }

        .uc-list-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(13,40,24,0.7) 0%, rgba(13,40,24,0.4) 100%);
          z-index: 1;
          opacity: 1;
        }

        .uc-list-item > *:not(.uc-list-photo):not(.uc-list-photo-overlay) { position: relative; z-index: 2; }

        .uc-list-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #52a447;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
          z-index: 3;
        }
        .uc-list-item.uc-active .uc-list-fill { width: 3px; }
        .uc-list-item:not(.uc-active) .uc-list-fill { width: 0; }

        .uc-list-idx {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.12);
          letter-spacing: 0.05em;
          flex-shrink: 0;
          transition: color 0.3s;
          width: 24px;
        }
        .uc-list-item.uc-active .uc-list-idx { color: rgba(82,164,71,0.5); }

        .uc-list-icon {
          width: 34px; height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s;
        }
        .uc-list-item.uc-active .uc-list-icon { background: #52a447; }
        .uc-list-item:not(.uc-active):hover .uc-list-icon { background: rgba(255,255,255,0.08); }

        .uc-list-label {
          flex: 1;
          font-size: clamp(13px, 1.1vw, 15px);
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          line-height: 1.4;
          transition: color 0.3s;
        }
        .uc-list-item.uc-active .uc-list-label { color: #fff; font-weight: 500; }
        .uc-list-item:hover:not(.uc-active) .uc-list-label { color: rgba(255,255,255,0.75); }

        .uc-list-arrow {
          flex-shrink: 0;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s, transform 0.3s;
          color: #52a447;
        }
        .uc-list-item.uc-active .uc-list-arrow { opacity: 1; transform: translateX(0); }

        .uc-detail {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .uc-detail-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.55) saturate(0.75);
          transition: opacity 0.5s ease;
          z-index: 0;
        }

        .uc-detail-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(13,40,24,0.55) 0%, rgba(13,40,24,0.35) 100%);
          z-index: 1;
        }

        .uc-detail-band {
          flex-shrink: 0;
          height: 3px;
          background: linear-gradient(to right, #52a447, transparent);
        }

        .uc-detail-inner {
          flex: 1;
          padding: 48px 72px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          position: relative;
          z-index: 2;
        }

        .uc-detail-head {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 32px;
        }

        .uc-detail-icon {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(82,164,71,0.12);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(82,164,71,0.3);
        }

        .uc-detail-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 3.2vw, 52px);
          font-weight: 200;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0;
        }
        .uc-detail-title strong { font-weight: 600; color: #52a447; }

        .uc-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 28px 0; }

        .uc-detail-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .uc-detail-eyebrow-line { height: 1px; width: 20px; background: #52a447; }
        .uc-detail-eyebrow-label { font-size: 9px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #52a447; }

        .uc-detail-desc {
          font-size: 17px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.85;
          margin: 0 0 36px;
          max-width: 540px;
          border-left: 2px solid rgba(82,164,71,0.3);
          padding-left: 18px;
        }

        .uc-features { display: flex; flex-direction: column; gap: 0; max-width: 560px; }

        .uc-feature {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          line-height: 1.5;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s;
        }
        .uc-feature:last-child { border-bottom: none; }
        .uc-feature:hover { color: rgba(255,255,255,0.9); }

        .uc-feature-check {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: rgba(82,164,71,0.12);
          border: 1px solid rgba(82,164,71,0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .uc-wrap {
            height: auto;
            overflow: visible;
            background: #0d2818;
          }

          .uc-topbar {
            padding: 14px 24px;
            height: auto;
            min-height: 60px;
          }

          .uc-topbar-sub { display: none; }

          .uc-body {
            flex-direction: column;
            height: auto;
            min-height: 0;
            overflow: visible;
          }

          /* Horizontal scrollable tab strip */
          .uc-list {
            flex: none;
            flex-direction: row;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            overflow-x: auto;
            overflow-y: hidden;
            height: auto;
            min-height: 64px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            align-self: auto;
          }
          .uc-list::-webkit-scrollbar { display: none; }

          .uc-list-item {
            flex: 0 0 auto;
            height: 64px;
            min-height: 64px;
            padding: 0 18px;
            border-bottom: none;
            border-right: 1px solid rgba(255,255,255,0.06);
            gap: 10px;
          }
          .uc-list-item:last-child { border-right: none; }

          .uc-list-idx  { display: none; }
          .uc-list-arrow { display: none; }

          /* Active indicator = bottom bar */
          .uc-list-fill {
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            width: 100% !important;
          }
          .uc-list-item:not(.uc-active) .uc-list-fill {
            width: 0 !important;
          }

          .uc-list-label {
            font-size: 13px;
            white-space: nowrap;
          }

          /* Detail panel: shrinks to content only */
          .uc-detail {
            flex: none !important;
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            overflow: visible !important;
            background: #0d2818 !important;
          }

          .uc-detail-photo {
            display: none !important;
          }

          .uc-detail-overlay {
            display: none !important;
          }

          .uc-detail-band {
            background: linear-gradient(to right, #52a447, transparent);
          }

          .uc-detail-inner {
            padding: 32px 24px 48px;
            background: #0d2818;
            position: relative;
            z-index: 2;
            flex: none !important;
            overflow: visible !important;
          }

          .uc-detail-title { font-size: clamp(24px, 7vw, 36px); }
          .uc-detail-desc  { font-size: 15px; }
          .uc-feature      { font-size: 14px; padding: 13px 0; }
        }

        @media (max-width: 480px) {
          .uc-topbar { padding: 14px 20px; }
          .uc-list-item { padding: 0 14px; }
          .uc-list-label { font-size: 11px; }
          .uc-list-icon  { width: 28px; height: 28px; }
          .uc-detail-inner { padding: 28px 20px 40px; }
        }
      `}</style>

      <div className="uc-wrap" id="unique-coverages">

        <div className="uc-topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div className="uc-eyebrow">
              <div className="uc-eyebrow-line" />
              <span className="uc-eyebrow-label">{language === "el" ? "Καλύψεις" : "Coverages"}</span>
            </div>
            <h2 className="uc-topbar-title">
              {language === "el" ? "Μοναδικές Καλύψεις" : "Unique Coverages"}
            </h2>
          </div>
          <p className="uc-topbar-sub">
            {t.uniqueCoverages.subtitle || "Specialized insurance solutions tailored to your specific needs."}
          </p>
        </div>

        <div className="uc-body">

          <div className="uc-list">
            {coverages.map((c, i) => {
              const Icon = c.icon;
              const isActive = active === i;
              return (
                <div
                  key={i}
                  className={`uc-list-item${isActive ? " uc-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <img src={c.photo} alt="" className="uc-list-photo" />
                  <div className="uc-list-photo-overlay" />
                  <div className="uc-list-fill" />
                  <span className="uc-list-idx">{String(i + 1).padStart(2, "0")}</span>
                  <div className="uc-list-icon">
                    <Icon size={16} color={isActive ? "#fff" : "rgba(255,255,255,0.4)"} />
                  </div>
                  <span className="uc-list-label">{c.title}</span>
                  <ArrowRight size={13} className="uc-list-arrow" />
                </div>
              );
            })}
          </div>

          <div className="uc-detail">
            <div className="uc-detail-band" />
            <img src={activeItem.photo} alt="" className="uc-detail-photo" key={`photo-${active}`} />
            <div className="uc-detail-overlay" />

            <div className="uc-detail-inner" key={active}>
              <div className="uc-detail-head uc-animate">
                <h3 className="uc-detail-title">{activeItem.title}</h3>
              </div>

              <div className="uc-divider uc-animate uc-animate-delay-1" />

              {activeItem.description && (
                <>
                  <div className="uc-detail-eyebrow uc-animate uc-animate-delay-1">
                    <div className="uc-detail-eyebrow-line" />
                    <span className="uc-detail-eyebrow-label">{language === "el" ? "Επισκόπηση" : "Overview"}</span>
                  </div>
                  <p className="uc-detail-desc uc-animate uc-animate-delay-2">{activeItem.description}</p>
                </>
              )}

              {activeItem.features && activeItem.features.length > 0 && (
                <div className="uc-features uc-animate uc-animate-delay-3">
                  {activeItem.features.slice(0, 5).map((f: string, fi: number) => (
                    <div key={fi} className="uc-feature">
                      <div className="uc-feature-check">
                        <Check size={9} color="#52a447" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}