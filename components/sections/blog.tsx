'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogHeader } from '../blog/components/blog-header';
import { PostCard } from '../blog/components/post-card';
import { FeaturedPost } from '../blog/components/featured-post';
import { LoadMoreButton } from '../blog/components/load-more-button';
import { posts } from '../blog/data/posts';

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  // No category filter, just show all or handle category as you wish
  const filteredPosts = selectedCategory === 'All'
    ? remainingPosts
    : remainingPosts.filter(post => post.category === selectedCategory);

  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
    setIsLoading(false);
  }, [filteredPosts.length]);

  return (
    <section id="blog" className="scroll-section">
      <div className="section-container max-w-5xl mx-auto px-4">
        <BlogHeader />

        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <FeaturedPost post={featuredPost} />
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>

          {hasMorePosts && (
            <div className="mt-8 flex justify-center">
              <LoadMoreButton onClick={loadMore} isLoading={isLoading} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
