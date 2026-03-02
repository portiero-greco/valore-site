import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useLanguage } from "../lib/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t.pricing.plans.basic.name,
      price: "€29",
      period: t.pricing.perMonth,
      description: t.pricing.plans.basic.description,
      features: t.pricing.plans.basic.features,
      popular: false
    },
    {
      name: t.pricing.plans.complete.name,
      price: "€59",
      period: t.pricing.perMonth,
      description: t.pricing.plans.complete.description,
      features: t.pricing.plans.complete.features,
      popular: true
    },
    {
      name: t.pricing.plans.premium.name,
      price: "€99",
      period: t.pricing.perMonth,
      description: t.pricing.plans.premium.description,
      features: t.pricing.plans.premium.features,
      popular: false
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-4">{t.pricing.title}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-6 md:p-8 ${
                plan.popular 
                  ? 'border-green-600 border-2 shadow-xl' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-green-600 text-white px-3 md:px-4 py-1 rounded-full text-sm md:text-base">
                    {t.pricing.mostPopular}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 text-sm md:text-base">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {t.pricing.requestQuote}
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-6 md:p-8 text-center">
          <h3 className="text-gray-900 mb-2">{t.pricing.custom.title}</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            {t.pricing.custom.subtitle}
          </p>
          <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto">
            {t.pricing.custom.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}