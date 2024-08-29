import React from 'react';
import sample from './assets/hero.mp4';

const HeroSection = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center tracking-widest uppercase">
          Elevate Your Drive
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-10 text-center max-w-3xl leading-relaxed">
          Discover the pinnacle of automotive luxury with our premium accessories.
        </h2>
        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all transform hover:scale-105">
          Explore Our Collection
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
