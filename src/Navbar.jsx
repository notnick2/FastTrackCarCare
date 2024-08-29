import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 p-6 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold  tracking-wide text-white">FastTrackCarCare</div>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold text-white">
          <li><a href="#home" className="hover:text-gray-300 transition-colors">Home</a></li>
          <li><a href="#products" className="hover:text-gray-300 transition-colors">Products</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
