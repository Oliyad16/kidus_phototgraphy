/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ClipboardList, Sparkles, ChevronRight, CheckCircle, Trash2, Sliders } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import GallerySection from './components/GallerySection';
import LightboxModal from './components/LightboxModal';
import JournalSection from './components/JournalSection';
import GearSection from './components/GearSection';
import BookingSection from './components/BookingSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

import { Photo, BookingRequest } from './types';
import { photos } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  
  // LocalStorage persist for Simulated Booking/Inquiry Logs
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('kidus_photography_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading bookings from local storage", e);
    }
  }, []);

  // Update Section Active State on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'stories', 'gear', 'booking', 'about'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddBooking = (newBooking: BookingRequest) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    try {
      localStorage.setItem('kidus_photography_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error("Error saving bookings to local storage", e);
    }
  };

  const handleDeleteBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem('kidus_photography_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error("Error saving bookings to local storage", e);
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#E0E0E0] overflow-x-hidden antialiased">
      {/* 1. Header Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBookings={() => setIsBookingsOpen(true)}
        bookingCount={bookings.length}
      />

      {/* 2. Hero Presentation */}
      <Hero onScrollToGallery={() => handleNavigate('gallery')} />

      {/* 3. Photo Galleries */}
      <GallerySection onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

      {/* 4. Photo Story Blogs / Journals */}
      <JournalSection />

      {/* 5. Gear Specifications and insurance guarantees */}
      <GearSection />

      {/* 6. Dynamic Estimator & Booking Inquiry */}
      <BookingSection
        bookings={bookings}
        onAddBooking={handleAddBooking}
        onDeleteBooking={handleDeleteBooking}
      />

      {/* 7. About Bio & Client Reviews */}
      <AboutSection />

      {/* 8. Pristine Editorial Footer */}
      <Footer onScrollToTop={() => handleNavigate('home')} />

      {/* ---- Interactive Overlays & Modals ---- */}

      {/* A. Dynamic Full-Screen Viewfinder Lightbox with EXIF and backstories */}
      <LightboxModal
        photo={selectedPhoto}
        photos={photos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(photo) => setSelectedPhoto(photo)}
      />

      {/* B. Bookings / Inquiries Slide-out Sidebar Drawer */}
      <AnimatePresence>
        {isBookingsOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingsOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm cursor-pointer"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[460px] bg-[#121212] z-50 shadow-2xl border-l border-white/10 p-8 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center border-b border-white/10 pb-5 mb-8">
                  <div className="flex items-center space-x-2">
                    <ClipboardList className="w-5 h-5 text-white" />
                    <h3 className="font-serif text-lg italic text-white">Inquiry Records</h3>
                  </div>
                  <button
                    id="btn-close-drawer"
                    onClick={() => setIsBookingsOpen(false)}
                    className="p-1 text-white/40 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                    aria-label="Close Inquiry Log"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
                    This drawer acts as your personalized booking log. Each inquiry is recorded here and sent to Kidus, who will reach out directly to coordinate scheduling, creative logistics, and package contracts.
                  </p>

                  {bookings.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-white/10 space-y-4">
                      <Sliders className="w-10 h-10 mx-auto text-white/20 animate-pulse" />
                      <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">No Active Inquiries</div>
                      <button
                        id="btn-drawer-calculate"
                        onClick={() => {
                          setIsBookingsOpen(false);
                          handleNavigate('booking');
                        }}
                        className="text-xs font-mono text-white border-b border-white/40 hover:border-white tracking-wider uppercase cursor-pointer"
                      >
                        Inquire Now
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="bg-white/5 border border-white/10 p-5 relative group"
                        >
                          {/* Quick Trash */}
                          <button
                            id={`btn-ledger-delete-${booking.id}`}
                            onClick={() => handleDeleteBooking(booking.id)}
                            className="absolute top-4 right-4 text-white/40 hover:text-red-400 transition-colors cursor-pointer"
                            title="Delete Inquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                          {/* Date and Name */}
                          <div className="font-sans text-xs font-semibold text-white">{booking.name}</div>
                          <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest mt-1.5 flex items-center space-x-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Preferred: {booking.date}</span>
                          </div>

                          {/* Shoot Parameter Details */}
                          <div className="mt-3 pt-3 border-t border-white/10 text-xs">
                            <div className="font-mono text-[9px] text-white/40 uppercase tracking-wider mb-1">
                              Contact Credentials
                            </div>
                            <div className="font-sans font-light text-white/60 mb-2">
                              {booking.email} • {booking.phone}
                            </div>
                            {booking.details && (
                              <p className="font-sans text-[11px] font-light text-white/50 bg-white/5 p-2 border border-white/5 italic line-clamp-3 leading-relaxed">
                                "{booking.details}"
                              </p>
                            )}
                          </div>

                          <div className="mt-3 flex items-center space-x-1.5 text-[8px] font-mono tracking-wider uppercase text-yellow-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                            <span>Awaiting Email Response</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer Footer */}
              {bookings.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="bg-white/5 border border-white/10 p-4 text-[10px] font-sans text-white/70 leading-normal flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-white flex-shrink-0 mt-0.5 animate-pulse" />
                    <span>Your inquiries have been securely cached in local storage. Kidus reviews submissions within 24 hours to schedule private consultations.</span>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
