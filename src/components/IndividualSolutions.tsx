import { useLanguage } from "../lib/LanguageContext";
import { Link } from "react-router-dom";
import { assets } from "../lib/assets";

export function IndividualSolutions() {
  const { t } = useLanguage();

  const safeText = {
    title:
      t?.individualSolutions?.title ||
      "Individual Insurance Solutions",

    subtitle:
      t?.individualSolutions?.subtitle ||
      "Comprehensive insurance programs designed to protect every aspect of your personal and family life.",
  };

  const solutions = [
    {
      image: assets.homeInsurance,
      ...t.individualSolutions.categories.homeInsurance,
      path: "/home-insurance",
    },
    {
      image: assets.vehicleInsurance,
      ...t.individualSolutions.categories.vehicleInsurance,
      path: "/vehicle-insurance",
    },
    {
      image: assets.boatInsurance,
      ...t.individualSolutions.categories.boatInsurance,
      path: "/boat-insurance",
    },
    {
      image: assets.healthPrograms,
      ...t.individualSolutions.categories.healthPrograms,
      path: "/health-programs",
    },
    {
      image: assets.petInsurance,
      ...t.individualSolutions.categories.petInsurance,
      path: "/pet-insurance",
    },
  ];

  return (
    <section
      id="individual-solutions"
      className="
        py-24
        mb-32
        bg-gradient-to-b
        from-white
        via-green-50/30
        to-white
        relative
      "
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-200/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-green-600 mb-4 tracking-tight">
            {safeText.title}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {safeText.subtitle}
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {solutions.map((s, i) => (
            <Link
              key={i}
              to={s.path}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                border border-gray-100
                flex flex-col
                h-[360px]     /* SAME HEIGHT ALL */
              "
            >

              {/* ===== FIXED IMAGE SIZE ===== */}
              <div className="h-[150px] w-full overflow-hidden">

                <img
                  src={s.image}
                  alt={s.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>

              {/* ===== CONTENT ===== */}
              <div className="flex-1 p-6 flex flex-col text-center">

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-green-700 leading-snug">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-base mt-3 leading-relaxed">
                  {s.description}
                </p>

                {/* CTA */}
                <div className="mt-auto pt-4 text-green-600 font-semibold text-sm">
                  Learn more →
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
