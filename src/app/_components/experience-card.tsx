import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
    title: string;
    company: string;
    dates: string;
    location: string;
    description: string[];
    technologies: string[];
}
export default function ExperienceCard({ title, company, dates, location, description, technologies }: ExperienceCardProps) {
    return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-blue-400 mb-2">{title}</h3>
      <p className="text-lg text-gray-300 mb-1 flex items-center">
        <Briefcase className="w-5 h-5 mr-2 text-gray-400" /> {company}
      </p>
      <p className="text-md text-gray-400 mb-1 flex items-center">
        <MapPin className="w-4 h-4 mr-2 text-gray-500" /> {location}
      </p>
      <p className="text-md text-gray-400 mb-4 flex items-center">
        <Calendar className="w-4 h-4 mr-2 text-gray-500" /> {dates}
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        {description.map((point: string, index: number) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech: string, index: number) => (
          <span key={index} className="bg-blue-900 text-blue-200 text-sm px-3 py-1 rounded-full font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}