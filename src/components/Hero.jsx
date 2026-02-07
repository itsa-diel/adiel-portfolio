export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 lg:px-24 bg-brand-white relative overflow-hidden">
      {/* A subtle pink decorative circle in the background to add depth */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl -z-10"></div>
      
      <p className="text-brand-gray font-sans tracking-[0.3em] uppercase text-xs mb-4">
        Software Engineer
      </p>
      
      <h1 className="font-serif text-6xl md:text-8xl text-brand-black leading-tight mb-8">
        Adiel. <br />
        <span className="text-brand-pink-dark hover:text-brand-black transition-colors duration-700 cursor-default">
          Developing for <br /> Mobile & Cloud.
        </span>
      </h1>

      <div className="flex items-center gap-4">
        <div className="h-[1px] w-12 bg-brand-pink-dark"></div>
        <a href="#projects" className="font-sans font-bold text-sm uppercase tracking-widest hover:text-brand-pink-dark transition-colors">
          View Projects
        </a>
      </div>
    </section>
  );
}