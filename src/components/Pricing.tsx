import { Check } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { useState } from "react";

export function Pricing() {
  const { t } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const plans = [
    { name: t.pricing.plans.basic.name,    price: "€29", period: t.pricing.perMonth, description: t.pricing.plans.basic.description,    features: t.pricing.plans.basic.features,    popular: false },
    { name: t.pricing.plans.complete.name, price: "€59", period: t.pricing.perMonth, description: t.pricing.plans.complete.description, features: t.pricing.plans.complete.features, popular: true  },
    { name: t.pricing.plans.premium.name,  price: "€99", period: t.pricing.perMonth, description: t.pricing.plans.premium.description,  features: t.pricing.plans.premium.features,  popular: false },
  ];

  return (
    <section id="pricing" style={{ padding: "112px 0", backgroundColor: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ height: 1, width: 40, backgroundColor: "#52a447" }} />
            <span style={{ color: "#52a447", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Pricing</span>
            <div style={{ height: 1, width: 40, backgroundColor: "#52a447" }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em", marginBottom: 16 }}>
            {t.pricing.title}
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15, maxWidth: 440, margin: "0 auto" }}>{t.pricing.subtitle}</p>
        </div>

        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 24 }}>
          {plans.map((plan, i) => {
            const isPopular = plan.popular;
            const isHov = hoveredIdx === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: "relative",
                  backgroundColor: isPopular ? "#52a447" : "white",
                  border: `1px solid ${isPopular ? "#52a447" : isHov ? "rgba(82,164,71,0.25)" : "#f0f0f0"}`,
                  borderRadius: 16,
                  padding: "36px 32px",
                  display: "flex", flexDirection: "column",
                  transition: "all 0.25s",
                  boxShadow: isPopular ? "0 16px 48px rgba(82,164,71,0.25)" : isHov ? "0 8px 32px rgba(82,164,71,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
                  transform: isPopular ? "scale(1.02)" : "scale(1)",
                }}
              >
                {isPopular && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", backgroundColor: "white", color: "#52a447", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}>
                    {t.pricing.mostPopular}
                  </div>
                )}

                <h3 style={{ fontSize: 16, fontWeight: 600, color: isPopular ? "white" : "#111827", marginBottom: 6 }}>{plan.name}</h3>
                <p style={{ fontSize: 13.5, color: isPopular ? "rgba(255,255,255,0.7)" : "#9ca3af", marginBottom: 24, lineHeight: 1.6 }}>{plan.description}</p>

                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 28 }}>
                  <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: isPopular ? "white" : "#111827", lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontSize: 13, color: isPopular ? "rgba(255,255,255,0.6)" : "#9ca3af", paddingBottom: 4 }}>/ {plan.period}</span>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, marginBottom: 28 }}>
                  {plan.features.map((f: string, fi: number) => (
                    <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", backgroundColor: isPopular ? "rgba(255,255,255,0.2)" : "rgba(82,164,71,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <Check size={11} style={{ color: isPopular ? "white" : "#52a447" }} />
                      </div>
                      <span style={{ fontSize: 13.5, color: isPopular ? "rgba(255,255,255,0.85)" : "#6b7280", lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button style={{
                  width: "100%", padding: "13px", borderRadius: 8,
                  fontSize: 13.5, fontWeight: 600, cursor: "pointer", border: "none",
                  backgroundColor: isPopular ? "white" : "#52a447",
                  color: isPopular ? "#52a447" : "white",
                  boxShadow: isPopular ? "0 2px 12px rgba(0,0,0,0.1)" : "0 4px 16px rgba(82,164,71,0.2)",
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {t.pricing.requestQuote}
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom plan */}
        <div style={{ backgroundColor: "#f9fafb", border: "1px solid #f0f0f0", borderRadius: 14, padding: "32px 40px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 24 }}
          className="flex-col md:flex-row"
        >
          <div>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: "#111827", marginBottom: 6 }}>{t.pricing.custom.title}</h3>
            <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.65, maxWidth: 480 }}>{t.pricing.custom.subtitle}</p>
          </div>
          <button style={{
            flexShrink: 0, padding: "12px 28px", borderRadius: 8,
            border: "1.5px solid #52a447", color: "#52a447", backgroundColor: "transparent",
            fontSize: 13.5, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
          }}
            onMouseEnter={e => { (e.currentTarget.style.backgroundColor = "#52a447"); (e.currentTarget.style.color = "white"); }}
            onMouseLeave={e => { (e.currentTarget.style.backgroundColor = "transparent"); (e.currentTarget.style.color = "#52a447"); }}
          >
            {t.pricing.custom.cta}
          </button>
        </div>
      </div>
    </section>
  );
}