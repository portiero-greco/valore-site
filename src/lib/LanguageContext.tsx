import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "./translations";

/* ================================
   TYPE SAFE TRANSLATIONS
================================ */

type TranslationType = (typeof translations)["en"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

/* ================================
   CONTEXT
================================ */

const LanguageContext = createContext<LanguageContextType | null>(null);

/* ================================
   PROVIDER
================================ */

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as TranslationType
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/* ================================
   HOOK
================================ */

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used within LanguageProvider"
    );
  }

  return context;
}
