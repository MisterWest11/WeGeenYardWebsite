import React from 'react';
import { Star } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'GreenScape transformed our neglected backyard into a beautiful space we can enjoy. Their team was professional, efficient, and the results exceeded our expectations!',
    rating: 5
  }, {
    name: 'Michael Thompson',
    role: 'Property Manager',
    content: "We've been using GreenScape for all our properties for over 3 years now. Their consistent quality and reliability have made yard maintenance one less thing to worry about.",
    rating: 5
  }, {
    name: 'Jennifer Davis',
    role: 'Homeowner',
    content: 'After a storm left our yard a mess, GreenScape came to the rescue. They cleared all the debris and restored our landscaping quickly. I highly recommend their services.',
    rating: 4
  }];
  return <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                {[...Array(5 - testimonial.rating)].map((_, i) => <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />)}
              </div>
              <p className="text-gray-600 italic mb-4">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Join our growing list of satisfied customers!
          </p>
          <a href="#contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors">
            Get Started Today
          </a>
        </div>
      </div>
    </section>;
}