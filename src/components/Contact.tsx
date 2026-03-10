import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export function Contact() {
  const { t, language } = useLanguage();

  const safeContact = {
    headquarters: t?.contact?.info?.headquarters || "Headquarters",
    phone:        t?.contact?.info?.phone        || "Phone",
    email:        t?.contact?.info?.email        || "Email",
    hours:        t?.contact?.info?.hours        || "Working Hours",
    address:      t?.contact?.details?.address   || ["6 Iroon Polytechniou Ave", "Piraeus 18531, Greece"],
    phones:       t?.contact?.details?.phones    || ["+30 210 417 7760", "+30 698 650 4754"],
    emails:       t?.contact?.details?.emails    || ["info@valore.com"],
    schedule:     t?.contact?.details?.schedule  || ["Mon – Fri: 09:00 – 18:00"],
  };

  const headlineMain   = language === "el" ? "Μιλήστε"     : "Get in";
  const headlineAccent = language === "el" ? "μαζί μας"    : "touch";
  const eyebrow        = language === "el" ? "Επικοινωνία" : "Contact";
  const sub            = language === "el"
    ? "Είμαστε εδώ για εσάς. Επικοινωνήστε μαζί μας σήμερα."
    : "We're here for you. Reach out to us today.";
  const cta = language === "el" ? "Στείλτε μήνυμα" : "Send a message";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .ct-wrap {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #0d0d0d;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .ct-hero {
          position: relative;
          padding: 100px 56px 48px 108px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          flex-shrink: 0;
          overflow: hidden;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .ct-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80');
          background-size: cover;
          background-position: center 40%;
          z-index: 0;
        }
        .ct-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%);
          z-index: 1;
        }
        .ct-hero > *:not(.ct-hero-bg):not(.ct-hero-overlay) {
          position: relative;
          z-index: 2;
        }

        .ct-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(36px, 4vw, 64px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0 0 24px;
        }
        .ct-headline span { color: #52a447; }

        .ct-meta {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ct-eyebrow { display: flex; align-items: center; gap: 10px; }
        .ct-eyebrow-line  { height: 1px; width: 28px; background: #52a447; }
        .ct-eyebrow-label { font-size: 10px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #52a447; }
        .ct-sub { font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.6); max-width: 340px; line-height: 1.65; margin: 0; }

        .ct-body {
          flex: 1;
          display: flex;
          min-height: 0;
        }

        .ct-left {
          flex: 0 0 38%;
          background: #0d0d0d;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 56px;
          position: relative;
          overflow: hidden;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .ct-left-quote {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(18px, 1.8vw, 24px);
          font-weight: 300;
          color: white;
          line-height: 1.6;
          margin: 0 0 44px;
        }
        .ct-left-quote span { color: #52a447; }

        .ct-left-links { display: flex; flex-direction: column; gap: 16px; }
        .ct-left-link {
          display: flex; align-items: center; gap: 14px;
          text-decoration: none; transition: opacity 0.2s;
        }
        .ct-left-link:hover { opacity: 0.7; }
        .ct-left-link-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ct-left-link-text { font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.6); }

        .ct-cta {
          margin-top: 44px;
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          font-size: 13px; font-weight: 400;
          padding: 12px 24px; border-radius: 6px;
          text-decoration: none; align-self: flex-start;
          transition: border-color 0.2s, color 0.2s;
        }
        .ct-cta:hover { border-color: #52a447; color: #52a447; }

        .ct-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px 72px;
          position: relative;
          overflow: hidden;
        }



        .ct-info-rows {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .ct-info-row {
          display: flex;
          align-items: flex-start;
          padding: 28px 0;
          border-bottom: 1px solid #f0f0f0;
          gap: 32px;
        }
        .ct-info-row:first-child { border-top: 1px solid #f0f0f0; }

        .ct-info-icon-col {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 0 0 200px;
        }
        .ct-info-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: rgba(82,164,71,0.06);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.25s;
        }
        .ct-info-row:hover .ct-info-icon { background: #52a447; }
        .ct-info-row:hover .ct-info-icon svg { color: white; }
        .ct-info-icon svg { color: #52a447; transition: color 0.25s; }

        .ct-info-label {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #9ca3af;
        }

        .ct-info-values {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ct-info-val {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(15px, 1.3vw, 19px);
          font-weight: 400;
          color: #0d0d0d;
          letter-spacing: 0;
          line-height: 1.45;
          text-decoration: none;
          display: block;
          transition: color 0.2s;
        }
        a.ct-info-val:hover { color: #52a447; }

        @media (max-width: 768px) {
          .ct-hero { padding: 80px 24px 40px; min-height: 220px; }
          .ct-headline { font-size: clamp(32px, 8vw, 48px); margin-bottom: 16px; }
          .ct-sub { max-width: 100%; }
          .ct-body { flex-direction: column; }
          .ct-left { flex: 1; padding: 40px 24px; border-right: none; border-bottom: none; width: 100%; }
          .ct-right { display: none !important; width: 0; flex: 0; padding: 0; overflow: hidden; }
        }

        @media (max-width: 480px) {
          .ct-hero { padding: 72px 20px 32px; }
          .ct-left { padding: 36px 20px; }
          .ct-cta { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="ct-wrap" id="contact">

        <div className="ct-hero">
          <div className="ct-hero-bg" />
          <div className="ct-hero-overlay" />
          <h2 className="ct-headline">
            {headlineMain} <span>{headlineAccent}</span>
          </h2>
          <div className="ct-meta">
            <div className="ct-eyebrow">
              <div className="ct-eyebrow-line" />
              <span className="ct-eyebrow-label">{eyebrow}</span>
            </div>
            <p className="ct-sub">{sub}</p>
          </div>
        </div>

        <div className="ct-body">

          <div className="ct-left">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <div style={{ height: 1, width: 28, background: "rgba(255,255,255,0.15)" }} />
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Valore Assicurativo
              </span>
            </div>
            <p className="ct-left-quote">
              {language === "el"
                ? <>Είμαστε πάντα διαθέσιμοι να σας βοηθήσουμε να βρείτε <span>την κατάλληλη λύση.</span></>
                : <>Always available to help you find <span>the right solution.</span></>}
            </p>
            <div className="ct-left-links">
              {[
                { icon: Phone,  text: "+30 210 417 7760", href: "tel:2104177760" },
                { icon: Mail,   text: "info@valore.com",  href: "mailto:info@valore.com" },
                { icon: MapPin, text: language === "el" ? "Πειραιάς, Ελλάδα" : "Piraeus, Greece", href: "https://www.google.com/maps/search/?api=1&query=Piraeus+Greece" },
              ].map(({ icon: Icon, text, href }, i) => (
                <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="ct-left-link">
                  <div className="ct-left-link-icon"><Icon size={15} color="#52a447" /></div>
                  <span className="ct-left-link-text">{text}</span>
                </a>
              ))}
            </div>
            <a className="ct-cta" href="mailto:info@valore.com">
              {cta} <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="ct-right">

<div className="ct-info-rows">

            <div className="ct-info-row">
              <div className="ct-info-icon-col">
                <div className="ct-info-icon"><MapPin size={16} /></div>
                <span className="ct-info-label">{safeContact.headquarters}</span>
              </div>
              <div className="ct-info-values">
                {safeContact.address.map((line: string, i: number) => (
                  <span key={i} className="ct-info-val">{line}</span>
                ))}
              </div>
            </div>

            <div className="ct-info-row">
              <div className="ct-info-icon-col">
                <div className="ct-info-icon"><Phone size={16} /></div>
                <span className="ct-info-label">{safeContact.phone}</span>
              </div>
              <div className="ct-info-values">
                {safeContact.phones.map((p: string, i: number) => (
                  <a key={i} href={i === 0 ? "tel:2104177760" : "viber://chat?number=%2B306986504754"} className="ct-info-val">{p}</a>
                ))}
              </div>
            </div>

            <div className="ct-info-row">
              <div className="ct-info-icon-col">
                <div className="ct-info-icon"><Mail size={16} /></div>
                <span className="ct-info-label">{safeContact.email}</span>
              </div>
              <div className="ct-info-values">
                {safeContact.emails.map((e: string, i: number) => (
                  <a key={i} href={`mailto:${e}`} className="ct-info-val">{e}</a>
                ))}
              </div>
            </div>

            <div className="ct-info-row">
              <div className="ct-info-icon-col">
                <div className="ct-info-icon"><Clock size={16} /></div>
                <span className="ct-info-label">{safeContact.hours}</span>
              </div>
              <div className="ct-info-values">
                {safeContact.schedule.map((s: string, i: number) => (
                  <span key={i} className="ct-info-val">{s}</span>
                ))}
              </div>
            </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}