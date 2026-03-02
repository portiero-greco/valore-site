import {
  Shield,
  Heart,
  Home,
  FileText,
  Scale,
  Check
} from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { Card } from "./ui/card";

export function UniqueCoverages() {
  const { t } = useLanguage();

  /* ================= COVERAGES ================= */

  const coverages = [
    {
      icon: Heart,
      title: t.uniqueCoverages.groupamaHealth.title,
      description: t.uniqueCoverages.groupamaHealth.description,
      features: t.uniqueCoverages.groupamaHealth.features,
    },
    {
      icon: Shield,
      title: t.uniqueCoverages.eurolifeGroup.title,
      description: t.uniqueCoverages.eurolifeGroup.description,
      features: t.uniqueCoverages.eurolifeGroup.options,
    },
    {
      icon: Home,
      title: t.uniqueCoverages.homeInsurance.title,
      description: t.uniqueCoverages.homeInsurance.description,
      features: t.uniqueCoverages.homeInsurance.features,
    },
    {
      icon: FileText,
      title: t.uniqueCoverages.guaranteeLetters.title,
      description: t.uniqueCoverages.guaranteeLetters.description,
      features: [t.uniqueCoverages.guaranteeLetters.note],
    },
    {
      icon: Scale,
      title: t.uniqueCoverages.professionalLiability.title,
      description: t.uniqueCoverages.professionalLiability.description,
      features: t.uniqueCoverages.professionalLiability.terms?.items,
    }
  ];

  /* ================= COMPONENT ================= */

  return (
    <section
      id="unique-coverages"
      className="
        pt-56        /* 🔥 BIGGER GAP FROM HISTORY */
        pb-48        /* 🔥 BIG GAP BEFORE NEXT SECTION */
        bg-gradient-to-b
        from-white
        via-gray-50
        to-white
        relative
        overflow-hidden
      "
    >

      {/* ===== TOP DIVIDER FADE ===== */}
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-28">  {/* 🔥 MORE SPACE UNDER TITLE */}

          <h1 className="text-5xl md:text-6xl text-green-600 mb-8 tracking-tight">
            {t.uniqueCoverages.title || "Unique Coverages"}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.uniqueCoverages.subtitle ||
              "Specialized insurance solutions tailored to your specific needs."}
          </p>

        </div>

        {/* ================= GRID ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {coverages.map((coverage, index) => {
            const Icon = coverage.icon;

            return (
              <Card
                key={index}
                className="
                  p-8
                  flex
                  flex-col
                  items-center
                  text-center
                  h-full
                  min-h-[380px]
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                {/* ICON */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#52a447]" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {coverage.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {coverage.description}
                </p>

                {/* FEATURES */}
                {coverage.features && (
                  <ul className="space-y-2 mt-auto">
                    {coverage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-left">
                        <Check className="w-5 h-5 text-[#52a447] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

              </Card>
            );
          })}

        </div>
      </div>
    </section>
  );
}
