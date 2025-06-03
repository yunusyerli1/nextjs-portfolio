import { BookOpen, Calendar, GraduationCap } from "lucide-react";
import Image from 'next/image';
import ExperienceCard from "../../_components/experience-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Yunus Yerli\'s Professional Experience | Frontend Development Portfolio',
  description: 'Explore the 6+ years of professional experience of Yunus Yerli, Senior Frontend Engineer, in web development with Angular, React, and Next.js.',
  keywords: ['Frontend experience', 'Web development career', 'Senior developer portfolio', 'Angular experience', 'React experience', 'Next.js experience', 'Yunus Yerli work history'],
  openGraph: {
    title: 'Yunus Yerli\'s Experience | Frontend Development',
    description: 'Detailed professional experience of Yunus Yerli in building scalable and performant frontend applications.',
    url: 'https://yunusyerli.com/experience',
    siteName: 'Yunus Yerli - Portfolio',
    images: [
      {
        url: 'https://yunusyerli.com/yunusyerli.jpg',
        width: 1200,
        height: 630,
        alt: 'Yunus Yerli - Professional Experience',
      },
    ],
    type: 'website',
  }
};

export default function Experience() {
    const experiences = [
      {
        title: 'Software Engineer | Angular Developer',
        company: 'SALESAGILITY',
        location: 'Glasgow, UK',
        dates: 'November 2022 – Present',
        description: [
          'Integral member of the core team responsible for developing the SuiteCRM8 application.',
          'Collaborating closely with cross-functional teams to design and implement innovative features within a Micro Frontend Architecture.',
          'Utilizing Angular, TypeScript, and other front-end technologies to create a seamless user interface and ensure optimal user experience.',
          'Participating in Agile development methodologies, including daily stand-ups, sprint planning, and retrospectives.',
          'Contributed to open-source development, bug fixes, code reviews, and enhancements for SuiteCRM.'
        ],
        technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'RxJs', 'Bootstrap', 'PrimeNg', 'Material UI', 'GraphQL', 'PHP', 'Symfony', 'Twig', 'Ngx', 'Docker', 'Git', 'Agile'],
        logo: '/salesagility.jpg'
      },
      {
        title: 'Frontend Developer',
        company: 'GABORAS',
        location: 'İstanbul, TURKEY',
        dates: 'September 2020 – November 2022',
        description: [
          'Collaborated with design, product, and back-end teams to create corporate-level projects, delivering high-quality web applications within project timelines.',
          'Developed a trading platform with an auction-based bidding system, ensuring real-time updates and a seamless user experience using WebSockets and RxJS.',
          'Maintained graphic standards and branding throughout the product’s interfaces.',
          'Designed and implemented SEO strategies for user acquisition.',
          'Created complex generic UI components.',
        ],
        technologies: ['Angular', 'TypeScript', 'JavaScript', 'CSS', 'SASS', 'HTML', 'RxJs', 'NgRx', 'Bootstrap', 'Websocket', 'TailwindCSS', 'NodeJs', 'NestJs', 'Rest Api', 'Git', 'SEO',],
        logo: '/gaboras.jpg'
      },
      {
        title: 'Frontend Developer',
        company: 'Alsayyed Design',
        location: 'İstanbul, TURKEY',
        dates: 'August 2019 – September 2020',
        description: [
          'Participated in the initial wave of developers learning and implementing React.',
          'Utilized JavaScript, CSS, HTML and to create 100+ responsive landing pages.',
          'Rewrote HTML to meet industry and company standards for SEO and Accessibility.',
          'Validated 100% of user input before submitting to the back-end.',
          'Implementing features that follow the best practices with React.',
        ],
        technologies: ['React', 'NextJs', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Bootstrap', 'Git', 'SEO'],
        logo: '/alsayyed.png'
      },
      {
        title: 'Digital Marketing Expert',
        company: 'Bonny Home',
        location: 'İstanbul, TURKEY',
        dates: 'August 2018 – May 2019',
        description: [
          'Improved brand awareness, content creation, SEO and SEM management, social media and campaign management, A/B testing, website management, email marketing, facilitate the execution ROAS targets, Ticimax e-commerce management and tracking inventory of products.',
        ],
        technologies: ['Digital Marketing', 'SEO/SEM Management', 'Branding', 'Website Management', 'Social Media & Campaign Management', 'A/B Testing', 'Marketing', 'Inventory Tracking'],
        logo: '/bonnyhome.png'
      },
      {
        title: 'Project Manager',
        company: 'Turkish Air Force (TuAF)',
        location: 'İzmir, TURKEY',
        dates: 'December 2014 – July 2018',
        description: ['Managed various projects within the Turkish Air Force.'],
        technologies: ['Project Management'],
        logo: '/tuaf.png'
      },
      {
        title: 'Project Manager',
        company: 'United States Air Force (USAF)',
        location: 'Oklahoma, USA',
        dates: 'November 2012 – November 2014',
        description: ['Managed various projects within the United States Air Force.'],
        technologies: ['Project Management'],
        logo: '/tuaf.png'
      },
    ];

    const education = [
      {
        degree: 'Bachelor of Science, Computer Engineering',
        institution: 'Air Force College',
        dates: '2012',
      }
    ];

    return (
      <section id="experience" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Career</h2>

                <h3 className="text-3xl font-bold text-center mb-8 text-gray-200">Professional Experience</h3>
                <div className="relative pl-12 md:pl-20">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-12 last:mb-0 relative">
                            {index < experiences.length - 1 && (
                                <div className="absolute left-2 md:left-6 top-0 h-full w-0.5 bg-gray-700"></div>
                            )}
                            <div className="absolute -left-2 md:left-0 -top-1 mt-1 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded bg-white text-white z-10">
                                <Image src={exp.logo} alt={exp.company} fill className="object-contain"  sizes="(max-width: 768px) 32px, 48px"/>
                            </div>
                            <div className="ml-8 md:ml-16"> 
                                <ExperienceCard {...exp} />
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-3xl font-bold text-center my-8 text-gray-200">Education</h3>
                <div className="relative pl-12 md:pl-20"> 
                    {education.map((edu, index) => (
                        <div key={index} className="mb-12 last:mb-0 relative">
                            {index < education.length - 1 && (
                                <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gray-700"></div>
                            )}
                            <div className="absolute -left-2 md:left-0 -top-1 mt-4 md:mt-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-purple-500 text-white z-10">
                                <GraduationCap className="w-5 h-5 md:w-7 md:h-7" />
                            </div>
                            <div className="ml-8 md:ml-16"> 
                                <div className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700">
                                    <h3 className="text-2xl font-bold text-blue-400 mb-2 flex items-center">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-gray-300 mb-1 flex items-center">
                                        <BookOpen className="w-5 h-5 mr-2 text-gray-400" /> {edu.institution}
                                    </p>
                                    {edu.dates && (
                                        <p className="text-md text-gray-400 flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-gray-500" /> {edu.dates}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};