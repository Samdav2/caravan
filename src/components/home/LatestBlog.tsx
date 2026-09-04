'use client';

import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogs';
import { User, MessageSquare, Share2, ArrowRight } from 'lucide-react';

export const LatestBlog: React.FC = () => {
  return (
    <section className="py-16 bg-slate-100/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching Screenshot 1 */}
        <div className="text-center mb-12">
          <span className="text-xs text-slate-500 font-semibold tracking-wider block mb-1">
            Read our latest Blog
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase">
            LATEST BLOG
          </h2>
          <div className="w-16 h-1 bg-[#00B050] mx-auto mt-3 rounded-full" />
        </div>

        {/* Blog Cards Grid matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BLOG_POSTS.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white rounded border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              
              {/* Image & Date Badge Container */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                
                {/* Date Badge (Top-left green badge matching Screenshot 1) */}
                <div className="absolute top-3 left-3 z-10 bg-[#00B050] text-white px-3 py-1 text-xs font-black rounded-sm shadow">
                  {post.dateBadge}
                </div>

                {/* SALE Overlay Banner if present (Card 2 matching Screenshot 1) */}
                {post.saleBanner && (
                  <div className="absolute top-3 right-3 z-10 bg-red-600 text-white p-2 rounded text-center shadow-lg border border-red-500">
                    <span className="block font-black text-xs uppercase">SALE</span>
                    <span className="block text-[9px] line-through text-red-200">
                      WAS: {post.saleBanner.wasPrice}
                    </span>
                    <span className="block font-black text-xs text-yellow-300">
                      NOW: {post.saleBanner.nowPrice}
                    </span>
                  </div>
                )}

                {/* Blog Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Author & Meta Row matching Screenshot 1 */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <User className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-semibold text-slate-700">By {post.author}</span>
                </div>

                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-1 text-[#00B050]">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold">{post.commentsCount}</span>
                  </div>
                  <button aria-label="Share post" className="hover:text-[#00B050] transition-colors">
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Excerpt Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className={`font-black text-sm uppercase leading-snug tracking-wide ${index === 1 ? 'text-[#00B050]' : 'text-slate-800'} group-hover:text-[#00B050] transition-colors`}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <div className="w-8 h-0.5 bg-[#00B050] my-3" />
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* View All Blog Posts Button matching Screenshot 2 */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-slate-600 hover:bg-[#00B050] text-white px-8 py-3.5 rounded font-black text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
          >
            CLICK HERE TO VIEW ALL BLOG POSTS
          </Link>
        </div>

      </div>
    </section>
  );
};
