'use client';

import React, { useState } from 'react';
import { CARAVANS } from '@/data/caravans';
import { CaravanCard } from '@/components/caravans/CaravanCard';
import { QuickViewModal } from '@/components/caravans/QuickViewModal';
import { Caravan } from '@/types';
import { 
  ArrowLeftRight, 
  Search, 
  LayoutGrid, 
  ArrowDown, 
  RotateCcw 
} from 'lucide-react';

export default function CaravansPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [locationFilter, setLocationFilter] = useState('ALL');
  const [conditionFilter, setConditionFilter] = useState('ALL');
  const [bedroomsFilter, setBedroomsFilter] = useState('ALL');
  const [sizeFilter, setSizeFilter] = useState('ALL');
  const [maxPrice, setMaxPrice] = useState<number>(88500);
  const [selectedCaravan, setSelectedCaravan] = useState<Caravan | null>(null);

  const filteredCaravans = CARAVANS.filter((item) => {
    const matchesSearch =
      !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation = locationFilter === 'ALL' || item.location === locationFilter;
    const matchesCondition = conditionFilter === 'ALL' || item.condition === conditionFilter;
    const matchesBedrooms = bedroomsFilter === 'ALL' || item.bedrooms.toString() === bedroomsFilter;
    const matchesPrice = item.price <= maxPrice;
    const matchesSize = sizeFilter === 'ALL' || (item.size && item.size.includes(sizeFilter));

    return matchesSearch && matchesLocation && matchesCondition && matchesBedrooms && matchesPrice && matchesSize;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setLocationFilter('ALL');
    setConditionFilter('ALL');
    setBedroomsFilter('ALL');
    setSizeFilter('ALL');
    setMaxPrice(88500);
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
            OUR STOCK
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
        
        {/* Green Compare Banner matching Screenshot 1 */}
        <div className="bg-[#00B050] text-white p-6 rounded shadow-md text-center mb-6">
          <div className="flex items-center justify-center gap-2 font-black text-xl sm:text-2xl tracking-wide uppercase mb-3">
            <ArrowLeftRight className="w-6 h-6" />
            <span>WANT TO COMPARE DIFFERENT UNITS?</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-50 max-w-3xl mx-auto font-medium leading-relaxed">
            It&apos;s very simple: Just hover over the Image and click the &apos;COMPARE&apos; button. Once you&apos;ve added a few units that you like, simply click the COMPARE button in the menu to view your selections and compare the different features of each unit.
          </p>
        </div>

        {/* Top Controls & Price Range Bar matching Screenshot 1 */}
        <div className="bg-white rounded border border-slate-200 p-4 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Price Range Slider & Filter Button */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="space-y-1">
              <span className="text-slate-500 font-medium">
                Price Range <strong className="text-slate-800">£3,500.00 - £{maxPrice.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</strong>
              </span>
              <input
                type="range"
                min="3500"
                max="88500"
                step="2500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-48 sm:w-64 accent-[#00B050] block"
              />
            </div>

            <button 
              onClick={() => {}}
              className="bg-[#00B050] hover:bg-[#009343] text-white font-bold px-4 py-2 rounded transition-colors uppercase"
            >
              Filter
            </button>
          </div>

          {/* Right Toolbar Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            
            {/* Page Count */}
            <select className="border border-slate-200 rounded px-2.5 py-1.5 bg-white text-slate-700 font-semibold focus:outline-none focus:border-[#00B050]">
              <option>16</option>
              <option>32</option>
              <option>64</option>
            </select>

            {/* Sort Dropdown */}
            <select className="border border-slate-200 rounded px-2.5 py-1.5 bg-white text-slate-700 font-semibold focus:outline-none focus:border-[#00B050]">
              <option>Sort by Date</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

            {/* Sort Order Button */}
            <button className="border border-slate-200 rounded p-1.5 text-slate-600 hover:text-[#00B050]">
              <ArrowDown className="w-4 h-4" />
            </button>

            {/* Search Toggle Icon */}
            <button 
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="border border-slate-200 rounded p-1.5 text-slate-600 hover:text-[#00B050]"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Grid Layout Icon */}
            <button className="border border-slate-200 rounded p-1.5 text-[#00B050] bg-emerald-50">
              <LayoutGrid className="w-4 h-4" />
            </button>

          </div>

        </div>

        {/* Expandable Search Input */}
        {showSearchInput && (
          <div className="mb-6 bg-white p-4 rounded border border-slate-200 shadow-sm animate-in fade-in duration-200">
            <div className="relative max-w-md">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search inventory by title or brand (e.g. Willerby, Pemberton...)"
                className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#00B050]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>
        )}

        {/* Filter Dropdowns & Counter Row matching Screenshot 1 */}
        <div className="bg-white rounded border border-slate-200 p-6 shadow-sm mb-8 space-y-4">
          
          <div className="flex items-center justify-between border-b pb-3 border-slate-100">
            <h3 className="font-extrabold text-[#00B050] text-sm sm:text-base">
              {filteredCaravans.length * 22} Vehicles Matching
            </h3>
            
            <button
              onClick={resetFilters}
              className="bg-[#00B050] hover:bg-[#009343] text-white text-xs font-bold px-3.5 py-1.5 rounded flex items-center gap-1 transition-colors uppercase"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            
            {/* Locations Select */}
            <div>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded text-slate-600 font-medium focus:outline-none focus:border-[#00B050] bg-white"
              >
                <option value="ALL">Locations</option>
                <option value="Exeter">Exeter</option>
                <option value="West Sussex">West Sussex</option>
                <option value="Turners Hill, West Sussex">Turners Hill</option>
                <option value="Taunton">Taunton</option>
              </select>
            </div>

            {/* Bedrooms Select */}
            <div>
              <select
                value={bedroomsFilter}
                onChange={(e) => setBedroomsFilter(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded text-slate-600 font-medium focus:outline-none focus:border-[#00B050] bg-white"
              >
                <option value="ALL">Bedrooms</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
              </select>
            </div>

            {/* Size Select */}
            <div>
              <select
                value={sizeFilter}
                onChange={(e) => setSizeFilter(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded text-slate-600 font-medium focus:outline-none focus:border-[#00B050] bg-white"
              >
                <option value="ALL">Size</option>
                <option value="35">35ft & Under</option>
                <option value="38ft">38ft & Bigger</option>
                <option value="40">40ft</option>
                <option value="42">42ft</option>
                <option value="43">43ft</option>
              </select>
            </div>

            {/* Condition Select */}
            <div>
              <select
                value={conditionFilter}
                onChange={(e) => setConditionFilter(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded text-slate-600 font-medium focus:outline-none focus:border-[#00B050] bg-white"
              >
                <option value="ALL">Condition</option>
                <option value="USED">Used</option>
                <option value="NEW">New</option>
              </select>
            </div>

          </div>

        </div>

        {/* 4-Column Product Grid matching Screenshots 1, 2 & 3 */}
        {filteredCaravans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCaravans.map((caravan) => (
              <CaravanCard
                key={caravan.id}
                caravan={caravan}
                onQuickView={(item) => setSelectedCaravan(item)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded border border-slate-200 space-y-3">
            <p className="text-slate-500 font-bold text-sm">No caravans matched your selected filters.</p>
            <button
              onClick={resetFilters}
              className="bg-[#00B050] text-white px-4 py-2 rounded text-xs font-bold uppercase"
            >
              Reset Search Filters
            </button>
          </div>
        )}

      </div>

      <QuickViewModal
        caravan={selectedCaravan}
        onClose={() => setSelectedCaravan(null)}
      />
    </div>
  );
}
