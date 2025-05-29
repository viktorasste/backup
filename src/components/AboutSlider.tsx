import React, { useState, useEffect } from 'react';

interface Slide {
  title: string;
  image: string;
  description: string;
}

const slides: Slide[] = [
  {
    title: "Darbo stalas",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",
    description: ""
  },
  {
    title: "Projektų kūrimas",
    image: "images/e865dde8.avif",
    description: ""
  },
  {
    title: "Laboratorija",
    image: "images/IMG_1626_1200.jpg",
    description: ""
  },
  {
    title: "Laboratorija",
    image: "images/S3b9a21a34e744c36803c40b66d6c1688S.webp",
    description: ""
  }
];

const AboutSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      {/* Slider container */}
      <div className="relative w-full h-full">
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover bottom-6 "
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6">
                <h3 className="text-white text-xl font-bold mb-2">{slide.title}</h3>
                <p className="text-white">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
      >
        ❮
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSlider;
