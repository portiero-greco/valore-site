import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/LanguageContext";
import { assets } from "../lib/assets";
import { motion } from "framer-motion";

/* =====================================================
   LOCAL FALLBACKS (NO INTERNET)
===================================================== */

const fallbackHero = "/hero/familyhero-valore.jpg";
const fallbackLogo = "/hero/logomain-valore.png";
const fallbackHeroLogo = "/hero/logo-val001.png";

/* =====================================================
   SAFE ASSET FALLBACKS
===================================================== */

const heroSrc =
  assets?.heroImage && assets.heroImage !== ""
    ? assets.heroImage
    : fallbackHero;

/* ✅ CHANGE HERE: use assets.heroLogo (not assets.logo) */
const logoSrc =
  assets?.heroLogo && assets.heroLogo !== ""
    ? assets.heroLogo
    : fallbackHeroLogo;

export function Hero() {
  const { t } = useLanguage();

  const safeHero = {
    subtitle:
      t?.hero?.subtitle ||
      "Your security is our value. For over 30 years, we've been protecting what matters most to you and your family with tailored insurance solutions.",
    ctaPricing: t?.hero?.ctaPricing || "Discover our offers",
    ctaContact: t?.hero?.ctaContact || "Contact us",
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="
        relative
        min-h-[70vh]
        md:h-[70vh]
        overflow-hidden
        mb-0
      "
    >
      {/* ================= HERO IMAGE ================= */}
      <img
        src={heroSrc}
        alt="Insurance Office"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = fallbackHero;
        }}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-gray-900/90
          to-green-900/70
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          pt-20
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            w-full
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              gap-6
              md:gap-12
            "
          >
            {/* ===== HERO LOGO (LEFT OF TEXT) ===== */}
            <motion.img
              src={logoSrc}
              alt="Hero Logo"
              className="
                h-[20vh]
                md:h-[40vh]
                w-auto
                object-contain
              "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = fallbackHeroLogo;
              }}
            />

            {/* ===== TEXT BLOCK ===== */}
            <motion.div
              className="
                flex-1
                text-center
                md:text-left
              "
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-lg md:text-xl text-gray-100 mb-6 md:mb-8">
                {safeHero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 w-full sm:w-auto"
                  onClick={() => scrollToSection("individual-solutions")}
                >
                  {safeHero.ctaPricing}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-black hover:bg-white/90 w-full sm:w-auto"
                  onClick={() => scrollToSection("contact")}
                >
                  {safeHero.ctaContact}
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm md:text-base">210 417 7760</span>
                </div>

                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm md:text-base">info@valore.com</span>
                </div>
              </div>
            </motion.div>
            {/* ===== END TEXT BLOCK ===== */}
          </div>
        </div>
      </div>
    </div>
  );
}
