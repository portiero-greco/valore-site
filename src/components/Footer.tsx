import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { assets } from "../lib/assets";

const placeholderLogo = "https://via.placeholder.com/200x80?text=LOGO";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const safeFooter = {
    companyTitle:  t?.footer?.company?.title    || "Company",
    servicesTitle: t?.footer?.services?.title   || "Services",
    supportTitle:  t?.footer?.support?.title    || "Support",
    companyLinks:  t?.footer?.company?.links    || ["About Us", "Our Team", "Careers"],
    servicesLinks: t?.footer?.services?.links   || ["Insurance Plans", "Business Insurance", "Consulting"],
    supportLinks:  t?.footer?.support?.links    || ["Help Center", "Contact", "FAQ"],
    legal:         t?.footer?.legal             || ["Privacy Policy", "Terms of Service"],
    copyright:     t?.footer?.copyright         || "All rights reserved.",
  };

  const socials = [
    { Icon: Facebook,  href: "#", label: "Facebook"  },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin,  href: "#", label: "LinkedIn"  },
    { Icon: Twitter,   href: "#", label: "Twitter"   },
  ];

  return (
    <footer style={{ backgroundColor: "white", borderTop: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px 40px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}
          className="grid-cols-1 md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <img src={assets?.logo || placeholderLogo} alt="Valore" style={{ height: 44, width: "auto", objectFit: "contain", marginBottom: 20 }} />
            <p style={{ fontSize: 13.5, color: "#9ca3af", lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Your trusted insurance partner for over 30 years. Protecting what matters most.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {[
                { Icon: Phone, text: "210 417 7760", href: "tel:2104177760" },
                { Icon: Mail,  text: "info@valore.com", href: "mailto:info@valore.com" },
                { Icon: MapPin,text: "Πειραιάς, Ελλάδα", href: null },
              ].map(({ Icon, text, href }, i) => {
                const el = (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon size={13} style={{ color: "#52a447", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#9ca3af" }}>{text}</span>
                  </div>
                );
                return href
                  ? <a key={i} href={href} style={{ textDecoration: "none" }}>{el}</a>
                  : <div key={i}>{el}</div>;
              })}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {socials.map(({ Icon, href, label }, i) => (
                <a key={i} href={href} aria-label={label} style={{ width: 32, height: 32, border: "1px solid #e5e7eb", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget.style.borderColor = "#52a447"); (e.currentTarget.style.color = "#52a447"); }}
                  onMouseLeave={e => { (e.currentTarget.style.borderColor = "#e5e7eb"); (e.currentTarget.style.color = "#9ca3af"); }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: safeFooter.companyTitle,  links: safeFooter.companyLinks  },
            { title: safeFooter.servicesTitle, links: safeFooter.servicesLinks },
            { title: safeFooter.supportTitle,  links: safeFooter.supportLinks  },
          ].map((col, ci) => (
            <div key={ci} className="hidden md:block">
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 20 }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((link: string, li: number) => (
                  <li key={li}>
                    <a href="#" style={{ fontSize: 13.5, color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#52a447")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12.5, color: "#9ca3af" }}>
            © {currentYear} Valore Assicurativo. {safeFooter.copyright}
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {safeFooter.legal.map((item: string, i: number) => (
              <a key={i} href="#" style={{ fontSize: 12.5, color: "#9ca3af", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#52a447")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Green bottom bar */}
      <div style={{ height: 3, background: "linear-gradient(to right, #52a447, #6dc460, #52a447)" }} />
    </footer>
  );
}