/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Award, Camera, Globe, Users } from 'lucide-react';
import { testimonials } from '../data';
import selfPortrait from '../assets/images/gallery_portrait_fashion_1783798549546.jpg'; // We can use the fashion portrait as a stylish surrogate self-portrait or generic photographer visual

export default function AboutSection() {
  const [testIdx, setTestIdx] = useState(0);

  const handleNext = () => {
    setTestIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setTestIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { label: 'Shooting Experience', value: '8+ Years', icon: Award },
    { label: 'Completed Shoots', value: '250+ Events', icon: Users },
    { label: 'Global Locations', value: '14 Countries', icon: Globe },
    { label: 'Archived Negatives', value: '45,000+', icon: Camera },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Biography Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center space-x-2 text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
                <span>BEHIND THE VIEWFINDER</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Meet <span className="italic font-light text-white/80">Kidus</span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-2xl">
              Hello, I am Kidus. A visual storyteller, slow-travel documentary explorer, and fine-art photographer based in Brooklyn, NY. 
              My journey behind the shutter started as a pure, visual obsession with how natural light maps the contours of the Earth and the human face.
            </p>

            <p className="font-sans text-sm text-white/50 font-light leading-relaxed max-w-2xl">
              I believe great photography doesn't happen in rigid studios or over-composed posing directions. It lives in the unscripted pauses—the silent giggle of a bride walking through a sunlit grove, the melancholic puddle reflections of neon signs under a heavy Tokyo rain, or the majestic silence of alpine peaks glowing at dawn. 
              My philosophy is to pack light, tread gently, wait patiently, and let the light write its own stories.
            </p>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center space-x-1 text-white">
                      <Icon className="w-4 h-4 text-white/60" />
                      <span className="font-mono text-xs font-bold">{stat.value}</span>
                    </div>
                    <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] bg-white/5 border border-white/10 p-4 shadow-sm group">
              <div className="absolute inset-0 border border-white/10 -translate-x-3 -translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              <img
                src={selfPortrait}
                alt="Photographer Kidus"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Location Stamp */}
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm text-[#fcfbf9] font-mono text-[9px] tracking-widest uppercase px-3 py-1 border border-white/10">
                Studio Blueprint • NY
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials Slideshow Block */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-16 max-w-4xl mx-auto relative">
          
          {/* Quote Accent Icon */}
          <Quote className="absolute top-8 left-8 w-16 h-16 text-white/5 pointer-events-none" />

          <div className="relative z-10 text-center space-y-6">
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/40">
              CLIENT TESTIMONIALS
            </div>

            {/* Quote content container with slide animation */}
            <div className="min-h-[140px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="font-serif italic text-lg sm:text-xl text-white font-light leading-relaxed max-w-2xl mx-auto">
                    "{testimonials[testIdx].content}"
                  </p>
                  <div>
                    <h5 className="font-sans text-xs font-semibold text-white/80">{testimonials[testIdx].name}</h5>
                    <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest mt-0.5">{testimonials[testIdx].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider navigators */}
            <div className="flex justify-center space-x-3 pt-4 border-t border-white/10 max-w-[120px] mx-auto">
              <button
                id="btn-prev-testimonial"
                onClick={handlePrev}
                className="p-1.5 border border-white/10 hover:border-white hover:bg-white hover:text-black text-white transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="btn-next-testimonial"
                onClick={handleNext}
                className="p-1.5 border border-white/10 hover:border-white hover:bg-white hover:text-black text-white transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
