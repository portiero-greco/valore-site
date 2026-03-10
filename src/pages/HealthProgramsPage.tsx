import { useLanguage } from "../lib/LanguageContext";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../lib/assets";

export function HealthProgramsPage() {
  const { t } = useLanguage();
  const category = t?.individualSolutions?.categories?.healthPrograms;
  const navigate = useNavigate();

  const handleBackToSolutions = () => {
    navigate("/#individual-solutions");
    setTimeout(() => {
      const element = document.getElementById("individual-solutions");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!category) return null;

  return (
    <div className="subpage-bg" style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif", color: "#fff" }}>

      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 56px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <button onClick={handleBackToSolutions} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.45)",
          background: "none", border: "none", cursor: "pointer", padding: 0,
          fontFamily: "'DM Sans', sans-serif"
        }}>
          <ArrowLeft size={14} />
          {t.nav.backToSolutions}
        </button>
        <Link to="/" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.45)", textDecoration: "none",
          fontFamily: "'DM Sans', sans-serif"
        }}>
          <Home size={14} />
          {t.nav.home}
        </Link>
      </nav>

      <div style={{ position: "relative", height: "70vh", minHeight: 420, overflow: "hidden" }}>
        <img
          src={assets.healthPrograms}
          alt={category.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 60%, #0a0a0a 100%)"
        }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ height: 1, width: 28, background: "#52a447" }} />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52a447" }}>
              Insurance
            </span>
          </div>
          <h1
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: "clamp(38px, 5vw, 70px)",
    lineHeight: 1.08,
    letterSpacing: "-0.025em",
    color: "#fff",
    margin: "0 0 20px",
    maxWidth: 780,
  }}
>
  {category.description}
</h1>

<h2
  style={{
    fontSize: 20,
    fontWeight: 300,
    color: "rgba(255,255,255,0.55)",
    maxWidth: 560,
    lineHeight: 1.7,
    margin: 0,
    fontFamily: "'DM Sans', sans-serif",
  }}
>
  {category.title}
</h2>
        </div>
      </div>

      <div style={{  margin: "0 auto", padding: "80px 56px 140px" }}>
      <div style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>

  <h2 style={{
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: "clamp(22px, 2.5vw, 32px)",
    lineHeight: 1.4,
    letterSpacing: "-0.015em",
    color: "rgba(255,255,255,0.85)",
    margin: "0 0 40px",
  }}>
    Comprehensive health coverage designed for residence permit applications, providing essential medical protection.
  </h2>

  <ul style={{
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
    {category.content.split("\n").map((line: string, index: number) => {
      const trimmed = line.trim();
      if (
        !trimmed ||
        trimmed.startsWith("•") ||
        trimmed === "Coverage Includes:" ||
        trimmed === "Comprehensive health coverage designed for residence permit applications, providing essential medical protection."
      ) return null;

      return (
        <li key={index} style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 16,
          fontSize: 18,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.8)"
        }}>

          {/* bullet */}
          <div style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#52a447",
            marginTop: 8,
            flexShrink: 0
          }}/>

          <span>{trimmed}</span>

        </li>
      );
    })}
  </ul>

</div>

        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ height: 1, width: 28, background: "#52a447" }} />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52a447" }}>
              Coverage
            </span>
          </div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.15,
            letterSpacing: "-0.02em", color: "#fff", margin: 0
          }}>
            What's included
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {category.content.split("\n").map((line: string, index: number) => {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith("•")) return null;
            return (
              <div key={index} style={{
                display: "flex", alignItems: "flex-start", gap: 24,
                padding: "28px 32px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4,
              }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  border: "1px solid #52a447",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: 2
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#52a447" }} />
                </div>
                <span style={{
                  fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif"
                }}>
                  {trimmed.substring(1).trim()}
                </span>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button onClick={handleBackToSolutions} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.45)",
            background: "none", border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 6, padding: "10px 20px", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif"
          }}>
            <ArrowLeft size={13} />
            {t.nav.backToSolutions}
          </button>
        </div>
      </div>
    </div>
  );
}