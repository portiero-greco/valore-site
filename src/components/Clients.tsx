import { useLanguage } from "../lib/LanguageContext";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function Clients() {
  const { t, language } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  const clients = [
    { name: "Δικηγορικός Σύλλογος Πειραιώς", logo: "/clients/dspeiraia-logo-white (1).png",                   url: "https://dspeiraia.gr"           },
    { name: "Button Down",                    logo: "/clients/LOGO BUTTON DOWN (1).png",                       url: "https://buttondown.gr"          },
    { name: "Envie Shoes",                    logo: "/clients/logo ENVIE (1).svg",                             url: "https://www.envieshoes.gr"      },
    { name: "Pulsar",                         logo: "/clients/logo PULSAR (1).svg",                            url: "https://www.pulsarbeyond.com/greece" },
    { name: "Grigoris",                       logo: "/clients/logo_164x70_greek GRIGORIS (1).svg",             url: "https://www.gregorys.gr"        },
    { name: "Novitron",                       logo: "/clients/logo_novitron-colorful-original.cfee9e (1).svg", url: "https://novitron.gr"            },
    { name: "Apeiron",                        logo: "/clients/logo-2048x901 (1).png",                          url: "https://www.aquarelle.gr"       },
    { name: "Special Cars",                   logo: "/clients/special-cars.png",                               url: "https://specialcars.gr"         },
    { name: "CHE",                            logo: "/clients/che.png",                                        url: "https://cherestaurant.gr"       },
    { name: "Untitled",                       logo: "/clients/Untitled-2.jpg",                                 url: "#"                              },
    { name: "Viamar",                         logo: "/clients/viamar-2-logo-footer (1).png",                   url: "https://viamar2.com"            },
    { name: "Yestay Homes",                   logo: "/clients/yestay_homes (1).svg",                           url: "https://yestayhomes.com"        },
    { name: "Yestay Hotels",                  logo: "/clients/yestay_hotels_colors-6c80cd (1).svg",            url: "https://www.yestayhotels.com"   },
    { name: "Varoulko",                       logo: "/clients/varoulko2.png",                                  url: "https://www.varoulko.gr"        },
  ];

  const el = language === "el";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .cl-root {
          width: 100%;
          height: 100vh;
          display: flex;
          background: #0d0d0d;
          overflow: hidden;
          padding-left: 52px;
        }

        @media (max-width: 900px) {
          .cl-root {
            height: auto !important;
            overflow: visible !important;
          }
          .cl-right {
            overflow: visible !important;
            height: auto !important;
          }
        }

        .cl-left {
          flex: 0 0 38%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 32px;
          padding: 52px 52px 52px 56px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .cl-eyebrow { display: flex; align-items: center; gap: 10px; }
        .cl-eyebrow-line  { height: 1px; width: 28px; background: #52a447; }
        .cl-eyebrow-label { font-size: 10px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #52a447; }

        .cl-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(32px, 3.2vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0;
        }
        .cl-headline span { color: #52a447; }

        .cl-body-text {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.8;
          margin: 0;
          max-width: 360px;
        }

        .cl-stats { display: flex; gap: 0; }
        .cl-stat {
          padding-right: 28px;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .cl-stat:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .cl-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(22px, 2vw, 32px);
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .cl-stat-label {
          font-size: 9px;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 4px;
          font-family: 'DM Sans', sans-serif;
        }

        .cl-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #52a447;
          text-decoration: none;
          letter-spacing: 0.02em;
        }
        .cl-cta-line { height: 1px; width: 32px; background: #52a447; transition: width 0.3s; }
        .cl-cta:hover .cl-cta-line { width: 56px; }

        .cl-right {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          overflow: hidden;
        }

        .cl-tile {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          border-right: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: default;
          transition: background 0.25s;
          position: relative;
          overflow: hidden;
        }
        .cl-tile:nth-child(4n) { border-right: none; }
        .cl-tile:nth-last-child(-n+4) { border-bottom: none; }
        .cl-tile:hover { background: rgba(255,255,255,0.03); }

        .cl-tile img {
          max-height: 44px;
          max-width: 160px;
          width: auto;
          object-fit: contain;
          opacity: 0.6;
          transition: opacity 0.3s, transform 0.3s;
        }
        .cl-tile:hover img { opacity: 0.15; transform: scale(1.06); }

        /* Hover overlay */
        .cl-tile-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          opacity: 0;
          transition: opacity 0.25s;
          pointer-events: none;
        }
        .cl-tile:hover .cl-tile-overlay {
          opacity: 1;
          pointer-events: auto;
        }
        .cl-tile-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.04em;
          text-align: center;
          padding: 0 12px;
        }
        .cl-tile-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: #52a447;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid rgba(82,164,71,0.4);
          padding: 5px 10px;
          border-radius: 2px;
          transition: background 0.2s, border-color 0.2s;
        }
        .cl-tile-link:hover {
          background: rgba(82,164,71,0.12);
          border-color: #52a447;
        }

        .cl-tile-count {
          flex-direction: column;
          gap: 4px;
          background: rgba(82,164,71,0.05);
          cursor: default;
        }
        .cl-tile-count:hover { background: rgba(82,164,71,0.1); }
        .cl-tile-count-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 28px;
          font-weight: 400;
          color: #52a447;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .cl-tile-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .cl-root {
            flex-direction: column;
            padding-left: 0;
            height: auto !important;
            overflow: visible !important;
            min-height: unset;
          }

          .cl-left {
            flex: none;
            padding: 48px 24px 40px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            gap: 24px;
          }

          .cl-headline {
            font-size: clamp(28px, 7vw, 40px);
          }

          .cl-right {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto !important;
            height: auto !important;
            overflow: visible !important;
          }

          .cl-tile {
            min-height: 90px;
            padding: 18px 12px;
          }

          .cl-tile img {
            max-height: 36px;
            max-width: 100px;
          }

          /* reset border rules for 3-col grid */
          .cl-tile:nth-child(4n) { border-right: 1px solid rgba(255,255,255,0.06); }
          .cl-tile:nth-child(3n) { border-right: none; }
          .cl-tile:nth-last-child(-n+4) { border-bottom: 1px solid rgba(255,255,255,0.06); }
          .cl-tile:nth-last-child(-n+3) { border-bottom: none; }
        }

        @media (max-width: 480px) {
          .cl-left {
            padding: 40px 20px 32px;
          }

          .cl-right {
            grid-template-columns: repeat(3, 1fr) !important;
          }

          .cl-tile {
            min-height: 80px;
            padding: 12px 8px;
          }

          .cl-tile img {
            max-height: 28px;
            max-width: 80px;
          }

          .cl-tile-name { font-size: 10px; }
          .cl-tile-link { font-size: 9px; padding: 4px 8px; }
        }
      `}</style>

      <div className="cl-root">
        <div className="cl-left">
          <div className="cl-eyebrow">
            <div className="cl-eyebrow-line" />
            <span className="cl-eyebrow-label">{el ? "Πελάτες" : "Clients"}</span>
          </div>

          <h2 className="cl-headline">
            {el ? <><span>Εμπιστοσύνη</span><br />από τους καλύτερους</> : <>Trusted by<br /><span>the best</span></>}
          </h2>

          <p className="cl-body-text">
            {el
              ? "Διαχειριζόμαστε τα ασφαλιστικά χαρτοφυλάκια κορυφαίων εταιρειών σε ολόκληρη την Ελλάδα και την Ευρώπη."
              : "We manage insurance portfolios for leading companies across Greece and Europe. From law firms and car dealerships to restaurants and tech companies."
            }
          </p>

          <div className="cl-stats">
            {[
              { num: `${clients.length}+`, label: el ? "Πελάτες"  : "Clients"    },
              { num: "30+",                label: el ? "Χρόνια"   : "Years"      },
              { num: "100%",               label: el ? "Αφοσίωση" : "Commitment" },
            ].map((s, i) => (
              <div key={i} className="cl-stat">
                <div className="cl-stat-num">{s.num}</div>
                <div className="cl-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-cta">
            <div className="cl-cta-line" />
            {el ? "Δείτε τους πελάτες μας" : "View all clients"}
            <ArrowUpRight size={14} />
          </div>
        </div>

        <div className="cl-right">
          {clients.map((c, i) => (
            <div key={i} className="cl-tile" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <img src={c.logo} alt={c.name} loading="lazy" />
              <div className="cl-tile-overlay">
                <span className="cl-tile-name">{c.name}</span>
                {c.url !== "#" && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="cl-tile-link">
                    {el ? "Επίσκεψη" : "Visit"} <ArrowUpRight size={10} />
                  </a>
                )}
              </div>
            </div>
          ))}
          <div className="cl-tile cl-tile-count">
            <div className="cl-tile-count-num">30+</div>
            <div className="cl-tile-count-label">{el ? "Χρόνια" : "Years"}</div>
          </div>
          <div className="cl-tile cl-tile-count">
            <div className="cl-tile-count-num">100%</div>
            <div className="cl-tile-count-label">{el ? "Αφοσίωση" : "Commitment"}</div>
          </div>
        </div>
      </div>
    </>
  );
}