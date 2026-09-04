import React from 'react';
import { LOCATIONS } from '@/data/locations';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function LocationsPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-8 rounded-lg mb-10 shadow-md">
          <h1 className="text-3xl font-black uppercase tracking-wide">
            OUR SHOWGROUND <span className="text-[#00B050]">LOCATIONS</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            Visit our 3 massive showgrounds across Exeter, West Sussex, and Taunton. All grounds are fully stocked and open to the public to inspect new and used static caravans in person.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="bg-white rounded-lg border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
              
              <div className="bg-[#00B050] text-white p-5">
                <h2 className="text-xl font-black uppercase">{loc.name}</h2>
                <p className="text-xs text-emerald-100 font-semibold">{loc.county}, United Kingdom</p>
              </div>

              <div className="p-6 space-y-4 text-xs text-slate-700 flex-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00B050] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Address:</strong>
                    <p className="text-slate-600">{loc.address}, {loc.town}, {loc.postCode}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#00B050] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Phone: </strong>
                    <a href={`tel:${loc.phone}`} className="text-[#00B050] hover:underline font-bold">{loc.phone}</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00B050] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Email: </strong>
                    <a href={`mailto:${loc.email}`} className="text-slate-600 hover:underline">{loc.email}</a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                    <Clock className="w-4 h-4 text-[#00B050]" />
                    <span>Opening Hours</span>
                  </div>
                  <div className="space-y-1 pl-6 text-slate-600">
                    {loc.hours.map((h, i) => (
                      <div key={i} className="flex justify-between py-0.5 border-b border-slate-100">
                        <span className="font-semibold">{h.day}:</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-[#00B050] text-white py-2.5 rounded font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <span>GET DIRECTIONS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
