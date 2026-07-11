/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Check, ShieldCheck, Heart, Layers } from 'lucide-react';
import { GearItem } from '../types';
import { gearBag } from '../data';

export default function GearSection() {
  const [filter, setFilter] = useState<'all' | 'body' | 'lens' | 'drone'>('all');

  const categories: { id: typeof filter; label: string }[] = [
    { id: 'all', label: 'Entire Arsenal' },
    { id: 'body', label: 'Camera Bodies' },
    { id: 'lens', label: 'Prime Glass' },
    { id: 'drone', label: 'Aerial & Drone' },
  ];

  const filteredGear = filter === 'all'
    ? gearBag
    : gearBag.filter(item => item.category === filter);

  return (
    <section id="gear" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center space-x-2 text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
              <span>TECHNICAL SPECIFICATIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
              Inside the <span className="italic font-light text-white/80">Gear Bag</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            Professional results require uncompromising precision. Here is a curated list of high-end, high-resolution mirrorless systems and cinematic optics Kidus uses to execute sharp, low-light, and aerial masterpieces.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 bg-white/5 border border-white/10 p-2 max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gear-tab-${cat.id}`}
              onClick={() => setFilter(cat.id)}
              className={`flex-1 min-w-[120px] py-2 px-4 text-center font-mono text-[10px] tracking-widest uppercase transition-all duration-300 relative cursor-pointer ${
                filter === cat.id
                  ? 'text-black'
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {filter === cat.id && (
                <motion.span
                  layoutId="activeGearFilter"
                  className="absolute inset-0 bg-white -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGear.map((item) => (
              <motion.div
                key={item.id}
                id={`gear-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300"
              >
                <div>
                  {/* Category Stamp */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-white/10 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5">
                      {item.category}
                    </span>
                    <Camera className="w-4 h-4 text-white/40" />
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-3">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-white/50 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-2 mb-8">
                    <div className="font-mono text-[8px] text-white/40 uppercase tracking-widest mb-3">Performance Parameters</div>
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-white/60">
                        <Check className="w-3.5 h-3.5 text-white/40 flex-shrink-0 mt-0.5" />
                        <span className="font-sans font-light leading-none">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Badge */}
                <div className="flex items-center space-x-2 pt-4 border-t border-white/10 text-white/40 font-mono text-[8px] uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  <span>Calibrated & Active</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Guarantees Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/5 border border-white/10 rounded-full">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h5 className="font-sans text-xs font-semibold uppercase tracking-wider text-white">Fully Insured</h5>
              <p className="font-sans text-[10px] text-white/50 mt-1">Multi-million general liability for wedding venues.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/5 border border-white/10 rounded-full">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h5 className="font-sans text-xs font-semibold uppercase tracking-wider text-white">Redundant Backup</h5>
              <p className="font-sans text-[10px] text-white/50 mt-1">Dual card real-time copying; triple-redundant SSD vaults.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/5 border border-white/10 rounded-full">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h5 className="font-sans text-xs font-semibold uppercase tracking-wider text-white">Aviation Certified</h5>
              <p className="font-sans text-[10px] text-white/50 mt-1">FAA Part 107 Drone pilot license for commercial aerial art.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
