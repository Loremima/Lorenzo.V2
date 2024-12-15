'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Post } from '../data/posts';

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="relative bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 h-[320px] flex flex-col">
        {/* Image Section */}
        <div className="relative h-[180px] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Text & Metadata Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col h-[140px] backdrop-blur-sm bg-black/40">
          {/* Top part: Title & Excerpt */}
          <div className="space-y-2 mt-[-4px]">
            <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-red-500 transition-colors duration-500 leading-tight">
              {post.title}
            </h3>
            <p className="text-base text-white/80 line-clamp-2 leading-snug">
              {post.excerpt}
            </p>
          </div>

          {/* Bottom part: Category & Date */}
          <div className="flex items-center gap-2 text-xs text-white/70 mt-auto mb-1 justify-end">
            <span className="text-red-500 font-medium group-hover:text-red-400 transition-colors duration-300">
              {post.category}
            </span>
            <span className="text-white/50 leading-none">•</span>
            <span className="font-light tracking-wide">{post.date}</span>
          </div>
        </div>
      </article>
    </motion.a>
  );
}
