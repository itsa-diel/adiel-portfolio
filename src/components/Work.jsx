import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import lunaImg from '../assets/luna_project.png';  
import freshImg from '../assets/freshcycle.png';
import blogImg from '../assets/blog.png'; 
const projects = [
  {
    id: '01',
    category: "Mobile App Development",
    title: "Luna Period Tracker",
    description: "A privacy-focused menstrual tracking application built with Flutter. Features local-first architecture using Hive DB for offline persistence and custom state management.",
    tech: ["Flutter", "Dart", "Hive", "Clean Arch"],
    image: lunaImg,
    github: "https://github.com/itsa-diel",
    link: "#"
  },
  {
    id: '02',
    category: "Mobile App Development",
    title: "FreshCycle",
    description: "FreshCycle is a cross-platform Agri-tech mobile application built with Flutter and Dart that optimizes the agricultural supply chain by digitally connecting farmers, buyers, and logistics providers in a unified marketplace.",
    tech: ["Flutter", "Dart", "Firebase", "Clean Arch"],
    image: freshImg,
    github: "https://github.com/itsa-diel",
    link: "#"
  },
  {
    id: '03',
    category: "Web Development",
    title: "Personal blog",
    description: "A responsive personal blog platform with a custom admin dashboard for managing posts, category-based organization, and a clean, mobile-friendly design.",
    tech: ["Node.js", "Express", "EJS", "MongoDB", "HTML", "CSS", "JavaScript"],
    image: blogImg,
    github: "https://github.com/itsa-diel",
    link: "#"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-8 lg:px-24 bg-white">
      {/* Header */}
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <span className="text-brand-pink-dark font-sans tracking-[0.2em] uppercase text-xs font-bold block mb-4">
            Selected Projects
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-brand-black leading-none">
            Recent Work
          </h2>
        </div>
        <div className="h-[1px] flex-1 bg-gray-200 mx-8 hidden md:block mb-4"></div>
        <p className="font-sans text-brand-gray text-sm max-w-xs leading-relaxed">
          Showcasing mobile applications and web development projects.
        </p>
      </div>

      {/* Asymmetrical Grid */}
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`group ${index % 2 !== 0 ? 'md:pt-24' : ''}`} // This creates the stagger effect
          >
            {/* Image Card */}
            <div className="relative mb-8 overflow-hidden bg-gray-100 aspect-[4/3] rounded-sm">
              <div className="absolute inset-0 bg-brand-pink-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
              />
              
              {/* Floating Action Buttons */}
              <div className="absolute bottom-6 right-6 flex gap-4 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-white text-brand-black hover:bg-brand-black hover:text-white transition-colors rounded-full shadow-lg"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={project.link}
                  className="p-3 bg-brand-pink-dark text-white hover:bg-brand-black transition-colors rounded-full shadow-lg"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-brand-pink-dark font-sans text-[10px] uppercase tracking-widest font-bold">
                  {project.id}
                </span>
                <span className="h-[1px] w-8 bg-brand-pink-dark"></span>
                <span className="text-gray-400 font-sans text-[10px] uppercase tracking-widest font-bold">
                  {project.category}
                </span>
              </div>
              
              <h3 className="font-serif text-3xl text-brand-black mb-4 group-hover:underline decoration-brand-pink-dark decoration-2 underline-offset-4 transition-all">
                {project.title}
              </h3>
              
              <p className="text-brand-gray font-sans text-sm leading-relaxed mb-6 max-w-md">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-gray-50 border border-gray-100 text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* --- GitHub CTA Card --- */}
        <div className={`flex items-center justify-center ${projects.length % 2 !== 0 ? 'md:pt-24' : ''}`}>
          <div className="border-2 border-dashed border-gray-200 w-full aspect-[4/3] flex flex-col items-center justify-center p-8 text-center group hover:border-brand-pink-dark transition-colors duration-500">
            <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-brand-pink/10 transition-colors">
              <Github size={40} className="text-gray-400 group-hover:text-brand-pink-dark transition-colors" />
            </div>
            
            <h3 className="font-serif text-2xl text-brand-black mb-4">
              Want to see more?
            </h3>
            
            <p className="text-brand-gray font-sans text-sm mb-8 max-w-[240px]">
              Explore my other repositories including CLI tools and class assignments.
            </p>

            <a 
              href="https://github.com/itsa-diel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-brand-pink-dark border-b-2 border-brand-pink-dark pb-1 hover:text-brand-black hover:border-brand-black transition-all"
            >
              View GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}