
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden hero-gradient">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-l from-blue-100/30 to-transparent"></div>
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Ideas into Intelligent Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Senior software engineer with 8+ years crafting enterprise-grade AI systems that deliver measurable business value.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">60+ Projects Delivered</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">35+ Satisfied Clients</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">8+ Years Experience</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg hover-float">
              <a href="#contact">Start Your Project Today</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg hover-float">
              <a href="#projects">View Success Stories</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
