'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

function Navbar({ cartCount }) {
  const pathname = usePathname();
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'blog', label: 'Blog', path: '/blog' }
  ];
      const router = useRouter();
  

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="mr-2 scale-180">⚡️</div>
            <span className="text-2xl font-bold text-gray-900">SwiftBuy</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`px-3 py-2 cursor-pointer rounded-md text-sm font-medium transition-colors ${pathname === item.path
                      ? 'bg-red-100 text-red-700'
                      : 'text-gray-700 hover:text-red-600'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Cart and Auth Buttons */}
          <div className="flex flex-row items-center space-x-4">
            <div className="relative">
              <div className="cursor-pointer mr-2 scale-140">🛒</div>
              {
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              }
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
              onClick={() => router.push('/login')}>
              Login
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;