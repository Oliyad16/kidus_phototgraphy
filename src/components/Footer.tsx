/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Instagram, Twitter, Heart, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = 2026;

  const socialLinks = [
    { label: 'Instagram', url: 'https://instagram.com', handle: '@kidus_shoot' },
    { label: 'VSCO Portfolio', url: 'https://vsco.co', handle: 'kidus.lens' },
    { label: 'Unsplash Pro', url: 'https://unsplash.com', handle: 'kidus_photog' },
  ];

  return (
    <footer id="app-footer" className="bg-[#0A0A0A] text-[#FAF8F5] py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Split Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo Brand Frame */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={onScrollToTop}
              className="group flex flex-col items-start cursor-pointer text-left focus:outline-none"
            >
              <span className="font-serif text-2xl tracking-[0.25em] font-medium leading-none text-[#fcfbf9] group-hover:text-white transition-colors">
                KIDUS
              </span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-white/40 uppercase mt-1 leading-none">
                photography
              </span>
            </button>
            <p className="font-sans text-xs text-white/50 font-light max-w-xs leading-relaxed">
              Capturing candid and deep emotional moments, wild alpine scenery, and moody nocturnals.
            </p>
          </div>

          {/* Social connections */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">Connect Elsewhere</h5>
            <div className="flex flex-col space-y-2.5">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-xs text-white/70 hover:text-white transition-colors font-light"
                >
                  <span className="font-sans">{link.label}</span>
                  <span className="font-mono text-[10px] text-white/40 group-hover:text-white flex items-center space-x-1">
                    <span>{link.handle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">Studio Base</h5>
            <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
              142 Industrial Way, Loft 4B<br />
              Brooklyn, New York 11201<br />
              <span className="font-mono text-[10px] text-white/40">studio@kidusphotography.com</span>
            </p>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest gap-4">
          <div className="flex items-center space-x-1">
            <span>© {currentYear} Kidus Photography</span>
            <span>•</span>
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in NY</span>
          </div>

          {/* Return to top */}
          <button
            id="btn-scroll-top"
            onClick={onScrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
