import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

/* =====================================================
   CONTACT COMPONENT
   Localhost safe + translation fallbacks
===================================================== */

export function Contact() {
  /* =====================================================
     HOOK — MUST STAY TOP LEVEL
  ===================================================== */

  const { t } = useLanguage();

  /* =====================================================
     SAFE FALLBACK TEXT
     Prevents crashes if translations missing
  ===================================================== */

  const safeContact = {
    headquarters:
      t?.contact?.info?.headquarters || "Headquarters",

    phone:
      t?.contact?.info?.phone || "Phone",

    email:
      t?.contact?.info?.email || "Email",

    hours:
      t?.contact?.info?.hours || "Working Hours",

    address:
      t?.contact?.details?.address || [
        "6 Iroon Polytechniou Ave",
        "Piraeus 18531, Greece",
      ],

    phones:
      t?.contact?.details?.phones || [
        "+30 210 417 7760",
        "+30 698 650 4754",
      ],

    emails:
      t?.contact?.details?.emails || [
        "info@valore.com",
      ],

    schedule:
      t?.contact?.details?.schedule || [
        "Mon – Fri: 09:00 – 18:00",
      ],
  };

  /* =====================================================
     CONTACT DATA STRUCTURE
  ===================================================== */

  const contactInfo = [
    {
      icon: MapPin,
      title: safeContact.headquarters,
      details: safeContact.address,
      link:
        "https://www.google.com/maps/search/?api=1&query=Piraeus+Greece",
      interactive: true,
    },
    {
      icon: Phone,
      title: safeContact.phone,
      details: safeContact.phones,
      links: [
        "tel:2104177760",
        "viber://chat?number=%2B306986504754",
      ],
      interactive: true,
    },
    {
      icon: Mail,
      title: safeContact.email,
      details: safeContact.emails,
      link: "mailto:info@valore.com",
      interactive: true,
    },
    {
      icon: Clock,
      title: safeContact.hours,
      details: safeContact.schedule,
      interactive: false,
    },
  ];

  /* =====================================================
     COMPONENT
  ===================================================== */

  return (
    <section className="py-12 md:py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= GRID ================= */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          md:gap-8
        ">

          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            /* ================= CONTENT BLOCK ================= */

            const content = (
              <>
                <div className="
                  w-12 h-12
                  bg-green-100
                  rounded-full
                  flex
                  items-center
                  justify-center
                  mb-4
                  mx-auto
                ">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>

                {info.details.map(
                  (detail: string, i: number) => (
                    <p
                      key={i}
                      className="
                        text-gray-600
                        text-sm
                        md:text-base
                      "
                    >
                      {detail}
                    </p>
                  )
                )}
              </>
            );

            /* =====================================================
               MULTIPLE LINKS (PHONES / VIBER)
            ===================================================== */

            if (info.links && Array.isArray(info.links)) {
              return (
                <div
                  key={index}
                  className="
                    bg-white
                    p-6
                    rounded-lg
                    shadow-sm
                    text-center
                  "
                >
                  <div className="
                    w-12 h-12
                    bg-green-100
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mb-4
                    mx-auto
                  ">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>

                  {info.details.map(
                    (detail: string, i: number) => {
                      const href = info.links[i];

                      return (
                        <a
                          key={i}
                          href={href}
                          className="
                            block
                            text-gray-600
                            text-sm
                            md:text-base
                            hover:text-green-600
                            transition-colors
                          "
                        >
                          {detail}
                        </a>
                      );
                    }
                  )}
                </div>
              );
            }

            /* =====================================================
               SINGLE INTERACTIVE CARD
            ===================================================== */

            if (info.interactive && info.link) {
              return (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-white
                    p-6
                    rounded-lg
                    shadow-sm
                    text-center
                    hover:shadow-md
                    hover:scale-105
                    transition-all
                  "
                >
                  {content}
                </a>
              );
            }

            /* =====================================================
               STATIC CARD
            ===================================================== */

            return (
              <div
                key={index}
                className="
                  bg-white
                  p-6
                  rounded-lg
                  shadow-sm
                  text-center
                "
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
