import React, { useEffect, useRef } from 'react';

import AboutSlider from './AboutSlider';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
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
    <section id="about" className="bg-background text-foreground section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="animate-on-scroll">
            <div className="relative">
              <AboutSlider />
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-5xl font-bold text-primary">100+</p>
                <p className="text-primary font-medium">Projektų</p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary animate-on-scroll">
              Apie LITUOKLIS
            </h2>
            <p className="text-lg text-text-light animate-on-scroll">
              LITUOKLIS yra bendruomenės kuriama platforma elektronikos entuziastams, kūrėjams ir mėgėjams. Mes teikiame detalias pamokas, projektų idėjas ir išteklius, kurie padės jums mokytis ir kurti nuostabius elektronikos projektus.
            </p>
            
            {/*iv className="grid grid-cols-2 gap-6 animate-on-scroll">
              <div className="mano-spalva rounded-lg shadow">
                <h3 className="font-bold text-primary text-xl mb-2">Pradedantiesiems</h3>
                <p className="text-gray-700">Lengvai suprantamos pamokos elektronikos kelionės pradžiai</p>
              </div>
              <div className="mano-spalva rounded-lg shadow">
                <h3 className="font-bold text-primary text-xl mb-2">Komponentai</h3>
                <p className="text-gray-700">Gidai, kaip pasirinkti tinkamus komponentus jūsų projektams</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-primary text-xl mb-2">Bendruomenė</h3>
                <p className="text-gray-700">Prisijunkite prie panašiai mąstančių kūrėjų ir dalinkitės savo kūriniais</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-primary text-xl mb-2">Įrankiai ir patarimai</h3>
                <p className="text-gray-700">Išmokite geriausių elektronikos praktikų ir technikų</p>
              </div>
            </div>}
            
            {/*<Button className="bg-primary hover:bg-primary/90 animate-on-scroll">
              Sužinoti daugiau apie mus
            </Button>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
