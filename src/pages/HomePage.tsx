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
        overflowY: "auto",
        overflowX: "hidden",
      }}
      id="scroll-container"
    >
      {/* 1 — Hero */}
      <div id="hero">
        <Hero />
      </div>

      {/* 3 — Individual Solutions */}
      <div id="individual-solutions">
        <IndividualSolutions />
      </div>

      {/* 4 — Business Solutions */}
      <div id="business-solutions">
        <BusinessSolutionsPage />
      </div>

      {/* 5 — History */}
      <div id="history">
        <History />
      </div>

      {/* 6 — Unique Coverages */}
      <div id="unique-coverages">
        <UniqueCoverages />
      </div>

      {/* 7 — Clients */}
      <div id="clients">
        <Clients />
      </div>

      {/* 8 — Connections */}
      <div id="connections">
        <Connections />
      </div>

      {/* 10 — Contact */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}