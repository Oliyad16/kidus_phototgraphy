/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Camera, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBookings: () => void;
  bookingCount: number;
}

export default function Header({ activeSection, onNavigate, onOpenBookings, bookingCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'gallery', label: 'Gallery' },
    { id: 'stories', label: 'Photo Stories' },
    { id: 'gear', label: 'Gear Bag' },
    { id: 'booking', label: 'Book a Shoot' },
    { id: 'about', label: 'About & Reviews' },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          id="btn-logo"
          onClick={() => handleItemClick('home')}
          className="group flex flex-col items-start cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-xl tracking-[0.25em] font-medium leading-none text-white group-hover:text-white/80 transition-colors">
            KIDUS
          </span>
          <span className="font-mono text-[9px] tracking-[0.4em] text-white/40 uppercase mt-1 leading-none">
            photography
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`font-sans text-xs tracking-widest uppercase cursor-pointer relative py-1 focus:outline-none transition-colors ${
                activeSection === item.id ? 'text-white font-medium' : 'text-white/40 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-white"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Menu Buttons */}
        <div className="flex items-center space-x-4">
          {bookingCount > 0 && (
            <button
              id="btn-view-bookings"
              onClick={onOpenBookings}
              className="relative p-2 text-white/80 hover:text-white border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
              title="View Inquiries"
            >
              <Camera className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-white text-black text-[9px] font-mono w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {bookingCount}
              </span>
            </button>
          )}

          <button
            id="btn-header-estimate"
            onClick={() => onNavigate('booking')}
            className="hidden lg:flex items-center space-x-2 border border-white/20 rounded-full text-white hover:bg-white hover:text-black text-[11px] font-mono tracking-widest uppercase py-2 px-6 transition-all duration-300 focus:outline-none cursor-pointer"
          >
            <span>Book Kidus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-white/80 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left font-sans text-sm tracking-widest uppercase py-1 focus:outline-none ${
                    activeSection === item.id ? 'text-white font-semibold border-l-2 border-white pl-3' : 'text-white/40 pl-3'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                id="btn-mobile-estimate"
                onClick={() => handleItemClick('booking')}
                className="w-full flex items-center justify-center space-x-2 border border-white/20 rounded-full text-white text-xs font-mono tracking-widest uppercase py-3 transition-all hover:bg-white hover:text-black"
              >
                <span>Book a Shoot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
