/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import landscapeHero from '../assets/images/gallery_landscape_sunset_1783798572056.jpg';

interface HeroProps {
  onScrollToGallery: () => void;
}

export default function Hero({ onScrollToGallery }: HeroProps) {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Ambient Zoom */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          id="hero-bg"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.75 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={landscapeHero}
          alt="Majestic Mountain Sunset"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-[#0A0A0A]" />
      </div>

      {/* Hero Typography & Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Sub-label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center space-x-2 text-white/60 font-mono text-[10px] tracking-[0.4em] uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
          <span>PORTFOLIO & PHOTO STORY ESSAYS</span>
        </motion.div>

        {/* Core Big Heading */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-8xl text-white tracking-tight leading-[1.05] max-w-4xl"
        >
          Moments Carved in <span className="italic font-light text-white/90">Light</span>
        </motion.h1>

        {/* Minimal Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 text-sm sm:text-base md:text-lg font-sans text-white/60 max-w-xl font-light tracking-wide leading-relaxed"
        >
          Sincere portraiture, raw wilderness landscapes, and candid nocturnal street essays captured globally by Kidus.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10"
        >
          <button
            id="btn-hero-explore"
            onClick={onScrollToGallery}
            className="group relative px-8 py-4 overflow-hidden border border-white/20 text-white text-xs font-mono tracking-[0.25em] uppercase hover:text-black transition-colors duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10">Explore Galleries</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Info Snippet (Location) */}
      <div className="absolute bottom-16 left-6 md:left-12 z-10 flex items-center space-x-3 text-white/50 font-mono text-[10px] tracking-widest uppercase">
        <MapPin className="w-3.5 h-3.5 text-white/40" />
        <span>PATAGONIA MIRROR • 49.3° S</span>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        id="btn-scroll-indicator"
        onClick={onScrollToGallery}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-6 md:right-12 z-10 flex flex-col items-center space-y-1 text-white/40 hover:text-white transition-colors cursor-pointer"
      >
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
