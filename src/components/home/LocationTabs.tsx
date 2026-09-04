'use client';

import React, { useState } from 'react';
import { LOCATIONS } from '@/data/locations';
import { Navigation, Clock, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export const LocationTabs: React.FC = () => {
  const [activeLocationId, setActiveLocationId] = useState<string>('exeter');

  const selectedLocation = LOCATIONS.find((loc) => loc.id === activeLocationId) || LOCATIONS[0];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching Screenshot 3 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase">
            EXPLORE OUR LOCATIONS
          </h2>
          <div className="w-16 h-1 bg-[#00B050] mx-auto mt-3 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mt-3">
            Visit our 3 massive showgrounds across Exeter, West Sussex, and Taunton to view stock in person.
          </p>
        </div>

        {/* Location Selector Tabs matching Screenshot 3 */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap border-b border-slate-200 gap-2 mb-6">
            {LOCATIONS.map((loc) => {
              const isActive = loc.id === activeLocationId;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-extrabold text-xs uppercase tracking-wider transition-all rounded-t-md cursor-pointer ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 border-t-2 border-[#00B050] shadow-sm'
                      : 'bg-slate-50 text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <Navigation className={`w-3.5 h-3.5 ${isActive ? 'text-[#00B050]' : 'text-slate-400'}`} />
                  <span>{loc.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Location Content Box matching Screenshot 3 */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: Address & Opening Hours Table */}
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-[#00B050] flex-shrink-0 mt-0.5" />
                <p className="font-medium">
                  {selectedLocation.address}, {selectedLocation.town}, {selectedLocation.county}, {selectedLocation.postCode}
                </p>
              </div>

              <div className="pt-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00B050]" />
                  <span>Opening Hours:</span>
                </h4>

                <div className="space-y-1.5 pl-6">
                  {selectedLocation.hours.map((h, i) => (
                    <div key={i} className="flex justify-between max-w-xs text-slate-600 py-0.5 border-b border-slate-200/60">
                      <span className="font-semibold text-slate-700">{h.day}:</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact & Quick Directions CTA */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3 text-xs">
                <h4 className="font-bold text-slate-900 text-sm uppercase text-[#00B050]">
                  {selectedLocation.name}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Our {selectedLocation.shortName} showground has dozens of luxury used static caravans and new twin lodges on display ready for inspection.
                </p>
                <div className="pt-2 space-y-2 font-medium">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-[#00B050]" />
                    <span><strong>Phone:</strong> {selectedLocation.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="w-4 h-4 text-[#00B050]" />
                    <span><strong>Email:</strong> {selectedLocation.email}</span>
                  </div>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(selectedLocation.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00B050] hover:bg-[#009343] text-white py-3 rounded font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
