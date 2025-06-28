
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ModelCarousel from './ModelCarousel';

const Hero = () => {
  const [currentState, setCurrentState] = useState(0);
  
  const collectionStates = [
    {
      id: 1,
      name: "New Spring Collection",
      backgroundColor: "#4A6741", // Green tone from reference
      bannerText: "New spring collection 2025",
      ctaText: "New Collection"
    },
    {
      id: 2,
      name: "OTTO Collection", 
      backgroundColor: "#4A5A6A", // Blue-grey tone from reference
      bannerText: "New spring collection 2025",
      ctaText: "OTTO"
    },
    {
      id: 3,
      name: "Cover Story Collection",
      backgroundColor: "#8B6F47", // Brown tone from reference
      bannerText: "New spring collection 2025",
      ctaText: "SEXY ON THE COVER"
    }
  ];

  const currentCollection = collectionStates[currentState];

  const handleCardClick = (index) => {
    setCurrentState(index);
  };

  return (
    <div 
      className="min-h-screen pt-20 relative overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
      style={{ 
        backgroundColor: currentCollection.backgroundColor,
        backgroundImage: `radial-gradient(circle at 30% 70%, ${currentCollection.backgroundColor}dd, ${currentCollection.backgroundColor})`
      }}
    >
      {/* Enhanced Background Pattern with Smooth Transitions */}
      <div className="absolute inset-0 opacity-5 transition-opacity duration-[1200ms]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
      </div>

      {/* Animated Background Overlay */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          background: `linear-gradient(135deg, ${currentCollection.backgroundColor}40, transparent 60%, ${currentCollection.backgroundColor}20)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Top Banner with Enhanced Animation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 transition-all duration-[800ms] hover:bg-gray-700/70 hover:scale-105">
            <span className="text-white text-sm font-medium transition-all duration-[600ms]">
              {currentCollection.bannerText}
            </span>
          </div>
        </div>

        {/* Main Content with Staggered Animations */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tight transition-all duration-[800ms] ease-out">
            Where style meets{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-all duration-[600ms]">
              innovative ways
            </span>{' '}
            of meeting new fashion
          </h1>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto transition-all duration-[600ms] delay-200">
            Unveiling a fashion destination where trends blend seamlessly with your 
            individual style aspirations. Discover today!
          </p>

          {/* Enhanced CTA Button */}
          <div className="flex justify-center mb-12">
            <button className="
              group relative 
              bg-gray-800/80 hover:bg-gray-700/80 
              border border-gray-600 hover:border-gray-500 
              text-white px-8 py-4 rounded-full font-semibold text-lg 
              transition-all duration-[500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              hover:scale-105 hover:shadow-2xl backdrop-blur-sm
              transform-gpu will-change-transform
            ">
              <span className="flex items-center space-x-3">
                <span className="transition-all duration-[400ms] group-hover:tracking-wide">
                  {currentCollection.ctaText}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-[400ms] ease-out" />
              </span>
              
              {/* Enhanced Button Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-[500ms] ease-out"></div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-active:scale-100 transition-transform duration-200 ease-out"></div>
            </button>
          </div>
        </div>

        {/* Product Carousel - Enhanced Integration */}
        <div className="relative">
          <ModelCarousel 
            currentState={currentState}
            onCardClick={handleCardClick}
          />
        </div>
      </div>

      {/* Enhanced Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent transition-all duration-[1200ms]"></div>
      
      {/* Ambient Light Effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 opacity-30 blur-3xl transition-all duration-[1200ms]"
        style={{
          background: `radial-gradient(ellipse, ${currentCollection.backgroundColor}80, transparent)`
        }}
      />
    </div>
  );
};

export default Hero;
