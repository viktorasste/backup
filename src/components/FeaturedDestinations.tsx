
import React, { useEffect, useRef } from 'react';
import DestinationCard from './DestinationCard';

const projects = [
  {
    title: "Projektavimas",
    description: "Suprojektuosime jūsų projektą pagal jūsų duotą schemą.",
    imageUrl: "/images/IMG_1626_1200.jpg"
  },
  {
    title: "Prototipų surinkimas",
    description: "Greitas, pigus prototipų surinkimas.",
    imageUrl: "/images/20170125_084721.jpg",
    difficulty: "Pažengęs"
  },
  {
    title: "Serijinė gamyba",
    description: "Galime surinkti tiek mažas tiek dideles partijas pcb.",
    imageUrl: "/images/20170815_174852.jpg"
  },
  {
    title: "Įvairių kabeliukų ar laidų gamyba, paruošimas",
    description: "Pagaminsime laidą ar kabeliuką pagal jūsų poreikius.",
    imageUrl: "/images/Kabelkonfektion.png"
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
    <section id="projects" className="section-padding bg-black " ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-primary">
            Mūsų paslaugos
          </h2>
          {/*<p className="text-lg text-white max-w-3xl mx-auto animate-on-scroll">
            Tyrinėkite mūsų populiariausius elektronikos projektus su detaliais nurodymais ir grandinių schemomis
          </p>*/}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <DestinationCard 
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
