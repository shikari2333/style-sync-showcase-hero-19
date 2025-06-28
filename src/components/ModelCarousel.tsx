
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

  const getCardScale = (index: number) => {
    switch (index) {
      case 0: return 'scale-75 opacity-60';
      case 1: return 'scale-90 opacity-80';
      case 2: return 'scale-110 opacity-100 z-20';
      case 3: return 'scale-90 opacity-80';
      case 4: return 'scale-75 opacity-60';
      default: return 'scale-75 opacity-60';
    }
  };

  const getCardTransform = (index: number) => {
    switch (index) {
      case 0: return '-translate-y-8 -translate-x-4';
      case 1: return '-translate-y-4 -translate-x-2';
      case 2: return 'translate-y-4';
      case 3: return '-translate-y-4 translate-x-2';
      case 4: return '-translate-y-8 translate-x-4';
      default: return '-translate-y-8';
    }
  };

  return (
    <div className="relative w-full h-96 overflow-visible perspective-1000">
      {/* Enhanced Model Display with Smooth Transitions */}
      <div className="flex items-end justify-center h-full space-x-8 px-8">
        {currentCollection.models.map((model, index) => {
          const isCenter = index === 2;
          
          return (
            <div
              key={`${currentCollection.id}-${model.id}`}
              className={`
                relative cursor-pointer group transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                ${getCardScale(index)} ${getCardTransform(index)}
                hover:scale-[1.15] hover:translate-y-6 hover:z-30
                transform-gpu will-change-transform
              `}
              style={{
                transitionDelay: `${index * 120}ms`,
                filter: isCenter ? 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' : 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))'
              }}
              onClick={() => onCardClick(index % collectionImages.length)}
            >
              {/* Enhanced Model Frame */}
              <div className="relative">
                <div 
                  className={`
                    w-32 h-80 ${model.bgColor} overflow-hidden
                    transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    group-hover:shadow-[0_35px_70px_rgba(0,0,0,0.4)]
                    transform-gpu will-change-transform
                  `}
                  style={{
                    borderRadius: '50% 50% 25px 25px',
                    clipPath: 'ellipse(50% 60% at 50% 40%)',
                    boxShadow: isCenter 
                      ? '0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)' 
                      : '0 15px 30px rgba(0,0,0,0.15)'
                  }}
                >
                  {/* Model Image with Enhanced Transitions */}
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="
                      w-full h-full object-cover object-top 
                      transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                      group-hover:scale-110 group-hover:brightness-110
                      transform-gpu will-change-transform
                    "
                    loading="lazy"
                  />
                  
                  {/* Enhanced Hover Overlay with Gradient */}
                  <div className="
                    absolute inset-0 
                    bg-gradient-to-t from-black/40 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-[400ms] ease-out
                    flex items-end justify-center pb-6
                  ">
                    <div className="
                      text-white text-sm font-semibold text-center px-3
                      transform translate-y-4 group-hover:translate-y-0
                      transition-transform duration-[400ms] ease-out delay-100
                    ">
                      <div className="font-bold tracking-wide drop-shadow-lg">
                        {model.name}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Border Glow for Center Card */}
                  {isCenter && (
                    <div className="
                      absolute inset-0 rounded-[inherit]
                      bg-gradient-to-r from-white/10 via-white/5 to-white/10
                      opacity-60 pointer-events-none
                      transition-opacity duration-[800ms]
                    " />
                  )}
                </div>
                
                {/* Enhanced Shadows with Better Blending */}
                <div 
                  className={`
                    absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full blur-xl
                    transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    ${isCenter 
                      ? 'w-28 h-8 bg-black/40' 
                      : 'w-20 h-6 bg-black/25'
                    }
                  `}
                />
                
                {/* Additional ambient shadow for center card */}
                {isCenter && (
                  <div className="
                    absolute -bottom-2 left-1/2 -translate-x-1/2 
                    w-32 h-4 bg-black/15 rounded-full blur-lg
                    transition-all duration-[800ms]
                  " />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Collection Indicator Dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {collectionImages.map((_, index) => (
          <button
            key={index}
            onClick={() => onCardClick(index)}
            className={`
              h-3 rounded-full transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              hover:scale-125 transform-gpu will-change-transform
              ${index === currentState 
                ? 'bg-white w-8 shadow-lg shadow-white/30' 
                : 'bg-white/50 w-3 hover:bg-white/70'
              }
            `}
          />
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="
              absolute w-2 h-2 bg-white/20 rounded-full
              animate-pulse
            "
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 800}ms`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelCarousel;
