
import React from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-blue-200"></div>
              <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className={cn(
                "absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center",
                "top-0 right-0 border-4 border-white"
              )}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  <rect x="3" y="8" width="4" height="8" rx="1"></rect>
                  <path d="M4 6v10"></path>
                  <path d="M17 7v10"></path>
                  <rect x="17" y="8" width="4" height="8" rx="1"></rect>
                </svg>
              </div>
            </div>
          </div>
          
          {/* About Text */}
          <div className="lg:max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-4">
              I'm a senior software engineer with 8 years of experience in AI and machine learning systems. My passion is building intelligent applications that solve real-world problems through innovative technology.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Throughout my career, I've worked with startups and enterprise organizations, leading teams to deliver high-impact AI solutions. I specialize in creating scalable, production-ready systems that transform business capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex-1">
                <h4 className="font-semibold mb-1">Experience</h4>
                <p className="text-gray-600">8+ Years</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex-1">
                <h4 className="font-semibold mb-1">Education</h4>
                <p className="text-gray-600">M.S. Computer Science</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex-1">
                <h4 className="font-semibold mb-1">Specialization</h4>
                <p className="text-gray-600">AI & ML Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
