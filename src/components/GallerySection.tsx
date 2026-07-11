/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Expand, SlidersHorizontal, Info } from 'lucide-react';
import { Photo } from '../types';
import { photos } from '../data';

interface GallerySectionProps {
  onSelectPhoto: (photo: Photo) => void;
}

export default function GallerySection({ onSelectPhoto }: GallerySectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'portraits' | 'weddings' | 'landscapes' | 'street' | 'all'>('all');

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'weddings', label: 'Weddings & Events' },
    { id: 'landscapes', label: 'Wilderness' },
    { id: 'street', label: 'Street Life' },
  ];

  const filteredPhotos = activeTab === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeTab);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center space-x-2 text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
              <span>EXPLORE GALLERIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
              Selected <span className="italic font-light text-white/80">Showcases</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            Click on any photograph to step inside the viewfinder. Examine high-resolution EXIF camera parameters and the raw emotional stories behind each frame.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-3 pb-8 mb-12 border-b border-white/10">
          <div className="flex items-center space-x-2 text-white/40 mr-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="font-mono text-[9px] uppercase tracking-wider">Filter:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`gallery-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 relative cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-black'
                    : 'text-white/40 hover:text-white border border-transparent'
                }`}
              >
                {/* Active Background Pill */}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-white -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Photo Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                id={`gallery-card-${photo.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden bg-white/5 aspect-[3/4] cursor-pointer border border-white/10 ${
                  photo.category === 'landscapes' && activeTab === 'all' ? 'sm:col-span-2 aspect-[16/10]' : ''
                }`}
                onClick={() => onSelectPhoto(photo)}
              >
                {/* Photo Image */}
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Grid Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                  {/* Card Header details */}
                  <div className="flex justify-between items-start">
                    <span className="bg-white text-black text-[9px] font-mono tracking-widest uppercase px-2.5 py-1">
                      {photo.category}
                    </span>
                    <button className="text-white hover:text-amber-200 transition-colors">
                      <Expand className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Footer details */}
                  <div className="text-white">
                    {/* Location Badge */}
                    <div className="flex items-center space-x-1.5 text-white/80 font-mono text-[9px] uppercase tracking-widest mb-1.5">
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>{photo.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-medium mb-1">
                      {photo.title}
                    </h3>

                    {/* Quick EXIF banner */}
                    <div className="flex items-center space-x-3 text-white/40 font-mono text-[9px] mt-2.5 pt-2.5 border-t border-white/10">
                      <span>{photo.exif.camera}</span>
                      <span>•</span>
                      <span>{photo.exif.aperture}</span>
                    </div>
                  </div>
                </div>

                {/* Top Corner Quick Spec Label for clean aesthetic */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white/90 text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  {photo.exif.focalLength}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-24 border border-dashed border-white/10">
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest">No photographs in this catalog.</p>
          </div>
        )}
      </div>
    </section>
  );
}
