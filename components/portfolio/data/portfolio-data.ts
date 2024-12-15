export const categories = ['All', 'AI', 'Automation', 'Data Science'];

export interface ProjectType {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'AI-Powered Customer Service',
    category: 'AI',
    description: 'Intelligent chatbot system with natural language processing',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Python', 'TensorFlow', 'NLP'],
  },
  {
    id: 2,
    title: 'Process Automation Suite',
    category: 'Automation',
    description: 'End-to-end automation platform for business workflows',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Node.js', 'RPA', 'API'],
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    category: 'Data Science',
    description: 'Real-time analytics and visualization platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Python', 'React', 'D3.js'],
  },
];