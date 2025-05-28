
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tutorials = [
  {
    title: "Arduino pagrindai pradedantiesiems",
    date: "Atnaujinta gegužės 15, 2025",
    category: "Arduino",
    imageUrl: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=2036&auto=format&fit=crop"
  },
  {
    title: "Įvadas į PCB dizainą",
    date: "Atnaujinta balandžio 10, 2025",
    category: "PCB",
    imageUrl: "https://images.unsplash.com/photo-1638815401319-c0ecf71aedc1?q=80&w=2031&auto=format&fit=crop"
  },
  {
    title: "Raspberry Pi namų automatizavimas",
    date: "Atnaujinta gegužės 2, 2025",
    category: "Raspberry Pi",
    imageUrl: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?q=80&w=2080&auto=format&fit=crop"
  }
];

const TutorialsSection = () => {
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
    <section id="tutorials" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Populiarios pamokos ir gidai
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Mokykitės elektronikos su mūsų žingsnis po žingsnio pamokomis, skirtomis visiems mokėjimo lygiams
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48">
                <img 
                  src={tutorial.imageUrl} 
                  alt={tutorial.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {tutorial.category}
                  </span>
                  <span className="text-sm text-gray-500">{tutorial.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{tutorial.title}</h3>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Skaityti pamoką
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 animate-on-scroll">
          <Button className="bg-primary hover:bg-primary/90">
            Žiūrėti visas pamokas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;
