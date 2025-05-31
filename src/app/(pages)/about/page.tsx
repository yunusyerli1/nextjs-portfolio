import { Code, Database, Lightbulb, Linkedin, Mail, Settings } from "lucide-react";

import { Github } from "lucide-react";

export default function About() {
    return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <p className="mb-4">
            I'm <span className="text-blue-400 font-semibold">Yunus Yerli</span>, a strong Mid-level Frontend Developer / Software Engineer with 5 years of experience. I'm eager to continue growing my skills and expertise in building robust and user-friendly web applications.
          </p>
          <p className="mb-4">
            I have significant experience with Angular, JavaScript, HTML, CSS, and more. My expertise includes creating responsive web applications, seamlessly integrating third-party software, and implementing effective SEO strategies to enhance online visibility.
          </p>
          <p>
            I thrive on challenges and am passionate about crafting clean, efficient, and scalable code that delivers exceptional user experiences.
          </p>
          <div className="mt-8 flex space-x-4 justify-center">
            <a href="https://www.linkedin.com/in/yunusyerli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://www.github.com/yunusyerli1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="mailto:yunusyerli1@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}


const SkillCategory = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: React.ElementType }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 h-full flex flex-col">
      <h3 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
        {Icon && <Icon className="w-6 h-6 mr-3 text-blue-300" />} {title}
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2 flex-grow">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-300 mr-2">&bull;</span> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
  
  const Skills = () => {
    const frontendSkills = ['Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'RxJs', 'NgRx', 'Bootstrap', 'TailwindCSS', 'MaterialUI', 'PrimeNg', 'SCSS', 'Websocket', 'Nginx', 'GraphQL'];
    const otherTechSkills = ['PHP', 'Symfony', 'NodeJS', 'React', 'Flutter', 'Dart', 'JQuery', 'Git', 'CI/CD', 'Docker'];
    const additionalSkills = ['WordPress', 'Photoshop', 'Adobe XD', 'Figma', 'Da Vinci Resolve', 'Google Analytics', 'Google Ads', 'Facebook Ads', 'SEO', 'SEM', 'CRM'];
    const databases = ['MongoDB', 'MySQL'];
  
    return (
      <section id="skills" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Frontend Technologies" skills={frontendSkills} icon={Code} />
            <SkillCategory title="Other Technologies/Tools" skills={otherTechSkills} icon={Settings} />
            <SkillCategory title="Databases" skills={databases} icon={Database} />
            <SkillCategory title="Additional Skills" skills={additionalSkills} icon={Lightbulb} />
          </div>
        </div>
      </section>
    );
  };