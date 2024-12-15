import { Brain, Cog, LineChart } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ServiceType {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

export const servicesData: ServiceType[] = [
  {
    title: 'AI Consulting',
    icon: Brain,
    description: 'Strategic AI implementation and optimization for business growth',
    features: ['AI Strategy Development', 'Technology Assessment', 'ROI Analysis'],
  },
  {
    title: 'Process Automation',
    icon: Cog,
    description: 'End-to-end automation solutions for improved efficiency',
    features: ['Workflow Optimization', 'RPA Implementation', 'Integration Services'],
  },
  {
    title: 'Data Analytics',
    icon: LineChart,
    description: 'Transform raw data into actionable insights',
    features: ['Data Mining', 'Predictive Analytics', 'Business Intelligence'],
  },
];