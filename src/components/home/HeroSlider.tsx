'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, PhoneCall, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: 'SELL YOUR CARAVAN OR LODGE TO',
    brandHighlight: 'CARAVANTASTIC',
    subtitle: 'Top prices paid with fast nationwide collection & hassle-free valuation.',
    ctaText: 'CONTACT US',
    ctaLink: '/contact',
    secondaryCta: 'BUYBACK SCHEME',
    secondaryLink: '/buyback',
    bgImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    title: 'STATIC CARAVANS & LODGES FOR SALE',
    brandHighlight: 'OFF-SITE & DELIVERED',
    subtitle: 'Huge selection of pristine 1, 2, & 3 bedroom static caravans across 3 showgrounds.',
    ctaText: 'VIEW CARAVANS',
    ctaLink: '/caravans',
    secondaryCta: 'EXPLORE LOCATIONS',
    secondaryLink: '/locations',
    bgImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 3,
    title: 'IDEAL FOR SELF-BUILD & TEMPORARY ACCOMMODATION',
    brandHighlight: 'FREE DELIVERY AVAILABLE',
    subtitle: 'Stay comfortable on site while building your dream home. Guaranteed buyback options.',
    ctaText: 'SELL YOUR CARAVAN',
    ctaLink: '/sell-your-caravan',
    secondaryCta: 'TALK TO AN EXPERT',
    secondaryLink: '/contact',
    bgImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative w-full h-[520px] sm:h-[600px] overflow-hidden bg-slate-900 group">
      {/* Background Slide Image with Dark Overlay Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{ backgroundImage: `url('${slide.bgImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content Container matching design screenshot 1 */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-center items-center text-center z-20">
        
        <div className="max-w-3xl space-y-4 animate-in fade-in zoom-in-95 duration-500 key={slide.id}">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wide uppercase leading-tight drop-shadow-md">
            {slide.title}{' '}
            <span className="block mt-1 text-[#00B050] font-black drop-shadow-lg">
              {slide.brandHighlight}
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium">
            {slide.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Link
              href={slide.ctaLink}
              className="bg-[#00B050] hover:bg-[#009343] text-white px-8 py-3 rounded text-sm sm:text-base font-bold tracking-wider uppercase transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={slide.secondaryLink}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded text-sm font-bold tracking-wider uppercase transition-all"
            >
              {slide.secondaryCta}
            </Link>
          </div>
        </div>

      </div>

      {/* Prev / Next Controls matching original slider design */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-[#00B050] text-white transition-all backdrop-blur-sm opacity-70 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-[#00B050] text-white transition-all backdrop-blur-sm opacity-70 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-[#00B050] w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
