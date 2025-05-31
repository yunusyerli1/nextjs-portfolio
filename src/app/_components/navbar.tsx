'use client';

import React, { useState } from 'react';
import {
  Home, User, Briefcase, Mail, Menu, X
} from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'About', icon: User, href: '/about' }, 
    { name: 'Experience', icon: Briefcase, href: '/experience' },
    { name: 'Contact', icon: Mail, href: '/contact' }, 
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
          YUNUS
        </Link>

        {/* Mobile & Desktop Hamburger Menu */}
        <div className="flex">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none cursor-pointer hover:text-blue-400 z-[10001]"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Full-screen Overlay Navigation for Mobile & Desktop */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-100 z-40">
          <div className="absolute h-screen w-screen bg-black z-[10000] flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-300 text-3xl font-medium py-2 w-[300px]"
              >
                <item.icon className="w-8 h-8 mr-4 text-blue-300" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}