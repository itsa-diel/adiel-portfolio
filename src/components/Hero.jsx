export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center px-8 lg:px-24 pt-24 bg-white overflow-hidden">
      
      {/* 1. Text Content Side */}
      <div className="flex-1 z-10 py-12 md:pr-12">
        <p className="text-brand-gray font-sans tracking-[0.3em] uppercase text-xs mb-4">
          Software Engineer
        </p>
        
        <h1 className="font-serif text-6xl lg:text-8xl text-brand-black leading-tight mb-8">
          Adiel. <br />
          <span className="text-brand-pink-dark hover:text-brand-black transition-colors duration-700 cursor-default">
            Developing for <br /> Mobile & Cloud.
          </span>
        </h1>

        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-brand-pink-dark"></div>
          <a href="#projects" className="font-sans font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform inline-block">
            View Projects
          </a>
        </div>
      </div>

      {/* 2. Image Side */}
      <div className="flex-1 relative w-full h-[60vh] md:h-[80vh] group">
        {/* Decorative Pink Background Shape */}
        <div className="absolute -inset-4 bg-brand-pink/20 -rotate-2 rounded-2xl -z-10 group-hover:rotate-0 transition-transform duration-500"></div>
        
        {/* The Actual Photo */}
        <img 
          src="/src/assets/adiel-hero.jpg" 
          alt="Adiel Portfolio Hero" 
          className="w-full h-full object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          // Fallback if your image isn't in the folder yet
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop"; }}
        />
      </div>
    </section>
  );
}