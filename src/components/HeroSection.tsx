import React from 'react';
import HeroSlider from './HeroSlider';
import { slides } from './HeroSlider';

const HeroSection = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen">
      {/* Background with circuit pattern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=3648&auto=format&fit=crop)',
          backgroundPosition: '100% 10%'
        }}
      >
        {/* Dark overlay with circuit pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/95 z-0"></div>
        
        {/* Circuit pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20 z-0 bg-repeat"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10,10 L30,10 L30,30 L50,30 L50,50 L70,50 L70,70 L90,70 L90,90\' stroke=\'%2300A651\' stroke-width=\'1\' fill=\'none\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\' fill=\'%2300BFFF\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'2\' fill=\'%2300BFFF\'/%3E%3Ccircle cx=\'70\' cy=\'70\' r=\'2\' fill=\'%2300BFFF\'/%3E%3C/svg%3E")',
            backgroundSize: '150px 150px'
          }}
        ></div>
      </div>

      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Hero message */}
      {/*<div className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pradedantiesiems ir pažengusiems</h2>
      </div>}

      {/* Scroll button */}
      <button 
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="text-white text-sm mb-2">Slinkite žemyn</span>
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-1 accent">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce"></div>
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
