import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Clients } from "../components/Clients";
import { History } from "../components/History";
import { UniqueCoverages } from "../components/UniqueCoverages";
import { IndividualSolutions } from "../components/IndividualSolutions";
import { BusinessSolutionsPage } from "../pages/BusinessSolutionsPage";
import { Contact } from "../components/Contact";
import { Connections } from "../components/Connections";
import { GoogleReviews } from "../components/GoogleReviews";


export function HomePage() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollSnapType: "y mandatory",
      }}
      id="scroll-container"
    >
      {/* 1 — Hero */}
      <div id="hero" style={{ scrollSnapAlign: "start" }}>
        <Hero />
      </div>

      {/* 3 — Individual Solutions */}
      <div id="individual-solutions" style={{ scrollSnapAlign: "start" }}>
        <IndividualSolutions />
      </div>

      {/* 4 — Business Solutions */}
      <div id="business-solutions" style={{ scrollSnapAlign: "start" }}>
        <BusinessSolutionsPage />
      </div>

      {/* 5 — History */}
      <div id="history" style={{ scrollSnapAlign: "start" }}>
        <History />
      </div>

      {/* 6 — Unique Coverages */}
      <div id="unique-coverages" style={{ scrollSnapAlign: "start" }}>
        <UniqueCoverages />
      </div>

      {/* 7 — Clients */}
      <div id="clients" style={{ scrollSnapAlign: "start" }}>
        <Clients />
      </div>

      {/* 8 — Connections */}
      <div id="connections" style={{ scrollSnapAlign: "start" }}>
        <Connections />
      </div>

      {/* 10 — Contact */}
      <div id="contact" style={{ scrollSnapAlign: "start" }}>
        <Contact />
      </div>
    </div>
  );
}