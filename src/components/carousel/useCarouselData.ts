
import { CollectionImage, CollectionState } from './types';

export const useCarouselData = () => {
  const collectionImages: CollectionImage[] = [
    {
      id: 1,
      models: [
        { 
          id: 1, 
          name: "Casual Elegance", 
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-orange-200",
          cardBg: "#D97706" // Warm amber
        },
        { 
          id: 2, 
          name: "Urban Comfort", 
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-amber-200",
          cardBg: "#F59E0B" // Rich gold
        },
        { 
          id: 3, 
          name: "Street Style", 
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-gray-100",
          cardBg: "#6B7280" // Sophisticated gray
        },
        { 
          id: 4, 
          name: "Modern Formal", 
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-stone-200",
          cardBg: "#78716C" // Warm stone
        },
        { 
          id: 5, 
          name: "Edgy Leather", 
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-slate-200",
          cardBg: "#64748B" // Premium slate
        }
      ]
    },
    {
      id: 2,
      models: [
        { 
          id: 6, 
          name: "Minimalist Chic", 
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-purple-200",
          cardBg: "#7C3AED" // Royal purple
        },
        { 
          id: 7, 
          name: "Smart Casual", 
          image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-indigo-200",
          cardBg: "#4F46E5" // Deep indigo
        },
        { 
          id: 8, 
          name: "Contemporary", 
          image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-violet-100",
          cardBg: "#7C2D12" // Rich burgundy
        },
        { 
          id: 9, 
          name: "Urban Edge", 
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-blue-200",
          cardBg: "#1E40AF" // Deep blue
        },
        { 
          id: 10, 
          name: "Refined Casual", 
          image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-cyan-200",
          cardBg: "#0891B2" // Premium teal
        }
      ]
    },
    {
      id: 3,
      models: [
        { 
          id: 11, 
          name: "Bold Statement", 
          image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-red-200",
          cardBg: "#B91C1C" // Deep crimson
        },
        { 
          id: 12, 
          name: "Sleek Formal", 
          image: "https://images.unsplash.com/photo-1541271696563-3be2bb6c0d9e?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-pink-200",
          cardBg: "#BE185D" // Luxe pink
        },
        { 
          id: 13, 
          name: "Cover Ready", 
          image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-rose-100",
          cardBg: "#E11D48" // Vibrant rose
        },
        { 
          id: 14, 
          name: "Night Out", 
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-emerald-200",
          cardBg: "#059669" // Rich emerald
        },
        { 
          id: 15, 
          name: "Avant-garde", 
          image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop&crop=face",
          bgColor: "bg-teal-200",
          cardBg: "#0D9488" // Premium teal
        }
      ]
    }
  ];

  const collectionStates: CollectionState[] = [
    { backgroundColor: "#2C3E2D" }, // Deep Forest Green
    { backgroundColor: "#1A2332" }, // Deep Midnight Blue  
    { backgroundColor: "#3D2B1F" }  // Rich Espresso Brown
  ];

  return { collectionImages, collectionStates };
};
