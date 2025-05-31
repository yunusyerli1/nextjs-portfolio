import ProjectCard from "../../_components/project-card";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveLink: string;
    githubLink: string;
}

export default function Projects() {
    const projects: Project[] = [
      {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce application with user authentication, product listings, cart functionality, and payment integration.',
        technologies: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        imageUrl: 'https://placehold.co/600x400/3182CE/FFFFFF?text=E-commerce',
        liveLink: '#',
        githubLink: '#',
      },
      {
        title: 'Task Management App',
        description: 'A robust task management tool allowing users to create, organize, and track tasks with real-time updates and notifications.',
        technologies: ['React', 'Firebase', 'Redux', 'Material-UI'],
        imageUrl: 'https://placehold.co/600x400/48BB78/FFFFFF?text=Task+App',
        liveLink: '#',
        githubLink: '#',
      },
      {
        title: 'AI Chatbot Integration',
        description: 'An interactive chatbot integrated with a large language model API, providing conversational AI capabilities.',
        technologies: ['Next.js', 'Python', 'Flask', 'OpenAI API', 'TypeScript'],
        imageUrl: 'https://placehold.co/600x400/9F7AEA/FFFFFF?text=AI+Chatbot',
        liveLink: '#',
        githubLink: '#',
      },
      {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects, skills, and contact information, built with modern web technologies.',
        technologies: ['Next.js', 'Tailwind CSS', 'React', 'Framer Motion'],
        imageUrl: 'https://placehold.co/600x400/ED8936/FFFFFF?text=Portfolio',
        liveLink: '#',
        githubLink: '#',
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Portfolio</h2> {/* Renamed title */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  };