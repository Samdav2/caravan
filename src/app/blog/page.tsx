import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogs';
import { User, MessageSquare, Share2, Calendar, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Banner */}
        <div className="bg-slate-900 text-white p-8 rounded-lg mb-10 shadow-md">
          <h1 className="text-3xl font-black uppercase tracking-wide">
            CARAVANTASTIC <span className="text-[#00B050]">BLOG & GUIDES</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            Guides, tips, delivery advice, and news about off-site static caravans and luxury twin lodges.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <div className="absolute top-3 left-3 z-10 bg-[#00B050] text-white px-3 py-1 text-xs font-black rounded-sm shadow">
                  {post.dateBadge}
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <User className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-semibold text-slate-700">By {post.author}</span>
                </div>
                <div className="flex items-center gap-1 text-[#00B050] text-xs font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="font-black text-sm uppercase leading-snug tracking-wide text-slate-800 group-hover:text-[#00B050] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <div className="w-8 h-0.5 bg-[#00B050] my-3" />
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00B050] hover:underline uppercase"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
