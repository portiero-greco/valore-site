import { useLanguage } from "../lib/LanguageContext";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../lib/assets";

export function HomeInsurancePage() {
  const { t } = useLanguage();
  const category = t.individualSolutions.categories.homeInsurance;
  const navigate = useNavigate();

  const handleBackToSolutions = () => {
    navigate("/#individual-solutions");
    setTimeout(() => {
      const element = document.getElementById("individual-solutions");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50">
      {/* Header with navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToSolutions}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-green-50 transition-all hover:gap-3 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t.nav.backToSolutions}</span>
            </button>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all hover:shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span>{t.nav.home}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section with decorative element */}
        <div className="mb-12 relative">
          <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-green-600 to-green-400 rounded-full"></div>
          <h1 className="text-green-600 mb-4 text-5xl font-bold">
            {category.title}
          </h1>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl">
            {category.description}
          </p>
        </div>

        {/* Hero Image with overlay effect */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>

          <img
            src={assets.homeInsurance}
            alt={category.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content Card */}
        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-100 mb-12 hover:shadow-2xl transition-all duration-300">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {category.content.split("\n").map((line, index) => {
              const trimmedLine = line.trim();
              if (!trimmedLine) return null;

              if (trimmedLine.startsWith("•")) {
                return (
                  <div key={index} className="flex gap-4 py-2 group/item">
                    <span className="text-green-600 mt-1 transform group-hover/item:scale-125 transition-transform">
                      •
                    </span>
                    <span className="flex-1">
                      {trimmedLine.substring(1).trim()}
                    </span>
                  </div>
                );
              }

              return (
                <p key={index} className="text-lg leading-relaxed">
                  {trimmedLine}
                </p>
              );
            })}
          </div>

          {/* Back to Solutions Button */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <button
              onClick={handleBackToSolutions}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all hover:gap-3 hover:shadow-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t.nav.backToSolutions}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
