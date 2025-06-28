
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ModelCarousel from './ModelCarousel';

const Hero = () => {
  const [currentState, setCurrentState] = useState(0);
  
  const collectionStates = [
    {
      id: 1,
      name: "New Spring Collection",
      backgroundColor: "#2C3E2D", // Deep Forest Green - premium and sophisticated
      bannerText: "New spring collection 2025",
      ctaText: "New Collection"
    },
    {
      id: 2,
      name: "OTTO Collection", 
      backgroundColor: "#1A2332", // Deep Midnight Blue - elegant and modern
      bannerText: "New spring collection 2025",
      ctaText: "OTTO"
    },
    {
      id: 3,
      name: "Cover Story Collection",
      backgroundColor: "#3D2B1F", // Rich Espresso Brown - warm and luxurious
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
        backgroundImage: `
          radial-gradient(circle at 20% 80%, ${currentCollection.backgroundColor}cc, transparent 50%),
          radial-gradient(circle at 80% 20%, ${currentCollection.backgroundColor}aa, transparent 50%),
          linear-gradient(135deg, ${currentCollection.backgroundColor}dd 0%, ${currentCollection.backgroundColor} 50%, ${currentCollection.backgroundColor}bb 100%)
        `
      }}
    >
      {/* Enhanced Premium Background Pattern */}
      <div className="absolute inset-0 opacity-8 transition-opacity duration-[1200ms]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.03)_75%)] bg-[length:40px_40px]"></div>
      </div>

      {/* Sophisticated Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          background: `
            linear-gradient(135deg, ${currentCollection.backgroundColor}60 0%, transparent 40%, ${currentCollection.backgroundColor}40 100%),
            radial-gradient(ellipse at top, ${currentCollection.backgroundColor}30, transparent 70%)
          `
        }}
      />

      {/* Premium Ambient Lighting Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-[1200ms]"
          style={{ backgroundColor: `${currentCollection.backgroundColor}80` }}
        />
        <div 
          className="absolute bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-15 transition-all duration-[1200ms]"
          style={{ backgroundColor: `${currentCollection.backgroundColor}60` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Premium Top Banner */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 transition-all duration-[800ms] hover:bg-black/50 hover:scale-105 shadow-2xl">
            <span className="text-white text-sm font-medium tracking-wide transition-all duration-[600ms]">
              {currentCollection.bannerText}
            </span>
          </div>
        </div>

        {/* Enhanced Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tight transition-all duration-[800ms] ease-out drop-shadow-2xl">
            Where style meets{' '}
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent transition-all duration-[600ms]">
              innovative ways
            </span>{' '}
            of meeting new fashion
          </h1>
          
          <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto transition-all duration-[600ms] delay-200 drop-shadow-lg">
            Unveiling a fashion destination where trends blend seamlessly with your 
            individual style aspirations. Discover today!
          </p>

          {/* Premium CTA Button */}
          <div className="flex justify-center mb-12">
            <button className="
              group relative 
              bg-white/10 hover:bg-white/20 
              border border-white/30 hover:border-white/50 
              text-white px-10 py-5 rounded-full font-semibold text-lg 
              transition-all duration-[500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              hover:scale-105 hover:shadow-2xl backdrop-blur-md
              transform-gpu will-change-transform
              shadow-xl hover:shadow-white/20
            ">
              <span className="flex items-center space-x-3">
                <span className="transition-all duration-[400ms] group-hover:tracking-wider">
                  {currentCollection.ctaText}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-[400ms] ease-out" />
              </span>
              
              {/* Enhanced Premium Button Effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-[500ms] ease-out"></div>
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 ease-out"></div>
            </button>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <ModelCarousel 
            currentState={currentState}
            onCardClick={handleCardClick}
          />
        </div>
      </div>

      {/* Premium Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 via-black/20 to-transparent transition-all duration-[1200ms]"></div>
      
      {/* Enhanced Ambient Light Effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 opacity-40 blur-3xl transition-all duration-[1200ms]"
        style={{
          background: `radial-gradient(ellipse, ${currentCollection.backgroundColor}90, transparent 70%)`
        }}
      />
    </div>
  );
};

export default Hero;
