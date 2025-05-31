'use client';
import { Briefcase, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function HomePage() {
  return (
    <section id="home" className="relative h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
      <div className="relative z-10 flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 xl:p-24">
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col space-y-6 text-gray-400">
          <a href="https://www.linkedin.com/in/yunusyerli" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.github.com/yunusyerli1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:yunusyerli1@gmail.com" className="hover:text-red-500 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="max-w-2xl mx-auto md:mx-0 md:ml-20 lg:ml-24 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white">
            I'm <span className="text-blue-400">Yunus Yerli</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-6 font-semibold">
            Badass Hacker
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg">
            Senior Frontend Developer / Software Engineer eager to continue growing his 6 years experience and skills.
            Has significant experience with Angular, JavaScript, HTML, CSS and more. Skilled in creating responsive web applications, integrating third-party software, and implementing SEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
            <Link href="/experience" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Briefcase className="w-5 h-5 mr-2" /> Portfolio</Link>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" /> Contact Me</Link>
          </div>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-gray-900">
        <Image
          src="/yunusyerli.jpg"
          alt="Yunus Yerli"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          width={3800}
          height={5700}
        />
      </div>
    </section>
  );
}