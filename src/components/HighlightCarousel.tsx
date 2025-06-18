import { useState } from 'react';

interface HighlightSlide {
  id: string;
  image: string;
  title?: string;
}

interface Highlight {
  id: string;
  name: string;
  thumbnail: string;
  slides: HighlightSlide[];
}

interface HighlightCarouselProps {
  highlights: Highlight[];
}

export default function HighlightCarousel({ highlights }: HighlightCarouselProps) {
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const openHighlight = (highlight: Highlight) => {
    setSelectedHighlight(highlight);
    setCurrentSlideIndex(0);
  };

  const closeHighlight = () => {
    setSelectedHighlight(null);
    setCurrentSlideIndex(0);
  };

  const nextSlide = () => {
    if (selectedHighlight) {
      setCurrentSlideIndex((prev) => 
        prev < selectedHighlight.slides.length - 1 ? prev + 1 : prev
      );
    }
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => prev > 0 ? prev - 1 : prev);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <>
      {/* Highlight Bubbles */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {highlights.map((highlight) => (
          <div 
            key={highlight.id}
            className="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer"
            onClick={() => openHighlight(highlight)}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-retro-purple via-retro-pink to-retro-yellow p-0.5">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                <img 
                  src={highlight.thumbnail} 
                  alt={highlight.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs text-ig-gray-600 max-w-16 text-center truncate">
              {highlight.name}
            </span>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      {selectedHighlight && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-sm mx-4">
            {/* Header */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={selectedHighlight.thumbnail}
                    alt={selectedHighlight.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white text-sm font-medium">
                  {selectedHighlight.name}
                </span>
              </div>
              
              {/* Close button */}
              <button 
                onClick={closeHighlight}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress bars */}
            <div className="absolute top-2 left-4 right-4 z-10 flex space-x-1">
              {selectedHighlight.slides.map((_, index) => (
                <div 
                  key={index}
                  className="flex-1 h-0.5 bg-white bg-opacity-30 rounded-full overflow-hidden"
                >
                  <div 
                    className={`h-full bg-white transition-all duration-300 ${
                      index === currentSlideIndex ? 'w-full' : index < currentSlideIndex ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Story Content */}
            <div className="bg-gradient-to-br from-retro-purple via-retro-pink to-retro-yellow rounded-lg overflow-hidden aspect-[9/16] relative">
              <img 
                src={selectedHighlight.slides[currentSlideIndex].image}
                alt={selectedHighlight.slides[currentSlideIndex].title || `Slide ${currentSlideIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation areas */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-0 w-1/3 h-full z-10 flex items-center justify-start pl-4"
                disabled={currentSlideIndex === 0}
              >
                {currentSlideIndex > 0 && (
                  <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                )}
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-0 w-1/3 h-full z-10 flex items-center justify-end pr-4"
                disabled={currentSlideIndex === selectedHighlight.slides.length - 1}
              >
                {currentSlideIndex < selectedHighlight.slides.length - 1 && (
                  <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              {/* Title overlay */}
              {selectedHighlight.slides[currentSlideIndex].title && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg">
                    <h3 className="text-sm font-medium">
                      {selectedHighlight.slides[currentSlideIndex].title}
                    </h3>
                  </div>
                </div>
              )}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {selectedHighlight.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlideIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
