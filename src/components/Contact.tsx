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

        /* ── HERO ── */
        .ct-hero {
          position: relative;
          padding: 100px 72px 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .ct-hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80');
          background-size: cover; background-position: center 40%; z-index: 0;
        }
        .ct-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(13,13,13,0.92) 100%);
          z-index: 1;
        }
        .ct-hero > *:not(.ct-hero-bg):not(.ct-hero-overlay) { position: relative; z-index: 2; }

        .ct-headline {
          font-weight: 300; font-size: clamp(36px, 4vw, 64px);
          line-height: 1.1; letter-spacing: -0.02em;
          color: #fff; margin: 0 0 24px;
        }
        .ct-headline span { color: #52a447; }

        .ct-meta { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
        .ct-eyebrow { display: flex; align-items: center; gap: 10px; }
        .ct-eyebrow-line  { height: 1px; width: 28px; background: #52a447; }
        .ct-eyebrow-label { font-size: 10px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #52a447; }
        .ct-sub { font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.55); max-width: 340px; line-height: 1.65; margin: 0; }

        /* ── BODY ── */
        .ct-body {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* ── LEFT PANEL – brand / CTA ── */
        .ct-left {
          background: #111;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 56px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .ct-brand-tag {
          display: flex; align-items: center; gap: 10px; margin-bottom: 32px;
        }
        .ct-brand-tag-line { height: 1px; width: 28px; background: rgba(255,255,255,0.15); }
        .ct-brand-tag-label { color: rgba(255,255,255,0.3); font-size: 10px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; }

        .ct-left-quote {
          font-size: clamp(18px, 1.8vw, 24px); font-weight: 300;
          color: white; line-height: 1.6; margin: 0 0 48px;
        }
        .ct-left-quote span { color: #52a447; }

        .ct-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: white; font-size: 13px; font-weight: 400;
          padding: 12px 24px; border-radius: 6px;
          text-decoration: none; align-self: flex-start;
          transition: border-color 0.2s, color 0.2s;
        }
        .ct-cta:hover { border-color: #52a447; color: #52a447; }

        /* ── RIGHT PANEL – info rows ── */
        .ct-right {
          background: #f8f8f6;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 72px;
        }

        .ct-info-rows { display: flex; flex-direction: column; }

        .ct-info-row {
          display: flex; align-items: flex-start;
          padding: 28px 0;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          gap: 32px;
        }
        .ct-info-row:first-child { border-top: 1px solid rgba(0,0,0,0.08); }

        .ct-info-icon-col {
          display: flex; align-items: center; gap: 14px;
          flex: 0 0 190px;
        }
        .ct-info-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: rgba(82,164,71,0.08);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.25s;
        }
        .ct-info-row:hover .ct-info-icon { background: #52a447; }
        .ct-info-row:hover .ct-info-icon svg { color: white !important; }
        .ct-info-icon svg { color: #52a447; transition: color 0.25s; }

        .ct-info-label {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase; color: #9ca3af;
        }

        .ct-info-values { flex: 1; display: flex; flex-direction: column; gap: 2px; }

        .ct-info-val {
          font-size: clamp(15px, 2.5vw, 18px); font-weight: 400;
          color: #0d0d0d; line-height: 1.45;
          text-decoration: none; display: block; transition: color 0.2s;
        }
        a.ct-info-val:hover { color: #52a447; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ct-body { grid-template-columns: 1fr; }
          .ct-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 48px 32px; }
          .ct-right { padding: 48px 32px; }
          .ct-info-val { font-size: 16px; }
        }
        @media (max-width: 600px) {
          .ct-hero { padding: 80px 24px 40px; min-height: 220px; }
          .ct-sub { max-width: 100%; }
          .ct-left { padding: 40px 20px; }
          .ct-right { padding: 32px 20px; }
          .ct-cta { width: 100%; justify-content: center; }

          /* stack icon+label above values on small screens */
          .ct-info-row { flex-direction: column; gap: 10px; padding: 22px 0; }
          .ct-info-icon-col { flex: none; }
          .ct-info-val { font-size: 15px; }
        }
      `}</style>

      <div className="ct-wrap" id="contact">

        {/* HERO */}
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

        {/* BODY */}
        <div className="ct-body">

          {/* LEFT – brand + CTA only */}
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
              {cta} <ArrowUpRight size={14} />
            </a>
          </div>

          {/* RIGHT – all contact info, single source of truth */}
          <div className="ct-right">
            <div className="ct-info-rows">
              {infoItems.map(({ icon: Icon, label, values }, i) => (
                <div key={i} className="ct-info-row">
                  <div className="ct-info-icon-col">
                    <div className="ct-info-icon"><Icon size={16} /></div>
                    <span className="ct-info-label">{label}</span>
                  </div>
                  <div className="ct-info-values">
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