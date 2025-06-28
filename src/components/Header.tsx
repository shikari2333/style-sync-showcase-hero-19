
import React from 'react';
import { ShoppingBag, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">C</span>
            </div>
            <span className="text-white font-semibold text-xl">Cillo</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Shop</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Sale</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Showcase</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Login</span>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
