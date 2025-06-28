
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ModelCarousel from './ModelCarousel';

const Hero = () => {
  const [ctaText, setCtaText] = useState("New Collection");
  const ctaTexts = ["New Collection", "OTTO", "SEXY ON THE COVER"];
  const [ctaIndex, setCtaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCtaIndex((prev) => (prev + 1) % ctaTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCtaText(ctaTexts[ctaIndex]);
  }, [ctaIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top Banner */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
            <span className="text-white text-sm font-medium">New spring collection 2025</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tight">
            Where style meets{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              innovative ways
            </span>{' '}
            of meeting new fashion
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Unveiling a fashion destination where trends blend seamlessly with your 
            individual style aspirations. Discover today!
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
              <span className="flex items-center space-x-3">
                <span className="transition-all duration-500">
                  {ctaText}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* 3D Model Carousel */}
        <div className="relative">
          <ModelCarousel />
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Hero;
