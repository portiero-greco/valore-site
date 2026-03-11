import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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

  const infoItems = [
    {
      icon: MapPin,
      label: safeContact.headquarters,
      values: safeContact.address.map((line: string) => ({ text: line, href: undefined })),
    },
    {
      icon: Phone,
      label: safeContact.phone,
      values: safeContact.phones.map((p: string, i: number) => ({
        text: p,
        href: i === 0 ? "tel:2104177760" : "viber://chat?number=%2B306986504754",
      })),
    },
    {
      icon: Mail,
      label: safeContact.email,
      values: safeContact.emails.map((e: string) => ({ text: e, href: `mailto:${e}` })),
    },
    {
      icon: Clock,
      label: safeContact.hours,
      values: safeContact.schedule.map((s: string) => ({ text: s, href: undefined })),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-wrap {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #080808;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        /* ── HERO ── */
        .ct-hero {
          position: relative;
          padding: 110px 80px 64px;
          overflow: hidden;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .ct-hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80');
          background-size: cover;
          background-position: center 40%;
          z-index: 0;
          transform: scale(1.04);
          filter: grayscale(30%);
        }
        .ct-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            160deg,
            rgba(8,8,8,0.45) 0%,
            rgba(8,8,8,0.75) 65%
          );
          z-index: 1;
        }
        .ct-hero-shimmer {
          position: absolute;
          top: -80px; right: -80px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(82,164,71,0.12) 0%, transparent 65%);
          z-index: 1;
          pointer-events: none;
        }
        .ct-hero > *:not(.ct-hero-bg):not(.ct-hero-overlay):not(.ct-hero-shimmer) { position: relative; z-index: 2; }

        .ct-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .ct-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #52a447; flex-shrink: 0; }
        .ct-eyebrow-label {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: #52a447;
          font-family: 'DM Sans', sans-serif;
        }

        .ct-headline {
          font-family: 'Syne', sans-serif;
          font-weight: 300;
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0 0 28px;
        }
        .ct-headline span { color: #52a447; font-weight: 600; }

        .ct-sub {
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.4);
          max-width: 360px; line-height: 1.7; margin: 0;
        }

        .ct-hero-rule {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(82,164,71,0.5) 40%, rgba(82,164,71,0.5) 60%, transparent);
          z-index: 2;
        }

        /* ── BODY ── */
        .ct-body {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
        }

        /* ── LEFT PANEL ── */
        .ct-left {
          background: #0e0e0e;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 52px 60px 52px;
          border-right: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }
        .ct-left::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 120px; height: 120px;
          border-top: 1px solid rgba(82,164,71,0.25);
          border-left: 1px solid rgba(82,164,71,0.25);
          pointer-events: none;
        }
        .ct-left::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 80px; height: 80px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          border-right: 1px solid rgba(255,255,255,0.06);
          pointer-events: none;
        }

        .ct-brand-tag {
          display: flex; align-items: center; gap: 10px; margin-bottom: 28px;
        }
        .ct-brand-tag-line { height: 1px; width: 28px; background: rgba(255,255,255,0.1); }
        .ct-brand-tag-label {
          color: rgba(255,255,255,0.2);
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
        }

        .ct-left-quote {
          font-family: 'Syne', sans-serif;
          font-size: clamp(16px, 1.6vw, 22px);
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
          margin: 0 0 36px;
        }
        .ct-left-quote span { color: #52a447; font-weight: 500; }

        .ct-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #52a447;
          color: #fff;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 4px;
          text-decoration: none; align-self: flex-start;
          transition: background 0.25s, transform 0.2s;
          position: relative; z-index: 1;
        }
        .ct-cta:hover { background: #3d8a33; transform: translateY(-1px); }
        .ct-cta svg { transition: transform 0.2s; }
        .ct-cta:hover svg { transform: translate(2px, -2px); }

        /* ── RIGHT PANEL ── */
        .ct-right {
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 72px 80px;
        }

        .ct-info-rows { display: flex; flex-direction: column; }

        .ct-info-row {
          display: grid;
          grid-template-columns: 52px 1fr;
          align-items: start;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          transition: background 0.2s;
        }
        .ct-info-row:first-child { border-top: 1px solid rgba(255,255,255,0.05); }

        .ct-info-row::before {
          content: '';
          position: absolute;
          left: -80px;
          top: 0; bottom: 0;
          width: 3px;
          background: #52a447;
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }
        .ct-info-row:hover::before { transform: scaleY(1); }

        .ct-info-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(82,164,71,0.07);
          border: 1px solid rgba(82,164,71,0.12);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.25s, border-color 0.25s;
          margin-top: 2px;
        }
        .ct-info-row:hover .ct-info-icon { background: #52a447; border-color: #52a447; }
        .ct-info-icon svg { color: #52a447; transition: color 0.25s; }
        .ct-info-row:hover .ct-info-icon svg { color: #fff; }

        .ct-info-content { display: flex; flex-direction: column; gap: 6px; }

        .ct-info-label {
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 2px;
        }

        .ct-info-val {
          font-size: clamp(14px, 1.5vw, 17px);
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          line-height: 1.5;
          text-decoration: none;
          display: block;
          transition: color 0.2s;
        }
        a.ct-info-val:hover { color: #52a447; }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .ct-body { grid-template-columns: 1fr; }
          .ct-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 48px 40px; }
          .ct-right { padding: 56px 40px; }
        }
        @media (max-width: 600px) {
          .ct-hero { padding: 90px 24px 48px; min-height: 260px; }
          .ct-sub { max-width: 100%; }
          .ct-left { padding: 40px 24px; }
          .ct-right { padding: 40px 24px; }
          .ct-cta { width: 100%; justify-content: center; }
          .ct-info-row { grid-template-columns: 44px 1fr; gap: 16px; padding: 24px 0; }
          .ct-info-row::before { left: -24px; }
        }
      `}</style>

      <div className="ct-wrap" id="contact">

        {/* HERO */}
        <div className="ct-hero">
          <div className="ct-hero-bg" />
          <div className="ct-hero-overlay" />
          <div className="ct-hero-shimmer" />

          <div className="ct-eyebrow">
            <div className="ct-eyebrow-dot" />
            <span className="ct-eyebrow-label">{eyebrow}</span>
          </div>

          <h2 className="ct-headline">
            {headlineMain} <span>{headlineAccent}</span>
          </h2>

          <p className="ct-sub">{sub}</p>

          <div className="ct-hero-rule" />
        </div>

        {/* BODY */}
        <div className="ct-body">

          {/* LEFT */}
          <div className="ct-left">
            <div className="ct-brand-tag">
              <div className="ct-brand-tag-line" />
              <span className="ct-brand-tag-label">Valore Assicurativo</span>
            </div>

            <p className="ct-left-quote">
              {language === "el"
                ? <>Είμαστε πάντα διαθέσιμοι να σας βοηθήσουμε να βρείτε <span>την κατάλληλη λύση.</span></>
                : <>Always available to help you find <span>the right solution.</span></>}
            </p>

            <a className="ct-cta" href="mailto:info@valore.com">
              {cta} <Send size={13} />
            </a>
          </div>

          {/* RIGHT */}
          <div className="ct-right">
            <div className="ct-info-rows">
              {infoItems.map(({ icon: Icon, label, values }, i) => (
                <div key={i} className="ct-info-row">
                  <div className="ct-info-icon"><Icon size={16} /></div>
                  <div className="ct-info-content">
                    <span className="ct-info-label">{label}</span>
                    {values.map(({ text, href }: { text: string; href?: string }, j: number) =>
                      href ? (
                        <a key={j} href={href} className="ct-info-val">{text}</a>
                      ) : (
                        <span key={j} className="ct-info-val">{text}</span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}