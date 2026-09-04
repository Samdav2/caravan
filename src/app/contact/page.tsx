'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Headphones, 
  Mail, 
  Clock, 
  HelpCircle, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            CONTACT US
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-12">
        
        {/* Header Section matching Screenshot 1 */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-slate-400 tracking-wider block mb-1">
            We&apos;d Love To Hear From You And Help ...
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase mb-3">
            GET IN TOUCH!
          </h2>
          <div className="w-12 h-0.5 bg-[#00B050]" />
        </div>

        {/* 3 Showground Location Cards matching Screenshots 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Taunton Showground Card */}
          <div className="bg-slate-100 rounded overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="relative h-48 w-full bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
                alt="Taunton Showground"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <MapPin className="w-6 h-6 text-[#00B050] mx-auto" />
                <h3 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                  TAUNTON ADDRESS
                </h3>
                <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Caravantastic Showground, Thornfalcon Works, Henlade, Taunton, TA3 5DN
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-1">
                <Headphones className="w-5 h-5 text-[#00B050] mx-auto mb-1" />
                <h4 className="font-extrabold text-slate-800 text-[11px] uppercase tracking-wider">
                  PHONE (TAUNTON)
                </h4>
                <a href="tel:01278780565" className="text-xs text-slate-500 font-semibold hover:text-[#00B050] block">
                  01278 780 565
                </a>
              </div>
            </div>
          </div>

          {/* West Sussex Showground Card */}
          <div className="bg-slate-100 rounded overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="relative h-48 w-full bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
                alt="West Sussex Showground"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <MapPin className="w-6 h-6 text-[#00B050] mx-auto" />
                <h3 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                  WEST SUSSEX ADDRESS
                </h3>
                <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Caravantastic Ltd, East Street, Turners Hill, Crawley, West Sussex, RH10 4QQ
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-1">
                <Headphones className="w-5 h-5 text-[#00B050] mx-auto mb-1" />
                <h4 className="font-extrabold text-slate-800 text-[11px] uppercase tracking-wider">
                  PHONE (WEST SUSSEX)
                </h4>
                <a href="tel:01342718622" className="text-xs text-slate-500 font-semibold hover:text-[#00B050] block">
                  01342 718622
                </a>
              </div>
            </div>
          </div>

          {/* Exeter Showground Card */}
          <div className="bg-slate-100 rounded overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="relative h-48 w-full bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
                alt="Exeter Showground"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <MapPin className="w-6 h-6 text-[#00B050] mx-auto" />
                <h3 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                  EXETER ADDRESS
                </h3>
                <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Caravantastic Showground, Matford Home Farm, Matford, Exeter, Devon, EX2 8XT
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-1">
                <Headphones className="w-5 h-5 text-[#00B050] mx-auto mb-1" />
                <h4 className="font-extrabold text-slate-800 text-[11px] uppercase tracking-wider">
                  PHONE (EXETER)
                </h4>
                <a href="tel:01392757879" className="text-xs text-slate-500 font-semibold hover:text-[#00B050] block">
                  01392 757879
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Email Box matching Screenshot 2 */}
        <div className="bg-slate-100 rounded p-6 text-center border border-slate-200 shadow-sm mb-12">
          <Mail className="w-6 h-6 text-[#00B050] mx-auto mb-1" />
          <h3 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">
            EMAIL
          </h3>
          <a href="mailto:info@caravantastic.com" className="text-xs text-slate-500 font-medium hover:text-[#00B050] mt-0.5 block">
            info@caravantastic.com
          </a>
        </div>

        {/* Form + Opening Hours Grid matching Screenshots 2 & 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Form Column (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 rounded text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#00B050] mx-auto" />
                <h3 className="font-bold text-slate-800 text-base">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for getting in touch. One of our team members will respond to your comment shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#00B050] text-white px-6 py-2 rounded text-xs font-bold uppercase mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-500 font-semibold mb-1">Name*</label>
                    <input
                      type="text"
                      required
                      className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-500 font-semibold mb-1">Email*</label>
                    <input
                      type="email"
                      required
                      className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-500 font-semibold mb-1">Phone*</label>
                    <input
                      type="tel"
                      required
                      className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-500 font-semibold mb-1">Comment*</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00B050] hover:bg-[#009343] text-white py-3 rounded text-xs font-extrabold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Send
                </button>
              </form>
            )}
          </div>

          {/* Opening Hours Box (4 cols) matching Screenshots 2 & 3 */}
          <div className="lg:col-span-4 bg-slate-100 p-6 rounded border border-slate-200 shadow-sm space-y-4">
            <div>
              <h3 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase mb-1">
                OPENING HOURS
              </h3>
              <div className="w-8 h-0.5 bg-[#00B050]" />
            </div>

            <div className="space-y-2 text-[11px] text-slate-600">
              <div className="flex justify-between border-b pb-1 border-slate-200">
                <span className="font-semibold text-slate-800">Monday</span>
                <span>9:00 AM to 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-1 border-slate-200">
                <span className="font-semibold text-slate-800">Tuesday</span>
                <span>9:00 AM to 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-1 border-slate-200">
                <span className="font-semibold text-slate-800">Wednesday</span>
                <span>9:00 AM to 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-1 border-slate-200">
                <span className="font-semibold text-slate-800">Thursday</span>
                <span>9:00 AM to 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-1 border-slate-200">
                <span className="font-semibold text-slate-800">Friday</span>
                <span>9:00 AM to 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-1 border-slate-200">
                <span className="font-semibold text-slate-800">Saturday</span>
                <span>10:00 AM to 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-800">Sunday</span>
                <span>10:00 AM to 4:00 PM</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 font-medium leading-relaxed">
              <p>
                Our Exeter and Turners Hill Showgrounds are open till 5pm Weekdays and Closed on Sundays.
              </p>
            </div>
          </div>

        </div>

        {/* 3 Pillar Feature Icons Row matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-slate-200 mb-16 text-center">
          
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">
              NO APPOINTMENT
            </h4>
            <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
              You don&apos;t need to book an appointment to visit the showgrounds. Simply come along and have a look around!
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#00B050] flex items-center justify-center text-white mx-auto shadow-md">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">
              CARAVAN SUPPORT
            </h4>
            <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
              We have a team ready to answer any questions you may have on a unit you have purchased or looking to purchase.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mx-auto">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">
              MANY LOCATIONS
            </h4>
            <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
              With showgrounds across the South West and West Sussex we are sure to be close enough for you to drop by.
            </p>
          </div>

        </div>

      </div>

      {/* Full Width Embedded Google Maps Section matching Screenshots 3 & 4 */}
      <div className="space-y-4 border-t border-slate-200 pt-6 bg-slate-100">
        
        {/* Map 1: Exeter */}
        <div className="h-72 w-full relative shadow-inner">
          <iframe
            title="Caravantastic Exeter Location Map"
            src="https://maps.google.com/maps?q=Exeter%20EX2%208XT&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
          />
        </div>

        {/* Map 2: Taunton */}
        <div className="h-72 w-full relative shadow-inner">
          <iframe
            title="Caravantastic Somerset Location Map"
            src="https://maps.google.com/maps?q=Taunton%20TA3%205DN&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
          />
        </div>

        {/* Map 3: West Sussex */}
        <div className="h-72 w-full relative shadow-inner">
          <iframe
            title="Caravantastic West Sussex Location Map"
            src="https://maps.google.com/maps?q=Turners%20Hill%20RH10%204QQ&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
          />
        </div>

      </div>

    </div>
  );
}
