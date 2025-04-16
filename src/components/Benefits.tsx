import React from 'react'
import { Leaf, Award, ThumbsUp, DollarSign, Target, Flag } from 'lucide-react'
export function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              Our vision is to create a more sustainable and beautiful
              environment by providing high-quality and eco-friendly yards to
              our customers.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Flag className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              Our mission is to offer professional and reliable services that
              prioritize the health of our customers and the environment. We are
              committed to using sustainable practices, such as organic
              fertilizers and natural pest control methods to maintain healthy
              and vibrant landscapes.
            </p>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of services that can be tailored to meet your
            specific needs and budget, ensuring that you get the best possible
            results for your yard.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Eco-Friendly Practices
            </h3>
            <p className="text-gray-600">
              Using sustainable methods and organic products for a healthier
              environment.
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
              Professional team dedicated to creating and maintaining beautiful
              landscapes.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <ThumbsUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              Committed to exceeding expectations and creating lasting outdoor
              beauty.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Tailored Solutions
            </h3>
            <p className="text-gray-600">
              Customized services to fit your specific needs and budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
