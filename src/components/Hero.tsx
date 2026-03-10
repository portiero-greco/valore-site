import { Phone, Mail, ChevronDown } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { assets } from "../lib/assets";
import { motion } from "framer-motion";

const fallbackHero = "/hero/familyhero-valore.jpg";
const fallbackHeroLogo = "/hero/logo-val001.png";

const heroSrc = assets?.heroImage && assets.heroImage !== "" ? assets.heroImage : fallbackHero;
const logoSrc = assets?.heroLogo && assets.heroLogo !== "" ? assets.heroLogo : fallbackHeroLogo;

// 👇 Add your company logo path here
const companyLogoSrc = "/hero/logomain-valore.png";

export function Hero() {
  const { t, language } = useLanguage();

  const safeHero = {
    subtitle: t?.hero?.subtitle || "Your security is our value. For over 30 years, we've been protecting what matters most to you and your family with tailored insurance solutions.",
    ctaPricing: t?.hero?.ctaPricing || "Discover our offers",
    ctaContact: t?.hero?.ctaContact || "Contact us",
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = language === "el"
    ? [{ v: "30+", l: "Χρόνια" }, { v: "5K+", l: "Πελάτες" }, { v: "19", l: "Συνεργάτες" }]
    : [{ v: "30+", l: "Years"  }, { v: "5K+", l: "Clients"  }, { v: "19", l: "Partners"   }];

  const aboutDesc = language === "el"
    ? "Σημείο αναφοράς στον ασφαλιστικό κλάδο, με σταθερή δέσμευση στην αριστεία και την ικανοποίηση των πελατών."
    : "A reference point in the insurance sector, with a constant commitment to excellence and customer satisfaction.";

  return (
    <>
      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.32) saturate(0.7);
        }

        .hero-grad-r {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(10,28,10,0.97) 0%, rgba(10,28,10,0.75) 45%, rgba(10,28,10,0.2) 100%);
        }
        .hero-grad-b {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,20,8,0.8) 0%, transparent 50%);
        }

        .hero-accent-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #52a447;
          transform-origin: top;
        }

        .hero-corner-logo {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 10;
        }

        /* Full-width two-column layout */
        .hero-layout {
          position: relative;
          z-index: 1;
          flex: 1;
          display: grid;
          grid-template-columns: 38% 62%;

          padding-top: 96px;
        }

        /* LEFT: logo centered in its half */
        .hero-logo-col {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 32px 48px 64px;
        }

        /* RIGHT: all text content */
        .hero-text-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px 64px 48px 32px;

        }

        .hero-stat-val {
          font-size: 38px;
          font-weight: 700;
          color: white;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .hero-stat-val span { color: #52a447; }
        .hero-stat-lbl {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-top: 6px;
        }

        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr; }
          .hero-logo-col { padding: 40px 32px 0; justify-content: flex-start; }
          .hero-text-col { padding: 32px; border-left: none; }
          .hero-corner-logo { top: 14px; left: 14px; }
        }
      `}</style>

      <div className="hero-root">
        <img src={heroSrc} alt="Valore Assicurativo" className="hero-bg"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackHero; }} />
        <div className="hero-grad-r" />
        <div className="hero-grad-b" />

        <motion.div className="hero-accent-bar"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
        />

        {/* ── Top-left company logo ── */}
        <motion.div
          className="hero-corner-logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={companyLogoSrc}
            alt="Company Logo"
            style={{
              height: 80,
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))",
            }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        </motion.div>

        <div className="hero-layout">

          {/* LEFT — Logo */}
          <motion.div className="hero-logo-col"
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <img
              src={logoSrc}
              alt="Valore Logo"
              style={{ width: "min(420px, 92%)", height: "auto", objectFit: "contain", filter: "drop-shadow(0 8px 48px rgba(0,0,0,0.5))" }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackHeroLogo; }}
            />
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div className="hero-text-col"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
              <div style={{ height: 1, width: 36, backgroundColor: "#52a447" }} />
              <span style={{ color: "#52a447", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Valore Assicurativo
              </span>
            </div>

            {/* Subtitle */}
            <p style={{ fontSize: 20, lineHeight: 1.75, color: "rgba(255,255,255,0.8)", fontWeight: 300, maxWidth: 480, marginBottom: 36 }}>
              {safeHero.subtitle}
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
              <button
                onClick={() => scrollToSection("individual-solutions")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#52a447", color: "white", fontSize: 15, fontWeight: 600, padding: "14px 32px", borderRadius: 2, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(82,164,71,0.3)", transition: "all 0.25s" }}
                onMouseEnter={e => { (e.currentTarget.style.backgroundColor = "#3f8a36"); (e.currentTarget.style.boxShadow = "0 6px 28px rgba(82,164,71,0.45)"); }}
                onMouseLeave={e => { (e.currentTarget.style.backgroundColor = "#52a447"); (e.currentTarget.style.boxShadow = "0 4px 20px rgba(82,164,71,0.3)"); }}
              >
                {safeHero.ctaPricing}
                <ChevronDown size={15} style={{ transform: "rotate(-90deg)" }} />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "transparent", color: "rgba(255,255,255,0.88)", fontSize: 15, fontWeight: 500, padding: "14px 32px", borderRadius: 2, border: "1px solid rgba(255,255,255,0.28)", cursor: "pointer", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.65)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)"); (e.currentTarget.style.backgroundColor = "transparent"); }}
              >
                {safeHero.ctaContact}
              </button>
            </div>

            {/* Contact links */}
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
              <a href="tel:2104177760" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#52a447")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                <div style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={13} />
                </div>
                210 417 7760
              </a>
              <a href="mailto:info@valore.com" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#52a447")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                <div style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={13} />
                </div>
                info@valore.com
              </a>
            </div>

            {/* About + Stats inline */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28 }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.65, margin: "0 0 24px", maxWidth: 420 }}>
                {aboutDesc}
              </p>
              <div style={{ display: "flex", gap: 0 }}>
                {stats.map((s, i) => (
                  <div key={i} style={{
                    paddingRight: 28,
                    marginRight: 28,
                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}>
                    <div className="hero-stat-val">
                      {s.v.replace(/[+%K]/g, "")}<span>{s.v.match(/[+%K]+/)?.[0] ?? ""}</span>
                    </div>
                    <div className="hero-stat-lbl">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, transparent, rgba(82,164,71,0.5))" }} />
          <ChevronDown size={13} style={{ color: "rgba(82,164,71,0.5)" }} className="animate-bounce" />
        </motion.div>
      </div>
    </>
  );
}