
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const images = [
  {
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Sun light passing through green leafed tree",
    caption: "Embrace Natural Healing"
  },
  {
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Orange flowers",
    caption: "Restore Balance & Well-being"
  },
  {
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    alt: "Photo of pine trees",
    caption: "Holistic Approach to Health"
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Two brown deer beside trees and mountain",
    caption: "Healing in Harmony with Nature"
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          A Journey To <span className="text-om-green">Wellness</span>
        </h2>
        
        <div className="relative overflow-hidden h-[300px] md:h-[500px] rounded-lg shadow-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute w-full h-full transition-all duration-500 ease-in-out",
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-center px-4 max-w-md">
                  {image.caption}
                </h3>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={cn(
                "w-3 h-3 rounded-full mx-1 transition-all",
                index === currentIndex ? "bg-om-green scale-125" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
