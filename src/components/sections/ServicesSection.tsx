
import React from 'react';
import { Code, Link, MessageSquare, School, Wand } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
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
  const services = [
    {
      title: "Custom AI Tool Development",
      description: "Tailored AI solutions designed specifically for your business needs, from chatbots to custom predictive models.",
      icon: <Code size={24} />
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate existing AI tools and APIs into your current workflow and systems.",
      icon: <Link size={24} />
    },
    {
      title: "Consultation",
      description: "Expert guidance on identifying the right AI opportunities for your specific business challenges.",
      icon: <MessageSquare size={24} />
    },
    {
      title: "Training",
      description: "Equip your team with the knowledge to effectively use and manage AI tools in your business.",
      icon: <School size={24} />
    },
    {
      title: "Specialized Builds",
      description: "Advanced AI implementations like voice assistants, video generators, and more.",
      icon: <Wand size={24} />
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-xl text-gray-600">
            Practical AI solutions that deliver real value for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
