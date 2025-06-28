
import React from 'react';
import { CollectionImage } from './types';

interface CarouselNavigationProps {
  collectionImages: CollectionImage[];
  currentState: number;
  onCardClick: (index: number) => void;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  collectionImages,
  currentState,
  onCardClick
}) => {
  return (
    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
      {collectionImages.map((_, index) => (
        <button
          key={index}
          onClick={() => onCardClick(index)}
          className={`
            h-3 rounded-full transition-all duration-700 ease-out
            hover:scale-125 transform-gpu
            ${index === currentState 
              ? 'bg-white w-8 shadow-lg shadow-white/40' 
              : 'bg-white/40 w-3 hover:bg-white/60'
            }
          `}
        />
      ))}
    </div>
  );
};
