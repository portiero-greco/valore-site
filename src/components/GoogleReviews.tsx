import { useLanguage } from "../lib/LanguageContext";
import { Star } from "lucide-react";
import { useState } from "react";

/* =====================================================
   TYPES
===================================================== */

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

/* =====================================================
   GOOGLE LOGO PLACEHOLDER (LOCALHOST SAFE)
   Replace later with Figma export or asset import
===================================================== */

const googleLogo =
  "/logos/google.png";

export function GoogleReviews() {
  const { t, language } = useLanguage();

  const [expandedReviews, setExpandedReviews] =
    useState<Set<number>>(new Set());

  /* =====================================================
     SAFE TRANSLATION FALLBACKS
  ===================================================== */

  const safeReviewsText = {
    googleRating:
      t?.reviews?.googleRating ||
      "Google Rating",

    subtitle:
      t?.reviews?.subtitle ||
      "What our clients say about us",

    readMore:
      t?.reviews?.readMore ||
      "Read more",

    showLess:
      t?.reviews?.showLess ||
      "Show less",
  };

  /* =====================================================
     REVIEWS DATA
  ===================================================== */

  const reviews: Review[] =
    language === "en"
      ? [
          {
            id: 1,
            name: "Sotiris Skaftouros",
            rating: 5,
            date: "4 months ago",
            text:
              "Exceptional experience from start to finish! Mr. Konstantopoulos is a true professional...",
            avatar: "SS",
          },
          {
            id: 2,
            name: "Paraskevi Trapela",
            rating: 5,
            date: "2 years ago",
            text:
              "After being involved in a traffic accident, I was compensated immediately...",
            avatar: "PT",
          },
          {
            id: 3,
            name: "Estefania Reyes",
            rating: 5,
            date: "2 years ago",
            text:
              "I unreservedly recommend it, it is the best insurance company...",
            avatar: "ER",
          },
          {
            id: 4,
            name: "Maria Dizou",
            rating: 5,
            date: "2 years ago",
            text:
              "Very good professionals, very polite, always available!",
            avatar: "MD",
          },
        ]
      : [
          {
            id: 1,
            name: "Σωτήρης Σκαφτούρος",
            rating: 5,
            date: "πριν 4 μήνες",
            text:
              "Εξαιρετική εμπειρία από την αρχή μέχρι το τέλος...",
            avatar: "ΣΣ",
          },
          {
            id: 2,
            name: "Παρασκευή Τραπελά",
            rating: 5,
            date: "πριν 2 χρόνια",
            text:
              "Μετά από εμπλοκή σε τροχαίο ατύχημα, αποζημιώθηκα άμεσα...",
            avatar: "ΠΤ",
          },
          {
            id: 3,
            name: "Estefania Reyes",
            rating: 5,
            date: "πριν 2 χρόνια",
            text:
              "Ανεπιφύλακτα σας το συνιστώ...",
            avatar: "ER",
          },
          {
            id: 4,
            name: "Maria Dizou",
            rating: 5,
            date: "πριν 2 χρόνια",
            text:
              "Πολύ καλοί επαγγελματίες...",
            avatar: "MD",
          },
        ];

  /* =====================================================
     EXPAND / COLLAPSE
  ===================================================== */

  const toggleExpanded = (id: number) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }

      return newSet;
    });
  };

  /* =====================================================
     TEXT TRUNCATION
  ===================================================== */

  const truncateText = (
    text: string,
    maxLength: number
  ) => {
    if (text.length <= maxLength) return text;

    return text.slice(0, maxLength) + "...";
  };

  /* =====================================================
     COMPONENT
  ===================================================== */

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-12">

          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src={googleLogo}
              alt="Google"
              className="h-6 object-contain"
            />
            <span className="text-gray-600">
              {safeReviewsText.googleRating}
            </span>
          </div>

          <div className="flex items-center justify-center gap-1 mb-2">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="
                  w-6 h-6
                  fill-[#fbbc04]
                  text-[#fbbc04]
                "
              />
            ))}

            <span className="ml-2 text-xl">
              5.0
            </span>
          </div>

          <p className="text-gray-600">
            {safeReviewsText.subtitle}
          </p>
        </div>

        {/* ================= GRID ================= */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {reviews.map((review) => {
            const isExpanded =
              expandedReviews.has(review.id);

            const shouldTruncate =
              review.text.length > 150;

            return (
              <div
                key={review.id}
                className="
                  bg-white
                  rounded-lg
                  p-6
                  shadow-sm
                  border
                  border-gray-200
                "
              >

                {/* User */}

                <div className="flex items-start gap-3 mb-4">

                  <div className="
                    w-10 h-10
                    rounded-full
                    bg-[#52a447]
                    text-white
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  ">
                    {review.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="truncate">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {review.date}
                    </div>
                  </div>
                </div>

                {/* Stars */}

                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "fill-[#fbbc04] text-[#fbbc04]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Text */}

                <p className="text-gray-700 text-sm leading-relaxed">
                  {isExpanded || !shouldTruncate
                    ? review.text
                    : truncateText(
                        review.text,
                        150
                      )}
                </p>

                {/* Expand */}

                {shouldTruncate && (
                  <button
                    onClick={() =>
                      toggleExpanded(review.id)
                    }
                    className="
                      text-[#52a447]
                      text-sm
                      mt-2
                      hover:underline
                    "
                  >
                    {isExpanded
                      ? safeReviewsText.showLess
                      : safeReviewsText.readMore}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
