'use client';

import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveLink: string;
    githubLink: string;
}

export default function ProjectCard({ title, description, technologies, imageUrl, liveLink, githubLink }: ProjectCardProps) {
    return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-700">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/400x200/2D3748/FFFFFF?text=Project+Image";
        }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded-full font-semibold">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full flex items-center text-sm transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-semibold py-2 px-4 rounded-full flex items-center text-sm transition-colors duration-300"
            >
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}