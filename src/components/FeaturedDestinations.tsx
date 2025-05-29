import React, { useEffect, useRef, useState } from 'react';

import DestinationCard from './DestinationCard';

const projects = [
  {
    title: "PCB Projektavimas",
    description: "Profesionalus PCB projektavimas su moderniais įrankiais. Sukuriame optimalias grandinių schemas pagal jūsų reikalavimus.",
    detailedDescription: "Mūsų PCB projektavimo paslaugos apima:\n\n• Grandinių schemų kūrimą\n• PCB maketavimą\n• Komponentų išdėstymo optimizavimą\n• Signalų integralumo analizę\n• Gamybos dokumentacijos paruošimą\n\nDirbame su įvairiais PCB sluoksnių kiekiais ir naudojame moderniausius projektavimo įrankius.",
    imageUrl: "/images/IMG_1626_1200.jpg"
  },
  {
    title: "Prototipų Gamyba",
    description: "Greitas ir kokybiškas prototipų gamybos procesas. Įskaitant PCB gamybą, komponentų montavimą ir testavimą.",
    detailedDescription: "Prototipų gamybos procesas:\n\n• PCB gamyba\n• SMD ir THT komponentų montavimas\n• Funkcinis testavimas\n• Patobulinimų įgyvendinimas\n• Dokumentacijos paruošimas\n\nGalime pagaminti prototipus per 24-48 valandas.",
    imageUrl: "/images/20170125_084721.jpg",
    difficulty: "Pažengęs"
  },
  {
    title: "Serijinė Gamyba",
    description: "Profesionalus PCB surinkimas nuo mažų iki didelių partijų. Kokybės kontrolė ir testavimas įskaičiuoti.",
    detailedDescription: "Serijinės gamybos privalumai:\n\n• Automatizuotas komponentų montavimas\n• Kokybės kontrolė kiekviename etape\n• Funkcinis testavimas\n• Greitas gamybos ciklas\n• Lankstumas partijų dydžiui\n\nGalime surinkti nuo 10 iki 10000+ vienetų.",
    imageUrl: "/images/20170815_174852.jpg"
  },
  {
    title: "Kabelių Gamyba",
    description: "Individualių kabelių ir laidų gamyba pagal jūsų specifikaciją. Įskaitant specialių jungčių ir konnektorių montavimą.",
    detailedDescription: "Kabelių gamybos galimybės:\n\n• Individualių laidų gamyba\n• Kabelių surinkimas\n• Konnektorių montavimas\n• Izoliacijos darbai\n• Testavimas ir sertifikavimas\n\nDirbame su įvairiais laidų tipais ir konnektoriais.",
    imageUrl: "/images/Kabelkonfektion.png"
  }
];

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
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
    <section id="projects" className="section-padding bg-black relative overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll text-primary">
            Mūsų paslaugos
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll leading-relaxed">
            Profesionalios elektronikos paslaugos - nuo projektavimo iki serijinės gamybos. Kokybė ir patikimumas yra mūsų prioritetas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-on-scroll transform hover:scale-105 transition-transform duration-300 cursor-pointer" 
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setSelectedProject(project)}
            >
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-6 relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-primary mb-4">{selectedProject.title}</h3>
                <div className="text-gray-300 whitespace-pre-line">
                  {selectedProject.detailedDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
