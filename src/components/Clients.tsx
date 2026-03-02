import { useLanguage } from "../lib/LanguageContext";

export function Clients() {
  const { t, language } = useLanguage();

  const safeText = {
    title:
      t?.clients?.title ||
      (language === "el" ? "Οι Πελάτες & Συνεργάτες μας" : "Our Clients & Partners"),

    subtitle:
      t?.clients?.subtitle ||
      (language === "el"
        ? "Μας εμπιστεύονται κορυφαίες εταιρείες που βασίζονται στην τεχνογνωσία και τις μακροχρόνιες λύσεις μας."
        : "Trusted by leading companies who rely on our expertise and long-term solutions."),
  };

  const clients = [
    { name: "Dspeiraia", logo: "/clients/dspeiraia-logo-white (1).png" },
    { name: "Logo Button", logo: "/clients/LOGO BUTTON DOWN (1).png" },
    { name: "Envie", logo: "/clients/logo ENVIE (1).svg" },
    { name: "Pulsar", logo: "/clients/logo PULSAR (1).svg" },
    { name: "Grigoris", logo: "/clients/logo_164x70_greek GRIGORIS (1).svg" },
    { name: "Novitron", logo: "/clients/logo_novitron-colorful-original.cfee9e (1).svg" },
    { name: "Generic Logo", logo: "/clients/logo-2048x901 (1).png" },
    { name: "SC Reverse", logo: "/clients/special-cars.png" },
    { name: "CHE", logo: "/clients/che.png" },
    { name: "Untitled JPG", logo: "/clients/Untitled-2.jpg" },
    { name: "Viamar", logo: "/clients/viamar-2-logo-footer (1).png" },
    { name: "Yestay Homes", logo: "/clients/yestay_homes (1).svg" },
    { name: "Yestay Hotels", logo: "/clients/yestay_hotels_colors-6c80cd (1).svg" },
    { name: "Varoulko", logo: "/clients/varoulko2.png" },
  ];

  return (
    <section className="py-20 bg-white" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl text-green-600 tracking-tight mb-6">
            {safeText.title}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            {safeText.subtitle}
          </p>
        </div>

        {/* ================= LOGOS GRID ================= */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-4
            sm:gap-5
            md:gap-6
          "
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="
                group
                rounded-lg
                border
                border-gray-100
                bg-white
                p-2
                sm:p-3
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:shadow-md
              "
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="
                  max-h-10
                  sm:max-h-12
                  w-auto
                  object-contain
                  transition
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
