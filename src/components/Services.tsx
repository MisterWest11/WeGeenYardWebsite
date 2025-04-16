import React from 'react';
import { Scissors, Trash2, PaintBucket, PaintRoller, TreePine, Flower } from 'lucide-react';
export function Services() {
  const services = [{
    title: 'Grass Cutting',
    description: 'Professional lawn mowing and mainteance to keep your grass healthy and beautiful',
    icon: <Scissors className="h-10 w-10 text-green-600" />
  }, {
    title: 'Weed Removal',
    description: 'Natural and effective weed control to protect your landscape',
    icon: <Trash2 className="h-10 w-10 text-green-600" />
  }, {
    title: 'Roof Cleaning & Painting',
    description: 'Professional roof cleaning service to maintain the appearance of your home',
    icon: <PaintBucket className="h-10 w-10 text-green-600" />
  }, {
    title: 'Painting',
    description: 'Expert painting service to enhance the appearance of your property',
    icon: <PaintRoller className="h-10 w-10 text-green-600" />
  }, {
    title: 'Flower Bed Maintenance',
    description: 'Careful maintenance and nurturing of your flower beds and gardens',
    icon: <Flower className="h-10 w-10 text-green-600" />
  }, {
    title: 'Hedge Trimming',
    description: 'Professional trimming and shaping of hedges and shrubs for a manicured look',
    icon: <TreePine className="h-10 w-10 text-green-600" />
  }];
  return <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive yard cleaning services to keep your outdoor
            spaces looking their best year-round.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors">
            Request a Service
          </a>
        </div>
      </div>
    </section>;
}