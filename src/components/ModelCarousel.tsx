
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
          bgColor: "bg-orange-200",
          cardBg: "#f97316" // Orange tone
        },
        { 
          id: 2, 
          name: "Urban Comfort", 
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-amber-200",
          cardBg: "#f59e0b" // Amber tone
        },
        { 
          id: 3, 
          name: "Street Style", 
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-gray-100",
          cardBg: "#6b7280" // Gray tone
        },
        { 
          id: 4, 
          name: "Modern Formal", 
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-stone-200",
          cardBg: "#78716c" // Stone tone
        },
        { 
          id: 5, 
          name: "Edgy Leather", 
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-slate-200",
          cardBg: "#64748b" // Slate tone
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
          bgColor: "bg-purple-200",
          cardBg: "#a855f7" // Purple tone
        },
        { 
          id: 7, 
          name: "Smart Casual", 
          image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-indigo-200",
          cardBg: "#6366f1" // Indigo tone
        },
        { 
          id: 8, 
          name: "Contemporary", 
          image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-violet-100",
          cardBg: "#8b5cf6" // Violet tone
        },
        { 
          id: 9, 
          name: "Urban Edge", 
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-blue-200",
          cardBg: "#3b82f6" // Blue tone
        },
        { 
          id: 10, 
          name: "Refined Casual", 
          image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-cyan-200",
          cardBg: "#06b6d4" // Cyan tone
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
          bgColor: "bg-red-200",
          cardBg: "#ef4444" // Red tone
        },
        { 
          id: 12, 
          name: "Sleek Formal", 
          image: "https://images.unsplash.com/photo-1541271696563-3be2bb6c0d9e?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-pink-200",
          cardBg: "#ec4899" // Pink tone
        },
        { 
          id: 13, 
          name: "Cover Ready", 
          image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-rose-100",
          cardBg: "#f43f5e" // Rose tone
        },
        { 
          id: 14, 
          name: "Night Out", 
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-emerald-200",
          cardBg: "#10b981" // Emerald tone
        },
        { 
          id: 15, 
          name: "Avant-garde", 
          image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-teal-200",
          cardBg: "#14b8a6" // Teal tone
        }
      ]
    }
  ];

  const currentCollection = collectionImages[currentState];
  const [activeCardIndex, setActiveCardIndex] = React.useState(2); // Center card is active by default

  const handleCardClick = (cardIndex: number) => {
    setActiveCardIndex(cardIndex);
  };

  const getCardStyles = (index: number) => {
    const distance = Math.abs(index - activeCardIndex);
    const direction = index - activeCardIndex;
    
    // Base styles for all cards
    let scale = 0.65;
    let opacity = 0.35;
    let translateX = 0;
    let translateY = 0;
    let zIndex = 1;
    let blur = 'blur(3px)';
    
    // Active center card
    if (index === activeCardIndex) {
      scale = 1.15;
      opacity = 1;
      translateY = -25;
      zIndex = 30;
      blur = 'blur(0px)';
    }
    // Adjacent cards (immediate left and right)
    else if (distance === 1) {
      scale = 0.85;
      opacity = 0.75;
      translateX = direction * 40;
      translateY = -12;
      zIndex = 20;
      blur = 'blur(1px)';
    }
    // Second tier cards
    else if (distance === 2) {
      scale = 0.7;
      opacity = 0.55;
      translateX = direction * 65;
      translateY = 5;
      zIndex = 15;
      blur = 'blur(2px)';
    }
    // Far cards
    else {
      scale = 0.6;
      opacity = 0.25;
      translateX = direction * 85;
      translateY = 15;
      zIndex = 10;
      blur = 'blur(3px)';
    }

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: blur,
      transition: 'all 0.9s cubic-bezier(0.23, 1, 0.32, 1)'
    };
  };

  // Get the current page background color (from Hero component state)
  const collectionStates = [
    { backgroundColor: "#4A6741" }, // Green tone
    { backgroundColor: "#4A5A6A" }, // Blue-grey tone  
    { backgroundColor: "#8B6F47" }  // Brown tone
  ];
  
  const pageBackgroundColor = collectionStates[currentState].backgroundColor;

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
              {/* Card Container with Margin Background */}
              <div className="relative">
                {/* Outer Card Frame (Margin with Page Background Color) */}
                <div 
                  className={`
                    w-40 h-[340px] p-2 rounded-[20px]
                    transition-all duration-900 ease-out
                    ${isActive ? 'shadow-[0_50px_100px_rgba(0,0,0,0.4)]' : 'shadow-[0_20px_40px_rgba(0,0,0,0.2)]'}
                  `}
                  style={{ 
                    backgroundColor: pageBackgroundColor,
                    boxShadow: isActive 
                      ? `0 50px 100px rgba(0,0,0,0.4), 0 0 0 3px ${pageBackgroundColor}` 
                      : `0 20px 40px rgba(0,0,0,0.2), 0 0 0 2px ${pageBackgroundColor}`
                  }}
                >
                  {/* Inner Card (Actual Image Container) */}
                  <div 
                    className={`
                      w-full h-full overflow-hidden relative
                      rounded-2xl transition-all duration-900 ease-out
                      group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]
                      ${isActive ? 'ring-2 ring-white/40' : ''}
                    `}
                    style={{ backgroundColor: model.cardBg }}
                  >
                    {/* Model Image */}
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="
                        w-full h-full object-cover object-top 
                        transition-all duration-700 ease-out
                        group-hover:scale-105
                      "
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="
                      absolute inset-0 
                      bg-gradient-to-t from-black/60 via-transparent to-transparent
                      opacity-50 group-hover:opacity-70 
                      transition-opacity duration-500
                    "/>
                    
                    {/* Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                      <div className="
                        text-white font-bold text-xs tracking-wide drop-shadow-lg
                        transform translate-y-2 group-hover:translate-y-0
                        transition-transform duration-500 delay-100
                      ">
                        {model.name}
                      </div>
                    </div>

                    {/* Active Card Glow Effect */}
                    {isActive && (
                      <div className="
                        absolute inset-0 rounded-2xl
                        bg-gradient-to-r from-white/15 via-white/5 to-white/15
                        opacity-70 pointer-events-none
                        animate-pulse
                      " />
                    )}
                  </div>
                </div>
                
                {/* Enhanced Shadow */}
                <div 
                  className="
                    absolute -bottom-10 left-1/2 -translate-x-1/2 
                    rounded-full blur-3xl transition-all duration-900
                  "
                  style={{
                    width: isActive ? '140px' : '90px',
                    height: isActive ? '20px' : '14px',
                    backgroundColor: 'rgba(0,0,0,0.5)'
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
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="
              absolute w-1 h-1 bg-white/20 rounded-full
              animate-pulse
            "
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 800}ms`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelCarousel;
