import { useLanguage } from "../lib/LanguageContext";
import { Footer } from "../components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function FAQIndividualsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-white pt-32 pb-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight text-[#52a447]">
            {t.faqIndividuals.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.faqIndividuals.subtitle}
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-8">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {t.faqIndividuals.questions.map((faq: any, index: number) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg border-0 px-8 py-2 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:text-[#52a447] transition-colors py-6 text-lg md:text-xl hover:no-underline">
                <span className="pr-4 leading-relaxed">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base md:text-lg whitespace-pre-line leading-relaxed pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Footer />
    </div>
  );
}