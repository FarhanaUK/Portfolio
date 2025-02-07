import laptop from '../../src/assets/laptop.json'
import Lottie from "lottie-react"

function About() {
    return (
      <div 
      className="flex flex-col md:flex-row text-white p-12 mx-4 mt-28 rounded-lg" >
        <section className='md:w-1/2 space-y-6'>
         
      
          <p className="mb-6 text-lg leading-relaxed">
            Hello, and welcome to my portfolio! 
              I’m Farhana, a Full Stack Developer with a passion for building intuitive and scalable web applications.  
          </p>
          
          <p className="mb-6 text-lg leading-relaxed">
            My journey into web development started with an initial curiosity about how websites work, 
            leading me to dive deep into both front-end and back-end technologies. Through my training at 
            <span className="font-semibold">   BloomTech</span>,
             I gained hands-on experience with JavaScript, React, Node.js, Express, and Tailwind CSS—tools that allow me to create dynamic, user-centered applications.
          </p>
          
          <p className="mb-6 text-lg leading-relaxed">
            Before I became a developer, I worked in <span className="italic">customer service   </span>
             and as a  <span className="italic">trainer</span> at <span className="font-semibold">Amazon,   </span>
              where I developed strong skills in communication, empathy, and conflict resolution.
               These experiences taught me how to listen to user needs and explain technical concepts in accessible ways-skills that are invaluable when creating effective solutions.
          </p>
          
          <p className="mb-6 text-lg leading-relaxed">
            Outside of coding, I’m passionate about personal development, fitness, and traveling.
             Whether it’s through pilates or immersing myself in different cultures, I believe in growing both professionally and personally.  
          </p>
          
          <p className="mb-6 text-lg leading-relaxed">
            I’m driven by the challenge of solving complex problems with clean, efficient solutions,
             whether it's designing a user interface or building robust back-end systems. I strive to create applications that are not only functional but also delight users.  
          </p>
          
          <p className="text-lg leading-relaxed">
            Thanks for checking out my portfolio! Feel free to connect with me or explore my projects.  
          </p>
        </section>
        <div className='flex justify-center items-center md:w-1/2 mt-8 md:mt-0'>
          <Lottie animationData={laptop}  style={{ width: '100%', maxWidth: '500px', height: 'auto'}} />
        </div>
      </div>
      
    );
  }
  
  export default About;