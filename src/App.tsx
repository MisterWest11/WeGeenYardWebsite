import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
//import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      
      <Pricing />
      <ContactSection />
      <Footer />
    </div>;
}