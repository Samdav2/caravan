'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogs';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2, Tag } from 'lucide-react';

export default function BlogDetailPage() {
  const params = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === params?.slug) || BLOG_POSTS[0];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#00B050] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL BLOG POSTS</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg border border-slate-200 shadow-md overflow-hidden">
          
          <div className="relative h-80 sm:h-96 w-full">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#00B050] text-white px-3 py-1 text-xs font-black rounded shadow">
              {post.dateBadge}
            </div>
          </div>

          <div className="p-8 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-bold text-slate-700">
                  <User className="w-4 h-4 text-[#00B050]" />
                  By {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-[#00B050]" />
                  {post.date}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {post.title}
              </h1>
              <div className="w-16 h-1 bg-[#00B050] rounded-full" />
            </div>

            {/* Article Content */}
            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 font-light">
              <p className="text-sm font-semibold text-slate-800 italic border-l-4 border-[#00B050] pl-4 py-1 bg-slate-50">
                {post.excerpt}
              </p>

              <div 
                className="space-y-4 pt-2"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} 
              />
            </div>

            {/* Author Footer */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#00B050]" />
                <span>Tags: <strong>Static Caravans, Self Build, Showgrounds, Delivery</strong></span>
              </div>
              <button 
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                className="flex items-center gap-1 text-[#00B050] font-bold hover:underline"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Post</span>
              </button>
            </div>

          </div>

        </article>

      </div>
    </div>
  );
}
