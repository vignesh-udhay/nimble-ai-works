
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Enterprise Voice Assistant",
      description: "Developed a voice assistant system that reduced customer service costs by 35% while improving response accuracy to 94%.",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Speech Recognition", "NLP", "Python", "TensorFlow"],
      demoLink: "#"
    },
    {
      title: "AI Video Generation Platform",
      description: "Built a system that automatically creates marketing videos from text briefs, reducing video production time by 80%.",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Video AI", "Text-to-Speech", "Computer Vision", "PyTorch"],
    },
    {
      title: "Developer Productivity Tool",
      description: "Created an AI assistant that helps engineering teams write and review code, improving developer productivity by 23%.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Code Generation", "Code Analysis", "React", "TypeScript"],
      demoLink: "#"
    },
    {
      title: "Multilingual Support System",
      description: "Architected an AI-powered customer support system handling inquiries in 12 languages with 97% customer satisfaction.",
      image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["NLP", "Translation API", "FastAPI", "MongoDB"],
    },
    {
      title: "Research Intelligence Platform",
      description: "Led development of a system that analyzes and summarizes research papers, increasing research efficiency by 45%.",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Data Analysis", "Document Processing", "Python", "Scikit-learn"],
      demoLink: "#"
    },
    {
      title: "Content Summarization Engine",
      description: "Engineered a system that creates accurate summaries of video content with 93% information retention compared to full content.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Speech Recognition", "Natural Language Generation", "AWS", "Docker"],
    },
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
          <p className="text-xl text-gray-600">
            Significant projects I've led and contributed to throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              {project.demoLink && (
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.demoLink} target="_blank" rel="noreferrer">
                      View Details
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
