'use client';

import React, { useState } from 'react';
import { Upload, MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function SellYourCaravanPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedMake, setSelectedMake] = useState('Atlas');
  const [doubleGlazing, setDoubleGlazing] = useState(false);
  const [centralHeating, setCentralHeating] = useState(false);
  const [electricHeating, setElectricHeating] = useState(false);

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
            SELL YOUR CARAVAN
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-12">
        
        {/* Intro Section Header */}
        <div className="mb-8">
          <span className="text-xs font-bold text-slate-500 tracking-wide uppercase block mb-1">
            3 Simple Steps To Selling Your Static Caravan Caravantastic
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase">
            WE BUY STATIC CARAVANS
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 space-y-2 mt-4 max-w-4xl leading-relaxed">
            <p className="font-semibold text-slate-700">
              Are you thinking &quot;who buys old static caravans?&quot; or &quot;I need to sell my static caravan&quot;?
            </p>
            <p>
              If you&apos;re looking for someone to buy your old static caravan, we purchase units from private sellers if the static caravan or lodge you are selling is a make/model with features and quality we require. If you need to sell your static caravan off-site fast, give us a try. It&apos;s a simple process - Just fill in the form opposite or give us a quick call. You&apos;ve got nothing to lose, and your static caravan or lodge may be just the thing we&apos;re looking for right now.
            </p>
          </div>
        </div>

        {/* Form + 3 Steps Layout matching Screenshots 1 & 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 rounded text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#00B050] mx-auto" />
                <h3 className="text-lg font-bold text-slate-800 uppercase">Valuation Submitted Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your caravan details. Our buying team will review your information and get back to you promptly with an offer.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#00B050] text-white px-6 py-2.5 rounded text-xs font-bold uppercase transition-colors hover:bg-[#009343]"
                >
                  Submit Another Caravan
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Your Name (required)</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Your Email (required)</label>
                  <input
                    type="email"
                    required
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Your Telephone (required)</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-2.5 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Make</label>
                  <select
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded text-slate-700 focus:bg-white focus:outline-none focus:border-[#00B050]"
                  >
                    <option value="Atlas">Atlas</option>
                    <option value="ABI">ABI</option>
                    <option value="Willerby">Willerby</option>
                    <option value="Pemberton">Pemberton</option>
                    <option value="Carnaby">Carnaby</option>
                    <option value="Cosalt">Cosalt</option>
                    <option value="Omar">Omar</option>
                    <option value="Swift">Swift</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Model</label>
                  <input
                    type="text"
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Year of Manufacture</label>
                  <input
                    type="text"
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Size (Eg. 28 x 10ft)</label>
                  <input
                    type="text"
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1.5">Extras</label>
                  <div className="flex flex-wrap gap-4 text-slate-600">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={doubleGlazing}
                        onChange={(e) => setDoubleGlazing(e.target.checked)}
                        className="accent-[#00B050]"
                      />
                      <span>Double Glazing</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={centralHeating}
                        onChange={(e) => setCentralHeating(e.target.checked)}
                        className="accent-[#00B050]"
                      />
                      <span>Central Heating</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={electricHeating}
                        onChange={(e) => setElectricHeating(e.target.checked)}
                        className="accent-[#00B050]"
                      />
                      <span>Electric Heating</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Location of Caravan (Inc Postcode)</label>
                  <input
                    type="text"
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Additional Information</label>
                  <textarea
                    rows={4}
                    className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-[#00B050]"
                  />
                </div>

                {/* Drag & Drop Upload Zone matching Screenshot 3 */}
                <div className="border-2 border-dashed border-slate-300 rounded p-6 text-center bg-slate-50 hover:bg-emerald-50/40 border-slate-300 hover:border-[#00B050] transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="font-extrabold text-slate-700 text-xs tracking-wider uppercase">
                    DRAG &amp; DROP FILES HERE
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    or <span className="text-[#00B050] font-semibold underline">Browse Files</span>
                  </p>
                  <span className="text-[10px] text-slate-400 mt-2 block">0 of 8</span>
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

          {/* 3 Simple Steps Column (5 cols) matching Screenshots 1 & 2 */}
          <div className="lg:col-span-5 space-y-6 text-xs text-slate-600 leading-relaxed">
            
            {/* STEP 1 */}
            <div className="space-y-1.5">
              <h3 className="font-black text-slate-800 text-sm tracking-wide uppercase">
                STEP 1:
              </h3>
              <p>
                Get a price ASAP for your static caravan by completing the form below, or by calling us on either{' '}
                <a href="tel:01278780565" className="text-[#00B050] font-bold hover:underline">01278 780565</a> or{' '}
                <a href="tel:01342718622" className="text-[#00B050] font-bold hover:underline">01342 718622</a>{' '}
                **Don&apos;t forget to email photos of the caravan to us, either via the form below or to{' '}
                <a href="mailto:info@caravantastic.com" className="text-[#00B050] font-bold hover:underline">info@caravantastic.com</a>.**
              </p>
            </div>

            {/* STEP 2 */}
            <div className="space-y-1.5">
              <h3 className="font-black text-slate-800 text-sm tracking-wide uppercase">
                STEP 2:
              </h3>
              <p>
                If your caravan matches our stock requirements, we will contact you, and based on the information you provide, we will give you a price, and then we will arrange to visit the caravan.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="space-y-1.5">
              <h3 className="font-black text-slate-800 text-sm tracking-wide uppercase">
                STEP 3:
              </h3>
              <p>
                We will visit as agreed, inspect the caravan, agree and confirm a price, and if you&apos;re happy to proceed, confirm the sale and complete the paperwork.
              </p>
              <p className="pt-1">
                You will receive fast payment for your caravan, and we will arrange for its collection. It&apos;s FAST, FAIR, and SIMPLE.
              </p>
            </div>

          </div>

        </div>

        {/* Informational & SEO Sections matching Screenshots 3, 4 & 5 */}
        <div className="space-y-10 border-t border-slate-200 pt-12">
          
          {/* WHO BUYS STATIC CARAVANS? */}
          <div className="space-y-2 max-w-4xl">
            <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">
              WHO BUYS STATIC CARAVANS?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              &quot;Who buys old static caravans?&quot; is a question that it&apos;s often hard to find reliable information about. If you&apos;ve already tried selling your static caravan by placing adverts on a variety of platforms online you&apos;ll know how frustrating, time consuming and expensive it can be. You may already have encountered a variety of unsatisfactory offers which end up wasting your time.
            </p>
          </div>

          {/* WE BUY CARAVANS, BUT IS NOT NECESSARILY A CASE OF 'WE BUY ANY CARAVANS' */}
          <div className="space-y-2 max-w-4xl">
            <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">
              WE BUY CARAVANS, BUT IS NOT NECESSARILY A CASE OF &apos;WE BUY ANY CARAVANS&apos;
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you&apos;re thinking &quot;I need to sell my static caravan&quot; and you&apos;re looking for a webuyanycaravan or similar website, you may have found some in your online searches with similar names, but some may not be specifically for static caravans. There is also often added confusion for sellers because you may have used the term &apos;I want to sell my mobile home&apos;, whereas this term tends to mean motorhomes/campers.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              We buy static caravans and, if you&apos;re selling a holiday lodge, you&apos;ve come to the right place too. We don&apos;t guarantee to buy EVERY unit we&apos;re offered, but we do like to buy a good selection of units that will appeal to our many different customer groups. As long as the unit you are selling is in good condition, it&apos;s certainly worth contacting us and we&apos;ll give you an honest, fast decision.
            </p>
          </div>

          {/* HOW MUCH IS A STATIC CARAVAN WORTH? */}
          <div className="space-y-2 max-w-4xl">
            <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">
              HOW MUCH IS A STATIC CARAVAN WORTH?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We are often asked this question and unlike cars, you probably won&apos;t find a static caravan market value calculator that&apos;s of any real use online. If you let us know the make, model, no. of bedrooms, year, and whether it has central heating and double glazing, and where the caravan is, + send us a few clear, current photos (inside and out) this will be a big help in giving us an idea of what the likely value is.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              We have decades of experience in buying and selling static caravans and lodges and have gained a good reputation. Contacting us could be the way that you can quickly and painlessly sell your static caravan for a fair price. Why wait? Contact us now.
            </p>
          </div>

          {/* Location Maps Cards matching Screenshots 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Taunton Location Card */}
            <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 bg-slate-100 border-b border-slate-200">
                <h4 className="font-extrabold text-slate-800 text-sm">Caravantastic - Somerset</h4>
                <p className="text-[11px] text-slate-500">Thornfalcon Works, Henlade, Taunton TA3 5DN</p>
                <div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-bold">
                  <span>★ 4.8</span>
                  <span className="text-slate-400 font-normal">(62 reviews)</span>
                </div>
              </div>
              <div className="h-44 bg-slate-200 relative flex items-center justify-center">
                <iframe
                  title="Caravantastic Somerset Map"
                  src="https://maps.google.com/maps?q=Taunton%20TA3%205DN&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* Exeter Location Card */}
            <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 bg-slate-100 border-b border-slate-200">
                <h4 className="font-extrabold text-slate-800 text-sm">Caravantastic Ltd</h4>
                <p className="text-[11px] text-slate-500">Matford Home Farm, Matford, Exeter EX2 8XT</p>
                <div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-bold">
                  <span>★ 3.7</span>
                  <span className="text-slate-400 font-normal">(23 reviews)</span>
                </div>
              </div>
              <div className="h-44 bg-slate-200 relative flex items-center justify-center">
                <iframe
                  title="Caravantastic Exeter Map"
                  src="https://maps.google.com/maps?q=Exeter%20EX2%208XT&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* West Sussex Location Card */}
            <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 bg-slate-100 border-b border-slate-200">
                <h4 className="font-extrabold text-slate-800 text-sm">Caravantastic West Sussex</h4>
                <p className="text-[11px] text-slate-500">Office Suite 1, East St, Turners Hill RH10 4QQ</p>
                <div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-bold">
                  <span>★ 5.0</span>
                  <span className="text-slate-400 font-normal">(23 reviews)</span>
                </div>
              </div>
              <div className="h-44 bg-slate-200 relative flex items-center justify-center">
                <iframe
                  title="Caravantastic West Sussex Map"
                  src="https://maps.google.com/maps?q=Turners%20Hill%20RH10%204QQ&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

          </div>

          {/* WHO BUYS OLD STATIC CARAVANS? */}
          <div className="space-y-2 max-w-4xl pt-4">
            <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">
              WHO BUYS OLD STATIC CARAVANS?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Caravantastic does! We are trusted, established UK static caravan dealers with decades of experience in the off-site static caravan sales and holiday park business. As such, to ensure that our customers have maximum choice of static caravan makes, models and features, we buy many static caravans. We buy new static caravans from manufacturers, and we buy used static caravans off site from holiday parks, owners at holiday parks and private individuals nationwide, across the UK. The prime concern is quality.
            </p>
          </div>

          {/* HOW TO SELL A STATIC CARAVAN PRIVATELY */}
          <div className="space-y-2 max-w-4xl">
            <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">
              HOW TO SELL A STATIC CARAVAN PRIVATELY
            </h2>
            <p className="text-xs font-semibold text-slate-700">
              Options for selling your static caravan privately tend to be:
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Using online sales websites, platforms, and social media e.g., Gumtree, eBay, Facebook. This can be frustrating e.g., time wasters, people offering well below what you&apos;d like, and/or having to organise and pay for specialist caravan delivery services yourself. Also, if the buyer is not happy with the caravan after delivery or it requires repairs, this could be an expensive headache.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Selling to a trusted, recognised, professional static caravan dealer with years of experience, such as Caravantastic. This can be a much faster, easier, lower risk option.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
