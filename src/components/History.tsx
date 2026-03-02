import { useLanguage } from "../lib/LanguageContext";

export function History() {
  const { t } = useLanguage();

  const milestones = [
    { year: "1998", ...t.history.milestones[1998] },
    { year: "2010", ...t.history.milestones[2010] },
    { year: "2025", ...t.history.milestones[2025] }
  ];

  return (
    <section
      id="history"
      className="
        pt-32
        pb-48          /* 🔥 BIG GAP BEFORE NEXT SECTION */
        bg-white
        relative
        overflow-hidden
      "
    >

      {/* ===== TOP DIVIDER ===== */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-green-50/40 to-transparent pointer-events-none" />

      {/* ===== GLOW ===== */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-200/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl text-green-600 mb-6 tracking-tight">
            {t.history.title}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            {t.history.subtitle}
          </p>

        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 via-green-400 to-green-600 rounded-full -translate-x-1/2 hidden md:block" />

          {/* 🔥 Added mb-40 here */}
          <div className="space-y-24 mb-40">

            {milestones.map((m, i) => {

              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >

                  {/* TEXT CARD */}
                  <div className="w-full md:w-1/2">

                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">

                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {m.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {m.description}
                      </p>

                    </div>

                  </div>

                  {/* YEAR CIRCLE */}
                  <div className="relative flex items-center justify-center">

                    <div className="w-28 h-28 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold shadow-2xl border-8 border-white z-10">
                      {m.year}
                    </div>

                    {/* Glow ring */}
                    <div className="absolute w-40 h-40 rounded-full bg-green-400/20 blur-xl" />

                  </div>

                  {/* Spacer */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
