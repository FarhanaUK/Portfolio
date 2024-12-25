
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Hero from '../src/components/Hero'
import Projects from '../src/components/Projects'
import Skills from '../src/components/Skills'
import Header from './components/Header'


import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <div>
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
                  <Contact />
                </>
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
          </Routes>
        </main>
        <div></div>
      </div>
    </div>
  );
};

export default App;
