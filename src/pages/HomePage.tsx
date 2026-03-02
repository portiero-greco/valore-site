import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Clients } from "../components/Clients";
import { History } from "../components/History";
import { UniqueCoverages } from "../components/UniqueCoverages";
import { IndividualSolutions } from "../components/IndividualSolutions";
import { Contact } from "../components/Contact";
import { Connections } from "../components/Connections";
import { Footer } from "../components/Footer";
import { GoogleReviews } from "../components/GoogleReviews";

export function HomePage() {
  return (
    <div className="bg-white">

      <Hero />

      <div className="my-32">
        <About />
      </div>

      <div className="my-32">
        <Clients />
      </div>

      <div className="my-32">
        <IndividualSolutions />
      </div>

      <div className="my-40">   {/* 🔥 EXTRA GAP HERE */}
        <History />
      </div>

      <div className="my-40">   {/* 🔥 EXTRA GAP HERE */}
        <UniqueCoverages />
      </div>

      <div className="my-32">
        <Contact />
      </div>

      <div className="my-32">
        <Connections />
      </div>

      <div className="my-32">
        <GoogleReviews />
      </div>

      <div className="pt-24">
        <Footer />
      </div>

    </div>
  );
}
