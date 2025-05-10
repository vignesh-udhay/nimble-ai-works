
import React from 'react';
import { Code, Link, MessageSquare, School, Wand } from 'lucide-react';
import { cn } from '@/lib/utils';

type SkillCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

const SkillCard = ({ title, description, icon, className }: SkillCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300",
      "hover:shadow-md hover:-translate-y-1",
      className
    )}>
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const skills = [
    {
      title: "AI Development",
      description: "Expert in developing custom AI solutions including machine learning models, natural language processing, and computer vision applications.",
      icon: <Code size={24} />
    },
    {
      title: "System Integration",
      description: "Proficient at integrating AI technologies with existing systems and workflows to create cohesive technical ecosystems.",
      icon: <Link size={24} />
    },
    {
      title: "Team Collaboration",
      description: "Experienced in cross-functional collaboration with product, design, and business teams to deliver strategic technical solutions.",
      icon: <MessageSquare size={24} />
    },
    {
      title: "Continuous Learning",
      description: "Committed to ongoing education in emerging technologies and methodologies to maintain cutting-edge technical knowledge.",
      icon: <School size={24} />
    },
    {
      title: "Technical Leadership",
      description: "Track record of leading technical initiatives, mentoring junior developers, and setting architectural direction.",
      icon: <Wand size={24} />
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">
            Core technical competencies and professional strengths.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
