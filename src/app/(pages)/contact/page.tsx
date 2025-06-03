import {AtSign} from "lucide-react";
import { Metadata } from "next";
import ContactForm from "../../_components/contactForm";

export const metadata: Metadata = {
  title: 'Contact Yunus Yerli | Get in Touch for Projects & Collaborations',
  description: 'Have a question or project idea? Reach out to Yunus Yerli, Senior Frontend Engineer, via email or the contact form.',
  keywords: ['Contact', 'Frontend Developer for hire', 'React developer contact', 'Angular developer contact', 'Hire web developer', 'Yunus Yerli email'],
  openGraph: {
    title: 'Contact Yunus Yerli | Get in Touch',
    description: 'Connect with Yunus Yerli for web development inquiries, collaborations, or job opportunities.',
    url: 'https://yunusyerli.com/contact',
    siteName: 'Yunus Yerli - Portfolio',
    images: [
      {
        url: 'https://yunusyerli.com/yunusyerli.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Yunus Yerli',
      },
    ],
    type: 'website',
  }
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Contact Me</h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
          <p className="text-lg text-gray-300 text-center mb-8">
            Have a question, a project idea, or just want to connect? Feel free to reach out!
          </p>
          <div className="flex flex-row justify-center items-center gap-6 mb-8">
            <a href="mailto:yunusyerli1@gmail.com" className="flex items-center text-blue-400 hover:text-blue-500 transition-colors duration-300">
              <AtSign className="w-6 h-6 mr-2" /> yunusyerli1@gmail.com
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}