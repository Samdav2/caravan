'use client';

import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '@/data/caravans';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 bg-white border-t border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        
        {/* Quote Icon matching Screenshot 4 */}
        <div className="flex justify-center mb-4">
          <Quote className="w-12 h-12 text-[#00B050] rotate-180 stroke-[1.5]" />
        </div>

        {/* Testimonial Content Container */}
        <div className="min-h-[140px] flex flex-col justify-center items-center">
          <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            "{testimonial.quote}"
          </p>

          <h3 className="mt-4 font-black text-[#00B050] text-sm uppercase tracking-widest">
            {testimonial.author}
          </h3>
        </div>

        {/* Pagination Dots matching Screenshot 4 */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === i
                  ? 'bg-[#00B050] w-6'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
