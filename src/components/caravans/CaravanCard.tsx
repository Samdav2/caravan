'use client';

import React from 'react';
import Link from 'next/link';
import { Caravan } from '@/types';
import { Flame, Zap, Shield, Eye, Link as LinkIcon, ArrowRightLeft, Maximize2 } from 'lucide-react';

interface CaravanCardProps {
  caravan: Caravan;
  onQuickView?: (caravan: Caravan) => void;
}

export const CaravanCard: React.FC<CaravanCardProps> = ({ caravan, onQuickView }) => {
  const isSale = caravan.onSale && caravan.originalPrice;
  const isUsed = caravan.condition === 'USED';
  const detailUrl = `/caravans/${caravan.id}`;

  return (
    <div className="bg-white rounded border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group relative">
      
      {/* Corner Ribbon Tag & Image */}
      <div className="relative overflow-hidden w-full h-56 bg-slate-100">
        
        {/* Ribbon Badge */}
        {isUsed ? (
          <div className="ribbon-badge ribbon-used">USED</div>
        ) : (
          <div className="ribbon-badge ribbon-new">NEW</div>
        )}

        {/* SALE Badge Overlay if on sale */}
        {isSale && (
          <div className="absolute top-2 right-2 z-20 bg-red-600 text-white p-2 rounded text-center shadow-lg border border-red-500">
            <span className="block font-black text-xs tracking-widest uppercase">SALE</span>
            <span className="block text-[10px] line-through text-red-200">
              WAS: £{caravan.originalPrice?.toLocaleString()}
            </span>
            <span className="block font-black text-sm text-yellow-300">
              NOW: £{caravan.price.toLocaleString()}
            </span>
          </div>
        )}

        {/* Image Link */}
        <Link href={detailUrl} className="block w-full h-full">
          <img
            src={caravan.image}
            alt={caravan.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Hover Action Buttons Overlay (Green overlay matching original design) */}
        <div className="absolute inset-0 bg-[#00B050]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10 pointer-events-none group-hover:pointer-events-auto">
          <Link
            href={detailUrl}
            aria-label="View caravan details"
            className="w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-[#00B050] transition-colors"
          >
            <LinkIcon className="w-4 h-4" />
          </Link>

          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView && onQuickView(caravan);
            }}
            aria-label="Compare caravan"
            className="w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-[#00B050] transition-colors"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView && onQuickView(caravan);
            }}
            aria-label="Quick view"
            className="w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-[#00B050] transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Title Bar (Clicking title navigates to product details page) */}
      <Link href={detailUrl} className="bg-[#00B050] hover:bg-[#009343] text-white px-4 py-2.5 text-center font-extrabold text-sm tracking-wide transition-colors block">
        <h3 className="line-clamp-1">{caravan.title}</h3>
      </Link>

      {/* Card Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between text-center bg-slate-50/50">
        
        {/* Price & Green Underline Accent */}
        <Link href={detailUrl} className="space-y-1 my-2 block group-hover:opacity-90">
          <div className="w-10 h-0.5 bg-[#00B050] mx-auto mb-2" />
          <p className="text-xl font-black text-slate-800">
            £{caravan.price.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
          </p>
        </Link>

        {/* Specification Icons (Central Heating / Double Glazing) */}
        <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-slate-200 text-xs text-slate-600 font-semibold my-3">
          
          <div className="flex flex-col items-center gap-1">
            {caravan.heating === 'Electric Heating' || caravan.heating === 'Electric Central Heating' ? (
              <Zap className="w-5 h-5 text-amber-500" />
            ) : (
              <Flame className="w-5 h-5 text-emerald-600" />
            )}
            <span className="text-[11px]">{caravan.heating}</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Shield className="w-5 h-5 text-slate-700" />
            <span className="text-[11px]">{caravan.glazing}</span>
          </div>

        </div>

        {/* View Unit Button (Navigates directly to product details view page) */}
        <div className="pt-2">
          <Link
            href={detailUrl}
            className="w-full bg-[#00B050] hover:bg-[#009343] text-white py-2 px-4 rounded text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>View Unit</span>
          </Link>
        </div>

      </div>

    </div>
  );
};
