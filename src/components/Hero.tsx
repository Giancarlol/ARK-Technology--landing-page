import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight hero-text-shadow">
            Innovate with<br />
            <span className="text-gradient">ARK TECHNOLOGY</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">We specialize in developing cutting-edge applications that deliver exceptional results for your business.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="inline-flex items-center bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg hover:shadow-xl text-lg">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#services" className="inline-flex items-center bg-transparent text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300 shadow-lg hover:shadow-xl border border-white text-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;