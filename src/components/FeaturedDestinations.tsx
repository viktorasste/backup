
import React, { useEffect, useRef } from 'react';
import ProjectCard from './DestinationCard';

const projects = [
  {
    title: "LED kubas",
    description: "Sukurkite žavų 4x4x4 LED kubą su Arduino, kuris demonstruoja nuostabius 3D šviesos modelius.",
    imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop",
    difficulty: "Vidutinis"
  },
  {
    title: "Išmaniųjų namų monitorius",
    description: "Sukurkite Wi-Fi palaikomą aplinkos monitorių su temperatūros, drėgmės ir oro kokybės jutikliais.",
    imageUrl: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop",
    difficulty: "Pažengęs"
  },
  {
    title: "Pradedančiojo Arduino rinkinys",
    description: "Pradėkite savo elektronikos kelionę su šia paprasta LED mirksėjimo grandine ir išmokite pagrindų.",
    imageUrl: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=2036&auto=format&fit=crop",
    difficulty: "Pradedantis"
  },
  {
    title: "Raspberry Pi oro stotis",
    description: "Sukurkite savo oro prognozės sistemą su jutikliais ir duomenų vizualizacija.",
    imageUrl: "https://images.unsplash.com/photo-1563896929-c592702ffe95?q=80&w=1972&auto=format&fit=crop",
    difficulty: "Vidutinis"
  }
];

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Mūsų paslaugos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Tyrinėkite mūsų populiariausius elektronikos projektus su detaliais nurodymais ir grandinių schemomis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                difficulty={project.difficulty}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
