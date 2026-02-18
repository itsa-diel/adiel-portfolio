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
             I am a software engineering student driven by curiosity, purpose, and impact.
            My philosophy is simple:technology should solve real problems and make life
            better for people. I have a foundation in AI, mobile app development, software management,
            and a growing understanding of data science, which allows me to approach problems from
            both technical and strategic perspectives.
            </p>
          </div>
          
          <div className="space-y-6">
            <p>
              Beyond code, I care deeply about innovation, community, and continuous growth.
              I enjoy hiking and spending time outdoors, experiences that teach me resilience, patience,
              and perspective. I believe in building solutions that are not only functional,
              but meaningful systems that empower, educate, and create lasting change.
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