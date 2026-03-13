import { useLanguage } from "../lib/LanguageContext";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function FAQIndividualsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6faf5_0%,#ffffff_22%,#f8faf8_100%)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#e7efe5] bg-white">
        {/* soft background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#52a447]/10 blur-3xl" />
          <div className="absolute right-[-80px] top-10 h-64 w-64 rounded-full bg-[#8ccf84]/10 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#52a447]/25 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* top row */}
          <div className="mb-8 flex items-start justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#52a447]/15 bg-[#52a447]/5 px-4 py-2 text-sm font-medium text-[#52a447] shadow-sm">
              <Sparkles size={15} />
              FAQ
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm font-semibold text-gray-600 shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#52a447]/40 hover:text-[#52a447] hover:shadow-[0_12px_28px_rgba(82,164,71,0.14)]"
            >
              <ArrowLeft size={16} />
              {t.nav.home}
            </Link>
          </div>

          {/* title block */}
          <div className="text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              <span className="bg-gradient-to-r from-[#2f7f2a] via-[#52a447] to-[#7cc46f] bg-clip-text text-transparent">
                {t.faqIndividuals.title}
              </span>
            </h1>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#52a447]/20 via-[#52a447] to-[#52a447]/20" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {t.faqIndividuals.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {t.faqIndividuals.questions.map((faq: any, index: number) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border border-white/80
                bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,252,248,0.96)_100%)]
                px-7 md:px-8
                py-1
                shadow-[0_10px_30px_rgba(16,24,40,0.05),0_2px_8px_rgba(16,24,40,0.04)]
                ring-1 ring-[#52a447]/6
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(16,24,40,0.08),0_10px_24px_rgba(82,164,71,0.10)]
                hover:ring-[#52a447]/16
                data-[state=open]:border-[#52a447]/20
                data-[state=open]:bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(243,250,242,0.98)_100%)]
                data-[state=open]:shadow-[0_24px_55px_rgba(16,24,40,0.09),0_12px_30px_rgba(82,164,71,0.14)]
                data-[state=open]:ring-[#52a447]/20
              "
            >
              <AccordionTrigger
                className="
                  py-6 text-left hover:no-underline
                  text-lg md:text-[1.2rem]
                  font-semibold leading-relaxed
                  text-gray-900
                  transition-all duration-300
                  group-hover:text-[#52a447]
                  data-[state=open]:text-[#52a447]
                "
              >
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>

              <AccordionContent className="pb-7 pt-1 text-[15.5px] leading-8 text-gray-600 md:text-[17px]">
                <div className="rounded-2xl border border-[#52a447]/10 bg-white/70 px-5 py-5 shadow-inner">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Footer />
    </div>
  );
}