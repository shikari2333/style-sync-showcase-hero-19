
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
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-90 -translate-x-4",
          bgColor: "bg-orange-200"
        },
        { 
          id: 2, 
          name: "Urban Comfort", 
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-95 -translate-x-2",
          bgColor: "bg-amber-200"
        },
        { 
          id: 3, 
          name: "Street Style", 
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-105 z-10",
          bgColor: "bg-gray-200"
        },
        { 
          id: 4, 
          name: "Modern Formal", 
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-95 translate-x-2",
          bgColor: "bg-stone-200"
        },
        { 
          id: 5, 
          name: "Edgy Leather", 
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-90 translate-x-4",
          bgColor: "bg-slate-200"
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
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-90 -translate-x-4",
          bgColor: "bg-purple-200"
        },
        { 
          id: 7, 
          name: "Smart Casual", 
          image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-95 -translate-x-2",
          bgColor: "bg-indigo-200"
        },
        { 
          id: 8, 
          name: "Contemporary", 
          image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-105 z-10",
          bgColor: "bg-violet-200"
        },
        { 
          id: 9, 
          name: "Urban Edge", 
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-95 translate-x-2",
          bgColor: "bg-blue-200"
        },
        { 
          id: 10, 
          name: "Refined Casual", 
          image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-90 translate-x-4",
          bgColor: "bg-cyan-200"
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
          image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-90 -translate-x-4",
          bgColor: "bg-red-200"
        },
        { 
          id: 12, 
          name: "Sleek Formal", 
          image: "https://images.unsplash.com/photo-1541271696563-3be2bb6c0d9e?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-95 -translate-x-2",
          bgColor: "bg-pink-200"
        },
        { 
          id: 13, 
          name: "Cover Ready", 
          image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-105 z-10",
          bgColor: "bg-rose-200"
        },
        { 
          id: 14, 
          name: "Night Out", 
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-95 translate-x-2",
          bgColor: "bg-emerald-200"
        },
        { 
          id: 15, 
          name: "Avant-garde", 
          image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop&crop=face",
          position: "transform scale-90 translate-x-4",
          bgColor: "bg-teal-200"
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
                className={`w-32 h-72 ${model.bgColor} shadow-2xl overflow-hidden transition-all duration-1000`}
                style={{
                  borderTopLeftRadius: '50%',
                  borderTopRightRadius: '50%',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px'
                }}
              >
                {/* Actual Model Image */}
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-xs font-medium text-center px-2">
                    <div className="font-semibold mb-1">{model.name}</div>
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
