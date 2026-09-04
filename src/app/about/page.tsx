'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Car, 
  Headphones, 
  Calendar, 
  PiggyBank, 
  Play, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Package,
  Star,
  Users,
  Home
} from 'lucide-react';

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Hya Katelyn hope you're well 🥰 Just want to say thank you so much for working your magic and getting our caravan delivered before Easter 🥳 You saved us from being homeless and made our house move so much less stressful 💕 You've all been so amazing. Thank you again and happy Easter xxx",
      author: "KATIE & SAM"
    },
    {
      text: "Hi Gary — just a short note to say thanks again for everything. The caravan arrived safe and sound and in excellent condition. Caravan transport team were an absolute credit to your business. Thanks again!",
      author: "ALAN"
    },
    {
      text: "And what a surprise it was to receive a lovely hamper from your selfs. The biscuits and wine lasted very long. Lol. Very happy with the whole experience and your team members. Thank you!",
      author: "KEVIN"
    }
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
            ABOUT US
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-12">
        
        {/* Intro Header Section matching Screenshot 1 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-slate-400 tracking-wider block mb-1">
            Caravantastic
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase mb-3">
            USED STATIC CARAVANS – WE BUY &amp; SELL
          </h2>
          <div className="w-12 h-0.5 bg-[#00B050] mx-auto mb-6" />

          <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
            <p>
              With several Showgrounds we are sure to have the caravan or lodge that you are after.
            </p>
            <p>
              Our Showgrounds include Taunton, Somerset, easily accessible from the M5 motorway at Junction 25. Our Exeter Showground in Matford. Or our latest showground in Turners Hill, West Sussex, a short 15-minute drive from Gatwick Airport.
            </p>
            <p>
              We are able to offer a large range of sizes, models, and ages from all the leading major manufacturers. At any one time, we will have approximately 150+ quality used and new static caravans and lodges available to view. Please do not hesitate to call us to enquire about the range of caravans and lodges on offer today.
            </p>
          </div>
        </div>

        {/* Aerial Image + Details Column matching Screenshot 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-lg overflow-hidden shadow-md border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
              alt="Caravantastic Showground Aerial View"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs text-slate-600 leading-relaxed">
            <p>
              Caravantastic supplies <strong className="text-slate-800">used static caravans</strong> and new caravans and pre-owned lodges, also known as mobile homes or caravan holiday homes, to trade and retail customers throughout the south and south west including Somerset, Bristol, Bath, Devon, Dorset, Cornwall, Gloucestershire, Hampshire, Wiltshire, Berkshire, Buckinghamshire, Kent, Sussex and the whole Home Counties area, as well as all other regions of the U.K. We also supply many European destinations such as Eire, France, Holland, Belgium and Poland. You can{' '}
              <Link href="/caravans" className="text-[#00B050] font-bold hover:underline">
                view our current caravans for sale here.
              </Link>
            </p>
            <p>
              Whether it be temporary or office accommodation for individuals undertaking a self build or renovation project, additional accommodation for agricultural companies, stables and farmers needing accommodation solutions for seasonal or permanent labour or insurance companies who need temporary home solutions for homeowners in the event of damage to their properties through Fire or Floods we offer a comprehensive static caravan service.
            </p>
          </div>
        </div>

        {/* 4 Feature Icons Bar matching Screenshot 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-6 border-y border-slate-200">
          
          <div className="flex items-center gap-3 justify-center text-left">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">ALL MAKES &amp; MODELS</h4>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center text-left">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">ON-GOING SUPPORT</h4>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center text-left">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">EST. 1988</h4>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center text-left">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <PiggyBank className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs tracking-wider uppercase">VALUE FOR MONEY</h4>
            </div>
          </div>

        </div>

        {/* OUR HISTORY Timeline Section matching Screenshots 2 & 3 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-slate-400 tracking-wider block mb-1">
              Caravantastic
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase mb-3">
              OUR HISTORY
            </h2>
            <div className="w-12 h-0.5 bg-[#00B050] mx-auto" />
          </div>

          {/* Vertical Alternating Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 relative">
              
              {/* Item 1 - Left / Highlighted Green */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="bg-[#00B050] text-white p-6 rounded shadow-md border-l-4 md:border-l-0 md:border-r-4 border-emerald-700">
                    <h3 className="font-black text-sm uppercase tracking-wide mb-2">
                      NEW SHOWGROUND - HIGHBRIDGE
                    </h3>
                    <div className="w-8 h-0.5 bg-white/40 mb-3 ml-auto md:ml-0" />
                    <p className="text-xs text-emerald-50 leading-relaxed">
                      The current Highbridge showground, on the site of the Old Bacon Factory, was purchased.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-10 h-10 rounded-full bg-[#00B050] text-white font-black text-sm flex items-center justify-center z-10 shadow border-4 border-white -ml-5">
                    1
                  </div>
                </div>
              </div>

              {/* Item 2 - Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-700 border-2 border-slate-300 font-black text-sm flex items-center justify-center z-10 shadow -mr-5">
                    2
                  </div>
                </div>
                <div>
                  <div className="bg-white p-6 rounded border border-slate-200 shadow-sm border-l-4 border-[#00B050]">
                    <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide mb-2">
                      CARAVANTASTIC BRINGS YEARS OF EXPERIENCE
                    </h3>
                    <div className="w-8 h-0.5 bg-[#00B050] mb-3" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Caravantastic comes to Highbridge, bringing a wealth of experience and knowledge within the holiday industry, including being the Somerset Delta Caravans Dealer!
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 - Left */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded border border-slate-200 shadow-sm border-r-4 border-slate-300">
                    <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide mb-2">
                      NEW EXETER SHOWGROUND
                    </h3>
                    <div className="w-8 h-0.5 bg-[#00B050] mb-3 ml-auto md:ml-0" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The new Caravantastic Exeter Showground opened in 2019 and sells all types of caravans and lodges across the South West.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-700 border-2 border-slate-300 font-black text-sm flex items-center justify-center z-10 shadow -ml-5">
                    3
                  </div>
                </div>
              </div>

              {/* Item 4 - Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-700 border-2 border-slate-300 font-black text-sm flex items-center justify-center z-10 shadow -mr-5">
                    4
                  </div>
                </div>
                <div>
                  <div className="bg-white p-6 rounded border border-slate-200 shadow-sm border-l-4 border-slate-300">
                    <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide mb-2">
                      NEW WEST SUSSEX SHOWGROUND
                    </h3>
                    <div className="w-8 h-0.5 bg-[#00B050] mb-3" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The new Caravantastic Turners Hill, West Sussex Showground opened in 2022 and sells all types of caravans and lodges across the Sussex area and beyond.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Promo Video Banner Section matching Screenshot 3 */}
        <div className="mb-20 rounded-lg overflow-hidden border border-slate-300 shadow-lg relative bg-slate-900 max-w-4xl mx-auto">
          <div className="relative h-80 sm:h-96 flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
              alt="Caravantastic Promo Video"
              fill
              className="object-cover opacity-60"
            />
            
            <div className="absolute top-4 left-4 flex items-center gap-3 text-white z-10">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs">
                X
              </div>
              <div>
                <h4 className="font-bold text-sm">Caravantastic Promo - Sept 2020</h4>
                <p className="text-[10px] text-slate-300">Toby Rix</p>
              </div>
            </div>

            <button className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl z-10 cursor-pointer">
              <Play className="w-8 h-8 fill-white translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Dark Key Statistics Counter Bar matching Screenshot 4 */}
      <div className="bg-black text-white py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="border-r border-slate-800 last:border-0 pr-4">
            <span className="text-slate-400 text-xs font-extrabold uppercase tracking-widest block mb-2">
              CARAVANS IN STOCK
            </span>
            <div className="flex items-center justify-center gap-3">
              <Package className="w-6 h-6 text-slate-400" />
              <span className="text-4xl font-black tracking-tight">75</span>
            </div>
          </div>

          <div className="border-r border-slate-800 last:border-0 pr-4">
            <span className="text-slate-400 text-xs font-extrabold uppercase tracking-widest block mb-2">
              REVIEWS
            </span>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-6 h-6 text-slate-400" />
              <span className="text-4xl font-black tracking-tight">100</span>
            </div>
          </div>

          <div className="border-r border-slate-800 last:border-0 pr-4">
            <span className="text-slate-400 text-xs font-extrabold uppercase tracking-widest block mb-2">
              HAPPY CUSTOMERS
            </span>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-slate-400" />
              <span className="text-4xl font-black tracking-tight">789</span>
            </div>
          </div>

          <div>
            <span className="text-slate-400 text-xs font-extrabold uppercase tracking-widest block mb-2">
              LODGES FOR SALE
            </span>
            <div className="flex items-center justify-center gap-3">
              <Home className="w-6 h-6 text-slate-400" />
              <span className="text-4xl font-black tracking-tight">26</span>
            </div>
          </div>

        </div>
      </div>

      {/* Testimonials Banner matching Screenshot 4 */}
      <div 
        className="relative bg-slate-900 py-20 text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-slate-950/85" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <span className="text-xs font-medium text-slate-300 tracking-wider block mb-1">
            What Our Happy Clients say about us
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase mb-2">
            OUR TESTIMONIAL
          </h2>
          <div className="w-12 h-0.5 bg-[#00B050] mx-auto mb-10" />

          {/* Testimonial Green Card */}
          <div className="bg-[#00B050] text-white p-8 sm:p-10 rounded-lg shadow-xl text-left relative max-w-2xl mx-auto">
            <Quote className="w-10 h-10 text-white/30 absolute top-4 left-4" />
            <p className="text-xs sm:text-sm leading-relaxed mb-6 font-medium relative z-10">
              {testimonials[activeTestimonial].text}
            </p>
            <div className="pt-4 border-t border-white/20">
              <span className="font-extrabold text-xs tracking-wider uppercase">
                {testimonials[activeTestimonial].author}
              </span>
            </div>
          </div>

          {/* Carousel Dot Navigation Controls */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTestimonial === index ? 'bg-[#00B050]' : 'bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Testimonial slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
