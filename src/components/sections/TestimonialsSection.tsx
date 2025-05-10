
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

const TestimonialsSection = () => {
  // Placeholder testimonials for now
  const testimonials = [
    {
      quote: "Working with AIcraft transformed our customer support. The custom chatbot they built handles 70% of inquiries automatically.",
      author: "Sarah Johnson",
      position: "Operations Director, TechStart",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "The AI video generator saves us 10+ hours per week on content creation. Best investment we've made for our marketing team.",
      author: "Michael Chen",
      position: "Marketing Lead, CreativeFlow",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      quote: "Not only did they build an amazing AI tool, they explained the process clearly and trained our team to get maximum value.",
      author: "Emma Wilson",
      position: "Founder, DataDrive",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg"
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-xl text-gray-600">
            What businesses say about working with AIcraft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white card-hover">
              <CardHeader className="pb-2">
                <div className="relative">
                  <div className="text-primary/20 text-7xl absolute -top-6 left-0">"</div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 italic relative z-10">
                  {testimonial.quote}
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
