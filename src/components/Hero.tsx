import React from 'react';
export function Hero() {
  return <section className="bg-gradient-to-r from-green-800 to-green-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Yard Cleaning Services
          </h1>
          <p className="text-lg mb-6">
            Transform your outdoor space with our expert yard cleaning services.
            We handle everything from leaf removal to complete yard makeovers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg shadow transition-colors">
              Get a Free Quote
            </a>
            <a href="#services" className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-20 py-3 px-6 rounded-lg transition-colors">
              Our Services
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Well-maintained yard with professional landscaping" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </section>;
}