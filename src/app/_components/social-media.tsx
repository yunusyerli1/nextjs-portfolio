import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function SocialMedia() {
    return (
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col space-y-6 text-gray-400">
          <a href="https://www.linkedin.com/in/yunusyerli" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.github.com/yunusyerli1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:yunusyerli1@gmail.com" className="hover:text-red-500 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
    );
}