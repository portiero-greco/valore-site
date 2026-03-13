import { useLanguage } from "../lib/LanguageContext";
import { Star } from "lucide-react";
import { useState } from "react";

interface Review { id: number; name: string; rating: number; date: string; text: string; avatar: string; }

export function GoogleReviews() {
  const { t, language } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  const safeText = {
    googleRating: t?.reviews?.googleRating || "Google Rating",
    subtitle:     t?.reviews?.subtitle     || "What our clients say about us",
  };

  const reviews: Review[] = language === "en" ? [
    { id: 1, name: "Sotiris Skaftouros", rating: 5, date: "4 months ago",  text: "Exceptional experience from start to finish! Mr. Konstantopoulos is a true professional — knowledgeable, patient, and genuinely invested in finding the best coverage for your needs.", avatar: "SS" },
    { id: 2, name: "Paraskevi Trapela",  rating: 5, date: "2 years ago",   text: "After being involved in a traffic accident, I was compensated immediately. The team handled everything with great care and efficiency.", avatar: "PT" },
    { id: 3, name: "Estefania Reyes",    rating: 5, date: "2 years ago",   text: "I unreservedly recommend Valore Assicurativo. It is the best insurance company I have ever worked with — attentive, professional, and reliable.", avatar: "ER" },
    { id: 4, name: "Maria Dizou",        rating: 5, date: "2 years ago",   text: "Very good professionals, very polite, always available! Highly recommended.", avatar: "MD" },
  ] : [
    { id: 1, name: "Σωτήρης Σκαφτούρος", rating: 5, date: "πριν 4 μήνες",  text: "Εξαιρετική εμπειρία από την αρχή μέχρι το τέλος! Ο κ. Κωνσταντόπουλος είναι αληθινός επαγγελματίας — γνώστης, υπομονετικός και αφοσιωμένος.", avatar: "ΣΣ" },
    { id: 2, name: "Παρασκευή Τραπελά",  rating: 5, date: "πριν 2 χρόνια", text: "Μετά από εμπλοκή σε τροχαίο ατύχημα, αποζημιώθηκα άμεσα. Η ομάδα χειρίστηκε τα πάντα με μεγάλη φροντίδα.", avatar: "ΠΤ" },
    { id: 3, name: "Estefania Reyes",    rating: 5, date: "πριν 2 χρόνια", text: "Ανεπιφύλακτα σας το συνιστώ. Είναι η καλύτερη ασφαλιστική εταιρεία που έχω συνεργαστεί ποτέ.", avatar: "ER" },
    { id: 4, name: "Maria Dizou",        rating: 5, date: "πριν 2 χρόνια", text: "Πολύ καλοί επαγγελματίες, πολύ ευγενικοί, πάντα διαθέσιμοι!", avatar: "MD" },
  ];

  return (
    <>
      <style>{`
        .reviews-wrap {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f9fafb;
          overflow: hidden;
        }
        .reviews-header {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 48px 20px;
          background: #f9fafb;
          border-bottom: 1px solid #ebebeb;
        }
        .reviews-body {
          flex: 1;
          display: flex;
          min-height: 0;
        }

        /* Left dark panel */
        .reviews-left {
          flex: 0 0 32%;
          background: #111827;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px 48px;
          position: relative;
          overflow: hidden;
        }
        .reviews-left-bg {
          position: absolute;
          bottom: -50px; right: -20px;
          font-size: 260px; font-weight: 900;
          color: rgba(255,255,255,0.03);
          line-height: 1; user-select: none;
          letter-spacing: -0.05em; pointer-events: none;
        }

        /* Right — 2×2 review tiles */
        .reviews-right {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          background: #f9fafb;
        }

        .review-tile {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 36px 40px;
          position: relative;
          transition: background-color 0.25s ease;
          overflow: hidden;
          cursor: default;
          background: white;
        }
        .review-tile:nth-child(1),
        .review-tile:nth-child(3) { border-right: 1px solid #ebebeb; }
        .review-tile:nth-child(1),
        .review-tile:nth-child(2) { border-bottom: 1px solid #ebebeb; }
        .review-tile:hover { background: #fafffe; }

        /* Left accent bar */
        .review-bar {
          position: absolute;
          left: 0; top: 15%; bottom: 15%;
          width: 0;
          background: #52a447;
          border-radius: 0 2px 2px 0;
          transition: width 0.3s ease;
        }
        .review-tile:hover .review-bar { width: 3px; }

        /* Quote mark */
        .review-quote {
          position: absolute;
          top: 16px; right: 24px;
          font-size: 80px;
          font-family: Georgia, serif;
          line-height: 1;
          color: rgba(82,164,71,0.07);
          user-select: none;
          transition: color 0.3s;
        }
        .review-tile:hover .review-quote { color: rgba(82,164,71,0.13); }

        /* Mobile */
        @media (max-width: 768px) {
          .reviews-wrap { height: auto; min-height: 100vh; overflow: visible; }
          .reviews-body { flex-direction: column; }
          .reviews-left { flex: none; padding: 44px 28px; }
          .reviews-right { grid-template-columns: 1fr; grid-template-rows: auto; }
          .review-tile:nth-child(1),
          .review-tile:nth-child(3) { border-right: none; }
          .review-tile { border-bottom: 1px solid #ebebeb; }
          .reviews-header { padding: 20px 24px 16px; flex-direction: column; align-items: flex-start; gap: 6px; }
        }
      `}</style>

      <div className="reviews-wrap">

        {/* Header bar */}
        <div className="reviews-header">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <div style={{ height: 1, width: 28, backgroundColor: "#52a447" }} />
              <span style={{ color: "#52a447", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>{language === "el" ? "Κριτικές" : "Reviews"}</span>
            </div>
            <h2 style={{ fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", margin: 0 }}>
              {safeText.subtitle}
            </h2>
          </div>
          {/* Google badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "white", border: "1px solid #f0f0f0", borderRadius: 999, padding: "8px 20px", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
            <img src="/logos/google.png" alt="Google" style={{ height: 16, objectFit: "contain" }} />
            <div style={{ display: "flex", gap: 2 }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={12} style={{ fill: "#fbbc04", color: "#fbbc04" }} />)}
            </div>
            <span style={{ fontWeight: 700, fontSize: 13, color: "#111827" }}>5.0</span>
            <span style={{ color: "#9ca3af", fontSize: 12 }}>· {safeText.googleRating}</span>
          </div>
        </div>

        <div className="reviews-body">

          {/* Left dark panel */}
          <div className="reviews-left">
            <span className="reviews-left-bg">"</span>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <div style={{ height: 1, width: 28, backgroundColor: "rgba(255,255,255,0.25)" }} />
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Google Reviews
              </span>
            </div>

            <p style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 300, color: "white", lineHeight: 1.7, marginBottom: 48, position: "relative", zIndex: 1 }}>
              {language === "el"
                ? "Αυτό που λένε οι πελάτες μας μιλά από μόνο του."
                : "What our clients say speaks for itself."}
            </p>

            {/* Rating display */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginBottom: 24 }}>
              <span style={{ fontSize: 72, fontWeight: 800, color: "white", lineHeight: 1, letterSpacing: "-0.04em" }}>5.0</span>
              <div style={{ paddingBottom: 8 }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} style={{ fill: "#fbbc04", color: "#fbbc04" }} />)}
                </div>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>
                  {language === "el" ? "Βαθμολογία Google" : "Google Rating"}
                </span>
              </div>
            </div>

            <div style={{ height: 1, width: "100%", backgroundColor: "rgba(255,255,255,0.08)", marginBottom: 24 }} />

            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
              {language === "el" ? `${reviews.length} κριτικές` : `${reviews.length} reviews`}
            </span>
          </div>

          {/* Right 2×2 review tiles */}
          <div className="reviews-right">
            {reviews.map((review, i) => (
              <div
                key={review.id}
                className="review-tile"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="review-bar" />
                <span className="review-quote">"</span>

                {/* Text */}
                <p style={{ fontSize: "clamp(13px, 1.1vw, 15px)", color: "#374151", lineHeight: 1.75, flex: 1, position: "relative", zIndex: 1, marginBottom: 24 }}>
                  {review.text}
                </p>

                {/* User row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: "50%",
                      backgroundColor: hovered === i ? "#52a447" : "#111827",
                      color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700, flexShrink: 0,
                      transition: "background-color 0.25s",
                    }}>
                      {review.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{review.name}</div>
                      <div style={{ fontSize: 11, color: "#9ca3af" }}>{review.date}</div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: 2 }}>
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={12} style={{ fill: "#fbbc04", color: "#fbbc04" }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}