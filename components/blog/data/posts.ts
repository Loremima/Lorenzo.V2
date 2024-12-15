export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  url: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations and revolutionizing decision-making processes across industries...',
    date: 'Mar 15, 2024',
    category: 'AI',
    url: '#',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Automation Best Practices',
    excerpt: 'Key strategies for implementing successful automation solutions that drive efficiency and reduce operational costs...',
    date: 'Mar 10, 2024',
    category: 'Automation',
    url: '#',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Data Science Trends 2024',
    excerpt: 'Latest trends and innovations in the field of data science, from advanced analytics to machine learning breakthroughs...',
    date: 'Mar 5, 2024',
    category: 'Data Science',
    url: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Machine Learning Applications',
    excerpt: 'Real-world applications of machine learning in various industries, from healthcare to finance...',
    date: 'Mar 1, 2024',
    category: 'AI',
    url: '#',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'The Rise of RPA',
    excerpt: 'How Robotic Process Automation is changing workplace efficiency and transforming business processes...',
    date: 'Feb 25, 2024',
    category: 'Automation',
    url: '#',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop',
  }
];