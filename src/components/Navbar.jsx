import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. The Main Top Bar (Logo + Hamburger) */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 lg:px-24 py-8 bg-white/80 backdrop-blur-sm">
        <a href="#home">
          <img src={logo} alt="Adiel Logo" className="h-16 w-auto" />
        </a>

        {/* Hamburger Trigger */}
        <button 
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1.5 cursor-pointer group"
        >
          <span className="h-[2px] w-8 bg-brand-black group-hover:bg-brand-pink-dark transition-colors"></span>
          <span className="h-[2px] w-6 bg-brand-black self-end group-hover:bg-brand-pink-dark transition-colors"></span>
          <span className="h-[2px] w-8 bg-brand-black group-hover:bg-brand-pink-dark transition-colors"></span>
        </button>
      </nav>

      {/* 2. The Right-Hand Sidebar (The Drawer) */}
      {/* Overlay background */}
      <div 
        className={`fixed inset-0 bg-black/20 z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Actual Drawer - Takes about 300px-400px on the right */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-white z-[70] shadow-2xl p-12 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Close Button (X) */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-2xl font-sans hover:text-brand-pink-dark"
        >
          ✕
        </button>

        {/* Menu Links */}
        <nav className="mt-20">
          <ul className="space-y-6">
            {['Home', 'Services', 'Work', 'Blog', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-xs uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-brand-pink-dark transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Search or Socials (as seen in your image) */}
        <div className="mt-20 border-t border-gray-100 pt-10">
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