
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
  const [activeCardIndex, setActiveCardIndex] = React.useState(2); // Center card is active by default

  const handleCardClick = (cardIndex: number) => {
    setActiveCardIndex(cardIndex);
    // Optional: Also trigger collection change if needed
    // onCardClick(currentState);
  };

  const getCardStyles = (index: number) => {
    const distance = Math.abs(index - activeCardIndex);
    const direction = index - activeCardIndex;
    
    // Base styles for all cards
    let scale = 0.7;
    let opacity = 0.4;
    let translateX = 0;
    let translateY = 0;
    let zIndex = 1;
    let blur = 'blur(2px)';
    
    // Active center card
    if (index === activeCardIndex) {
      scale = 1.1;
      opacity = 1;
      translateY = -20;
      zIndex = 20;
      blur = 'blur(0px)';
    }
    // Adjacent cards (immediate left and right)
    else if (distance === 1) {
      scale = 0.9;
      opacity = 0.8;
      translateX = direction * 30;
      translateY = -10;
      zIndex = 15;
      blur = 'blur(1px)';
    }
    // Second tier cards
    else if (distance === 2) {
      scale = 0.75;
      opacity = 0.6;
      translateX = direction * 50;
      translateY = 0;
      zIndex = 10;
      blur = 'blur(1.5px)';
    }
    // Far cards
    else {
      scale = 0.6;
      opacity = 0.3;
      translateX = direction * 70;
      translateY = 10;
      zIndex = 5;
      blur = 'blur(2px)';
    }

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: blur,
      transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)'
    };
  };

  return (
    <div className="relative w-full h-96 overflow-visible perspective-1000">
      {/* Card Container */}
      <div className="flex items-center justify-center h-full relative">
        {currentCollection.models.map((model, index) => {
          const cardStyles = getCardStyles(index);
          const isActive = index === activeCardIndex;
          
          return (
            <div
              key={`${currentCollection.id}-${model.id}`}
              className="absolute cursor-pointer group"
              style={cardStyles}
              onClick={() => handleCardClick(index)}
            >
              {/* Card Container */}
              <div className="relative">
                {/* Main Card */}
                <div 
                  className={`
                    w-36 h-80 ${model.bgColor} overflow-hidden relative
                    rounded-3xl shadow-2xl
                    transition-all duration-800 ease-out
                    group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)]
                    ${isActive ? 'ring-4 ring-white/30' : ''}
                  `}
                >
                  {/* Model Image */}
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="
                      w-full h-full object-cover object-top 
                      transition-all duration-600 ease-out
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="
                    absolute inset-0 
                    bg-gradient-to-t from-black/50 via-transparent to-transparent
                    opacity-60 group-hover:opacity-80 
                    transition-opacity duration-400
                  "/>
                  
                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <div className="
                      text-white font-bold text-sm tracking-wide drop-shadow-lg
                      transform translate-y-2 group-hover:translate-y-0
                      transition-transform duration-400 delay-100
                    ">
                      {model.name}
                    </div>
                  </div>

                  {/* Active Card Glow Effect */}
                  {isActive && (
                    <div className="
                      absolute inset-0 rounded-3xl
                      bg-gradient-to-r from-white/20 via-white/10 to-white/20
                      opacity-60 pointer-events-none
                      animate-pulse
                    " />
                  )}
                </div>
                
                {/* Enhanced Shadow */}
                <div 
                  className="
                    absolute -bottom-8 left-1/2 -translate-x-1/2 
                    rounded-full blur-2xl transition-all duration-800
                  "
                  style={{
                    width: isActive ? '120px' : '80px',
                    height: isActive ? '16px' : '12px',
                    backgroundColor: 'rgba(0,0,0,0.4)'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Collection Navigation Dots */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
        {collectionImages.map((_, index) => (
          <button
            key={index}
            onClick={() => onCardClick(index)}
            className={`
              h-3 rounded-full transition-all duration-600 ease-out
              hover:scale-125 transform-gpu
              ${index === currentState 
                ? 'bg-white w-8 shadow-lg shadow-white/30' 
                : 'bg-white/40 w-3 hover:bg-white/60'
              }
            `}
          />
        ))}
      </div>

      {/* Card Index Indicators */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {currentCollection.models.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-400
              ${index === activeCardIndex ? 'bg-white/80 scale-125' : 'bg-white/30'}
            `}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="
              absolute w-1 h-1 bg-white/30 rounded-full
              animate-pulse
            "
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 4) * 15}%`,
              animationDelay: `${i * 600}ms`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelCarousel;
