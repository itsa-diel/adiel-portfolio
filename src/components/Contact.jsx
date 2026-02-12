import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="py-32 px-8 lg:px-24 bg-brand-black text-white">
      <div className="max-w-4xl">
        <span className="text-brand-pink font-sans tracking-[0.2em] uppercase text-xs font-bold block mb-8">
          Next Steps
        </span>
        
        <h2 className="font-serif text-5xl md:text-8xl mb-12 hover:text-brand-pink transition-colors duration-500">
          <a href="mailto:ptanyanyiwa@africau.edu">Let's Talk.</a>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 justify-between items-start md:items-end">
          <div className="space-y-4">
            <div className="flex gap-6">
              <a href="https://github.com/itsa-diel" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/panashe-tanyanyiwa/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors"><Linkedin size={20}/></a>
              <a href="mailto:ptanyanyiwa@africau.edu" className="hover:text-brand-pink transition-colors"><Mail size={20}/></a>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">
              Based in Zimbabwe
            </p>
            <p className="font-sans text-xs text-gray-400">
              © 2026 Panashe Tanyanyiwa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}