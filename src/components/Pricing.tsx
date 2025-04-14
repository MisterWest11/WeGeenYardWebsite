import React from 'react';
import { Check } from 'lucide-react';
type Plan = {
  name: string;
  description?: string;
  features: string[];
  popular?: boolean;
};

export function Pricing() {
  const plans: Plan[] = [
    {
      name: 'Grass Maintenance',
      features: ['Low: R50 - R150', 'Medium: R200 - R350', 'High: R400 - R550'],
    },
    {
      name: 'Roof Cleaning & Painting',
      features: [
        'Cleaning Only: R1 200 – R2 000',
        'Painting Only: R1 300 – R2 500',
        'Both: R2 500 – R4 500',
      ],
    },
    {
      name: 'Painting Services',
      features: [
        'Paving: R1 500 – R2 500',
        'Outside Walls: R2 000 – R3 000',
        'Inside incl. Ceiling: R2 500 – R3 500',
      ],
    },
    {
      name: 'Weed Control',
      features: ['Low: R200', 'Medium: R250', 'High: R300'],
    },
    {
      name: 'Weed Control on Lawn',
      features: ['Low: R150', 'Medium: R300', 'High: R600'],
    },
    {
      name: 'Hedge Trimming',
      features: ['Small: R30 per hedge/tree', 'Mid: R50', 'High: R70'],
    },
    {
      name: 'Flower Bed Preparation',
      features: [
        'Preparation Only: R250 | R350 | R450',
        'With Planting: R200+R250 | R300+R350 | R400+R450',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Transparent Service Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Affordable, customizable options based on your yard’s size and needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md p-6 bg-white`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
              {plan.description && (
                <p className="text-gray-600 mb-4">{plan.description}</p>
              )}
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center py-2 px-4 rounded-lg font-medium bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                Book This Service
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need something more specific? Contact us for a custom quote.
          </p>
        </div>
      </div>
    </section>
  );
}