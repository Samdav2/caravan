'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { CARAVANS } from '@/data/caravans';
import { CaravanCard } from '@/components/caravans/CaravanCard';
import { QuickViewModal } from '@/components/caravans/QuickViewModal';
import { Caravan } from '@/types';
import { 
  HelpCircle, 
  Mail, 
  Printer, 
  ArrowLeftRight, 
  Check, 
  Share2, 
  Phone 
} from 'lucide-react';
import Link from 'next/link';

export default function CaravanDetailPage() {
  const params = useParams();
  
  // Find caravan matching id or default to Pemberton Knightsbridge
  const caravan = CARAVANS.find((c) => c.id === params?.id || c.slug === params?.id) || CARAVANS[0];
  const relatedCaravans = CARAVANS.filter((c) => c.id !== caravan.id).slice(0, 4);

  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'FEATURES' | 'GENERAL'>('FEATURES');
  const [quickViewItem, setQuickViewItem] = useState<Caravan | null>(null);

  const galleryImages = caravan.gallery.length > 0 ? caravan.gallery : [caravan.image];

  // Group features into 3 balanced columns matching Screenshot 2
  const featureCols = [
    caravan.features.slice(0, 6),
    caravan.features.slice(6, 12),
    caravan.features.slice(12, 18),
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Dark Hero Banner matching Screenshot 1 */}
      <div 
        className="relative bg-slate-900 py-16 text-center text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs" />
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-widest text-white">
            UNIT DETAILS
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
        
        {/* Top Product Header matching Screenshot 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-4 border-b border-slate-200 mb-6 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase">
              {caravan.title}
            </h2>
          </div>

          <div className="text-left md:text-right flex items-baseline gap-2">
            {caravan.originalPrice && (
              <span className="text-slate-400 line-through text-base font-semibold">
                £{caravan.originalPrice.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
              </span>
            )}
            <span className="text-2xl sm:text-3xl font-black text-[#00B050]">
              £{caravan.price.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Action Buttons Bar matching Screenshot 1 */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs border-b pb-4 border-slate-200">
          
          {/* Left Pill Buttons */}
          <div className="flex flex-wrap gap-2">
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-1.5 rounded-sm flex items-center gap-1.5 font-semibold transition-colors border border-slate-200">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Request More Info</span>
            </button>

            <a 
              href={`mailto:?subject=Inquiry about ${encodeURIComponent(caravan.title)}`}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-1.5 rounded-sm flex items-center gap-1.5 font-semibold transition-colors border border-slate-200"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Email to a Friend</span>
            </a>

            <button 
              onClick={() => window.print()}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-1.5 rounded-sm flex items-center gap-1.5 font-semibold transition-colors border border-slate-200"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print</span>
            </button>
          </div>

          {/* Right Compare & Social Share */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1.5 text-[#00B050] font-bold hover:underline">
              <ArrowLeftRight className="w-4 h-4" />
              <span>Add to compare</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-semibold">Share :</span>
              <div className="flex items-center gap-1.5">
                <a href="#" className="w-6 h-6 rounded-full bg-[#00B050] text-white flex items-center justify-center hover:opacity-80">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-[#00B050] text-white flex items-center justify-center hover:opacity-80">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-[#00B050] text-white flex items-center justify-center hover:opacity-80">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Main 2-Column Product Layout matching Screenshots 1 & 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Image Gallery (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Product Image Container */}
            <div className="relative border border-slate-200 bg-white rounded overflow-hidden shadow-sm">
              
              {/* SALE Banner Overlay matching Screenshot 1 */}
              {caravan.onSale && (
                <div className="absolute top-4 right-4 z-10 bg-red-600 text-white p-3 rounded text-center shadow-xl border-2 border-red-500">
                  <span className="block font-black text-lg uppercase tracking-wider">SALE</span>
                  {caravan.originalPrice && (
                    <span className="block text-xs line-through text-red-200 font-bold">
                      WAS: £{caravan.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="block font-black text-sm text-yellow-300">
                    NOW: £{caravan.price.toLocaleString()}
                  </span>
                </div>
              )}

              {/* Main Image */}
              <div className="h-80 sm:h-96 w-full bg-slate-100">
                <img
                  src={galleryImages[selectedImage]}
                  alt={caravan.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ALL ELECTRIC MODEL Banner Bar matching Screenshot 2 */}
              <div className="bg-[#00A4B8] text-white py-2 px-4 text-center font-black text-lg sm:text-xl uppercase tracking-widest">
                ALL ELECTRIC MODEL
              </div>
            </div>

            {/* Gallery Thumbnails Row matching Screenshot 2 */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-18 sm:h-20 rounded overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-[#00B050] scale-102 shadow-md'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Right Column: DESCRIPTION Spec Table (5 Cols) matching Screenshot 1 */}
          <div className="lg:col-span-5 bg-white p-6 rounded border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base uppercase tracking-wider mb-2">
                DESCRIPTION
              </h3>
              <div className="w-8 h-0.5 bg-[#00B050] mb-6" />

              {/* Spec Key-Value Table matching Screenshot 1 */}
              <div className="space-y-0 text-xs divide-y divide-slate-100">
                
                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Year</span>
                  <strong className="text-slate-800">{caravan.year || 2010}</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Location</span>
                  <strong className="text-slate-800">{caravan.location}</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Manufacturer</span>
                  <strong className="text-slate-800">{caravan.brand}</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Bedrooms</span>
                  <strong className="text-slate-800">{caravan.bedrooms} Bedroom</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Size</span>
                  <strong className="text-slate-800">{caravan.size || '38ft & Bigger'}</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Condition</span>
                  <strong className="text-slate-800">{caravan.condition === 'USED' ? 'Used' : 'New'}</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Stock Number</span>
                  <strong className="text-slate-800">{caravan.stockNumber || '6388'}</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Type</span>
                  <strong className="text-slate-800">{caravan.type || 'Caravan'}</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Central Heating</span>
                  <strong className="text-slate-800">{caravan.heating}</strong>
                </div>

                <div className="grid grid-cols-2 py-2.5">
                  <span className="text-slate-400 font-medium">Double Glazing</span>
                  <strong className="text-slate-800">{caravan.glazing}</strong>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* FEATURES & OPTIONS Tabs Section matching Screenshot 2 */}
        <div className="bg-white rounded border border-slate-200 shadow-sm p-6 mb-12">
          
          {/* Tab Controls */}
          <div className="flex border-b border-slate-200 mb-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider gap-8">
            <button
              onClick={() => setActiveTab('FEATURES')}
              className={`pb-3 transition-colors relative flex items-center gap-2 ${
                activeTab === 'FEATURES'
                  ? 'text-[#00B050] border-b-2 border-[#00B050]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>FEATURES & OPTIONS</span>
            </button>

            <button
              onClick={() => setActiveTab('GENERAL')}
              className={`pb-3 transition-colors relative flex items-center gap-2 ${
                activeTab === 'GENERAL'
                  ? 'text-[#00B050] border-b-2 border-[#00B050]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>GENERAL INFORMATION</span>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'FEATURES' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-8 text-xs text-slate-600 font-semibold">
              {featureCols.map((col, colIdx) => (
                <div key={colIdx} className="space-y-3">
                  {col.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#00B050] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-slate-600 leading-relaxed space-y-3">
              <p>{caravan.description}</p>
              <p>
                Situated at our <strong>{caravan.location}</strong> showground. Delivery available across Somerset, Devon, Dorset, Sussex, and nationwide throughout the UK.
              </p>
            </div>
          )}

        </div>

        {/* RELATED VEHICLE Section matching Screenshot 3 */}
        <div className="mb-8">
          <div className="mb-6">
            <h3 className="font-extrabold text-slate-800 text-lg uppercase tracking-wider">
              RELATED VEHICLE
            </h3>
            <div className="w-8 h-0.5 bg-[#00B050] mt-1" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCaravans.map((item) => (
              <CaravanCard
                key={item.id}
                caravan={item}
                onQuickView={(caravanItem) => setQuickViewItem(caravanItem)}
              />
            ))}
          </div>
        </div>

      </div>

      <QuickViewModal
        caravan={quickViewItem}
        onClose={() => setQuickViewItem(null)}
      />
    </div>
  );
}
