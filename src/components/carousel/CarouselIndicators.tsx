
import React from 'react';
import { CollectionImage } from './types';

interface CarouselIndicatorsProps {
  currentCollection: CollectionImage;
  activeCardIndex: number;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  currentCollection,
  activeCardIndex
}) => {
  return (
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
      {currentCollection.models.map((_, index) => (
        <div
          key={index}
          className={`
            w-2 h-2 rounded-full transition-all duration-500
            ${index === activeCardIndex ? 'bg-white/90 scale-125' : 'bg-white/40'}
          `}
        />
      ))}
    </div>
  );
};
