
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
            Engineering intelligent solutions for modern business.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Senior software engineer with 8+ years crafting enterprise-grade AI systems that deliver measurable business value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg hover-float">
              <a href="#contact">Discuss Your Project</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg hover-float">
              <a href="#projects">View Portfolio</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
