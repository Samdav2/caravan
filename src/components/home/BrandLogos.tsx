import React from 'react';
import { BRAND_LOGOS } from '@/data/caravans';

export const BrandLogos: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Intro Copy matching Screenshot 5 */}
        <div className="text-center text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl mx-auto space-y-4 mb-12">
          <p>
            Caravantastic has a large selection of static caravans and lodges for sale off site and displayed at three showgrounds in Taunton, Exeter and Turners Hill, West Sussex. You can choose from the largest range of luxury used static caravans / secondhand static caravans for easy delivery across Cornwall, Devon, Somerset, Dorset, Sussex and beyond.
          </p>

          <p>
            The three large Caravantastic showgrounds stock a wide range of high quality, popular, luxury{' '}
            <strong className="text-[#00B050] font-bold">used static caravans</strong> and lodges/twin units. Uses for used static caravans vary but popular reasons for purchase are self-build accommodation, caravans for agricultural workers, as temporary or office accommodation, to be sited on a park, or emergency dwelling.
          </p>
        </div>

        {/* Brand Logos Row matching Screenshot 5 */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-85">
          
          {/* Willerby */}
          <div className="border-2 border-yellow-500 bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 font-black px-6 py-2 rounded shadow-sm text-center">
            <span className="text-lg italic tracking-wider block">WILLERBY</span>
            <span className="text-[9px] uppercase tracking-widest text-blue-950 font-bold block">HOLIDAY HOMES</span>
          </div>

          {/* ABI */}
          <div className="border-2 border-blue-900 bg-[#0A2540] text-white px-8 py-2.5 rounded-full font-black text-xl tracking-widest shadow-sm">
            ABI
          </div>

          {/* Cosalt */}
          <div className="border border-slate-300 bg-white text-blue-900 font-serif font-bold px-6 py-2 rounded text-center shadow-sm">
            <span className="text-xl tracking-widest block font-extrabold text-indigo-950">COSALT</span>
            <span className="text-[9px] uppercase font-sans text-slate-600 tracking-wider block">Holiday Homes</span>
          </div>

          {/* Atlas */}
          <div className="border-2 border-red-600 bg-red-700 text-white font-black px-6 py-2.5 rounded text-center shadow-sm">
            <span className="text-lg tracking-wider block">ATLAS</span>
            <span className="text-[8px] uppercase tracking-widest block font-bold">LEISURE HOMES</span>
          </div>

          {/* Swift */}
          <div className="border-2 border-emerald-700 bg-emerald-800 text-white font-bold px-6 py-2 rounded text-center shadow-sm">
            <span className="text-lg tracking-wider block font-black">SWIFT</span>
          </div>

        </div>

      </div>
    </section>
  );
};
