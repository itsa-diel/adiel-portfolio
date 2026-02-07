import { useState } from 'react';
import { Github, Linkedin, Mail, Instagram, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. The Main Top Bar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 lg:px-24 py-8 bg-white/80 backdrop-blur-sm">
        <a href="#home">
          <img src={logo} alt="Adiel Logo" className="h-16 w-auto" />
        </a>

        <button 
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1.5 cursor-pointer group"
        >
          <span className="h-[2px] w-8 bg-brand-black group-hover:bg-brand-pink-dark transition-colors"></span>
          <span className="h-[2px] w-6 bg-brand-black self-end group-hover:bg-brand-pink-dark transition-colors"></span>
          <span className="h-[2px] w-8 bg-brand-black group-hover:bg-brand-pink-dark transition-colors"></span>
        </button>
      </nav>

      {/* 2. The Right-Hand Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* The Actual Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-white z-[70] shadow-2xl p-12 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-2xl font-sans hover:text-brand-pink-dark"
        >
          <X size={24} />
        </button>

        {/* Menu Links */}
        <nav className="mt-20">
          <ul className="space-y-6">
            {['Home', 'Services', 'Work', 'Blog', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item === 'Services' ? 'services' : item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-xs uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-brand-pink-dark transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Social Icons (Moved Here) --- */}
        <div className="mt-16 border-t border-gray-100 pt-10">
          <div className="flex gap-6 items-center justify-start text-brand-pink-dark">
            <a href="https://github.com/itsa-diel" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/panashe-tanyanyiwa/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/itsa_diel/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:ptanyanyiwa@africau.edu" className="hover:text-brand-black transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* --- Works Section --- */}
        <div className="mt-10 border-t border-gray-100 pt-10">
           <h3 className="font-serif text-2xl mb-6 text-brand-black">Works</h3>
           <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-gray-100"></div>
              <div className="aspect-square bg-gray-100"></div>
           </div>
        </div>

      </div>
    </>
  );
}
