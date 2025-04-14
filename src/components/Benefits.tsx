import React from 'react';
import { Clock, Award, ThumbsUp, DollarSign } from 'lucide-react';
export function Benefits() {
  return <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in delivering exceptional yard cleaning services with
            attention to detail and customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Reliable & Punctual
            </h3>
            <p className="text-gray-600">
              We respect your time and always arrive as scheduled for service
              appointments.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Experienced Team
            </h3>
            <p className="text-gray-600">
              Our skilled professionals have years of experience in yard
              maintenance and cleaning.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <ThumbsUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Satisfaction Guaranteed
            </h3>
            <p className="text-gray-600">
              We're not happy until you're completely satisfied with our
              service.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Competitive Pricing
            </h3>
            <p className="text-gray-600">
              Quality service at fair prices with transparent, no-surprise
              billing.
            </p>
          </div>
        </div>
        <div className="mt-12 bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Before & After Transformation
            </h3>
            <p className="text-gray-600 mb-4">
              See the difference our professional yard cleaning services can
              make to your outdoor space.
            </p>
            <a href="#contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg shadow transition-colors">
              Schedule a Cleanup
            </a>
          </div>
          <div className="md:w-1/3 flex space-x-4">
            <img src="https://images.unsplash.com/photo-1558368204-be477933b3eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Before cleanup" className="w-1/2 h-auto object-cover rounded-lg shadow" />
            <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="After cleanup" className="w-1/2 h-auto object-cover rounded-lg shadow" />
          </div>
        </div>
      </div>
    </section>;
}