export function Connections() {
  const partners = [
    { name: "Aetna", file: "aetna.jpg" },
    { name: "AIG", file: "aig.jpg" },
    { name: "Allianz", file: "allianz.jpg" },
    { name: "Apeiron", file: "apeiron.jpg" },
    { name: "ARAG", file: "arag.jpg" },
    { name: "AXA", file: "axa.jpg" },
    { name: "Cigna", file: "cigna3.png" },
    { name: "Groupama", file: "groupama.png" },
    { name: "Interamerican", file: "interamerican.png" },
    { name: "Interasco", file: "interasco.png" },
    { name: "Interlife", file: "interlife.png" },
    { name: "MetLife", file: "metlife.png" },
    { name: "Minetta", file: "minetta.png" },
    { name: "Mondial", file: "mondial.png" },
    { name: "NP Insurance", file: "np.png" },
    { name: "Orizon", file: "orizon.png" },
    { name: "Pisti", file: "pisti.png" },
    { name: "Synetairiki", file: "synetairiki.png" },
    { name: "Wakam", file: "wakam.png" },
  ];

  const rows = [
    partners.filter((_, i) => i % 4 === 0),
    partners.filter((_, i) => i % 4 === 1),
    partners.filter((_, i) => i % 4 === 2),
    partners.filter((_, i) => i % 4 === 3),
  ];

  const MarqueeRow = ({
    items,
    dir,
    speed,
  }: {
    items: { name: string; file: string }[];
    dir: "left" | "right";
    speed: number;
  }) => {
    const track = [...items, ...items, ...items];

    return (
      <div
        className="relative overflow-hidden py-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className={`marquee ${dir === "left" ? "m-left" : "m-right"}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {track.map((p, idx) => (
            <img
              key={`${p.file}-${idx}`}
              src={`/logos/${p.file}`}
              alt={p.name}
              loading="lazy"
              className="
                h-12 sm:h-14 lg:h-16
                w-auto
                object-contain
                hover:scale-110
                transition
                duration-300
              "
            />
          ))}
        </div>

        <style>{`
          .marquee{
            display:flex;
            align-items:center;
            gap: 90px;
            width: max-content;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            will-change: transform;
          }

          .m-left{ animation-name: scrollLeft; }
          .m-right{ animation-name: scrollRight; }

          @keyframes scrollLeft{
            from{ transform: translateX(0); }
            to{ transform: translateX(-33.333%); }
          }

          @keyframes scrollRight{
            from{ transform: translateX(-33.333%); }
            to{ transform: translateX(0); }
          }

          .marquee:hover{
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce){
            .marquee{ animation: none !important; }
          }
        `}</style>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* ===== CENTERED TITLE ===== */}
        <h2 className="text-5xl md:text-6xl text-green-600 mb-12 tracking-tight">
          Our Insurance Partners
        </h2>

        {/* 4 ROWS */}
        <div className="space-y-10">
          <MarqueeRow items={rows[0]} dir="left"  speed={26} />
          <MarqueeRow items={rows[1]} dir="right" speed={24} />
          <MarqueeRow items={rows[2]} dir="left"  speed={32} />
          <MarqueeRow items={rows[3]} dir="right" speed={36} />
        </div>

      </div>
    </section>
  );
}
