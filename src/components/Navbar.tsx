import React, { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/50 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center text-accent hover:text-cta-hover transition-colors">
          <img 
            src="/lovable-uploads/f65659aa-cd54-431a-a8a3-3b70710be1fe.png" 
            alt="LITUOKLIS Logotipas" 
            className="h-32 mr-4"
          />
          <span className="text-5xl font-display font-bold text-primary">
            LITUOKLIS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="font-medium text-accent hover:text-cta-hover transition-colors">
            Paslaugos
          </a>
          <a href="#about" className="font-medium text-accent hover:text-cta-hover transition-colors">
            Apie mus
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Atidaryti meniu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md transition-all duration-300 overflow-hidden", 
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <a 
            href="#projects" 
            className="font-medium py-2 text-accent hover:text-cta-hover transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Paslaugos
          </a>
          <a 
            href="#about" 
            className="font-medium py-2 text-accent hover:text-cta-hover transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apie mus
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
