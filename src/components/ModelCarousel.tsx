
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ModelCarouselProps {
  currentState: number;
  onNext: () => void;
  onPrev: () => void;
}

const ModelCarousel: React.FC<ModelCarouselProps> = ({ currentState, onNext, onPrev }) => {
  const collectionImages = [
    {
      // New Spring Collection
      id: 1,
      models: [
        { 
          id: 1, 
          name: "Casual Elegance", 
          color: "bg-gradient-to-b from-orange-200 to-orange-400", 
          position: "transform scale-90 -translate-x-4",
          description: "White t-shirt with dark brown V-neck sweater"
        },
        { 
          id: 2, 
          name: "Urban Comfort", 
          color: "bg-gradient-to-b from-amber-200 to-amber-500", 
          position: "transform scale-95 -translate-x-2",
          description: "Dark brown oversized shirt and trousers"
        },
        { 
          id: 3, 
          name: "Street Style", 
          color: "bg-gradient-to-b from-gray-200 to-gray-400", 
          position: "transform scale-105 z-10",
          description: "Grey patterned sweater with light blue jeans"
        },
        { 
          id: 4, 
          name: "Modern Formal", 
          color: "bg-gradient-to-b from-stone-200 to-stone-400", 
          position: "transform scale-95 translate-x-2",
          description: "Dark charcoal oversized suit jacket"
        },
        { 
          id: 5, 
          name: "Edgy Leather", 
          color: "bg-gradient-to-b from-slate-200 to-slate-500", 
          position: "transform scale-90 translate-x-4",
          description: "Black leather jacket with high collar"
        }
      ]
    },
    {
      // OTTO Collection
      id: 2,
      models: [
        { 
          id: 6, 
          name: "Minimalist Chic", 
          color: "bg-gradient-to-b from-purple-200 to-purple-400", 
          position: "transform scale-90 -translate-x-4",
          description: "Clean white shirt with tailored trousers"
        },
        { 
          id: 7, 
          name: "Smart Casual", 
          color: "bg-gradient-to-b from-indigo-200 to-indigo-400", 
          position: "transform scale-95 -translate-x-2",
          description: "Navy blazer with light knit sweater"
        },
        { 
          id: 8, 
          name: "Contemporary", 
          color: "bg-gradient-to-b from-violet-200 to-violet-400", 
          position: "transform scale-105 z-10",
          description: "Structured coat with slim-fit jeans"
        },
        { 
          id: 9, 
          name: "Urban Edge", 
          color: "bg-gradient-to-b from-blue-200 to-blue-400", 
          position: "transform scale-95 translate-x-2",
          description: "Textured hoodie with cargo pants"
        },
        { 
          id: 10, 
          name: "Refined Casual", 
          color: "bg-gradient-to-b from-cyan-200 to-cyan-400", 
          position: "transform scale-90 translate-x-4",
          description: "Button-down shirt with chino pants"
        }
      ]
    },
    {
      // Cover Story Collection
      id: 3,
      models: [
        { 
          id: 11, 
          name: "Bold Statement", 
          color: "bg-gradient-to-b from-red-200 to-red-400", 
          position: "transform scale-90 -translate-x-4",
          description: "Dramatic black evening jacket"
        },
        { 
          id: 12, 
          name: "Sleek Formal", 
          color: "bg-gradient-to-b from-pink-200 to-pink-400", 
          position: "transform scale-95 -translate-x-2",
          description: "Fitted blazer with statement accessories"
        },
        { 
          id: 13, 
          name: "Cover Ready", 
          color: "bg-gradient-to-b from-rose-200 to-rose-400", 
          position: "transform scale-105 z-10",
          description: "Luxurious velvet suit with bold styling"
        },
        { 
          id: 14, 
          name: "Night Out", 
          color: "bg-gradient-to-b from-emerald-200 to-emerald-400", 
          position: "transform scale-95 translate-x-2",
          description: "Edgy leather ensemble with metal details"
        },
        { 
          id: 15, 
          name: "Avant-garde", 
          color: "bg-gradient-to-b from-teal-200 to-teal-400", 
          position: "transform scale-90 translate-x-4",
          description: "Experimental silhouette with bold patterns"
        }
      ]
    }
  ];

  const currentCollection = collectionImages[currentState];

  return (
    <div className="relative w-full h-80 overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Model Display */}
      <div className="flex items-end justify-center h-full space-x-4 px-16">
        {currentCollection.models.map((model, index) => (
          <div
            key={`${currentCollection.id}-${model.id}`}
            className={`relative transition-all duration-1000 ease-in-out ${model.position} hover:scale-110`}
            style={{
              transitionDelay: `${index * 100}ms`
            }}
          >
            {/* Model Frame with Unique Border Radius */}
            <div className="relative">
              <div 
                className={`w-32 h-72 ${model.color} shadow-2xl overflow-hidden transition-all duration-1000`}
                style={{
                  borderTopLeftRadius: '50%',
                  borderTopRightRadius: '50%',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px'
                }}
              >
                {/* Simulated Model Figure */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                  {/* Head */}
                  <div className="w-8 h-8 bg-gray-800 rounded-full mb-2 transition-all duration-500"></div>
                  
                  {/* Body */}
                  <div className="w-12 h-20 bg-gray-700 rounded-lg mb-2 transition-all duration-500"></div>
                  
                  {/* Legs */}
                  <div className="flex space-x-1">
                    <div className="w-4 h-16 bg-gray-600 rounded-lg transition-all duration-500"></div>
                    <div className="w-4 h-16 bg-gray-600 rounded-lg transition-all duration-500"></div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-xs font-medium text-center px-2">
                    <div className="font-semibold mb-1">{model.name}</div>
                    <div className="text-[10px] opacity-90">{model.description}</div>
                  </div>
                </div>
              </div>
              
              {/* Shadow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/20 rounded-full blur-sm transition-all duration-1000"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Collection Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {collectionImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index > currentState) {
                for (let i = 0; i < index - currentState; i++) {
                  setTimeout(() => onNext(), i * 100);
                }
              } else if (index < currentState) {
                for (let i = 0; i < currentState - index; i++) {
                  setTimeout(() => onPrev(), i * 100);
                }
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentState ? 'bg-white w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelCarousel;
