import { Shield, Users, Award, TrendingUp } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

/* =====================================================
   COMPONENT
===================================================== */

export function About() {
  const { t } = useLanguage();

  const safeText = {
    subtitle:
      t?.about?.subtitle ||
      "Valore Assicurativo is a reference point in the insurance sector, with a constant commitment to excellence and customer satisfaction.",

    features: [
      {
        icon: Shield,
        title:
          t?.about?.features?.protection?.title ||
          "Full Protection",
        description:
          t?.about?.features?.protection?.description ||
          "Comprehensive insurance coverage tailored to your needs.",
      },
      {
        icon: Users,
        title:
          t?.about?.features?.experience?.title ||
          "Expert Team",
        description:
          t?.about?.features?.experience?.description ||
          "Experienced professionals supporting you at every step.",
      },
      {
        icon: Award,
        title:
          t?.about?.features?.excellence?.title ||
          "Certified Excellence",
        description:
          t?.about?.features?.excellence?.description ||
          "Recognized for service quality and customer satisfaction.",
      },
      {
        icon: TrendingUp,
        title:
          t?.about?.features?.growth?.title ||
          "Constant Growth",
        description:
          t?.about?.features?.growth?.description ||
          "Innovative solutions that evolve with your future.",
      },
    ],
  };

  return (
    <section className="py-10 md:py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER TEXT ONLY ================= */}

        <div className="mb-12 md:mb-16 text-center">
          <p
            className="
              text-lg
              md:text-xl
              text-gray-600
              max-w-4xl
              mx-auto
              leading-relaxed
            "
          >
            {safeText.subtitle}
          </p>
        </div>

        {/* ================= FEATURES GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-8
          "
        >
          {safeText.features.map((feature: any, index: number) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  p-6
                  rounded-lg
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    bg-green-100
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    mb-4
                    mx-auto
                  "
                >
                  <Icon className="w-6 h-6 text-green-600" />
                </div>

                <h3 className="text-gray-900 mb-2 text-center font-semibold">
                  {feature.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    text-center
                    text-sm
                    md:text-base
                    leading-relaxed
                  "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
