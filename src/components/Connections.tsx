import { useLanguage } from "../lib/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export function Connections() {
  const { language } = useLanguage();

  const partners = [
    { name: "Aetna",         file: "aetna.jpg"         },
    { name: "AIG",           file: "aig.jpg"            },
    { name: "Allianz",       file: "allianz.jpg"        },
    { name: "ARAG",          file: "arag.jpg"           },
    { name: "AXA",           file: "axa.jpg"            },
    { name: "Cigna",         file: "cigna3.png"         },
    { name: "Groupama",      file: "groupama.png"       },
    { name: "Interamerican", file: "interamerican.png"  },
    { name: "Interasco",     file: "interasco.png"      },
    { name: "Interlife",     file: "interlife.png"      },
    { name: "MetLife",       file: "metlife.png"        },
    { name: "Minetta",       file: "minetta.png"        },
    { name: "Mondial",       file: "mondial.png"        },
    { name: "NP Insurance",  file: "np.png"             },
    { name: "Orizon",        file: "orizon.png"         },
    { name: "Pisti",         file: "pisti.png"          },
    { name: "Synetairiki",   file: "synetairiki.png"    },
    { name: "Wakam",         file: "wakam.png"          },
  ];

  const el = language === "el";

  const row1 = [...partners.slice(0,5),  ...partners.slice(0,5)];
  const row2 = [...partners.slice(5,10), ...partners.slice(5,10)];
  const row3 = [...partners.slice(10,14),...partners.slice(10,14)];
  const row4 = [...partners.slice(14),   ...partners.slice(14)];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .cx-wrap {
          width: 100%;
          height: 100vh;
          display: flex;
          background: #000;
          overflow: hidden;
          padding-left: 52px;
          font-family: 'DM Sans', sans-serif;
        }

        .cx-left-panel {
          flex: 0 0 38%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 32px;
          padding: 52px 52px 52px 56px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .cx-eyebrow { display: flex; align-items: center; gap: 10px; }
        .cx-eyebrow-line  { height: 1px; width: 28px; background: #52a447; }
        .cx-eyebrow-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #52a447; }

        .cx-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(32px, 3.2vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0;
        }
        .cx-headline span { color: #52a447; }

        .cx-body-text {
          font-weight: 300;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.8;
          margin: 0;
          max-width: 360px;
        }

        .cx-stats { display: flex; gap: 0; }
        .cx-stat {
          padding-right: 28px;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .cx-stat:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .cx-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(22px, 2vw, 32px);
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .cx-stat-label {
          font-size: 9px;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .cx-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #52a447;
          text-decoration: none;
          letter-spacing: 0.02em;
        }
        .cx-cta-line {
          height: 1px;
          width: 32px;
          background: #52a447;
          transition: width 0.3s;
        }
        .cx-cta:hover .cx-cta-line { width: 56px; }

        .cx-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          gap: 0;
          align-self: stretch;
        }

        .cx-marquee-row {
          flex: 1;
          display: flex;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          position: relative;
        }
        .cx-marquee-row:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .cx-marquee-row::before,
        .cx-marquee-row::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 60px;
          z-index: 2;
          pointer-events: none;
        }
        .cx-marquee-row::before {
          left: 0;
          background: linear-gradient(to right, #000, transparent);
        }
        .cx-marquee-row::after {
          right: 0;
          background: linear-gradient(to left, #000, transparent);
        }

        .cx-track {
          display: flex;
          align-items: center;
          will-change: transform;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .cx-track-1 { animation: cx-scroll-left 80s linear infinite; }
        .cx-track-2 { animation: cx-scroll-right 70s linear infinite; }
        .cx-track-3 { animation: cx-scroll-left 90s linear infinite; }
        .cx-track-4 { animation: cx-scroll-right 75s linear infinite; }

        @keyframes cx-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes cx-scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        .cx-marquee-row:hover .cx-track { animation-play-state: paused; }

        /* Uniform logo card */
        .cx-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 180px;
          flex-shrink: 0;
          height: 100%;
          padding: 0 32px;
          border-right: 1px solid rgba(255,255,255,0.06);
          transition: background 0.3s;
        }
        .cx-logo-item:hover {
          background: rgba(255,255,255,0.03);
        }

        /* White pill container — gives every logo the same visual weight */
        .cx-logo-pill {
          width: 160px;
          height: 68px;
          background: rgba(255,255,255,0.07);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          opacity: 0.85;
          transition: opacity 0.3s, background 0.3s;
          overflow: hidden;
        }
        .cx-logo-item:hover .cx-logo-pill {
          opacity: 1;
          background: rgba(255,255,255,0.13);
        }

        .cx-logo-pill img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.3s;
        }
        .cx-logo-item:hover .cx-logo-pill img {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .cx-wrap {
            flex-direction: column;
            padding-left: 0;
            height: auto;
            min-height: 100vh;
          }

          .cx-left-panel {
            flex: none;
            padding: 48px 24px 40px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            gap: 24px;
          }

          .cx-headline {
            font-size: clamp(28px, 7vw, 40px);
          }

          .cx-right {
            height: 360px;
            flex-shrink: 0;
          }

          /* Show only 3 rows on mobile */
          .cx-marquee-row:nth-child(n+4) {
            display: none;
          }

          .cx-logo-pill {
            width: 130px;
            height: 56px;
          }

          .cx-logo-item {
            width: 150px;
            padding: 0 20px;
          }

          .cx-stats {
            gap: 0;
          }

          .cx-stat-num {
            font-size: clamp(20px, 5vw, 28px);
          }
        }

        @media (max-width: 480px) {
          .cx-left-panel {
            padding: 40px 20px 32px;
          }

          .cx-right {
            height: 300px;
          }

          .cx-logo-pill {
            width: 110px;
            height: 48px;
            padding: 8px 12px;
          }

          .cx-logo-item {
            width: 130px;
            padding: 0 16px;
          }

          .cx-cta {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="cx-wrap" id="connections">

        <div className="cx-left-panel">
          <div className="cx-eyebrow">
            <div className="cx-eyebrow-line" />
            <span className="cx-eyebrow-label">{el ? "Ασφαλιστικοί Συνεργάτες" : "Insurance Partners"}</span>
          </div>

          <h2 className="cx-headline">
            {el
              ? <><span>Συνεργαζόμαστε</span><br />με τους καλύτερους</>
              : <>Partnered with<br /><span>the best</span></>
            }
          </h2>

          <p className="cx-body-text">
            {el
              ? "Συνεργαζόμαστε με τους κορυφαίους ασφαλιστές της Ευρώπης και του κόσμου, εξασφαλίζοντας τις καλύτερες λύσεις για κάθε ανάγκη."
              : "We work with Europe's and the world's leading insurers, ensuring the best solutions for every need — from health and property to liability and life."
            }
          </p>

          <div className="cx-stats">
            {[
              { num: "19+", label: el ? "Συνεργάτες" : "Partners"   },
              { num: "30+", label: el ? "Χρόνια"     : "Years"      },
              { num: "100%",label: el ? "Δέσμευση"   : "Commitment" },
            ].map((s, i) => (
              <div key={i} className="cx-stat">
                <div className="cx-stat-num">{s.num}</div>
                <div className="cx-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="cx-cta">
            <div className="cx-cta-line" />
            {el ? "Δείτε όλους τους συνεργάτες" : "View all partners"}
            <ArrowUpRight size={14} />
          </div>
        </div>

        <div className="cx-right">
          {[row1, row2, row3, row4].map((row, ri) => (
            <div key={ri} className="cx-marquee-row">
              <div className={`cx-track cx-track-${ri + 1}`}>
                {row.map((p, i) => (
                  <div key={i} className="cx-logo-item">
                    <div className="cx-logo-pill">
                      <img
                        src={`/logos/${p.file}`}
                        alt={p.name}
                        loading="eager"
                        onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}