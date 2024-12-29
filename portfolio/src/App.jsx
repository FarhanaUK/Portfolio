
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Hero from '../src/components/Hero'
import Projects from '../src/components/Projects'
import Skills from '../src/components/Skills'
import Header from './components/Header'
import 'animate.css'


import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen ">
      <Header />
        <main>
        
          <Routes>
            <Route
              path="/"
              element={
                <>
                
                  <Hero />
                  <About />
                  <Projects />
                  <Skills />    
                </>
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
          </Routes>
        </main>
        
        <Contact />
      </div>
   
  );
};

export default App;
