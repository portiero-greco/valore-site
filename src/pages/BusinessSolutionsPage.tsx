import { Building2, Shield, Truck, Banknote, Users, Laptop, CreditCard, FileText } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { Footer } from "../components/Footer";

export function BusinessSolutionsPage() {
  const { t } = useLanguage();

  const categories = [
    {
      id: "propertyInsurance",
      icon: Building2,
      title: t.businessSolutions.categories.propertyInsurance.title,
      description: t.businessSolutions.categories.propertyInsurance.description,
      items: t.businessSolutions.categories.propertyInsurance.risks
    },
    {
      id: "vehicleInsurance",
      icon: Truck,
      title: t.businessSolutions.categories.vehicleInsurance.title,
      description: t.businessSolutions.categories.vehicleInsurance.description
    },
    {
      id: "moneyInsurance",
      icon: Banknote,
      title: t.businessSolutions.categories.moneyInsurance.title,
      items: t.businessSolutions.categories.moneyInsurance.risks
    },
    {
      id: "personnelInsurance",
      icon: Users,
      title: t.businessSolutions.categories.personnelInsurance.title,
      subtitle: t.businessSolutions.categories.personnelInsurance.subtitle,
      description: t.businessSolutions.categories.personnelInsurance.description
    },
    {
      id: "civilLiability",
      icon: Shield,
      title: t.businessSolutions.categories.civilLiability.title,
      subcategories: [
        {
          title: t.businessSolutions.categories.civilLiability.general.title,
          description: t.businessSolutions.categories.civilLiability.general.description
        },
        {
          title: t.businessSolutions.categories.civilLiability.employer.title,
          description: t.businessSolutions.categories.civilLiability.employer.description
        },
        {
          title: t.businessSolutions.categories.civilLiability.professional.title,
          description: t.businessSolutions.categories.civilLiability.professional.description
        },
        {
          title: t.businessSolutions.categories.civilLiability.product.title,
          description: t.businessSolutions.categories.civilLiability.product.description
        },
        {
          title: t.businessSolutions.categories.civilLiability.pollution.title,
          description: t.businessSolutions.categories.civilLiability.pollution.description
        },
        {
          title: t.businessSolutions.categories.civilLiability.carrier.title,
          description: t.businessSolutions.categories.civilLiability.carrier.description
        },
        {
          title: t.businessSolutions.categories.civilLiability.directors.title,
          description: t.businessSolutions.categories.civilLiability.directors.description
        }
      ]
    },
    {
      id: "cyberRisks",
      icon: Laptop,
      title: t.businessSolutions.categories.cyberRisks.title,
      description: t.businessSolutions.categories.cyberRisks.description
    },
    {
      id: "creditInsurance",
      icon: CreditCard,
      title: t.businessSolutions.categories.creditInsurance.title,
      description: t.businessSolutions.categories.creditInsurance.description
    },
    {
      id: "guaranteeLetters",
      icon: FileText,
      title: t.businessSolutions.categories.guaranteeLetters.title,
      description: t.businessSolutions.categories.guaranteeLetters.description
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-white pt-32 pb-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight text-[#52a447]">
            {t.businessSolutions.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.businessSolutions.subtitle}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                >
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#52a447]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p className="text-sm text-gray-500 italic mb-3">
                          {category.subtitle}
                        </p>
                      )}
                      {category.description && (
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Items List */}
                  {category.items && category.items.length > 0 && (
                    <ul className="ml-[4.5rem] space-y-2">
                      {category.items.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[#52a447] mt-1 flex-shrink-0">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subcategories */}
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className="ml-[4.5rem] space-y-6 mt-6">
                      {category.subcategories.map((sub: any, index: number) => (
                        <div key={index} className="border-l-4 border-green-100 pl-6">
                          <h4 className="text-lg text-gray-900 mb-2">
                            {sub.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {sub.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
