import React from 'react';
import product1 from './assets/product.jpg';
import product2 from './assets/product.jpg';
import product3 from './assets/product.jpg';

const ProductsSection = () => {
  return (
    <div id="products" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="group">
            <img src={product1} alt="Product 1" className="w-full h-64 object-cover rounded-lg group-hover:opacity-80 transition-opacity" />
            <h3 className="text-2xl font-semibold mt-4">Luxury Seat Covers</h3>
            <p className="text-lg mt-2">Premium leather seat covers with exquisite craftsmanship.</p>
          </div>
          {/* Product 2 */}
          <div className="group">
            <img src={product2} alt="Product 2" className="w-full h-64 object-cover rounded-lg group-hover:opacity-80 transition-opacity" />
            <h3 className="text-2xl font-semibold mt-4">Custom Alloy Wheels</h3>
            <p className="text-lg mt-2">Enhance your ride with our custom-designed alloy wheels.</p>
          </div>
          {/* Product 3 */}
          <div className="group">
            <img src={product3} alt="Product 3" className="w-full h-64 object-cover rounded-lg group-hover:opacity-80 transition-opacity" />
            <h3 className="text-2xl font-semibold mt-4">High-End Sound Systems</h3>
            <p className="text-lg mt-2">Experience superior sound quality with our premium sound systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
