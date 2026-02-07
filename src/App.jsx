import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

// import Projects from './components/Projects';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-brand-white selection:bg-brand-pink">
      {/* The main tag wraps your entire scrollable content */}
      <Navbar />
      <main>
        <Hero />
        <Skills />
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
