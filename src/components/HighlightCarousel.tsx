import { useState } from 'react';
import type { Highlight } from '../data/highlights';

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
  };  return (
    <>      {/* Highlight Bubbles */}
      <div id="highlights-slideshow" className="w-full">
        <div className="highlights-container">
          <div className="flex space-x-3 overflow-x-auto">
            {highlights.map((highlight) => (
              <div 
                key={highlight.id}
                className="flex flex-col items-center space-y-1 flex-shrink-0 cursor-pointer"
                onClick={() => openHighlight(highlight)}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-retro-purple via-retro-pink to-retro-yellow p-0.5">
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
        </div>
      </div>{/* Story Modal */}
      {selectedHighlight && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeHighlight}
        >
          <div 
            className="story-modal-container relative w-full mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={selectedHighlight.thumbnail}
                    alt={selectedHighlight.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
                {/* Close button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeHighlight();
                }}
                className="text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Story Content with Preview Slides */}
            <div className="relative flex items-center justify-center space-x-4 w-full">              {/* Previous slide preview */}
              {currentSlideIndex > 0 ? (
                <div className="hidden md:block w-48 aspect-[9/16] rounded-lg overflow-hidden opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
                     onClick={prevSlide}>
                  <img 
                    src={selectedHighlight.slides[currentSlideIndex - 1].image}
                    alt="Previous slide"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="hidden md:block w-48 aspect-[9/16]"></div>
              )}              {/* Current slide with progress bars overlay */}
              <div className="relative flex flex-col items-center">
                {/* Current slide */}
                <div className="bg-gradient-to-br from-retro-purple via-retro-pink to-retro-yellow rounded-lg overflow-hidden aspect-[9/16] relative w-full max-w-sm">
                  {/* Progress bars - overlaid on top of the slide */}
                  <div className="absolute top-2 left-4 right-4 z-20">
                    <div className="flex space-x-1">
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
                  </div>

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
              </div>              {/* Next slide preview */}
              {currentSlideIndex < selectedHighlight.slides.length - 1 ? (
                <div className="hidden md:block w-48 aspect-[9/16] rounded-lg overflow-hidden opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
                     onClick={nextSlide}>
                  <img 
                    src={selectedHighlight.slides[currentSlideIndex + 1].image}
                    alt="Next slide"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="hidden md:block w-48 aspect-[9/16]"></div>
              )}
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
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
