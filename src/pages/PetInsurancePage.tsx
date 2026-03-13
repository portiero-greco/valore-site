import { useLanguage } from "../lib/LanguageContext";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function PetInsurancePage() {
  const { t } = useLanguage();
  const category = t.individualSolutions.categories.petInsurance;
  const navigate = useNavigate();

  const handleBackToSolutions = () => {
    navigate("/#individual-solutions");
    setTimeout(() => {
      const element = document.getElementById("individual-solutions");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="subpage-bg" style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif", color: "#fff" }}>

      {/* Nav */}
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

      {/* Hero */}
      <div style={{ position: "relative", height: "70vh", minHeight: 420, overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1634840445928-1b998116a3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwZXQlMjBkb2d8ZW58MXx8fHwxNzYyNTMyODg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
              {t.nav.insurance}
            </span>
          </div>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.1,
            letterSpacing: "-0.02em", color: "#fff", margin: "0 0 16px", maxWidth: 700
          }}>
            {category.title}
          </h1>
          <p style={{
            fontSize: 18, fontWeight: 300, color: "rgba(255,255,255,0.55)",
            maxWidth: 560, lineHeight: 1.7, margin: 0,
            fontFamily: "'DM Sans', sans-serif"
          }}>
            {category.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{  margin: "0 auto", padding: "80px 56px 140px" }}>

        {/* Intro text block */}
        <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {category.content.split("\n").map((line: string, index: number) => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith("•") || trimmed === "Coverage Includes:") return null;
            return (
              <p key={index} style={{
                fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 300,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.3, margin: "0 0 20px",
                letterSpacing: "-0.02em",
                fontFamily: "'DM Sans', sans-serif"
              }}>
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Coverage heading */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ height: 1, width: 28, background: "#52a447" }} />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52a447" }}>
              {t.nav.coverage}
            </span>
          </div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.15,
            letterSpacing: "-0.02em", color: "#fff", margin: 0
          }}>
            {t.nav.whatsIncluded}
          </h2>
        </div>

        {/* Bullet items as cards */}
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

        {/* Footer */}
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