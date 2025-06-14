import { Briefcase, Mail } from 'lucide-react';
import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import SocialMedia from '../_components/social-media';
import { getYearsCount } from '../lib/getYearsCount';

export const metadata: Metadata = {
  title: 'Yunus Yerli | Senior Frontend Engineer & Web Developer',
  description: 'Experienced Senior Frontend Engineer building modern, scalable, and performant web applications with Angular, React, Next.js, and TypeScript.',
  keywords: ['Frontend Engineer', 'Web Developer', 'React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Istanbul', 'Yunus Yerli'],
  openGraph: {
    title: 'Yunus Yerli | Senior Frontend Engineer & Web Developer',
    description: 'Experienced Senior Frontend Engineer building modern, scalable, and performant web applications with Angular, React, Next.js, and TypeScript.',
    url: 'https://yunusyerli.com/',
    siteName: 'Yunus Yerli - Portfolio',
    images: [
      {
        url: 'https://yunusyerli.com/yunusyerli.jpg',
        width: 1200,
        height: 630,
        alt: 'Yunus Yerli - Portfolio Thumbnail',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function HomePage() {
  return (
    <section id="home" className="relative h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
      <div className="relative z-10 flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 xl:p-24">
        <SocialMedia />

        <div className="max-w-2xl mx-auto md:mx-0 md:ml-20 lg:ml-24 mt-10 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white">
            I'm <span className="text-blue-400">Yunus Yerli</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-6 font-semibold">
            Senior Frontend Developer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 mx-10 md:mx-2 max-w-lg">
            Senior Frontend Developer / Software Engineer eager to continue growing his {getYearsCount()} years experience and skills.
            Has significant experience with <b>Angular, React, Next.js, JavaScript, TypeScript, HTML, CSS and more.</b>  Skilled in creating responsive web applications, integrating third-party software, and implementing SEO strategies.
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
          priority={true}
          className="opacity-70 object-cover"
          fill={true}
          sizes="(max-width: 768px) 100vw"
        />
      </div>
    </section>
  );
}