/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Mail, Phone, FileText, CheckCircle, Clock, Trash2, ShieldCheck, BookOpen, Compass } from 'lucide-react';
import { BookingRequest } from '../types';

interface BookingSectionProps {
  onAddBooking: (booking: BookingRequest) => void;
  bookings: BookingRequest[];
  onDeleteBooking: (id: string) => void;
}

export default function BookingSection({ onAddBooking, bookings, onDeleteBooking }: BookingSectionProps) {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date) return;

    const newInquiry: BookingRequest = {
      id: `inquiry-${Date.now()}`,
      name,
      email,
      phone,
      date,
      details,
      status: 'pending',
      createdAt: new Date().toLocaleDateString(),
    };

    onAddBooking(newInquiry);
    setSuccessMsg(true);
    
    // Reset inputs
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setDetails('');

    setTimeout(() => {
      setSuccessMsg(false);
    }, 6000);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center space-x-2 text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
            <span>DIRECT INQUIRY & BOOKING</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Book a <span className="italic font-light text-white/80">Private Shoot</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            Booking is handled personally via direct email correspondence. Provide your contact details, select your preferred date, and share your creative vision to receive a custom consultation proposal.
          </p>
        </div>

        {/* Core Inquiry Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry Form Panel */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-10 shadow-sm space-y-8">
            <h3 className="font-serif text-xl sm:text-2xl text-white border-b border-white/10 pb-4 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-white/80" />
              <span>Inquiry Form</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <label className="block font-mono text-[9px] text-white/40 uppercase tracking-widest -mb-2">
                Your Credentials & Schedule
              </label>

              {/* Name Field */}
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-white/40" />
                <input
                  id="input-name"
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 py-3 pl-10 pr-4 font-sans text-xs text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white placeholder-white/30"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    id="input-email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 py-3 pl-10 pr-4 font-sans text-xs text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white placeholder-white/30"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 py-3 pl-10 pr-4 font-sans text-xs text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white placeholder-white/30"
                  />
                </div>
              </div>

              {/* Preferred Date Selector */}
              <div className="space-y-2">
                <label htmlFor="input-date" className="block font-sans text-[10px] text-white/40 uppercase tracking-wider">
                  Preferred Date (Select from Calendar)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-white/40 text-left pointer-events-none" />
                  <input
                    id="input-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 py-3 pl-10 pr-4 font-mono text-xs text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white text-left select-none block"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-2">
                <label htmlFor="input-details" className="block font-sans text-[10px] text-white/40 uppercase tracking-wider">
                  Creative Vision & Alternate Dates
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-4 w-4 h-4 text-white/40" />
                  <textarea
                    id="input-details"
                    rows={4}
                    placeholder="Please write here any alternate dates of availability, preferred shoot concepts, style requirements, or wedding venue logistics..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 py-3 pl-10 pr-4 font-sans text-xs text-white focus:border-white focus:outline-none placeholder-white/30 leading-relaxed"
                  />
                </div>
              </div>

              <AnimatePresence>
                {successMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-950/40 border border-green-800/60 text-green-300 p-4 flex items-center space-x-2 text-xs"
                  >
                    <CheckCircle className="w-4.5 h-4.5 text-green-500 flex-shrink-0" />
                    <span>Inquiry sent successfully! Kidus will contact you shortly via email. Your log has been updated below.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                id="btn-submit-inquiry"
                type="submit"
                className="w-full py-4 bg-white border border-white hover:bg-transparent hover:text-white text-black text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                Send Booking Inquiry
              </button>
            </form>
          </div>

          {/* Guidelines & Live Status Logs Dashboard Panel */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Booking Guidelines Ticket */}
            <div className="bg-[#121212] text-white p-8 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="font-serif text-sm italic text-white/50">Personal Correspondence</div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white bg-white/10 px-2.5 py-0.5 border border-white/20">
                    Bespoke Craft
                  </span>
                </div>

                <div className="space-y-5">
                  <h4 className="font-serif text-xl italic font-light text-white leading-snug">
                    Your Vision, Realized
                  </h4>
                  <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                    Fine-art photography is an active collaboration. Kidus works without rigid constraints, tailoring each session to the unique geometry, character, and emotional rhythm of your location.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start space-x-3">
                      <div className="font-mono text-xs text-white/40 mt-0.5">01</div>
                      <div>
                        <h5 className="font-sans text-xs font-semibold text-white">Direct Consultation</h5>
                        <p className="font-sans text-[10px] text-white/40 mt-1">We discuss styling references, locations, and narrative concepts over personal emails.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="font-mono text-xs text-white/40 mt-0.5">02</div>
                      <div>
                        <h5 className="font-sans text-xs font-semibold text-white">Date Reservation</h5>
                        <p className="font-sans text-[10px] text-white/40 mt-1">Select dates are locked in once concepts are aligned. Redundant backup equipment is fully prepped.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="font-mono text-xs text-white/40 mt-0.5">03</div>
                      <div>
                        <h5 className="font-sans text-xs font-semibold text-white">Archival Delivery</h5>
                        <p className="font-sans text-[10px] text-white/40 mt-1">Carefully graded digital negatives and masterwork giclée cotton rag prints delivered directly to your door.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center space-x-2 font-mono text-[8.5px] text-white/40 uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>Licensed & Venue Insured</span>
                </div>
              </div>
            </div>

            {/* Inquiries Logs Dashboard */}
            <div className="bg-[#121212] border border-white/10 p-6 space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <h4 className="font-serif text-sm font-semibold text-white">Submitted Inquiries</h4>
                <span className="font-mono text-[9px] text-white/60 bg-white/10 px-2 py-0.5">
                  {bookings.length} {bookings.length === 1 ? 'Record' : 'Records'}
                </span>
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-8 text-white/40 space-y-2">
                  <Compass className="w-8 h-8 mx-auto text-white/20 animate-spin-slow" />
                  <p className="font-mono text-[9px] uppercase tracking-wider">No active inquiries logged yet.</p>
                  <p className="font-sans text-[11px] font-light max-w-[200px] mx-auto">Send an inquiry on the left to see it append live in local storage.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  <AnimatePresence initial={false}>
                    {bookings.map((b) => (
                      <motion.div
                        key={b.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="bg-white/5 border border-white/10 p-4 relative group"
                      >
                        <button
                          id={`btn-delete-inquiry-${b.id}`}
                          onClick={() => onDeleteBooking(b.id)}
                          className="absolute top-4 right-4 text-white/40 hover:text-red-400 transition-colors cursor-pointer"
                          title="Delete Record"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="font-sans text-xs font-semibold text-white">{b.name}</div>
                        <div className="font-mono text-[9px] text-white/40 mt-1">{b.email} • {b.phone}</div>
                        <div className="font-mono text-[9px] text-white/40 mt-1 flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-white/40" />
                          <span>Preferred: {b.date}</span>
                        </div>

                        {b.details && (
                          <p className="mt-2 text-[11px] font-sans font-light text-white/50 border-t border-white/5 pt-2 leading-relaxed italic">
                            "{b.details}"
                          </p>
                        )}
                        
                        <div className="mt-3 flex items-center space-x-1.5 text-[8px] font-mono tracking-widest uppercase text-yellow-500">
                          <Clock className="w-3 h-3 text-yellow-500" />
                          <span>Awaiting email response</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
