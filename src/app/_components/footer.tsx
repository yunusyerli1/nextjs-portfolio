import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-8 text-center border-t border-gray-800">
            <div className="container mx-auto px-4">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} Yunus Yerli. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.linkedin.com/in/yunusyerli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                        <Linkedin className="w-7 h-7" />
                    </a>
                    <a href="https://www.github.com/yunusyerli1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <Github className="w-7 h-7" />
                    </a>
                    <a href="mailto:yunusyerli1@gmail.com"  className="hover:text-red-500 hover:text-blue-400 transition-colors duration-300">
                        <Mail className="w-7 h-7" />
                    </a>
                </div>
                <p className="text-sm">Designed and Built with ❤️</p>
            </div>
        </footer>
    );
}