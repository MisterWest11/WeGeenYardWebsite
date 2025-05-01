import foreground_picture from './images/foreground_picture.jpg';
export function Hero() {
  return <section className="bg-gradient-to-r from-green-800 to-green-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Creating Beautiful & Sustainable Outdoor Spaces
          </h1>
          <p className="text-lg mb-6">
            We focus on the beauty of your outdoor space using eco-friendly practices.
            Making your house or business welcoming to visitors while protecting our environment.
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
          <img src={foreground_picture} alt="Well-maintained yard with professional landscaping" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </section>;
}