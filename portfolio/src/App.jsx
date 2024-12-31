
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Hero from '../src/components/Hero'
import TopThree from './components/TopThree'
import Marquee from './components/Marquee'
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import 'animate.css'


import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen font-mono flex flex-col">
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <Header />
        <main className='flex-grow'>
        
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutMe />
                  <Marquee />
                  <TopThree />    
                </>
              }
            />
             
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          
          </Routes>
        </main>
        
        <Footer />
      </div>
   
  );
};

export default App;
