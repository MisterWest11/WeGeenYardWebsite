import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your yard? Get in touch for a free quote or to
            schedule a service.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          <div className="lg:w-1/2 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h3>
            <form action="https://formspree.io/f/movegwvl" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Select Services
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Grass Cutting',
                    'Weed Removal',
                    'Roof Cleaning & Painting',
                    'Painting',
                    'Flower Bed Maintenance',
                    'Hedge Trimming',
                  ].map((service, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        className="form-checkbox text-green-600"
                      />
                      <span className="ml-2 text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tell us about your yard cleaning needs"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Request a Quote
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">(+27) 66-124-3993</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">luzukodandala26@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">
                      14 Reginald Lucingo Pl, Mbuqe Ex. Mthatha
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Business Hours</p>
                    <p className="text-gray-600">Monday-Friday: 8am-6pm</p>
                    <p className="text-gray-600">Saturday: 8am-6pm</p>
                    <p className="text-gray-600">Sunday: 8am-6pm</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-green-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Emergency Cleanup?</h3>
              <p className="mb-4">
                We offer expedited service for storm damage and urgent yard
                issues.
              </p>
              <p className="font-bold">(+27) 66-124-3993</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
