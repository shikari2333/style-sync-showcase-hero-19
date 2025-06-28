
import React from 'react';
import { Model } from './types';

interface CarouselCardProps {
  model: Model;
  index: number;
  activeIndex: number;
  pageBackgroundColor: string;
  onClick: () => void;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
  model,
  index,
  activeIndex,
  pageBackgroundColor,
  onClick
}) => {
  const getCardStyles = () => {
    const distance = Math.abs(index - activeIndex);
    const direction = index - activeIndex;
    
    let scale = 0.65;
    let opacity = 0.4;
    let translateX = 0;
    let translateY = 0;
    let zIndex = 1;
    let blur = 'blur(4px)';
    let height = 280;
    
    // Active center card - significantly larger and elevated
    if (index === activeIndex) {
      scale = 1.25;
      opacity = 1;
      translateY = -35;
      zIndex = 30;
      blur = 'blur(0px)';
      height = 360;
    }
    // First tier - immediate neighbors
    else if (distance === 1) {
      scale = 0.9;
      opacity = 0.8;
      translateX = direction * 50;
      translateY = -15;
      zIndex = 20;
      blur = 'blur(1px)';
      height = 320;
    }
    // Second tier
    else if (distance === 2) {
      scale = 0.75;
      opacity = 0.6;
      translateX = direction * 85;
      translateY = 5;
      zIndex = 15;
      blur = 'blur(2px)';
      height = 300;
    }
    // Outer cards - partially off-screen
    else {
      scale = 0.6;
      opacity = 0.3;
      translateX = direction * 120;
      translateY = 20;
      zIndex = 10;
      blur = 'blur(4px)';
      height = 280;
    }

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: blur,
      height: `${height}px`,
      transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  const isActive = index === activeIndex;
  const cardStyles = getCardStyles();

  return (
    <div
      className="absolute cursor-pointer group transform-gpu"
      style={cardStyles}
      onClick={onClick}
    >
      <div className="relative">
        {/* Outer Card Frame with Page Background Color Margin */}
        <div 
          className={`
            w-44 p-3 rounded-[24px]
            transition-all duration-1000 ease-out
            ${isActive ? 'shadow-[0_60px_120px_rgba(0,0,0,0.5)]' : 'shadow-[0_25px_50px_rgba(0,0,0,0.3)]'}
          `}
          style={{ 
            backgroundColor: pageBackgroundColor,
            height: cardStyles.height,
            boxShadow: isActive 
              ? `0 60px 120px rgba(0,0,0,0.5), 0 0 0 4px ${pageBackgroundColor}` 
              : `0 25px 50px rgba(0,0,0,0.3), 0 0 0 2px ${pageBackgroundColor}`
          }}
        >
          {/* Inner Card Content */}
          <div 
            className={`
              w-full h-full overflow-hidden relative
              rounded-[20px] transition-all duration-1000 ease-out
              group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]
              ${isActive ? 'ring-3 ring-white/50' : 'ring-1 ring-white/20'}
            `}
            style={{ backgroundColor: model.cardBg }}
          >
            {/* Model Image */}
            <img 
              src={model.image} 
              alt={model.name}
              className="
                w-full h-full object-cover object-top 
                transition-all duration-800 ease-out
                group-hover:scale-110
              "
              loading="lazy"
            />
            
            {/* Enhanced Gradient Overlay */}
            <div className="
              absolute inset-0 
              bg-gradient-to-t from-black/70 via-black/20 to-transparent
              opacity-60 group-hover:opacity-80 
              transition-opacity duration-600
            "/>
            
            {/* Card Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <div className="
                text-white font-bold text-sm tracking-wide drop-shadow-lg
                transform translate-y-3 group-hover:translate-y-0
                transition-transform duration-600 delay-200
              ">
                {model.name}
              </div>
            </div>

            {/* Active Card Glow Effect */}
            {isActive && (
              <div className="
                absolute inset-0 rounded-[20px]
                bg-gradient-to-br from-white/20 via-white/10 to-white/20
                opacity-80 pointer-events-none
                animate-pulse
              " />
            )}
          </div>
        </div>
        
        {/* Dynamic Shadow */}
        <div 
          className="
            absolute -bottom-12 left-1/2 -translate-x-1/2 
            rounded-full blur-3xl transition-all duration-1000
          "
          style={{
            width: isActive ? '180px' : '100px',
            height: isActive ? '30px' : '16px',
            backgroundColor: 'rgba(0,0,0,0.6)'
          }}
        />
      </div>
    </div>
  );
};
