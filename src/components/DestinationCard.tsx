
import React from 'react';
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  difficulty: string;
  className?: string;
}

const ProjectCard = ({ title, description, imageUrl, difficulty, className }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 shadow-lg", 
        className
      )}
    >
      {/* Image */}
      <div className="aspect-[4/5] w-full">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      {/* Difficulty badge */}
      <div className="absolute top-4 right-4 bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
        {difficulty}
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
