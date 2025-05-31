import { BookOpen, Calendar, GraduationCap } from "lucide-react";
import ExperienceCard from "../../_components/experience-card";

export default function Experience() {
    const experiences = [
      {
        title: 'Software Engineer | Angular Developer',
        company: 'SALESAGILITY',
        location: 'Glasgow, UK',
        dates: 'November 2022 – Present',
        description: [
          'Integral member of the core team responsible for developing the SuiteCRM8 application.',
          'Collaborating closely with cross-functional teams to design and implement innovative features within a Micro Frontend Architecture, enabling modular and scalable development.',
          'Utilizing Angular, TypeScript, and other front-end technologies to create a seamless user interface and ensure optimal user experience.',
          'Implementing best practices in code quality, maintainability, and performance optimization.',
          'Participating in Agile development methodologies, including daily stand-ups, sprint planning, and retrospectives.',
          'Contributed to open-source development, bug fixes, and enhancements for SuiteCRM.',
          'Conducting code reviews, providing feedback to ensure clean and well-documented code.',
        ],
        technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'RxJs', 'Bootstrap', 'PrimeNg', 'Material UI', 'GraphQL', 'PHP', 'Symfony', 'Twig', 'Ngx', 'Docker', 'Git', 'Agile'],
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
      },
      {
        title: 'Project Manager',
        company: 'Turkish Air Force (TuAF)',
        location: 'İzmir, TURKEY',
        dates: 'December 2014 – July 2018',
        description: ['Managed various projects within the Turkish Air Force.'],
        technologies: ['Project Management'],
      },
      {
        title: 'Project Manager',
        company: 'United States Air Force (USAF)',
        location: 'Oklahoma, USA',
        dates: 'November 2012 – November 2014',
        description: ['Managed various projects within the United States Air Force.'],
        technologies: ['Project Management'],
      },
    ];

    const education = [
      {
        degree: 'Bachelor of Science, Computer Engineering',
        institution: 'Turkish Air Force College',
        dates: '2012',
      }
    ];

    return (
      <section id="experience" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Career</h2>

          <h3 className="text-3xl font-bold text-center mb-8 text-gray-200">Professional Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16"> {/* Changed to responsive 2-column grid */}
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-gray-200">Education</h3>
          <div className="grid grid-cols-1 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700">
                <h3 className="text-2xl font-bold text-blue-400 mb-2 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-blue-300" /> {edu.degree}
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
            ))}
          </div>
        </div>
      </section>
    );
};