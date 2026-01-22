import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Globe, PenTool, Image, Sparkles, FileText } from 'lucide-react';

const tools = [
  {
    icon: Palette,
    title: 'Instant art & free logo',
    description: 'Create professional designs',
    link: '/tools/logo-maker',
    color: 'text-[var(--accent-orange)]'
  },
  {
    icon: Globe,
    title: 'Build your website',
    description: 'Get online in minutes',
    link: '/tools/website-builder',
    color: 'text-[var(--accent-blue)]'
  },
  {
    icon: PenTool,
    title: 'Design it yourself',
    description: 'Easy-to-use design tools',
    link: '/tools/design',
    color: 'text-[var(--accent-green)]'
  },
  {
    icon: Image,
    title: 'Explore design projects',
    description: 'Browse templates & ideas',
    link: '/tools/templates',
    color: 'text-purple-500'
  },
  {
    icon: Sparkles,
    title: 'Get design help',
    description: 'Work with our experts',
    link: '/tools/design-services',
    color: 'text-pink-500'
  },
  {
    icon: FileText,
    title: 'Print-ready artwork',
    description: 'Upload your own designs',
    link: '/tools/upload',
    color: 'text-[var(--accent-teal)]'
  }
];

const BusinessTools = () => {
  return (
    <section className="py-10 md:py-14 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-2">
          Tools to help build your business
        </h2>
        <p className="text-[var(--dark-gray)] mb-8">
          Everything you need to create, design, and grow
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <Link key={index} to={tool.link}>
              <Card className="h-full border border-[var(--medium-gray)] hover:border-[var(--primary-navy)] hover:shadow-md transition-all cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--light-gray)] flex items-center justify-center mb-3">
                    <tool.icon className={`w-6 h-6 ${tool.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-[var(--dark-gray)]">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BusinessTools };
