'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CARAVANS } from '@/data/caravans';
import { Caravan } from '@/types';
import { CaravanCard } from '../caravans/CaravanCard';
import { QuickViewModal } from '../caravans/QuickViewModal';
import { ArrowRight, Filter } from 'lucide-react';

export const FeaturedListings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'USED' | 'NEW' | '2BED' | '3BED'>('ALL');
  const [selectedCaravan, setSelectedCaravan] = useState<Caravan | null>(null);

  const filteredCaravans = CARAVANS.filter((item) => {
    if (activeTab === 'USED') return item.condition === 'USED';
    if (activeTab === 'NEW') return item.condition === 'NEW';
    if (activeTab === '2BED') return item.bedrooms === 2;
    if (activeTab === '3BED') return item.bedrooms === 3;
    return true;
  });

  return (
    <section className="py-16 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching screenshot 2 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase">
            STATIC CARAVANS & LODGES FOR SALE
          </h2>
          <div className="w-16 h-1 bg-[#00B050] mx-auto mt-3 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mt-3">
            Browse our latest stock available off-site with fast delivery nationwide or visit one of our 3 showgrounds.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 text-xs font-bold">
          {[
            { label: 'ALL CARAVANS', value: 'ALL' },
            { label: 'USED CARAVANS', value: 'USED' },
            { label: 'NEW LODGES', value: 'NEW' },
            { label: '2 BEDROOMS', value: '2BED' },
            { label: '3 BEDROOMS', value: '3BED' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-5 py-2.5 rounded transition-all uppercase cursor-pointer border ${
                activeTab === tab.value
                  ? 'bg-[#00B050] text-white border-[#00B050] shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#00B050] hover:text-[#00B050]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Caravan Cards matching Screenshot 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaravans.map((caravan) => (
            <CaravanCard
              key={caravan.id}
              caravan={caravan}
              onQuickView={(item) => setSelectedCaravan(item)}
            />
          ))}
        </div>

        {/* CTA to View All Caravans */}
        <div className="mt-12 text-center">
          <Link
            href="/caravans"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#00B050] text-white px-8 py-3.5 rounded font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>VIEW ALL AVAILABLE CARAVANS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        caravan={selectedCaravan}
        onClose={() => setSelectedCaravan(null)}
      />
    </section>
  );
};
