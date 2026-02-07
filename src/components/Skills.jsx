const skills = [
  { 
    id: '01', 
    title: "Web Development", 
    desc: "Building responsive, modern interfaces using React and Tailwind CSS, focusing on performance and clean UI.",
    tools: ["React", "Vite", "Node.js"]
  },
  { 
    id: '02', 
    title: "Mobile Development", 
    desc: "Specializing in Flutter and Dart to create cross-platform apps with seamless user experiences.",
    tools: ["Flutter", "Dart", "Hive DB"]
  },
  { 
    id: '03', 
    title: "Software Management", 
    desc: "Applying software engineering principles, version control (Git), and Lehman’s Laws to manage project lifecycles.",
    tools: ["GitHub", "CI/CD", "Technical Analysis"]
  }
];

export default function Skills() {
  return (
    <section id="services" className="py-24 px-8 lg:px-24 bg-white">
      {/* Section Header */}
      <div className="mb-20">
        <p className="text-brand-pink-dark font-sans tracking-[0.2em] uppercase text-xs font-bold mb-4">What I Do</p>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-black">Core Competencies</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
        {skills.map((skill) => (
          <div key={skill.id} className="group relative">
            {/* The Noah-style background number */}
            <span className="absolute -top-10 -left-4 font-serif text-8xl text-gray-50 group-hover:text-brand-pink/30 transition-colors duration-500 -z-10">
              {skill.id}
            </span>
            
            <h3 className="text-2xl font-serif mb-4 text-brand-black group-hover:text-brand-pink-dark transition-colors">
              {skill.title}
            </h3>
            
            <p className="text-brand-gray font-sans text-sm leading-relaxed mb-6">
              {skill.desc}
            </p>

            {/* Technical Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <span key={tool} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-gray-50 text-brand-gray border border-gray-100">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}