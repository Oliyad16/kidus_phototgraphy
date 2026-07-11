/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Camera, Cpu, Compass, Sliders, MapPin, Calendar, BookOpen } from 'lucide-react';
import { Photo } from '../types';

interface LightboxModalProps {
  photo: Photo | null;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

export default function LightboxModal({ photo, photos, onClose, onNavigate }: LightboxModalProps) {
  const [showMetadata, setShowMetadata] = useState(true);

  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photo]);

  if (!photo) return null;

  const currentIndex = photos.findIndex(p => p.id === photo.id);

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      onNavigate(photos[currentIndex + 1]);
    } else {
      onNavigate(photos[0]); // Wrap around
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(photos[currentIndex - 1]);
    } else {
      onNavigate(photos[photos.length - 1]); // Wrap around
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        id="lightbox-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0A0A0A] text-[#FAF8F5] overflow-y-auto flex flex-col md:flex-row"
      >
        {/* Main Viewport Container */}
        <div className="relative flex-1 flex flex-col items-center justify-center p-4 min-h-[60vh] md:min-h-0 bg-[#060606]">
          
          {/* Top Controls Bar */}
          <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/10 font-mono text-[9px] uppercase tracking-widest text-white/80">
              <Compass className="w-3.5 h-3.5 text-white animate-spin-slow" />
              <span>Image {currentIndex + 1} of {photos.length}</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                id="btn-toggle-info"
                onClick={() => setShowMetadata(!showMetadata)}
                className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 border border-white/10 text-xs font-mono tracking-wider uppercase flex items-center space-x-1.5 transition-colors cursor-pointer text-white"
              >
                <Sliders className="w-4 h-4" />
                <span className="hidden sm:inline">{showMetadata ? 'Hide Specs' : 'Show Specs'}</span>
              </button>

              <button
                id="btn-close-lightbox"
                onClick={onClose}
                className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 border border-white/10 rounded-none transition-colors cursor-pointer text-white"
                title="Close Viewfinder (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Core Image Slide */}
          <div className="w-full h-full max-h-[80vh] flex items-center justify-center relative px-12 select-none">
            
            {/* Left Nav Button */}
            <button
              id="btn-lightbox-prev"
              onClick={handlePrev}
              className="absolute left-2 p-2 bg-black/40 hover:bg-black/80 text-[#fcfbf9] border border-white/10 transition-colors cursor-pointer z-10"
              title="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Styled Photo */}
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.97, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.97, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-full max-w-full flex items-center justify-center shadow-2xl relative group"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="max-h-[75vh] max-w-full object-contain border border-white/10"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Camera Icon Indicator */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 border border-white/10 font-mono text-[8px] tracking-[0.2em] text-white/90 pointer-events-none uppercase">
                {photo.exif.focalLength} • {photo.exif.aperture} • {photo.exif.shutterSpeed}
              </div>
            </motion.div>

            {/* Right Nav Button */}
            <button
              id="btn-lightbox-next"
              onClick={handleNext}
              className="absolute right-2 p-2 bg-black/40 hover:bg-black/80 text-[#fcfbf9] border border-white/10 transition-colors cursor-pointer z-10"
              title="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Overlay Navigation Helpers */}
          <div className="hidden sm:flex items-center space-x-4 text-[10px] text-white/40 font-mono tracking-widest uppercase mt-4">
            <span>[←] Prev Photo</span>
            <span>•</span>
            <span>[Esc] Close Viewfinder</span>
            <span>•</span>
            <span>[→] Next Photo</span>
          </div>
        </div>

        {/* Sidebar Info Panel */}
        <AnimatePresence>
          {showMetadata && (
            <motion.div
              id="lightbox-sidebar"
              initial={{ opacity: 0, x: 60, width: 0 }}
              animate={{ opacity: 1, x: 0, width: 'auto' }}
              exit={{ opacity: 0, x: 60, width: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[420px] bg-[#0C0C0C] border-t md:border-t-0 md:border-l border-white/10 p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-screen"
            >
              {/* Photo Overview */}
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.35em] text-white uppercase bg-white/10 px-2.5 py-1 border border-white/20">
                    {photo.category} Showcase
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl mt-4 tracking-tight text-white leading-snug">
                    {photo.title}
                  </h3>
                  
                  {/* Location and Date */}
                  <div className="flex flex-col gap-2 mt-4 text-xs font-mono text-white/40">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-white/60" />
                      <span>{photo.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Captured {photo.date}</span>
                    </div>
                  </div>
                </div>

                {/* Digital Viewfinder / EXIF Specifications */}
                <div className="border border-white/10 p-5 bg-[#0E0E0E] space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <div className="flex items-center space-x-2 text-white/40">
                      <Camera className="w-4 h-4" />
                      <span className="font-mono text-[9px] uppercase tracking-widest">Digital Body</span>
                    </div>
                    <span className="font-sans text-xs font-medium text-white">{photo.exif.camera}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <div className="flex items-center space-x-2 text-white/40">
                      <Cpu className="w-4 h-4" />
                      <span className="font-mono text-[9px] uppercase tracking-widest">Glass Optic</span>
                    </div>
                    <span className="font-sans text-xs font-medium text-white text-right max-w-[180px] truncate">{photo.exif.lens}</span>
                  </div>

                  {/* Exposure Parameters Dashboard */}
                  <div className="grid grid-cols-4 gap-2 pt-2 text-center">
                    <div className="bg-white/5 p-2 border border-white/5">
                      <div className="text-[8px] font-mono text-white/40 uppercase tracking-wider mb-1">Focal</div>
                      <div className="text-xs font-mono font-semibold text-white">{photo.exif.focalLength}</div>
                    </div>
                    <div className="bg-white/5 p-2 border border-white/5">
                      <div className="text-[8px] font-mono text-white/40 uppercase tracking-wider mb-1">Aperture</div>
                      <div className="text-xs font-mono font-semibold text-white">{photo.exif.aperture}</div>
                    </div>
                    <div className="bg-white/5 p-2 border border-white/5">
                      <div className="text-[8px] font-mono text-white/40 uppercase tracking-wider mb-1">Speed</div>
                      <div className="text-xs font-mono font-semibold text-white">{photo.exif.shutterSpeed}</div>
                    </div>
                    <div className="bg-white/5 p-2 border border-white/5">
                      <div className="text-[8px] font-mono text-white/40 uppercase tracking-wider mb-1">ISO</div>
                      <div className="text-xs font-mono font-semibold text-white">{photo.exif.iso}</div>
                    </div>
                  </div>
                </div>

                {/* Backstory Notes */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-white/40">
                    <BookOpen className="w-4 h-4 text-white/60" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/85">Behind the Lens Notes</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {photo.backstory}
                  </p>
                </div>
              </div>

              {/* Footer Stamp */}
              <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-white/40 uppercase tracking-[0.25em]">
                <span>© Kidus Photography</span>
                <span>All Rights Reserved</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
