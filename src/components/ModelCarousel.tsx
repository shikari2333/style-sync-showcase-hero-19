
import React from 'react';

interface ModelCarouselProps {
  currentState: number;
  onCardClick: (index: number) => void;
}

const ModelCarousel: React.FC<ModelCarouselProps> = ({ currentState, onCardClick }) => {
  const collectionImages = [
    {
      // New Spring Collection (Green theme)
      id: 1,
      models: [
        { 
          id: 1, 
          name: "Casual Elegance", 
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-orange-200"
        },
        { 
          id: 2, 
          name: "Urban Comfort", 
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-amber-200"
        },
        { 
          id: 3, 
          name: "Street Style", 
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-gray-100"
        },
        { 
          id: 4, 
          name: "Modern Formal", 
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-stone-200"
        },
        { 
          id: 5, 
          name: "Edgy Leather", 
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-slate-200"
        }
      ]
    },
    {
      // OTTO Collection (Blue theme)
      id: 2,
      models: [
        { 
          id: 6, 
          name: "Minimalist Chic", 
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-purple-200"
        },
        { 
          id: 7, 
          name: "Smart Casual", 
          image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-indigo-200"
        },
        { 
          id: 8, 
          name: "Contemporary", 
          image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-violet-100"
        },
        { 
          id: 9, 
          name: "Urban Edge", 
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-blue-200"
        },
        { 
          id: 10, 
          name: "Refined Casual", 
          image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-cyan-200"
        }
      ]
    },
    {
      // Cover Story Collection (Brown theme)
      id: 3,
      models: [
        { 
          id: 11, 
          name: "Bold Statement", 
          image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-red-200"
        },
        { 
          id: 12, 
          name: "Sleek Formal", 
          image: "https://images.unsplash.com/photo-1541271696563-3be2bb6c0d9e?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-pink-200"
        },
        { 
          id: 13, 
          name: "Cover Ready", 
          image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-rose-100"
        },
        { 
          id: 14, 
          name: "Night Out", 
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-emerald-200"
        },
        { 
          id: 15, 
          name: "Avant-garde", 
          image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-teal-200"
        }
      ]
    }
  ];

  const currentCollection = collectionImages[currentState];

  return (
    <div className="relative w-full h-96 overflow-visible">
      {/* Model Display */}
      <div className="flex items-end justify-center h-full space-x-6 px-8">
        {currentCollection.models.map((model, index) => {
          const isCenter = index === 2;
          const cardIndex = Math.floor(currentState * 5 / collectionImages.length) + index;
          
          return (
            <div
              key={`${currentCollection.id}-${model.id}`}
              className={`relative transition-all duration-700 ease-in-out cursor-pointer group ${
                index === 0 ? 'transform scale-75 -translate-y-4' :
                index === 1 ? 'transform scale-85 -translate-y-2' :
                index === 2 ? 'transform scale-110 translate-y-2 z-10' :
                index === 3 ? 'transform scale-85 -translate-y-2' :
                'transform scale-75 -translate-y-4'
              } hover:scale-110 hover:translate-y-2`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => onCardClick(index % collectionImages.length)}
            >
              {/* Model Frame with Exact Shape from Reference */}
              <div className="relative">
                <div 
                  className={`w-32 h-80 ${model.bgColor} shadow-2xl overflow-hidden transition-all duration-700 group-hover:shadow-3xl`}
                  style={{
                    borderRadius: '50% 50% 25px 25px',
                    clipPath: 'ellipse(50% 60% at 50% 40%)'
                  }}
                >
                  {/* Actual Model Image */}
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="text-white text-xs font-medium text-center px-2">
                      <div className="font-semibold">{model.name}</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Shadow for Center Card */}
                {isCenter && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/30 rounded-full blur-lg transition-all duration-700"></div>
                )}
                
                {/* Regular Shadow */}
                {!isCenter && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/20 rounded-full blur-sm transition-all duration-700"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Collection Indicator Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
        {collectionImages.map((_, index) => (
          <button
            key={index}
            onClick={() => onCardClick(index)}
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
