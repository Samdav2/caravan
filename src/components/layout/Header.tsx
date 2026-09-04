'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Home } from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'CARAVANS FOR SALE', href: '/caravans' },
    { name: 'SELL YOUR CARAVAN', href: '/sell-your-caravan' },
    {
      name: 'MORE INFORMATION',
      href: '#',
      dropdown: [
        { name: 'Showground Locations', href: '/locations' },
        { name: 'Delivery & Transport', href: '/delivery' },
        { name: 'BuyBack Scheme', href: '/buyback' },
        { name: 'FAQs', href: '/faqs' },
      ],
    },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="border-2 border-slate-700 rounded p-1 flex items-center justify-center bg-slate-50 group-hover:border-[#00B050] transition-colors">
            <svg 
              className="w-8 h-7 text-slate-800 group-hover:text-[#00B050] transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="13" rx="2" />
              <path d="M4 17v2" />
              <path d="M20 17v2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              <path d="M8 8h8" />
              <path d="M8 12h4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-wider text-slate-900 group-hover:text-[#00B050] transition-colors">
              CARAVAN<span className="text-[#00B050]">TASTIC</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 -mt-1">
              Static Caravans & Lodges
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold tracking-wide text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.dropdown) {
              return (
                <div 
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button 
                    className="flex items-center gap-1 hover:text-[#00B050] py-2 transition-colors uppercase cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-52 bg-white shadow-xl rounded border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-[#00B050] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 transition-colors uppercase border-b-2 ${
                  isActive
                    ? 'text-[#DC2626] border-[#DC2626]'
                    : 'border-transparent hover:text-[#00B050]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-700 p-2 hover:bg-slate-100 rounded focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 font-bold text-sm text-slate-700">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col space-y-2 pt-1 border-t border-slate-100">
                    <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                      {link.name}
                    </span>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="pl-4 py-1 text-xs text-slate-600 hover:text-[#00B050]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 hover:text-[#00B050] ${
                    pathname === link.href ? 'text-[#DC2626]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
