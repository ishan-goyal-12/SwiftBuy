'use client'
import React, { useState } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';

function Navbar({ cartCount }) {
  const [currentPage, setCurrentPage] = useState('home');
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Zap className="h-8 w-8 text-red-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">SwiftBuy</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-red-100 text-red-700'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cart and Auth Buttons */}
          <div className="flex flex-row items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer" />
              (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;