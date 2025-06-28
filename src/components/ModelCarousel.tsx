
import React, { useState } from 'react';
import { CarouselCard } from './carousel/CarouselCard';
import { CarouselNavigation } from './carousel/CarouselNavigation';
import { CarouselIndicators } from './carousel/CarouselIndicators';
import { useCarouselData } from './carousel/useCarouselData';

interface ModelCarouselProps {
  currentState: number;
  onCardClick: (index: number) => void;
}

const ModelCarousel: React.FC<ModelCarouselProps> = ({ currentState, onCardClick }) => {
  const { collectionImages, collectionStates } = useCarouselData();
  const currentCollection = collectionImages[currentState];
  const [activeCardIndex, setActiveCardIndex] = useState(2);

  const handleCardClick = (cardIndex: number) => {
    setActiveCardIndex(cardIndex);
  };

  const pageBackgroundColor = collectionStates[currentState].backgroundColor;

  return (
    <div className="relative w-full h-96 overflow-visible perspective-1000">
      {/* Card Container */}
      <div className="flex items-center justify-center h-full relative">
        {currentCollection.models.map((model, index) => (
          <CarouselCard
            key={`${currentCollection.id}-${model.id}`}
            model={model}
            index={index}
            activeIndex={activeCardIndex}
            pageBackgroundColor={pageBackgroundColor}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {/* Navigation and Indicators */}
      <CarouselNavigation
        collectionImages={collectionImages}
        currentState={currentState}
        onCardClick={onCardClick}
      />
      
      <CarouselIndicators
        currentCollection={currentCollection}
        activeCardIndex={activeCardIndex}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
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
