import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { useLanguage } from "../lib/LanguageContext";
import { assets } from "../lib/assets";

/* =====================================================
   PLACEHOLDER LOGO (LOCALHOST SAFE)
===================================================== */

const placeholderLogo =
  "https://via.placeholder.com/200x80?text=LOGO";

export function Footer() {
  /* Hook top level */

  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  /* =====================================================
     SAFE TRANSLATION FALLBACKS
  ===================================================== */

  const safeFooter = {
    companyTitle:
      t?.footer?.company?.title || "Company",

    servicesTitle:
      t?.footer?.services?.title || "Services",

    supportTitle:
      t?.footer?.support?.title || "Support",

    companyLinks:
      t?.footer?.company?.links || [
        "About Us",
        "Our Team",
        "Careers",
      ],

    servicesLinks:
      t?.footer?.services?.links || [
        "Insurance Plans",
        "Business Insurance",
        "Consulting",
      ],

    supportLinks:
      t?.footer?.support?.links || [
        "Help Center",
        "Contact",
        "FAQ",
      ],

    legal:
      t?.footer?.legal || [
        "Privacy Policy",
        "Terms of Service",
      ],

    copyright:
      t?.footer?.copyright ||
      "All rights reserved.",
  };

  /* =====================================================
     SOCIAL LINKS
  ===================================================== */

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  /* =====================================================
     COMPONENT
  ===================================================== */

  return (
    <footer className="bg-gray-100 text-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* ================= TOP GRID ================= */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          md:gap-12
          mb-8
          md:mb-12
        ">

          {/* ========= LEFT — LOGO + CONTACT ========= */}

          <div className="flex flex-col items-center md:items-start">

            <img
              src={assets?.logo || placeholderLogo}
              alt="Company Logo"
              className="
                h-16 md:h-24
                w-auto
                mb-6 md:mb-8
                mx-auto md:mx-0
                object-contain
              "
            />

            {/* Contact Info */}

            <div className="
              space-y-3
              mb-6
              text-sm md:text-base
              w-full
            ">

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <span>210 417 7760</span>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <span className="break-all">
                  info@valore.com
                </span>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Πειραιάς, Ελλάδα</span>
              </div>
            </div>

            {/* Social Icons */}

            <div className="flex gap-3 justify-center md:justify-start">

              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      w-10 h-10
                      bg-white
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      hover:bg-green-600
                      hover:text-white
                      transition-all
                      duration-300
                      hover:scale-110
                      shadow-sm
                    "
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}

            </div>
          </div>

          {/* ========= RIGHT — LINKS ========= */}

          <div className="hidden md:grid md:grid-cols-3 gap-8">

            {/* Company */}

            <div>
              <h3 className="text-green-700 mb-4 md:mb-6">
                {safeFooter.companyTitle}
              </h3>

              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                {safeFooter.companyLinks.map(
                  (link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="
                          text-green-600
                          hover:text-green-700
                          transition-colors
                        "
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}

            <div>
              <h3 className="text-green-700 mb-4 md:mb-6">
                {safeFooter.servicesTitle}
              </h3>

              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                {safeFooter.servicesLinks.map(
                  (link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="
                          text-green-600
                          hover:text-green-700
                          transition-colors
                        "
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Support */}

            <div>
              <h3 className="text-green-700 mb-4 md:mb-6">
                {safeFooter.supportTitle}
              </h3>

              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                {safeFooter.supportLinks.map(
                  (link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="
                          text-green-600
                          hover:text-green-700
                          transition-colors
                        "
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="border-t border-gray-300 pt-6 md:pt-8">

          <div className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            text-sm md:text-base
          ">

            <p className="text-gray-600 text-center md:text-left">
              © {currentYear} Valore Assicurativo.{" "}
              {safeFooter.copyright}
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">

              {safeFooter.legal.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    text-green-600
                    hover:text-green-700
                    transition-colors
                  "
                >
                  {item}
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* Accent Bar */}

      <div className="
        h-1
        bg-gradient-to-r
        from-green-600
        via-green-500
        to-green-600
      " />
    </footer>
  );
}
