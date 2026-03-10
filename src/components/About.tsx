import { useLanguage } from "../lib/LanguageContext";
import { useState, useEffect, useRef } from "react";

// Navbar height: 6px accent bar + ~90px content row = 96px
const NAV_H = 96;

export function About() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const subtitle =
    t?.about?.subtitle ||
    "Valore Assicurativo is a reference point in the insurance sector, with a constant commitment to excellence and customer satisfaction.";

  const features = [
    {
      title: t?.about?.features?.protection?.title || "Full Protection",
      description: t?.about?.features?.protection?.description || "Comprehensive insurance coverage tailored to your needs.",
      photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    },
    {
      title: t?.about?.features?.experience?.title || "Expert Team",
      description: t?.about?.features?.experience?.description || "Experienced professionals supporting you at every step.",
      photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    },
    {
      title: t?.about?.features?.excellence?.title || "Certified Excellence",
      description: t?.about?.features?.excellence?.description || "Recognized for service quality and customer satisfaction.",
      photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    },
    {
      title: t?.about?.features?.growth?.title || "Constant Growth",
      description: t?.about?.features?.growth?.description || "Innovative solutions that evolve with your future.",
      photo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ab-root {
          width: 100%;
          height: calc(100vh - ${NAV_H}px);
          display: grid;
          grid-template-columns: 36% 1fr;
          overflow: hidden;
        }

        /* ── LEFT green panel ── */
        .ab-left {
          background: #52a447;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .ab-left-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 44px;
          position: relative;
          z-index: 1;
        }

        .ab-watermark {
          position: absolute;
          bottom: -30px;
          right: -10px;
          font-size: 200px;
          font-weight: 900;
          color: rgba(255,255,255,0.05);
          line-height: 1;
          user-select: none;
          letter-spacing: -0.05em;
          pointer-events: none;
          z-index: 0;
        }

        .ab-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .ab-eyebrow-line { height: 1px; width: 28px; background: rgba(255,255,255,0.4); }
        .ab-eyebrow span {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        .ab-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(14px, 1.3vw, 18px);
          font-weight: 300;
          color: white;
          line-height: 1.75;
        }

        .ab-stats {
          display: flex;
          border-top: 1px solid rgba(255,255,255,0.15);
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        .ab-stat {
          flex: 1;
          padding: 16px 20px;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(18px, 1.8vw, 26px);
          font-weight: 700;
          color: white;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .ab-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          color: rgba(255,255,255,0.5);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        /* ── RIGHT panel ── */
        .ab-right {
          display: grid;
          grid-template-rows: 48% 52%;
          overflow: hidden;
        }

        /* Top photo */
        .ab-photo {
          position: relative;
          overflow: hidden;
          background: #111;
        }
        .ab-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          opacity: 0.85;
          transition: transform 7s ease;
          display: block;
        }
        .ab-photo:hover img { transform: scale(1.04); }
        .ab-photo::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%);
          pointer-events: none;
        }
        .ab-photo-label {
          position: absolute;
          bottom: 14px;
          left: 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          z-index: 2;
        }

        /* Bottom 4 feature cards */
        .ab-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          border-top: 1px solid #e5e3de;
        }

        .ab-card {
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          border-right: 1px solid #e5e3de;
          cursor: default;
          background: #fafafa;
          transition: background 0.3s ease;
        }
        .ab-card:last-child { border-right: none; }
        .ab-card:hover { background: #fff; }

        .ab-card-img-wrap {
          flex-shrink: 0;
          height: 80px;
          overflow: hidden;
        }
        .ab-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: transform 0.6s ease, filter 0.4s ease;
          display: block;
        }
        .ab-card:hover .ab-card-img {
          transform: scale(1.08);
          filter: grayscale(0%);
        }

        .ab-card-body {
          flex: 1;
          padding: 12px 16px 14px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          position: relative;
          overflow: hidden;
        }

        .ab-card-num {
          position: absolute;
          top: 8px;
          right: 12px;
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.04em;
          user-select: none;
          transition: color 0.3s ease;
          pointer-events: none;
        }

        .ab-card-accent {
          position: absolute;
          left: 0;
          top: 15%;
          bottom: 15%;
          background: #52a447;
          border-radius: 0 2px 2px 0;
          transition: width 0.3s ease;
        }

        .ab-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(12px, 1vw, 15px);
          font-weight: 700;
          color: #1f2937;
          letter-spacing: -0.01em;
          line-height: 1.3;
          margin-bottom: 5px;
          padding-right: 30px;
          transition: color 0.3s;
        }
        .ab-card:hover .ab-card-title { color: #111; }

        .ab-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px;
          color: #9ca3af;
          line-height: 1.55;
        }

        .ab-card-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #52a447;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .ab-card:hover .ab-card-bar { transform: scaleX(1); }

        /* ── FADE IN ── */
        .ab-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .ab-fade.in { opacity: 1; transform: translateY(0); }
        .ab-d1 { transition-delay: 0.05s; }
        .ab-d2 { transition-delay: 0.12s; }
        .ab-d3 { transition-delay: 0.20s; }
        .ab-d4 { transition-delay: 0.28s; }
        .ab-d5 { transition-delay: 0.36s; }
        .ab-d6 { transition-delay: 0.44s; }
      `}</style>

      <div className="ab-root" ref={sectionRef}>

        {/* ── LEFT ── */}
        <div className="ab-left">
          <span className="ab-watermark">V</span>

          <div className="ab-left-content">
            <div className={`ab-eyebrow ab-fade ${visible ? "in" : ""} ab-d1`}>
              <div className="ab-eyebrow-line" />
              <span>About us</span>
            </div>
            <p className={`ab-subtitle ab-fade ${visible ? "in" : ""} ab-d2`}>
              {subtitle}
            </p>
          </div>

          {/* Stats pinned to bottom */}
          <div className={`ab-stats ab-fade ${visible ? "in" : ""} ab-d3`}>
            {[
              { number: "30+", label: "Years"    },
              { number: "5K+", label: "Clients"  },
              { number: "19",  label: "Partners" },
            ].map((s, i) => (
              <div key={i} className="ab-stat">
                <div className="ab-stat-num">{s.number}</div>
                <div className="ab-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="ab-right">

          {/* Top photo */}
          <div className={`ab-photo ab-fade ${visible ? "in" : ""} ab-d1`}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
              alt="Professional team"
            />
            <span className="ab-photo-label">Our Team</span>
          </div>

          {/* 4 feature cards */}
          <div className="ab-cards">
            {features.map((f, i) => {
              const isHov = hovered === i;
              return (
                <div
                  key={i}
                  className={`ab-card ab-fade ${visible ? "in" : ""} ab-d${i + 3}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="ab-card-img-wrap">
                    <img className="ab-card-img" src={f.photo} alt={f.title} />
                  </div>
                  <div className="ab-card-body">
                    <span
                      className="ab-card-num"
                      style={{ color: isHov ? "rgba(82,164,71,0.10)" : "rgba(0,0,0,0.04)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="ab-card-accent" style={{ width: isHov ? 3 : 0 }} />
                    <h3 className="ab-card-title">{f.title}</h3>
                    <p className="ab-card-desc">{f.description}</p>
                  </div>
                  <div className="ab-card-bar" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}