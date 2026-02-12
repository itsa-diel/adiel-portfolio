export default function About() {
  return (
    <section id="about" className="py-32 px-8 lg:px-24 bg-brand-white">
      <div className="max-w-6xl">
        <span className="text-brand-pink-dark font-sans tracking-[0.2em] uppercase text-xs font-bold block mb-6">
          Philosophy & Background
        </span>
        
        <h2 className="font-serif text-5xl md:text-7xl text-brand-black leading-[1.1] mb-16">
          Building digital experiences <br /> 
          with technical rigor.
        </h2>

        <div className="grid md:grid-cols-2 gap-16 text-brand-gray font-sans leading-relaxed">
          <div className="space-y-6">
            <p className="text-lg">
              I am a **Software Engineering student** dedicated to the craft of 
              building efficient, scalable applications. My journey is rooted in 
              the principles of software evolution and clean architecture.
            </p>
          </div>
          
          <div className="space-y-6">
            <p>
              Whether I’m developing mobile solutions like **Luna** or 
              analyzing complex repositories like **Ghost CMS**, I focus on 
              creating software that is as maintainable as it is functional. 
              I bring hands-on experience in **Flutter**, **React**, and **Cloud Computing**.
            </p>
            <div className="pt-4">
              <a 
                href="/Adiel_Resume.pdf" 
                target="_blank"
                className="inline-block border-b-2 border-brand-pink-dark pb-1 text-brand-black font-bold uppercase tracking-widest text-xs hover:text-brand-pink-dark transition-colors"
              >
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}