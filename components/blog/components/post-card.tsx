'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block"
    >
      <article className="relative bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 h-[300px]">
        {/* Top: Image */}
        <div className="relative h-[150px] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Bottom: Text overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[150px] p-5 flex flex-col justify-between 
                     backdrop-blur-sm bg-black/40"
        >
          {/* Title & Excerpt */}
          <div className="space-y-1 mt-[-3px]">
            <h3 className="text-[15px] font-semibold text-white line-clamp-2 group-hover:text-red-500 transition-colors duration-500 leading-snug">
              {post.title}
            </h3>
            <p className="text-[13px] text-white/80 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Bottom Metadata */}
          <div className="flex items-center gap-2 text-xs text-white/70 mb-0 justify-end">
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
