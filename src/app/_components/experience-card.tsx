
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
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-blue-400 leading-tight">
                        {company}
                    </h3>
                    <p className="text-md text-gray-300 leading-tight">
                        {title}
                    </p>
                </div>
                <div className="mt-2 md:mt-0">
                    <p className="text-sm text-gray-400 flex-shrink-0">
                        {dates}
                    </p>
                    <p className="text-sm text-gray-200 flex-shrink-0">
                        {location}
                    </p>
                </div>
            </div>

            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 text-sm">
                {description.map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech: string, index: number) => (
                    <span key={index} className="bg-blue-900 bg-indigo-600 shadow-md shadow-indigo-500/40 text-blue-200 text-xs px-3 py-1 rounded-full font-medium">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}