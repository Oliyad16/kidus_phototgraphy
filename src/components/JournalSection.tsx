/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, ArrowRight, ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { JournalPost } from '../types';
import { journalPosts } from '../data';

export default function JournalSection() {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);

  return (
    <section id="stories" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            /* Journal Overview List */
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              {/* Section Header */}
              <div className="max-w-xl mb-16">
                <div className="flex items-center space-x-2 text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
                  <span>PHOTO JOURNAL & ESSAYS</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  Backstories & <span className="italic font-light text-white/80">Reflections</span>
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  Deep narratives from the road. Exploring the patient philosophy, creative challenges, and magic of waiting for the perfect frame.
                </p>
              </div>

              {/* Stories List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {journalPosts.map((post) => (
                  <div
                    key={post.id}
                    id={`journal-post-${post.id}`}
                    className="group flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 p-6 hover:border-white/25 transition-all duration-500"
                  >
                    {/* Cover image wrapper */}
                    <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-square overflow-hidden bg-white/5 flex-shrink-0">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Metadata & textual info */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        {/* Meta lines */}
                        <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-white/40 uppercase tracking-wider mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-red-400" /> {post.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>

                        {/* Heading */}
                        <h3 className="font-serif text-xl sm:text-2xl font-medium text-white group-hover:text-white/80 transition-colors mb-3">
                          {post.title}
                        </h3>

                        {/* Summary */}
                        <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-6">
                          {post.summary}
                        </p>
                      </div>

                      {/* Expand Button */}
                      <button
                        id={`btn-read-${post.id}`}
                        onClick={() => setSelectedPost(post)}
                        className="self-start flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-white hover:text-white/80 transition-colors cursor-pointer border-b border-white/20 hover:border-white pb-1"
                      >
                        <span>Read Story</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Immersive Reader Pane */
            <motion.div
              key="reader"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto bg-[#121212] border border-white/10 p-8 md:p-16 shadow-2xl relative"
            >
              {/* Back Button */}
              <button
                id="btn-reader-back"
                onClick={() => setSelectedPost(null)}
                className="group flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-white/40 hover:text-white mb-10 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Stories</span>
              </button>

              {/* Article Headers */}
              <div className="space-y-6 mb-12 border-b border-white/10 pb-10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 text-white font-semibold">
                    <BookOpen className="w-3.5 h-3.5" /> Photo Essay
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400" /> {selectedPost.location}
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {selectedPost.date}
                  </span>
                  <span>|</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                  {selectedPost.title}
                </h1>

                <p className="font-serif italic text-base sm:text-lg text-white/60 max-w-2xl font-light leading-relaxed">
                  "{selectedPost.summary}"
                </p>
              </div>

              {/* Large Article Banner */}
              <div className="w-full aspect-[21/9] bg-white/5 overflow-hidden mb-12 border border-white/10">
                <img
                  src={selectedPost.coverImage}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Article Content - Clean Editorial Style */}
              <article className="prose prose-invert max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                  // Make the first letter of the first paragraph a drop-cap
                  if (index === 0) {
                    return (
                      <p key={index} className="font-sans text-sm sm:text-base text-white/80 leading-relaxed tracking-wide font-light mb-6">
                        <span className="font-serif text-5xl md:text-6xl float-left font-bold mr-3 line-height-none mt-1 text-white">
                          {paragraph.charAt(0)}
                        </span>
                        {paragraph.slice(1)}
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="font-sans text-sm sm:text-base text-white/80 leading-relaxed tracking-wide font-light mb-6 whitespace-pre-line">
                      {paragraph}
                    </p>
                  );
                })}
              </article>

              {/* Story Sign-off Signet */}
              <div className="mt-16 pt-10 border-t border-white/10 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-serif text-sm font-semibold text-white">
                    K
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-semibold text-white">Written by Kidus</h5>
                    <p className="font-sans text-[10px] text-white/40">Documentary Fine-Art Photographer</p>
                  </div>
                </div>
                <button
                  id="btn-story-bottom-back"
                  onClick={() => setSelectedPost(null)}
                  className="border border-white/20 text-white hover:bg-white hover:text-black text-[10px] font-mono tracking-widest uppercase py-2.5 px-5 transition-all cursor-pointer"
                >
                  Close Essay
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
