
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModelCarousel = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const modelSets = [
    {
      id: 1,
      models: [
        { id: 1, name: "Casual Elegance", color: "bg-gradient-to-b from-orange-200 to-orange-400", position: "transform scale-90 -translate-x-4" },
        { id: 2, name: "Urban Street", color: "bg-gradient-to-b from-amber-200 to-amber-500", position: "transform scale-95 -translate-x-2" },
        { id: 3, name: "Contemporary", color: "bg-gradient-to-b from-gray-200 to-gray-400", position: "transform scale-105 z-10" },
        { id: 4, name: "Modern Formal", color: "bg-gradient-to-b from-stone-200 to-stone-400", position: "transform scale-95 translate-x-2" },
        { id: 5, name: "Avant-garde", color: "bg-gradient-to-b from-slate-200 to-slate-500", position: "transform scale-90 translate-x-4" }
      ]
    },
    {
      id: 2,
      models: [
        { id: 6, name: "Spring Fresh", color: "bg-gradient-to-b from-green-200 to-green-400", position: "transform scale-90 -translate-x-4" },
        { id: 7, name: "Summer Vibes", color: "bg-gradient-to-b from-blue-200 to-blue-400", position: "transform scale-95 -translate-x-2" },
        { id: 8, name: "Classic Style", color: "bg-gradient-to-b from-purple-200 to-purple-400", position: "transform scale-105 z-10" },
        { id: 9, name: "Night Out", color: "bg-gradient-to-b from-indigo-200 to-indigo-500", position: "transform scale-95 translate-x-2" },
        { id: 10, name: "Weekend Casual", color: "bg-gradient-to-b from-pink-200 to-pink-400", position: "transform scale-90 translate-x-4" }
      ]
    },
    {
      id: 3,
      models: [
        { id: 11, name: "Minimalist Chic", color: "bg-gradient-to-b from-cyan-200 to-cyan-400", position: "transform scale-90 -translate-x-4" },
        { id: 12, name: "Bold Statement", color: "bg-gradient-to-b from-yellow-200 to-yellow-400", position: "transform scale-95 -translate-x-2" },
        { id: 13, name: "Luxury Comfort", color: "bg-gradient-to-b from-red-200 to-red-400", position: "transform scale-105 z-10" },
        { id: 14, name: "Tech Wear", color: "bg-gradient-to-b from-teal-200 to-teal-400", position: "transform scale-95 translate-x-2" },
        { id: 15, name: "Retro Future", color: "bg-gradient-to-b from-violet-200 to-violet-400", position: "transform scale-90 translate-x-4" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % modelSets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % modelSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + modelSets.length) % modelSets.length);
  };

  return (
    <div className="relative w-full h-80 overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSet}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSet}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Model Display */}
      <div className="flex items-end justify-center h-full space-x-4 px-16">
        {modelSets[currentSet].models.map((model, index) => (
          <div
            key={model.id}
            className={`relative transition-all duration-1000 ease-in-out ${model.position} hover:scale-110`}
            style={{
              transitionDelay: `${index * 100}ms`
            }}
          >
            {/* Model Frame */}
            <div className="relative">
              <div className={`w-32 h-72 ${model.color} rounded-t-full rounded-b-3xl shadow-2xl overflow-hidden`}>
                {/* Simulated Model Figure */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                  {/* Head */}
                  <div className="w-8 h-8 bg-gray-800 rounded-full mb-2"></div>
                  
                  {/* Body */}
                  <div className="w-12 h-20 bg-gray-700 rounded-lg mb-2"></div>
                  
                  {/* Legs */}
                  <div className="flex space-x-1">
                    <div className="w-4 h-16 bg-gray-600 rounded-lg"></div>
                    <div className="w-4 h-16 bg-gray-600 rounded-lg"></div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-medium text-center px-2">
                    {model.name}
                  </span>
                </div>
              </div>
              
              {/* Shadow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/20 rounded-full blur-sm"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {modelSets.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSet(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSet ? 'bg-white w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelCarousel;
