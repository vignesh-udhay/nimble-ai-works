
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
      title: "Voice Assistant",
      description: "An intuitive voice assistant built with Gradio that helps businesses automate customer inquiries and FAQs.",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Gradio", "Speech Recognition", "NLP"],
      demoLink: "#"
    },
    {
      title: "AI Video Generator",
      description: "A tool that transforms text scripts into fully rendered videos with AI-generated narration and visuals.",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Video Generation", "Text-to-Speech", "Computer Vision"],
    },
    {
      title: "Coding Assistant",
      description: "A specialized Gradio app that helps developers write, review, and optimize code across multiple languages.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Gradio", "Code Generation", "Code Analysis"],
      demoLink: "#"
    },
    {
      title: "Customer Support Chatbot",
      description: "An advanced chatbot that handles customer inquiries 24/7, reducing support costs while improving satisfaction.",
      image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["NLP", "Customer Support", "Dialog Systems"],
    },
    {
      title: "Research Assistant",
      description: "AI-powered tool that sources, summarizes, and organizes research papers and articles for content creators.",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Content Analysis", "Summarization", "Information Retrieval"],
      demoLink: "#"
    },
    {
      title: "YouTube Summarizer",
      description: "A tool that creates concise, accurate summaries of YouTube videos, saving viewers time and increasing engagement.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Speech Recognition", "Summarization", "Video Processing"],
    },
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-gray-600">
            A showcase of AI solutions built for real-world applications.
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
                      View Demo
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
