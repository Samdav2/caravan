'use client';

import React, { useState } from 'react';
import { Caravan } from '@/types';
import { X, Check, Phone, Mail, MapPin, Shield, Flame, Bed, Calendar, Maximize2 } from 'lucide-react';

interface QuickViewModalProps {
  caravan: Caravan | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ caravan, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (!caravan) return null;

  const images = caravan.gallery.length > 0 ? caravan.gallery : [caravan.image];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#00B050] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
              {caravan.condition}
            </span>
            <span className="text-slate-400 text-xs font-semibold">
              Showground: {caravan.location}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">{caravan.title}</h2>
          <p className="text-[#00B050] font-black text-2xl mt-2">
            £{caravan.price.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
            {caravan.originalPrice && (
              <span className="text-sm text-slate-400 line-through ml-2 font-normal">
                WAS £{caravan.originalPrice.toLocaleString()}
              </span>
            )}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={images[selectedImage]}
                alt={caravan.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Selectors */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-16 rounded border-2 overflow-hidden flex-shrink-0 transition-all ${
                      selectedImage === idx ? 'border-[#00B050] scale-105' : 'border-slate-200 opacity-60'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#00B050]" />
                <span><strong>Bedrooms:</strong> {caravan.bedrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#00B050]" />
                <span><strong>Dimensions:</strong> {caravan.dimensions}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#00B050]" />
                <span><strong>Heating:</strong> {caravan.heating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00B050]" />
                <span><strong>Glazing:</strong> {caravan.glazing}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00B050]" />
                <span><strong>Year:</strong> {caravan.year || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00B050]" />
                <span><strong>Location:</strong> {caravan.location}</span>
              </div>
            </div>

          </div>

          {/* Right: Description & Inquiry Form */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-sm uppercase mb-2 border-b pb-1 border-slate-200">
                Description & Highlights
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {caravan.description}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                {caravan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B050] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-slate-900 text-xs uppercase mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00B050]" />
                <span>Inquire About This Caravan</span>
              </h4>

              {submitted ? (
                <div className="bg-emerald-600 text-white p-4 rounded text-center text-xs font-bold animate-in fade-in">
                  ✓ Thank you! Your inquiry has been sent to our {caravan.location} team.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      className="w-full p-2 border border-slate-300 rounded bg-white focus:outline-none focus:border-[#00B050]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      className="w-full p-2 border border-slate-300 rounded bg-white focus:outline-none focus:border-[#00B050]"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full p-2 border border-slate-300 rounded bg-white focus:outline-none focus:border-[#00B050]"
                  />
                  <textarea
                    rows={2}
                    placeholder={`Interested in ${caravan.title}. Please provide delivery details...`}
                    className="w-full p-2 border border-slate-300 rounded bg-white focus:outline-none focus:border-[#00B050]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#00B050] hover:bg-[#009343] text-white py-2.5 rounded font-bold uppercase tracking-wider text-xs shadow-md transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
