'use client';

import React, { useState } from 'react';
import {
  Home, User, Briefcase, Mail, Menu, X, Linkedin, Github, Twitter,
} from 'lucide-react';

// --- Components ---

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#home' }, // Points to home as it's a single page
    { name: 'Portfolio', icon: Briefcase, href: '#home' }, // Points to home, renamed from Projects
    { name: 'Contact', icon: Mail, href: '/contact' }, // Points to home
  ];

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
          YUNUS
        </a>

        {/* Mobile & Desktop Hamburger Menu */}
        <div className="flex"> {/* Always show hamburger icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Full-screen Overlay Navigation for Mobile & Desktop */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-40">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white focus:outline-none">
            <X className="w-10 h-10" />
          </button>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-300 text-3xl font-medium py-2"
            >
              <item.icon className="w-8 h-8 mr-4 text-blue-300" />
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};