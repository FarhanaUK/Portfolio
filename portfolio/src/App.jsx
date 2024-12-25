
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Hero from '../src/components/Hero'
import Projects from '../src/components/Projects'
import Skills from '../src/components/Skills'


import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="bg-blue-900 text-white">
        <nav className="flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                className="text-lg hover:text-teal-400
      transition-colors duration-200"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-teal-400 
     transition-colors duration-200"
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-teal-400 
     transition-colors duration-200"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-teal-400 
     transition-colors duration-200"
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-teal-400 
     transition-colors duration-200"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="skills" element={<Skills/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
