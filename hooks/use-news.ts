'use client';

import { useState, useEffect } from 'react';
import type { NewsPost } from '@/lib/types/news';

const mockNews: NewsPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations...',
    content: '',
    date: 'Mar 15, 2024',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    id: '2',
    title: 'Automation Best Practices',
    excerpt: 'Key strategies for implementing successful automation solutions...',
    content: '',
    date: 'Mar 10, 2024',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    id: '3',
    title: 'Data Science Trends 2024',
    excerpt: 'Latest trends and innovations in the field of data science...',
    content: '',
    date: 'Mar 5, 2024',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
];

export function useNews() {
  const [newsItems, setNewsItems] = useState<NewsPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setNewsItems(mockNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { newsItems, isLoading };
}