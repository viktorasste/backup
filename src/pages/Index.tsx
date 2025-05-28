
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedDestinations';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize animation observers when the component mounts
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
    
    // Observe all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      // Clean up observer
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Update the document title
  useEffect(() => {
    document.title = 'LITUOKLIS - Visos elektronikos';
  }, []);

  // Apply dark theme by default to match the logo's dark background
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
