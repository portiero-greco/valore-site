import { useLanguage } from "../lib/LanguageContext";
import { useState, useEffect, useRef } from "react";

export function History() {
  const { t } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [triggered, setTriggered] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const milestones = [
    { year: "1998", ...t.history.milestones[1998] },
    { year: "2010", ...t.history.milestones[2010] },
    { year: "2026", ...t.history.milestones[2025] },
  ];

  // Trigger animation when section scrolls into view
  useEffect(() => {
    const check = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setTriggered(true);
      }
    };

    const container = document.getElementById("scroll-container") || window;
    container.addEventListener("scroll", check, { passive: true });
    // Check immediately on mount
    check();
    return () => container.removeEventListener("scroll", check);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hist-bounce-left {
          0%   { opacity: 0; transform: translateX(-140px); }
          55%  { opacity: 1; transform: translateX(22px); }
          72%  { transform: translateX(-12px); }
          86%  { transform: translateX(7px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes hist-bounce-right {
          0%   { opacity: 0; transform: translateX(140px); }
          55%  { opacity: 1; transform: translateX(-22px); }
          72%  { transform: translateX(12px); }
          86%  { transform: translateX(-7px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .hist-hidden { opacity: 0; }
        .hist-animate-left  { animation: hist-bounce-left  0.95s cubic-bezier(0.2,0,0.3,1) forwards; }
        .hist-animate-right { animation: hist-bounce-right 0.95s cubic-bezier(0.2,0,0.3,1) forwards; }

        .hist-section {
          background-color: #0d0d0d;
          overflow: hidden;
          height: 100vh;
          display: flex;
          align-items: center;
        }

        .hist-inner { width: 100%; overflow: hidden; }

        .hist-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: background-color 0.3s ease;
          cursor: default;
          height: calc(100vh / 3);
          padding-left: 52px;
        }
        .hist-row:first-child { border-top: 1px solid rgba(255,255,255,0.07); }
        .hist-row.hov { background-color: rgba(82,164,71,0.08); }

        .hist-year-col {
          flex: 0 0 42%;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          height: 100%;
          clip-path: inset(0);
        }

        .hist-divider {
          width: 1px;
          align-self: stretch;
          flex-shrink: 0;
          margin: 24px 0;
          transition: background-color 0.3s ease;
        }

        .hist-text-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hist-section {
            height: auto;
            align-items: flex-start;
            padding: 48px 0 0;
          }

          .hist-row {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            padding: 32px 24px;
            gap: 0;
          }

          .hist-year-col {
            flex: none;
            width: 100%;
            height: auto;
            clip-path: none;
            overflow: visible;
            margin-bottom: 20px;
          }

          .hist-divider { display: none; }

          .hist-text-col {
            flex: none;
            width: 100%;
            padding: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .hist-section { padding: 40px 0 0; }
          .hist-row { padding: 28px 20px; }
        }
      `}</style>

      <section ref={sectionRef} id="history" className="hist-section">
        <div className="hist-inner">
          {milestones.map((m, i) => {
            const isHov = hoveredIdx === i;
            const isEven = i % 2 === 0;
            const animClass = triggered
              ? (isEven ? "hist-animate-left" : "hist-animate-right")
              : "hist-hidden";

            return (
              <div
                key={i}
                className={`hist-row${isHov ? " hov" : ""} ${animClass}`}
                style={{ animationDelay: triggered ? `${i * 0.18}s` : undefined }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div
                  className="hist-year-col"
                  style={{
                    order: isEven ? 1 : 3,
                    justifyContent: isEven ? "flex-start" : "flex-end",
                    paddingLeft: isEven ? 56 : 0,
                    paddingRight: isEven ? 0 : 56,
                  }}
                >
                  <span style={{
                    fontSize: "clamp(80px, 10vw, 140px)", fontWeight: 800,
                    letterSpacing: "-0.04em", lineHeight: 1,
                    color: isHov ? "#52a447" : "rgba(255,255,255,0.9)",
                    opacity: isHov ? 0.15 : 0.07,
                    transition: "all 0.4s ease", userSelect: "none",
                    position: "absolute", whiteSpace: "nowrap",
                  }}>{m.year}</span>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <span style={{
                      fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 800,
                      letterSpacing: "-0.04em", lineHeight: 1,
                      color: isHov ? "#52a447" : "rgba(255,255,255,0.9)",
                      transition: "color 0.3s ease",
                    }}>{m.year}</span>
                  </div>
                </div>

                <div className="hist-divider" style={{
                  order: 2,
                  backgroundColor: isHov ? "#52a447" : "rgba(255,255,255,0.1)",
                }} />

                <div
                  className="hist-text-col"
                  style={{
                    order: isEven ? 3 : 1,
                    padding: isEven ? "0 48px 0 48px" : "0 0 0 48px",
                  }}
                >
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isHov ? "#52a447" : "rgba(255,255,255,0.25)",
                    marginBottom: 10, transition: "color 0.3s ease", display: "block",
                  }}>0{i + 1}</span>

                  <h3 style={{
                    fontSize: "clamp(16px, 1.7vw, 22px)", fontWeight: 600,
                    color: "rgba(255,255,255,0.9)", marginBottom: 10, lineHeight: 1.3,
                  }}>{m.title}</h3>

                  <p style={{
                    fontSize: 14, color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.7, maxWidth: 480,
                  }}>{m.description}</p>

                  <div style={{
                    height: 2, width: isHov ? 48 : 0,
                    backgroundColor: "#52a447", marginTop: 16,
                    borderRadius: 999, transition: "width 0.4s ease",
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}