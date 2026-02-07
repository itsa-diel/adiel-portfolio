import Hero from './components/Hero';
// Once you create these components, you will import them here:
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-brand-white selection:bg-brand-pink">
      {/* The main tag wraps your entire scrollable content */}
      <main>
        <Hero />
        
        {/* We will add these one by one as we build them: */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
