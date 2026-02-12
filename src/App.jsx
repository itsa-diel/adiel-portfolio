import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Works from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-brand-white selection:bg-brand-pink">
      {/* The main tag wraps your entire scrollable content */}
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Works /> 
        <Blog />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
