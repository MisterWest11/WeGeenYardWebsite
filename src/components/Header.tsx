import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-700">We Green Yard Services</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-600 hover:text-green-700">
            Services
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-green-700">
            Why Us
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-green-700">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-green-700">
            Pricing
          </a>
          <a href="#contact" className="text-gray-600 hover:text-green-700">
            Contact
          </a>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#services" className="text-gray-600 hover:text-green-700 py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-green-700 py-2" onClick={() => setIsMenuOpen(false)}>
              Why Us
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-700 py-2" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-green-700 py-2" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-green-700 py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
}