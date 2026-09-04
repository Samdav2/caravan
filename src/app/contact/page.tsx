'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-lg mb-10 shadow-md">
          <h1 className="text-3xl font-black uppercase tracking-wide">
            CONTACT <span className="text-[#00B050]">CARAVANTASTIC</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            Have questions about a static caravan or want to arrange a viewing at one of our showgrounds? Get in touch with our friendly team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 uppercase mb-4">
              SEND US A MESSAGE
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-6 rounded text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#00B050] mx-auto" />
                <h3 className="font-bold text-slate-800">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600">
                  Thank you for reaching out. A team member will respond to your query shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full p-2.5 border border-slate-300 rounded focus:outline-none focus:border-[#00B050]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="01278 786199"
                      className="w-full p-2.5 border border-slate-300 rounded focus:outline-none focus:border-[#00B050]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full p-2.5 border border-slate-300 rounded focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Showground</label>
                  <select className="w-full p-2.5 border border-slate-300 rounded focus:outline-none focus:border-[#00B050] bg-white">
                    <option value="Taunton">Taunton Showground (Somerset)</option>
                    <option value="Exeter">Exeter Showground (Devon)</option>
                    <option value="West Sussex">West Sussex Showground (Crawley)</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you are looking for..."
                    className="w-full p-2.5 border border-slate-300 rounded focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00B050] hover:bg-[#009343] text-white py-3 rounded font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  SEND MESSAGE NOW
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-lg border border-slate-800 space-y-4 text-xs">
              <h3 className="font-extrabold text-sm uppercase text-[#00B050] border-b pb-2 border-slate-800">
                Direct Contact
              </h3>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00B050]" />
                <div>
                  <span className="block text-slate-400">Head Office Phone:</span>
                  <a href="tel:01278786199" className="font-bold text-white hover:text-[#00B050]">01278 786199</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00B050]" />
                <div>
                  <span className="block text-slate-400">Email Enquiries:</span>
                  <a href="mailto:info@caravantastic.com" className="font-bold text-white hover:text-[#00B050]">info@caravantastic.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#00B050]" />
                <div>
                  <span className="block text-slate-400">Office Hours:</span>
                  <span className="font-bold text-white">Mon - Fri: 9am - 5pm</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 text-xs space-y-3">
              <h3 className="font-bold text-slate-900 uppercase">Showground Addresses</h3>
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="border-b pb-2 border-slate-100 last:border-none">
                  <span className="font-bold text-[#00B050]">{loc.name}</span>
                  <p className="text-slate-600 text-[11px]">{loc.address}, {loc.postCode}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
