'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Calendar, ArrowRight, Check } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogs';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="relative text-slate-300 border-t-4 border-[#00B050] overflow-hidden bg-slate-950">
      
      {/* Background Image with Dark Overlay matching Screenshots 2 & 3 */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
        
        {/* Top Social Channels Row matching Screenshots 2 & 3 */}
        <div className="grid grid-cols-3 border-b border-slate-800 text-xs font-black uppercase tracking-widest text-slate-300">
          
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 hover:bg-[#00B050]/20 hover:text-white transition-colors border-r border-slate-800"
          >
            <span>FACEBOOK</span>
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 hover:bg-[#00B050]/20 hover:text-white transition-colors border-r border-slate-800"
          >
            <span>INSTAGRAM</span>
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 hover:bg-[#00B050]/20 hover:text-white transition-colors"
          >
            <span>TWITTER</span>
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

        </div>

        {/* 3 Main Footer Columns matching Screenshots 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-slate-800 text-xs">
          
          {/* Column 1: CONTACT INFO */}
          <div className="space-y-6">
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">
              CONTACT INFO
            </h3>
            <div className="w-8 h-0.5 bg-[#00B050] -mt-4 mb-4" />

            <div className="space-y-5 text-slate-300">
              
              {/* Exeter Location */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00B050] flex-shrink-0 mt-0.5" />
                  <p>Caravantastic, Matford Home Farm, Matford, Exeter, Devon, EX2 8XT</p>
                </div>
                <div className="flex items-center gap-2 pl-6 text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-[#00B050]" />
                  <a href="tel:01392757879" className="hover:text-[#00B050]">01392 757879</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 pl-6 text-[#00B050] font-semibold">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:info@caravantastic.com" className="hover:underline">info@caravantastic.com</a>
              </div>

              {/* Sussex Location */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00B050] flex-shrink-0 mt-0.5" />
                  <p>Caravantastic Ltd, East Street, Turners Hill, Crawley, West Sussex, RH10 4QQ</p>
                </div>
                <div className="flex items-center gap-2 pl-6 text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-[#00B050]" />
                  <a href="tel:01342718622" className="hover:text-[#00B050]">01342 718622</a>
                </div>
              </div>

              {/* Taunton Location */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00B050] flex-shrink-0 mt-0.5" />
                  <p>Caravantastic, Thornfalcon Works, Henlade, Taunton, TA3 5DN</p>
                </div>
                <div className="flex items-center gap-2 pl-6 text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-[#00B050]" />
                  <a href="tel:01278780565" className="hover:text-[#00B050]">01278 780 565</a>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: RECENT POSTS matching Screenshots 2 & 3 */}
          <div className="space-y-6">
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">
              RECENT POSTS
            </h3>
            <div className="w-8 h-0.5 bg-[#00B050] -mt-4 mb-4" />

            <div className="space-y-4">
              {BLOG_POSTS.map((post) => (
                <div key={post.id} className="flex gap-3 items-start group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-14 h-12 object-cover rounded flex-shrink-0 border border-slate-700 group-hover:border-[#00B050] transition-colors"
                  />
                  <div className="space-y-1">
                    <h4 className="font-semibold text-slate-200 text-xs leading-snug group-hover:text-[#00B050] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500">
                      <Calendar className="w-3 h-3 text-[#00B050]" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: SUBSCRIBE TO OUR NEWSLETTER matching Screenshots 2 & 3 */}
          <div className="space-y-6">
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <div className="w-8 h-0.5 bg-[#00B050] -mt-4 mb-4" />

            {subscribed ? (
              <div className="bg-[#00B050]/20 border border-[#00B050] text-white p-4 rounded text-xs font-bold space-y-1">
                <div className="flex items-center gap-2 text-[#00B050]">
                  <Check className="w-4 h-4" />
                  <span>Subscribed Successfully!</span>
                </div>
                <p className="text-[11px] text-slate-300 font-normal">
                  Thank you for subscribing to our stock updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-slate-300 font-bold text-xs mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2.5 bg-white text-slate-900 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold text-xs mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-2.5 bg-white text-slate-900 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#00B050]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-slate-200 hover:bg-[#00B050] hover:text-white text-slate-900 px-6 py-2 rounded font-extrabold text-xs transition-colors cursor-pointer"
                >
                  Submit
                </button>

                <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                  Want to keep up to date on our stock or offers? Enter your e-mail and subscribe to our newsletter.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Dual CTA Banners matching Screenshots 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 border-b border-slate-800">
          
          {/* Box 1: ARE YOU LOOKING FOR A CARAVAN? */}
          <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-extrabold text-white text-sm uppercase tracking-wide">
                ARE YOU LOOKING FOR A CARAVAN?
              </h4>
              <div className="w-8 h-0.5 bg-[#00B050] my-2" />
              <p className="text-xs text-slate-400">
                Search Our Inventory With New Stock Added Daily
              </p>
            </div>
            <div>
              <Link
                href="/caravans"
                className="inline-block bg-[#00B050] hover:bg-[#009343] text-white px-5 py-2 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Box 2: DO YOU WANT TO SELL A CARAVAN? */}
          <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-extrabold text-white text-sm uppercase tracking-wide">
                DO YOU WANT TO SELL A CARAVAN?
              </h4>
              <div className="w-8 h-0.5 bg-[#00B050] my-2" />
              <p className="text-xs text-slate-400">
                Search Our Inventory With Thousands Of Caravans Added On Daily Basis
              </p>
            </div>
            <div>
              <Link
                href="/sell-your-caravan"
                className="inline-block bg-[#00B050] hover:bg-[#009343] text-white px-5 py-2 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Read More
              </Link>
            </div>
          </div>

        </div>

        {/* Nationwide Delivery & Equestrian Coverage Paragraph matching Screenshot 3 */}
        <div className="py-8 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed max-w-5xl mx-auto text-center font-light">
          <p>
            We deliver across Somerset, Bristol, Bath, Exeter, Devon, Dorset and Cornwall, Gloucestershire, South Wales, the Midlands, Hampshire and Wiltshire, Oxfordshire and Cambridgeshire, Worcestershire, Berkshire, Buckinghamshire, Sussex, Surrey, Kent, and throughout the UK. We also export to Europe including Poland, Norway and France. We also provide static caravan accommodation for stables, livery yards, stud farms and other equestrian businesses as accommodation for grooms and yard hands.
          </p>
        </div>

        {/* Bottom Copyright Bar matching Screenshot 3 */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            ©Copyright 2026 Caravantastic Static Caravans | Website by The Digital Cogs
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-slate-300">Terms and Conditions</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-slate-300">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
